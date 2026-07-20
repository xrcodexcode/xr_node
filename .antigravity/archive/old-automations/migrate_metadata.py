#!/usr/bin/env python3
"""
migrate_metadata.py — Upgrades notes in NODES/ to schema_version 3.

Iterates through all markdown notes in NODES/, validates frontmatter fields,
injects defaults for missing required fields, ensures the schema_version is set to 3,
and writes the file back safely if --apply is passed. Dry-run by default.
"""
from __future__ import annotations

import argparse
from datetime import datetime, timedelta, timezone
import json
import os
import pathlib
import sys
import uuid

# Local imports
from vault_paths import get_vault_root
from vault_utils import iter_notes

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def infer_title(filename: str, body: str) -> str:
    # Look for H1 title in body
    for line in body.splitlines():
        if line.strip().startswith('# '):
            return line.strip().lstrip('# ').strip()
    # Fallback to filename conversion
    stem = pathlib.Path(filename).stem
    return stem.replace('-', ' ').replace('_', ' ').title()


def append_audit_log(vault_root: pathlib.Path, file_rel_path: str, fields_updated: list[str]) -> None:
    audit_path = vault_root / ".antigravity" / "logs" / "audit-log.md"
    audit_path.parent.mkdir(parents=True, exist_ok=True)
    if not audit_path.exists():
        audit_path.write_text(
            "# NexusDB Audit Log\n\n"
            "| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |\n"
            "| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |\n",
            encoding="utf-8",
        )
    timestamp = datetime.now().astimezone().isoformat()
    fields_str = ", ".join(fields_updated)
    row = (
        f"| {timestamp} | migrate-metadata | promote | {file_rel_path} | "
        f"Migrated frontmatter to schema_version 3 (Added/fixed fields: {fields_str}) | "
        f"frontmatter-schema.md | {file_rel_path} | 100 | applied | "
        f"revert metadata change using git checkout | none |\n"
    )
    with audit_path.open("a", encoding="utf-8") as f:
        f.write(row)


def rebuild_note_content(fm: dict, body: str) -> str:
    ordered_keys = [
        "id", "title", "type", "status", "domain", "source_type",
        "created", "updated", "review", "confidence", "version",
        "aliases", "tags", "owner_moc", "sources", "related", "schema_version"
    ]
    lines = ["---"]
    for k in ordered_keys:
        if k in fm:
            val = fm[k]
            if isinstance(val, list):
                if not val:
                    lines.append(f"{k}: []")
                else:
                    lines.append(f"{k}:")
                    for item in val:
                        lines.append(f"  - {item}")
            elif val is None:
                lines.append(f"{k}: null")
            elif isinstance(val, bool):
                lines.append(f"{k}: {str(val).lower()}")
            elif isinstance(val, (int, float)):
                lines.append(f"{k}: {val}")
            else:
                val_str = str(val).strip()
                if ":" in val_str or "#" in val_str or "[" in val_str or "]" in val_str or "," in val_str or val_str.startswith('"') or val_str.startswith("'"):
                    # Avoid double quoting if already quoted
                    if (val_str.startswith('"') and val_str.endswith('"')) or (val_str.startswith("'") and val_str.endswith("'")):
                        lines.append(f"{k}: {val_str}")
                    else:
                        # Escape internal double quotes if wrapping with double quotes
                        escaped = val_str.replace('"', '\\"')
                        lines.append(f'{k}: "{escaped}"')
                else:
                    lines.append(f"{k}: {val_str}")

    # Add any extra keys
    for k, val in fm.items():
        if k not in ordered_keys:
            if isinstance(val, list):
                if not val:
                    lines.append(f"{k}: []")
                else:
                    lines.append(f"{k}:")
                    for item in val:
                        lines.append(f"  - {item}")
            elif val is None:
                lines.append(f"{k}: null")
            elif isinstance(val, bool):
                lines.append(f"{k}: {str(val).lower()}")
            elif isinstance(val, (int, float)):
                lines.append(f"{k}: {val}")
            else:
                val_str = str(val).strip()
                if ":" in val_str or "#" in val_str or "[" in val_str or "]" in val_str or "," in val_str or val_str.startswith('"') or val_str.startswith("'"):
                    if (val_str.startswith('"') and val_str.endswith('"')) or (val_str.startswith("'") and val_str.endswith("'")):
                        lines.append(f"{k}: {val_str}")
                    else:
                        escaped = val_str.replace('"', '\\"')
                        lines.append(f'{k}: "{escaped}"')
                else:
                    lines.append(f"{k}: {val_str}")
    lines.append("---")
    body_clean = body.lstrip()
    return "\n".join(lines) + "\n\n" + body_clean


def main() -> None:
    parser = argparse.ArgumentParser(description="Migrate Zettelkasten note metadata to schema_version 3.")
    parser.add_argument("--vault", help="Path to the vault root")
    parser.add_argument("--apply", action="store_true", help="Apply updates to files (dry-run by default)")
    args = parser.parse_args()

    vault_root = pathlib.Path(args.vault).resolve() if args.vault else pathlib.Path(get_vault_root())
    nodes_dir = vault_root / "NODES"

    if not nodes_dir.exists():
        print(f"Error: NODES directory not found at {nodes_dir}", file=sys.stderr)
        sys.exit(1)

    print(f"Scanning notes in {nodes_dir} for migration...")
    
    today_str = datetime.now().strftime("%Y-%m-%d")
    review_str = (datetime.now() + timedelta(days=90)).strftime("%Y-%m-%d")

    migrated_count = 0
    total_notes = 0

    for path, fm, body, raw_text in iter_notes(nodes_dir):
        total_notes += 1
        rel_path = str(path.relative_to(vault_root))
        
        # Check if already migrated
        current_version = fm.get("schema_version")
        if current_version == 3:
            continue
            
        # Migrate
        updated_fields = []
        new_fm = fm.copy()

        # 1. Ensure schema_version
        new_fm["schema_version"] = 3
        updated_fields.append("schema_version")

        # 2. Ensure id (UUID v4)
        if "id" not in new_fm:
            new_fm["id"] = str(uuid.uuid4())
            updated_fields.append("id")

        # 3. Ensure title
        if "title" not in new_fm:
            new_fm["title"] = infer_title(path.name, body)
            updated_fields.append("title")

        # 4. Ensure type
        if "type" not in new_fm:
            new_fm["type"] = "atomic-note"
            updated_fields.append("type")
        elif new_fm["type"] == "concept":
            # Upgrade concept to atomic-note
            new_fm["type"] = "atomic-note"
            updated_fields.append("type (upgraded concept)")

        # 5. Ensure status
        if "status" not in new_fm:
            new_fm["status"] = "linked"
            updated_fields.append("status")

        # 6. Ensure domain
        if "domain" not in new_fm:
            new_fm["domain"] = "general"
            updated_fields.append("domain")

        # 7. Ensure source_type
        if "source_type" not in new_fm:
            new_fm["source_type"] = "null"
            updated_fields.append("source_type")

        # 8. Ensure created
        if "created" not in new_fm:
            new_fm["created"] = today_str
            updated_fields.append("created")

        # 9. Ensure updated
        if "updated" not in new_fm:
            new_fm["updated"] = today_str
            updated_fields.append("updated")

        # 10. Ensure review
        if "review" not in new_fm:
            new_fm["review"] = review_str
            updated_fields.append("review")

        # 11. Ensure confidence
        if "confidence" not in new_fm:
            new_fm["confidence"] = 95
            updated_fields.append("confidence")

        # 12. Ensure version
        if "version" not in new_fm:
            new_fm["version"] = 1
            updated_fields.append("version")

        # 13. Ensure aliases
        if "aliases" not in new_fm:
            new_fm["aliases"] = []
            updated_fields.append("aliases")
        elif isinstance(new_fm["aliases"], str):
            new_fm["aliases"] = [new_fm["aliases"]]
            updated_fields.append("aliases (list)")

        # 14. Ensure tags
        if "tags" not in new_fm:
            new_fm["tags"] = []
            updated_fields.append("tags")
        elif isinstance(new_fm["tags"], str):
            new_fm["tags"] = [new_fm["tags"]]
            updated_fields.append("tags (list)")

        # 15. Ensure owner_moc
        if "owner_moc" not in new_fm:
            # Try to infer owner MOC based on filename prefix or tags
            inferred = "null"
            filename_lower = path.stem.lower()
            if "musk" in filename_lower:
                inferred = "Elon Musk Map of Content"
            elif "habits" in filename_lower or "habit" in filename_lower:
                inferred = "Atomic Habits Map of Content"
            elif "buffett" in filename_lower or "investment" in filename_lower:
                inferred = "Warren Buffett Map of Content"
            elif "power" in filename_lower or "law-" in filename_lower:
                inferred = "48 Laws of Power Map of Content"
            elif "prompt" in filename_lower:
                inferred = "Prompt Engineering Map of Content"
            elif "agent" in filename_lower or "loop" in filename_lower or "code" in filename_lower:
                inferred = "AI & Machine Learning Map of Content"
            new_fm["owner_moc"] = inferred
            updated_fields.append("owner_moc")

        # 16. Ensure sources (migrate from single legacy 'source' key)
        if "sources" not in new_fm:
            sources_list = []
            if "source" in new_fm and new_fm["source"]:
                src_val = new_fm["source"]
                if isinstance(src_val, list):
                    sources_list = src_val
                else:
                    sources_list = [str(src_val)]
            new_fm["sources"] = sources_list
            updated_fields.append("sources")

        # 17. Ensure related
        if "related" not in new_fm:
            related_list = []
            if "related" in fm and fm["related"]:
                if isinstance(fm["related"], list):
                    related_list = fm["related"]
                else:
                    related_list = [str(fm["related"])]
            new_fm["related"] = related_list
            updated_fields.append("related")

        # Rebuild file contents
        new_content = rebuild_note_content(new_fm, body)
        
        migrated_count += 1
        
        if args.apply:
            try:
                path.write_text(new_content, encoding="utf-8")
                append_audit_log(vault_root, rel_path, updated_fields)
                print(f"[Migrate] Applied: {rel_path} ({len(updated_fields)} fields modified)")
            except Exception as e:
                print(f"[Migrate] Error writing {rel_path}: {e}", file=sys.stderr)
        else:
            print(f"[Migrate] Dry-run: {rel_path} -> would add/fix: {', '.join(updated_fields)}")

    print(f"\nMigration completed. Scanned {total_notes} notes. Migrated {migrated_count} notes.")
    if not args.apply and migrated_count > 0:
        print("Note: This was a dry-run. Run with --apply to write changes.")


if __name__ == "__main__":
    main()
