#!/usr/bin/env python3
"""Wrapper script to execute the semantic linker hook package."""

import sys
from pathlib import Path

# Add the directory containing the package to path
script_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(script_dir))

from semantic_linker_hook.main import main

if __name__ == "__main__":
    main()
