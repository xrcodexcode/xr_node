#!/usr/bin/env python3
"""
moc_curator.py — Analyzes oversized MOCs and suggests hierarchical splits.

Scans the MOC files in 03_MOC/, counts their note entries, and parses note
tags to suggest tag-based sub-MOC splits if a MOC exceeds size thresholds.
"""
from __future__ import annotations

import argparse
from collections import Counter
import json
import os
import pathlib
import re
import sys

from datetime import datetime
from vault_utils import iter_notes, parse_frontmatter, get_vault_root, clean_tag, parse_list_value


# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def load_scalability_limits(vault_root: pathlib.Path) -> tuple[int, int]:
    soft = 50
    hard = 100
    scalability_path = vault_root / ".antigravity" / "modules" / "graph" / "scalability.md"
    if scalability_path.exists():
        try:
            text = scalability_path.read_text(encoding="utf-8")
            soft_match = re.search(r"Soft Limit \((\d+) links\)", text)
            hard_match = re.search(r"Hard Limit \((\d+) links\)", text)
            if soft_match:
                soft = int(soft_match.group(1))
            if hard_match:
                hard = int(hard_match.group(1))
        except Exception as e:
            print(f"[Curation] Warning: Error parsing scalability limits: {e}", file=sys.stderr)
    return soft, hard


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze oversized MOCs and suggest splits.")
    parser.add_argument("--moc-dir", default="03_MOC", help="Path to MOC directory")
    parser.add_argument("--report", default=".antigravity/logs/moc-curation.json", help="Path to write the json report")
    args = parser.parse_args()

    vault_root = pathlib.Path(get_vault_root())
    mocs_dir = vault_root / args.moc_dir
    nodes_dir = vault_root / "NODES"

    if not mocs_dir.exists():
        print(f"Error: MOC directory not found at {mocs_dir}", file=sys.stderr)
        sys.exit(1)

    soft_limit, hard_limit = load_scalability_limits(vault_root)
    print(f"[Curation] Thresholds: Soft Limit = {soft_limit}, Hard Limit = {hard_limit}")

    # Step 1: Scan NODES to index notes by their tags and matchers
    all_notes = []
    for path, fm, body, _ in iter_notes(nodes_dir):
        raw_tags = fm.get("tags", [])
        tags_list = [clean_tag(t) for t in parse_list_value(raw_tags)]
        note_type = fm.get("type", "concept").strip().lower()
        all_notes.append({
            "path": str(path),
            "filename": path.name,
            "title": fm.get("title", path.stem),
            "type": note_type,
            "tags": tags_list
        })

    # Step 2: Read MOC definitions from generate_mocs.py to see how they match
    # Since generate_mocs.py defines the lambdas, we can just parse the MOC files themselves to count links.
    moc_analyses = []
    
    for moc_file in sorted(mocs_dir.glob("*.md")):
        if moc_file.name in ["HOME-BASE.md", "HOME-MOC.md", "home.md", "_orphans.md"]:
            continue
            
        try:
            content = moc_file.read_text(encoding="utf-8")
        except Exception as e:
            print(f"[Curation] Warning: Could not read {moc_file.name}: {e}", file=sys.stderr)
            continue
            
        fm, body = parse_frontmatter(content)
        
        # Count rows in the table. Rows start with | and represent note links.
        # Format in MOC table: | Note Title | Link | Type | Tags | Backlinks |
        # Skip the header lines
        table_lines = [l for l in body.splitlines() if l.strip().startswith("|") and not l.strip().startswith("| Note Title") and not l.strip().startswith("| :---")]
        link_count = len(table_lines)
        
        status = "healthy"
        if link_count >= hard_limit:
            status = "critical"
        elif link_count >= soft_limit:
            status = "warning"
            
        analysis = {
            "moc_file": moc_file.name,
            "title": fm.get("title", moc_file.stem),
            "link_count": link_count,
            "status": status,
            "suggestions": []
        }

        # If warning or critical, run split suggestions based on tags in this MOC
        if status in ["warning", "critical"]:
            # Find which notes in NODES belong to this MOC.
            # We can parse the links inside the table to identify the note IDs.
            linked_ids = set()
            for line in table_lines:
                # Extract [[NODES/filename\|label]] or [[filename\|label]]
                m = re.search(r"\[\[(?:NODES/)?([^\|\]\n]+)", line)
                if m:
                    linked_ids.add(m.group(1).split("/")[-1].strip().lower())
                    
            # Gather tags of all linked notes in this MOC
            tags_in_moc = []
            notes_in_moc = []
            for note in all_notes:
                note_id = pathlib.Path(note["filename"]).stem.lower()
                if note_id in linked_ids:
                    tags_in_moc.extend(note["tags"])
                    notes_in_moc.append(note)
                    
            # Count tag frequencies to suggest sub-MOCs
            tag_counts = Counter(tags_in_moc)
            
            # Formulate suggestions
            suggestions = []
            # Propose sub-MOCs for tags representing at least 5 notes
            for tag, count in tag_counts.most_common():
                if count >= 5 and tag not in ["moc", "processed"]:
                    matching_titles = [n["title"] for n in notes_in_moc if tag in n["tags"]]
                    suggestions.append({
                        "sub_moc_tag": tag,
                        "note_count": count,
                        "suggested_title": f"{tag.replace('-', ' ').title()} Map of Content",
                        "matching_notes": matching_titles[:5]  # limit preview to 5 notes
                    })
            analysis["suggestions"] = suggestions
            
        moc_analyses.append(analysis)

    report = {
        "status": "success",
        "timestamp": datetime.now().isoformat(),
        "soft_limit": soft_limit,
        "hard_limit": hard_limit,
        "analyses": moc_analyses
    }

    report_path = pathlib.Path(args.report)
    if not report_path.is_absolute():
        report_path = vault_root / report_path
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    
    # Print results
    print(f"\n=== MOC Scalability & Curation Report ===")
    oversized_found = False
    for a in moc_analyses:
        indicator = "🟢"
        if a["status"] == "critical":
            indicator = "🔴"
            oversized_found = True
        elif a["status"] == "warning":
            indicator = "🟡"
            oversized_found = True
            
        print(f"{indicator} {a['title']} ({a['moc_file']}): {a['link_count']} links [{a['status'].upper()}]")
        for s in a["suggestions"]:
            print(f"   ↳ Suggest Sub-MOC for tag '#{s['sub_moc_tag']}': {s['suggested_title']} ({s['note_count']} notes)")
            
    if not oversized_found:
        print("All Maps of Content are within healthy limits.")
    print(f"Curation report saved to {report_path}")


if __name__ == "__main__":
    main()
