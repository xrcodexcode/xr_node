#!/usr/bin/env python3
"""Validate tags against .antigravity/rules/tag-schema.md."""

from __future__ import annotations
import argparse
import sys
from pathlib import Path
from vault_utils import load_allowed_tags


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--schema", default=".antigravity/schemas/tag-schema.md")
    ap.add_argument("--tags", nargs="*", default=[])
    args = ap.parse_args()

    allowed, aliases = load_allowed_tags(Path(args.schema))
    bad = []
    fixed = []
    for t in args.tags:
        t = t.lstrip("#").strip().lower()
        t = aliases.get(t, t)
        if t not in allowed:
            bad.append(t)
        else:
            fixed.append(t)

    if bad:
        print("Unknown tags:", ", ".join(sorted(set(bad))))
        sys.exit(2)
    print("Validated tags:", ", ".join(fixed))


if __name__ == "__main__":
    main()
