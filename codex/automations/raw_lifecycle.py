#!/usr/bin/env python3
"""Move a processed raw source from capture to source."""

from __future__ import annotations
import argparse, shutil, sys
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("raw_path", help="Path to the processed file in 01_RAW/capture/")
    ap.add_argument("--source-root", default="01_RAW/source")
    args = ap.parse_args()

    src = Path(args.raw_path)
    if not src.exists():
        print(f"Missing file: {src}", file=sys.stderr)
        sys.exit(2)

    target_dir = Path(args.source_root)
    target_dir.mkdir(parents=True, exist_ok=True)
    dst = target_dir / src.name
    shutil.move(str(src), str(dst))
    print(f"Moved {src} -> {dst}")

if __name__ == "__main__":
    main()
