#!/usr/bin/env python3
"""
concept_id_migrator.py — Populate `concept_id` for all notes missing it.

Migration policy (from concept-identity.md):
  concept_id = kebab-case(filename_stem) + "-v1"
  On collision: append "-2", "-3", etc.

Safety:
  - Dry-run by default (--apply to write).
  - Creates a migration manifest at .antigravity/logs/concept-id-migration-<date>.json.
  - Skips notes that already have concept_id.
  - Appends one batch audit-log row on completion.
  - Governed by .antigravity/rules/metadata/concept-identity.md.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date, datetime
from pathlib import Path
from typing import Optional

from vault_paths import get_vault_root
from vault_utils import iter_notes, slug_of


def to_concept_id(stem: str, version: int = 1, suffix: Optional[int] = None) -> str:
    """Convert a filename stem to a concept_id slug."""
    base = re.sub(r"[^a-z0-9]+", "-", stem.lower()).strip("-")
    cid = f"{base}-v{version}"
    if suffix is not None and suffix > 1:
        cid = f"{cid}-{suffix}"
    return cid


def insert_concept_id(content: str, concept_id: str) -> str:
    """Insert concept_id after the id field in frontmatter."""
    # Try to insert after id: line
    pattern = re.compile(r"^(id:\s*[^\n]+\n)", re.MULTILINE)
    m = pattern.search(content)
    if m:
        insert_pos = m.end()
        return content[:insert_pos] + f"concept_id: {concept_id}\n" + content[insert_pos:]

    # Fallback: insert after opening ---
    fm_start = content.find("---\n")
    if fm_start != -1:
        after_start = fm_start + 4
        return content[:after_start] + f"concept_id: {concept_id}\n" + content[after_start:]

    return content  # cannot insert; return unchanged


def main() -> None:
    ap = argparse.ArgumentParser(description="Populate concept_id for all notes missing it.")
    ap.add_argument("--vault", default=None)
    ap.add_argument("--apply", action="store_true", help="Write changes (default: dry-run)")
    ap.add_argument("--dirs", nargs="+", default=None,
                    help="Subdirectories to process (default: NODES, NOTES, 03_MOC)")
    args = ap.parse_args()

    vault_root = Path(args.vault) if args.vault else Path(get_vault_root())
    dry_run = not args.apply
    today = date.today()

    target_dirs = args.dirs or ["NODES", "NOTES", "03_MOC"]
    target_paths = [vault_root / d for d in target_dirs if (vault_root / d).exists()]

    # Collect all existing concept_ids to detect collisions
    existing_concept_ids: set[str] = set()
    all_note_paths: list[Path] = []
    for td in target_paths:
        for path, fm, _, _ in iter_notes(td):
            cid = fm.get("concept_id")
            if cid:
                existing_concept_ids.add(str(cid))
            all_note_paths.append(path)

    manifest: list[dict] = []
    updated_count = 0
    skipped_count = 0
    collision_count = 0

    for td in target_paths:
        for path, fm, body, raw in iter_notes(td):
            existing_cid = fm.get("concept_id")
            if existing_cid:
                skipped_count += 1
                continue  # Already has concept_id

            stem = path.stem
            version = fm.get("version", 1)

            # Generate concept_id
            cid = to_concept_id(stem, version)
            if cid in existing_concept_ids:
                collision_count += 1
                suffix = 2
                while to_concept_id(stem, version, suffix) in existing_concept_ids:
                    suffix += 1
                cid = to_concept_id(stem, version, suffix)

            existing_concept_ids.add(cid)
            manifest.append({
                "path": str(path.relative_to(vault_root)),
                "stem": stem,
                "concept_id": cid,
                "collision_resolved": collision_count > 0,
            })

            if args.apply and raw:
                try:
                    new_content = insert_concept_id(raw, cid)
                    if new_content != raw:
                        path.write_text(new_content, encoding="utf-8")
                        updated_count += 1
                    else:
                        print(f"  [WARN] Could not insert concept_id in {path.name}", file=sys.stderr)
                except Exception as exc:
                    print(f"  [ERROR] {path.name}: {exc}", file=sys.stderr)

    # ── Write manifest ────────────────────────────────────────────────────────
    logs_dir = vault_root / ".antigravity" / "logs"
    logs_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = logs_dir / f"concept-id-migration-{today.isoformat()}.json"
    manifest_data = {
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "mode": "applied" if args.apply else "dry-run",
        "stats": {
            "total_processed": len(manifest),
            "updated": updated_count,
            "skipped_already_set": skipped_count,
            "collisions_resolved": collision_count,
        },
        "entries": manifest,
    }
    manifest_path.write_text(json.dumps(manifest_data, indent=2), encoding="utf-8")

    # ── Audit log append ──────────────────────────────────────────────────────
    if args.apply and updated_count > 0:
        audit_log = logs_dir / "audit-log.md"
        ts = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
        row = (
            f"| {ts} | concept_id_migrator.py | create | NODES/NOTES/03_MOC (batch) "
            f"| Populate concept_id for {updated_count} notes "
            f"| concept-identity.md | — | 99 | applied "
            f"| {manifest_path.name} | none |\n"
        )
        with audit_log.open("a", encoding="utf-8") as f:
            f.write(row)

    mode = "DRY RUN" if dry_run else "APPLIED"
    print(f"[concept_id_migrator] [{mode}]")
    print(f"  To be processed: {len(manifest)}")
    print(f"  Already have concept_id (skipped): {skipped_count}")
    print(f"  Collisions resolved: {collision_count}")
    if args.apply:
        print(f"  Files updated: {updated_count}")
        print(f"  Manifest: {manifest_path}")
    else:
        print(f"  Manifest (dry-run preview): {manifest_path}")
        print("  Run with --apply to write changes.")


if __name__ == "__main__":
    main()
