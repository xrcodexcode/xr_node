"""
Advanced RAG Ingestion & Incremental Indexing Engine for NexusDB
Handles incremental hash tracking, WikiLink extraction, Markdown/PDF document parsing,
chunking, embedding generation, and ChromaDB persistence.
"""

import os
import re
import json
import yaml
import hashlib
from pathlib import Path
from typing import List, Dict, Any, Optional
import chromadb
from chromadb.utils import embedding_functions

from rag.config import get_rag_settings, VAULT_ROOT, RAG_DIR

try:
    import pypdf
    HAS_PYPDF = True
except ImportError:
    HAS_PYPDF = False


def compute_file_hash(file_path: Path) -> str:
    """Compute SHA-256 hash of file content."""
    hasher = hashlib.sha256()
    try:
        with open(file_path, "rb") as f:
            while chunk := f.read(8192):
                hasher.update(chunk)
        return hasher.hexdigest()
    except Exception:
        return ""


def extract_wikilinks(content: str) -> List[str]:
    """Extract Obsidian [[WikiLink]] targets from note text."""
    matches = re.findall(r"\[\[([^\]\|]+)(?:\|[^\]]+)?\]\]", content)
    unique_links = list(dict.fromkeys([m.strip() for m in matches if m.strip()]))
    return unique_links


def parse_pdf_document(file_path: Path) -> Dict[str, Any]:
    """Extract text pages from PDF document."""
    if not HAS_PYPDF:
        print(f"[Warning] pypdf not installed. Skipping PDF: {file_path.name}")
        return {"title": file_path.stem, "tags": ["pdf"], "body": "", "frontmatter": {}, "wikilinks": []}

    text_pages = []
    try:
        reader = pypdf.PdfReader(str(file_path))
        for idx, page in enumerate(reader.pages):
            txt = page.extract_text() or ""
            if txt.strip():
                text_pages.append(f"## Page {idx + 1}\n{txt.strip()}")
    except Exception as e:
        print(f"[Error] Failed to read PDF {file_path}: {e}")

    body = "\n\n".join(text_pages)
    return {
        "title": file_path.stem,
        "tags": ["pdf", "document"],
        "body": body,
        "frontmatter": {"type": "pdf"},
        "wikilinks": [],
        "file_path": str(file_path),
        "relative_path": str(file_path.relative_to(VAULT_ROOT)).replace("\\", "/")
    }


def parse_markdown_note(file_path: Path) -> Dict[str, Any]:
    """Extract frontmatter, text body, and wikilinks from a Markdown note."""
    content = ""
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception as e:
        print(f"[Error] Failed to read {file_path}: {e}")
        return {"title": file_path.stem, "tags": [], "body": "", "frontmatter": {}, "wikilinks": []}

    frontmatter = {}
    body = content

    fm_match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)
    if fm_match:
        try:
            raw_fm, body = fm_match.group(1), fm_match.group(2)
            parsed = yaml.safe_load(raw_fm)
            if isinstance(parsed, dict):
                frontmatter = parsed
        except Exception:
            pass

    title = frontmatter.get("title") or file_path.stem
    tags = frontmatter.get("tags", [])
    if isinstance(tags, str):
        tags = [t.strip() for t in tags.split(",") if t.strip()]

    wikilinks = extract_wikilinks(body)

    return {
        "title": str(title),
        "tags": tags,
        "body": body.strip(),
        "frontmatter": frontmatter,
        "wikilinks": wikilinks,
        "file_path": str(file_path),
        "relative_path": str(file_path.relative_to(VAULT_ROOT)).replace("\\", "/")
    }


def chunk_document(parsed_doc: Dict[str, Any], chunk_size: int = 800, chunk_overlap: int = 150) -> List[Dict[str, Any]]:
    """Split note/document body into semantic chunks by headers and sliding window."""
    body = parsed_doc["body"]
    if not body:
        return []

    chunks = []
    sections = re.split(r"(^|\n)(?=#+\s+)", body)
    clean_sections = [s.strip() for s in sections if s and s.strip()]
    if not clean_sections:
        clean_sections = [body]

    current_heading = "Overview"

    for sec in clean_sections:
        heading_match = re.match(r"^(#+)\s+(.+)$", sec, re.MULTILINE)
        if heading_match:
            current_heading = heading_match.group(2).strip()

        if len(sec) <= chunk_size:
            chunks.append({
                "heading": current_heading,
                "text": sec,
            })
        else:
            start = 0
            while start < len(sec):
                end = min(start + chunk_size, len(sec))
                sub_text = sec[start:end]
                chunks.append({
                    "heading": current_heading,
                    "text": sub_text.strip(),
                })
                if end == len(sec):
                    break
                start += chunk_size - chunk_overlap

    formatted_chunks = []
    rel_path = parsed_doc["relative_path"]
    total = len(chunks)
    wikilinks_str = ",".join(parsed_doc["wikilinks"]) if parsed_doc["wikilinks"] else ""
    tags_str = ",".join(parsed_doc["tags"]) if isinstance(parsed_doc["tags"], list) else str(parsed_doc["tags"])
    doc_type = str(parsed_doc["frontmatter"].get("type", "note"))
    doc_status = str(parsed_doc["frontmatter"].get("status", "active"))

    for idx, c in enumerate(chunks):
        chunk_text = f"# {parsed_doc['title']}\nSection: {c['heading']}\n\n{c['text']}"

        formatted_chunks.append({
            "id": f"{rel_path}#chunk-{idx}",
            "text": chunk_text,
            "metadata": {
                "source_path": str(parsed_doc["file_path"]),
                "relative_path": rel_path,
                "title": parsed_doc["title"],
                "heading": c["heading"],
                "chunk_index": idx,
                "total_chunks": total,
                "tags": tags_str,
                "wikilinks": wikilinks_str,
                "type": doc_type,
                "status": doc_status
            }
        })

    return formatted_chunks


class VaultIngester:
    def __init__(self):
        self.settings = get_rag_settings()
        self.db_path = Path(self.settings.get("chroma_db_path", RAG_DIR / "chroma"))
        self.db_path.mkdir(parents=True, exist_ok=True)
        self.cache_path = Path(self.settings.get("index_cache_path", RAG_DIR / ".index_cache.json"))
        self.model_name = self.settings.get("embedding_model", "BAAI/bge-small-en-v1.5")
        
        self.hash_cache = self._load_cache()
        self.chroma_client = chromadb.PersistentClient(path=str(self.db_path))
        
        try:
            self.embedding_fn = embedding_functions.SentenceTransformerEmbeddingFunction(
                model_name=self.model_name
            )
        except Exception as e:
            print(f"[Info] Falling back to default Chroma embedding function: {e}")
            self.embedding_fn = embedding_functions.DefaultEmbeddingFunction()

        self.collection = self.chroma_client.get_or_create_collection(
            name="nexusdb_notes",
            embedding_function=self.embedding_fn
        )

    def _load_cache(self) -> Dict[str, str]:
        if self.cache_path.exists():
            try:
                with open(self.cache_path, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception:
                pass
        return {}

    def _save_cache(self):
        try:
            with open(self.cache_path, "w", encoding="utf-8") as f:
                json.dump(self.hash_cache, f, indent=2)
        except Exception as e:
            print(f"[Warning] Failed to save index cache: {e}")

    def ingest_file(self, file_path: Path, force: bool = False) -> int:
        """Ingest single file with incremental hash checking."""
        ext = file_path.suffix.lower()
        supported = self.settings.get("supported_extensions", [".md", ".markdown", ".pdf"])
        if ext not in supported:
            return 0

        rel_path = str(file_path.relative_to(VAULT_ROOT)).replace("\\", "/")
        current_hash = compute_file_hash(file_path)

        # Incremental check: Skip if file hash unchanged
        if not force and self.hash_cache.get(rel_path) == current_hash and current_hash != "":
            return 0  # Unchanged file

        # Remove old chunks
        try:
            self.collection.delete(where={"relative_path": rel_path})
        except Exception:
            pass

        if ext == ".pdf":
            parsed = parse_pdf_document(file_path)
        else:
            parsed = parse_markdown_note(file_path)

        if not parsed["body"]:
            return 0

        chunks = chunk_document(
            parsed,
            chunk_size=self.settings.get("chunk_size", 800),
            chunk_overlap=self.settings.get("chunk_overlap", 150)
        )

        if not chunks:
            return 0

        ids = [c["id"] for c in chunks]
        documents = [c["text"] for c in chunks]
        metadatas = [c["metadata"] for c in chunks]

        self.collection.add(
            ids=ids,
            documents=documents,
            metadatas=metadatas
        )

        # Update cache hash
        self.hash_cache[rel_path] = current_hash
        self._save_cache()
        return len(chunks)

    def remove_file(self, file_path: Path):
        """Remove file from ChromaDB & cache."""
        rel_path = str(file_path.relative_to(VAULT_ROOT)).replace("\\", "/")
        try:
            self.collection.delete(where={"relative_path": rel_path})
        except Exception:
            pass
        if rel_path in self.hash_cache:
            del self.hash_cache[rel_path]
            self._save_cache()
        print(f"[Ingester] Removed {rel_path} from vector database and index cache.")

    def ingest_vault(self, force: bool = False) -> Dict[str, int]:
        """Scan vault directories and incrementally ingest modified files."""
        indexed_dirs = self.settings.get("indexed_directories", [
            "02_NEW-KNOWLEDGE", "NOTES", "NODES", "03_MOC", "01_RAW"
        ])
        supported = tuple(self.settings.get("supported_extensions", [".md", ".markdown", ".pdf"]))

        total_scanned = 0
        total_updated = 0
        total_chunks = 0

        for dir_name in indexed_dirs:
            target_dir = VAULT_ROOT / dir_name
            if not target_dir.exists():
                continue

            for root, _, files in os.walk(target_dir):
                for f in files:
                    if f.endswith(supported):
                        full_path = Path(root) / f
                        total_scanned += 1
                        added = self.ingest_file(full_path, force=force)
                        if added > 0:
                            total_updated += 1
                            total_chunks += added

        print(f"[Incremental Ingestion Complete] Scanned {total_scanned} files, updated {total_updated} files ({total_chunks} chunks).")
        return {"scanned": total_scanned, "updated": total_updated, "chunks": total_chunks}


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="NexusDB Incremental Ingester")
    parser.add_argument("--force", action="store_true", help="Force re-indexing of all files regardless of cache")
    args = parser.parse_args()

    print("Starting NexusDB incremental vault ingestion...")
    ingester = VaultIngester()
    stats = ingester.ingest_vault(force=args.force)
    print(f"Done! Scanned: {stats['scanned']}, Updated: {stats['updated']}, Total Chunks: {stats['chunks']}")
