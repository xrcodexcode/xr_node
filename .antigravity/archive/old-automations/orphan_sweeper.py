#!/usr/bin/env python3
"""Scheduled orphan sweep wrapper."""

from __future__ import annotations
import argparse, subprocess, sys
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault", default=".")
    ap.add_argument("--threshold", type=int, default=1)
    args = ap.parse_args()

    script = Path(__file__).resolve().parent / "generate_mocs.py"
    if not script.exists():
        print("Missing generate_mocs.py", file=sys.stderr)
        sys.exit(2)

    subprocess.run([sys.executable, str(script), "--vault", args.vault, "--threshold", str(args.threshold)], check=True)

if __name__ == "__main__":
    main()
