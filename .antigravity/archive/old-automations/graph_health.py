#!/usr/bin/env python3
"""Produce a graph-health snapshot."""

from __future__ import annotations
import argparse, json, subprocess, sys
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vault", default=".")
    args = ap.parse_args()

    script = Path(__file__).resolve().parent / "generate_mocs.py"
    result = subprocess.run([sys.executable, str(script), "--vault", args.vault], capture_output=True, text=True, check=True)
    print(result.stdout)

if __name__ == "__main__":
    main()
