"""VaultService — Primary indexer and search engine over NexusDB Markdown vault."""
from __future__ import annotations

import math
import re
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List, Optional

from app.core.config import settings
from app.core.logging import get_logger
from app.knowledge.parser import extract_tags, extract_wikilinks, parse_frontmatter

logger = get_logger(__name__)


class VaultService:
    """Service for querying, indexing, and interacting with the NexusDB vault."""

    def __init__(self, vault_path: Optional[Path] = None):
        self.vault_path = vault_path or settings.VAULT_PATH
        self.notes_cache: Dict[str, Dict[str, Any]] = {}
        self.backlinks_map: Dict[str, List[Dict[str, Any]]] = {}
        self._is_indexed = False

    def index_vault(self) -> Dict[str, Any]:
        """Scan and index all markdown files in the vault."""
        logger.info("Indexing vault at: %s", self.vault_path)
        self.notes_cache.clear()
        self.backlinks_map.clear()

        if not self.vault_path.exists():
            return {"indexed_count": 0, "status": "path_not_found"}

        target_dirs = [
            self.vault_path / "NODES",
            self.vault_path / "NOTES",
            self.vault_path / "03_MOC",
            self.vault_path / "02_NEW-KNOWLEDGE",
            self.vault_path / "01_RAW",
        ]

        md_files_set = set(self.vault_path.glob("*.md"))
        for d in target_dirs:
            if d.exists():
                md_files_set.update(d.rglob("*.md"))

        for file_path in md_files_set:
            rel_str = str(file_path.relative_to(self.vault_path))
            if any(part.startswith(".") or part in ("node_modules", "dist", "data", "xr-nodes-agent-os", "build", ".venv") for part in file_path.parts):
                continue

            try:
                raw_text = file_path.read_text(encoding="utf-8", errors="replace")
                fm, body = parse_frontmatter(raw_text)

                slug = file_path.stem.lower().replace(" ", "-")
                title = fm.get("title") or file_path.stem
                word_count = len(re.findall(r"\w+", body))
                reading_time = max(1, math.ceil(word_count / 200))
                links = extract_wikilinks(body)
                tags = extract_tags(fm)

                folder = file_path.parent.name if file_path.parent != self.vault_path else "root"

                note_meta = {
                    "id": fm.get("id") or f"note-{slug}",
                    "title": title,
                    "slug": slug,
                    "folder": folder,
                    "relative_path": rel_str,
                    "absolute_path": str(file_path),
                    "type": fm.get("type", "atomic-note"),
                    "status": fm.get("status", "active"),
                    "domain": fm.get("domain", "general"),
                    "created": str(fm.get("created", "")),
                    "confidence": fm.get("confidence", 90),
                    "owner_moc": fm.get("owner_moc"),
                    "tags": tags,
                    "summary": fm.get("summary") or (body[:150].replace("\n", " ").strip() + "..."),
                    "word_count": word_count,
                    "reading_time_minutes": reading_time,
                    "links": links,
                    "content": body,
                    "raw_text": raw_text,
                }
                self.notes_cache[slug] = note_meta
            except Exception as e:
                logger.error("Error reading %s: %s", file_path, e)

        # Build backlink index
        for source_slug, note in self.notes_cache.items():
            for link in note["links"]:
                target_slug = link["target_slug"]
                if target_slug not in self.backlinks_map:
                    self.backlinks_map[target_slug] = []
                self.backlinks_map[target_slug].append({
                    "source_slug": source_slug,
                    "source_title": note["title"],
                    "alias": link["alias"]
                })

        self._is_indexed = True
        logger.info("Successfully indexed %d notes.", len(self.notes_cache))
        return {"indexed_count": len(self.notes_cache), "status": "success"}

    def ensure_indexed(self):
        if not self._is_indexed:
            self.index_vault()

    def search(self, query: str, tag: Optional[str] = None, folder: Optional[str] = None) -> List[Dict[str, Any]]:
        self.ensure_indexed()
        results = []
        q_lower = query.lower() if query else ""

        for slug, note in self.notes_cache.items():
            if tag and tag.lower() not in [t.lower() for t in note["tags"]]:
                continue
            if folder and note["folder"].lower() != folder.lower():
                continue

            if not q_lower or (q_lower in note["title"].lower() or q_lower in note["summary"].lower() or q_lower in note["content"].lower()):
                item = {k: v for k, v in note.items() if k not in ("content", "raw_text")}
                item["backlinks_count"] = len(self.backlinks_map.get(slug, []))
                results.append(item)

        return results

    def get_note(self, slug: str) -> Optional[Dict[str, Any]]:
        self.ensure_indexed()
        note = self.notes_cache.get(slug.lower())
        if not note:
            return None
        res = dict(note)
        res["backlinks"] = self.backlinks_map.get(slug.lower(), [])
        return res

    def get_graph(self, force_reindex: bool = False) -> Dict[str, Any]:
        if force_reindex or not self._is_indexed:
            self.index_vault()
        nodes = []
        edges = []
        edge_set = set()

        for slug, note in self.notes_cache.items():
            nodes.append({
                "id": slug,
                "title": note["title"],
                "folder": note["folder"],
                "type": note["type"],
                "val": 1 + len(note["links"]) + len(self.backlinks_map.get(slug, []))
            })
            for link in note["links"]:
                target_slug = link["target_slug"]
                edge_id = f"{slug}->{target_slug}"
                if edge_id not in edge_set:
                    edge_set.add(edge_id)
                    edges.append({"source": slug, "target": target_slug, "label": link["alias"]})

        return {"nodes": nodes, "edges": edges}

    def get_stats(self) -> Dict[str, Any]:
        self.ensure_indexed()
        return {
            "total_notes": len(self.notes_cache),
            "total_words": sum(n["word_count"] for n in self.notes_cache.values()),
            "total_links": sum(len(n["links"]) for n in self.notes_cache.values()),
            "nodes_count": len([n for n in self.notes_cache.values() if n["folder"] == "NODES"]),
            "mocs_count": len([n for n in self.notes_cache.values() if n["folder"] == "03_MOC"]),
            "new_knowledge_count": len([n for n in self.notes_cache.values() if n["folder"] == "02_NEW-KNOWLEDGE"]),
            "last_indexed": datetime.now().isoformat(),
        }


vault_service = VaultService()
