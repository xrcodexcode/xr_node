#!/usr/bin/env python3
"""Main CLI entrypoint for the semantic linker hook."""

from __future__ import annotations
import argparse
from datetime import datetime
import hashlib
import json
import os
import sys
from pathlib import Path
from typing import Any

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# Local imports
from .config import Config
from .scanner import VaultScanner, Note
from .retriever import Retriever
from .embedding_search import EmbeddingEngine
from .relationship_detector import HeuristicRelationshipDetector, LLMRelationshipDetector
from .frontmatter_updater import update_note_frontmatter
from .link_generator import append_links_to_note
from .report_generator import generate_markdown_report

def get_vault_root(current_path: Path) -> Path:
    """Traverse up to find the vault root (containing .antigravity)."""
    for parent in [current_path] + list(current_path.parents):
        if (parent / ".antigravity").is_dir():
            return parent
    return current_path

def compute_hash(text: str) -> str:
    """Computes MD5 hash of text."""
    return hashlib.md5(text.encode("utf-8", errors="ignore")).hexdigest()

def load_cache(cache_path: Path) -> dict[str, Any]:
    """Loads the embeddings and hash cache."""
    if cache_path.exists():
        try:
            return json.loads(cache_path.read_text(encoding="utf-8"))
        except Exception as e:
            print(f"[SemanticLinker] Warning: Failed to load cache: {e}")
    return {"embeddings": {}, "hashes": {}}

def save_cache(cache_path: Path, cache_data: dict[str, Any]) -> None:
    """Saves the embeddings and hash cache."""
    try:
        cache_path.parent.mkdir(parents=True, exist_ok=True)
        cache_path.write_text(json.dumps(cache_data, indent=2), encoding="utf-8")
    except Exception as e:
        print(f"[SemanticLinker] Warning: Failed to save cache: {e}")

def _audit_cell(value: Any) -> str:
    """Return a safe single-cell Markdown-table value."""
    return str(value).replace("|", "/").replace("\n", " ").strip()

def append_link_audit(
    vault_root: Path,
    target: Path,
    suggestions: list[dict[str, Any]],
) -> None:
    """Append an audit record for an applied automatic link change."""
    if not suggestions:
        return

    audit_path = vault_root / ".antigravity" / "logs" / "audit-log.md"
    audit_path.parent.mkdir(parents=True, exist_ok=True)
    if not audit_path.exists():
        audit_path.write_text(
            "# NexusDB Audit Log\n\n"
            "| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |\n"
            "| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |\n",
            encoding="utf-8",
        )

    confidence = round(min(float(item["confidence"]) for item in suggestions) * 100)
    relationships = ", ".join(sorted({str(item["relationship"]) for item in suggestions}))
    relative_target = target.relative_to(vault_root) if target.is_relative_to(vault_root) else target
    timestamp = datetime.now().astimezone().isoformat()
    row = (
        f"| {timestamp} | semantic-linker | link | {_audit_cell(relative_target)} | "
        f"Applied {len(suggestions)} HIGH-priority link(s): {_audit_cell(relationships)} | "
        f"linking-rules.md | {_audit_cell(relative_target)} | {confidence} | applied | "
        "revert related links and related frontmatter entries | none |\n"
    )
    with audit_path.open("a", encoding="utf-8") as handle:
        handle.write(row)

def main():
    ap = argparse.ArgumentParser(description="Discover and insert semantic links in Zettelkasten notes.")
    ap.add_argument("--vault", help="Path to the vault root")
    ap.add_argument("--note", nargs="+", help="Paths to specific notes to scan and link")
    ap.add_argument("--force", action="store_true", help="Force re-indexing and re-linking of all notes")
    ap.add_argument("--threshold", type=float, help="Override confidence threshold")
    ap.add_argument("--max-links", type=int, help="Override max links per note")
    args = ap.parse_args()

    # 1. Initialize configuration and vault path
    script_dir = Path(__file__).resolve().parent
    vault_root = Path(args.vault).resolve() if args.vault else get_vault_root(script_dir)
    
    config = Config()
    if not config.enabled:
        print("[SemanticLinker] Hook is disabled in config.yaml. Exiting.")
        sys.exit(0)

    # The constitution prohibits automatic linking below 95% confidence.
    # CLI flags can make the run stricter but cannot weaken this floor.
    auto_apply_threshold = max(float(config.confidence_threshold), 0.95)
    requested_threshold = args.threshold if args.threshold is not None else config.suggestion_threshold
    suggestion_threshold = max(float(requested_threshold), float(config.suggestion_threshold), 0.80)
    if args.threshold is not None and args.threshold < 0.80:
        print("[SemanticLinker] Raised requested threshold to 0.80; lower values are report-only noise.")
    auto_relationships = {
        relation.strip()
        for relation in str(config.auto_link_relationships).split(",")
        if relation.strip()
    }
    max_links = args.max_links if args.max_links is not None else config.max_links_per_note

    # 2. Setup paths
    cache_path = vault_root / ".antigravity" / "logs" / "embeddings_cache.json"
    report_path = vault_root / ".antigravity" / "reports" / "semantic_link_report.md"

    # 3. Load cache
    cache_data = load_cache(cache_path)
    embeddings_cache = cache_data.get("embeddings", {})
    hashes_cache = cache_data.get("hashes", {})

    # 4. Scan the vault
    print(f"[SemanticLinker] Scanning notes in {vault_root}...")
    scanner = VaultScanner(vault_root)
    notes = scanner.scan()
    print(f"[SemanticLinker] Found {len(notes)} notes in NODES/.")

    if not notes:
        print("[SemanticLinker] No notes found. Exiting.")
        sys.exit(0)

    # 5. Initialize Embedding Engine
    print(f"[SemanticLinker] Initializing embedding engine ({config.embedding_model})...")
    engine = EmbeddingEngine(config.embedding_model)

    # 6. Update embeddings cache
    cache_updated = False
    notes_to_embed = []

    for note in notes:
        note_id = note.relative_path
        content_to_embed = f"{note.title}\n{note.body}"
        current_hash = compute_hash(content_to_embed)
        
        # Determine if we need to generate/update embedding
        needs_embed = (
            args.force or 
            note_id not in embeddings_cache or 
            hashes_cache.get(note_id) != current_hash
        )
        
        if needs_embed:
            notes_to_embed.append((note, content_to_embed, current_hash))

    if notes_to_embed and engine.available:
        print(f"[SemanticLinker] Generating embeddings for {len(notes_to_embed)} new/modified notes...")
        for note, content, current_hash in notes_to_embed:
            note_id = note.relative_path
            emb = engine.get_embedding(content)
            if emb:
                embeddings_cache[note_id] = emb
                hashes_cache[note_id] = current_hash
                cache_updated = True
        
        if cache_updated:
            save_cache(cache_path, {"embeddings": embeddings_cache, "hashes": hashes_cache})
            print("[SemanticLinker] Embeddings cache updated and saved.")

    # 7. Initialize Retriever
    retriever = Retriever(notes)

    # 8. Determine which notes to process
    notes_to_process = []
    if args.note:
        # Resolve specific note paths
        for n_path_str in args.note:
            n_path = Path(n_path_str).resolve()
            matched_note = None
            for n in notes:
                if n.path.resolve() == n_path or n.path.name == n_path.name:
                    matched_note = n
                    break
            if matched_note:
                notes_to_process.append(matched_note)
            else:
                print(f"[SemanticLinker] Warning: Specified note not found in NODES/: {n_path_str}")
    else:
        # Process modified/new notes if cache is enabled, else all notes if force
        if args.force:
            notes_to_process = notes
        else:
            # Precompute once — O(n) — so the inner membership check is O(1)
            embedded_ids = {n.relative_path for n, _, _ in notes_to_embed}
            for note in notes:
                note_id = note.relative_path
                content_to_embed = f"{note.title}\n{note.body}"
                current_hash = compute_hash(content_to_embed)
                if note_id not in hashes_cache or hashes_cache.get(note_id) != current_hash or note_id in embedded_ids:
                    notes_to_process.append(note)
            
            # Default to all notes if cache was empty or everything is considered new
            if not notes_to_process and not args.note:
                notes_to_process = notes

    print(f"[SemanticLinker] Processing semantic links for {len(notes_to_process)} note(s)...")

    # 9. Initialize Relationship Detector
    detector = LLMRelationshipDetector(engine.client) if engine.client else HeuristicRelationshipDetector()
    print(f"[SemanticLinker] Using relationship detector: {detector.__class__.__name__}")

    # 10. Discover and apply links
    all_suggestions = {}
    updated_count = 0
    total_links_added = 0

    for query_note in notes_to_process:
        print(f"[SemanticLinker] Retrieving candidates for '{query_note.title}'...")
        # Retrieve candidates
        candidates = retriever.retrieve(
            query_note,
            embedding_engine=engine,
            cached_embeddings=embeddings_cache,
            confidence_threshold=suggestion_threshold,
            max_results=max_links
        )
        
        note_suggestions = []
        auto_suggestions = []
        new_related_stems = []
        
        for target_note, score, strategy in candidates:
            # Classify relationship
            relation_info = detector.detect(query_note, target_note, score)
            final_score = relation_info.get("confidence", score)
            
            relationship = relation_info.get("relationship", "similar_to")
            if final_score >= suggestion_threshold:
                auto_apply = (
                    final_score >= auto_apply_threshold
                    and relationship in auto_relationships
                )
                suggestion = {
                    "target_title": target_note.title,
                    "target_file": str(target_note.path),
                    "target_tags": target_note.tags,
                    "confidence": final_score,
                    "relationship": relationship,
                    "reason": relation_info.get("reason", ""),
                    "action": "apply" if auto_apply else "suggest",
                }
                note_suggestions.append(suggestion)
                if auto_apply:
                    auto_suggestions.append(suggestion)
                    new_related_stems.append(target_note.path.stem)
        
        if note_suggestions:
            all_suggestions[query_note.title] = note_suggestions
            
            # Only HIGH-priority relationships at >=95% confidence may mutate notes.
            fm_updated = False
            if auto_suggestions and config.update_frontmatter:
                fm_updated = update_note_frontmatter(query_note.path, new_related_stems)
                
            # Append wikilinks
            links_appended = False
            if auto_suggestions and config.append_related_section:
                links_appended = append_links_to_note(
                    query_note.path,
                    auto_suggestions,
                    config.append_related_section
                )
                
            if fm_updated or links_appended:
                updated_count += 1
                total_links_added += len(auto_suggestions)
                append_link_audit(vault_root, query_note.path, auto_suggestions)
                print(f"[SemanticLinker] Updated '{query_note.title}' with {len(auto_suggestions)} HIGH-priority link(s).")

    # 11. Generate report
    if config.generate_report:
        generate_markdown_report(report_path, len(notes_to_process), all_suggestions)
        print(f"[SemanticLinker] Report generated at {report_path}")

    # 12. Output summary
    print(f"[SemanticLinker] Completed. Updated {updated_count} note(s) with {total_links_added} semantic link(s).")

if __name__ == "__main__":
    main()
