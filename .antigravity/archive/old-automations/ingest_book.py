#!/usr/bin/env python3
"""Ingest a source into atomic notes, then archive the original source.

This is a scaffold; plug your extraction logic into create_atomic_notes().
"""

from __future__ import annotations
import argparse, re, subprocess, sys
from pathlib import Path

def create_atomic_notes(source: Path, nodes_dir: Path) -> list[Path]:
    # Replace this with your actual atomization pipeline.
    # The scaffold writes a placeholder note only if needed.
    note = nodes_dir / f"{source.stem}.md"
    if not note.exists():
        note.write_text(
            f"""---
type: atomic-note
title: {source.stem.replace('-', ' ').title()}
tags: [processed, book, concept]
source: 01_RAW/SOURCE/{source.name}
status: draft
---

## Definition

Placeholder atomic note extracted from `{source.name}`.

## Source

[[01_RAW/SOURCE/{source.stem}|Original source]]
""",
            encoding="utf-8",
        )
    return [note]

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source_file", help="Path inside 01_RAW/capture/")
    ap.add_argument("--nodes-dir", default="NODES")
    ap.add_argument("--source-dir", default="01_RAW/SOURCE")
    ap.add_argument("--move-raw", action="store_true", default=True)
    args = ap.parse_args()

    source = Path(args.source_file)
    if not source.exists():
        print(f"Source file not found: {source}", file=sys.stderr)
        sys.exit(2)

    nodes_dir = Path(args.nodes_dir)
    nodes_dir.mkdir(parents=True, exist_ok=True)

    notes = create_atomic_notes(source, nodes_dir)

    # Archive original source after note creation.
    source_dir = Path(args.source_dir)
    source_dir.mkdir(parents=True, exist_ok=True)
    target = source_dir / source.name
    source.rename(target)

    print(f"Created/updated {len(notes)} note(s) and archived source to {target}")

if __name__ == "__main__":
    main()
