#!/usr/bin/env python3
"""Configuration module for the semantic linker hook."""

from __future__ import annotations
import os
import re
from pathlib import Path

class Config:
    def __init__(self):
        self.enabled = True
        self.confidence_threshold = 0.95
        self.suggestion_threshold = 0.80
        self.require_relationship_type = True
        self.allow_low_priority_auto_links = False
        self.auto_link_relationships = "part_of,depends_on,prerequisite,causes,effect_of,specializes,generalizes"
        self.max_links_per_note = 12
        self.embedding_model = "local"
        self.fallback = "bm25"
        self.update_frontmatter = True
        self.generate_report = True
        self.append_related_section = True
        
        # Load from config.yaml if exists
        self.load_from_yaml()

    def load_from_yaml(self):
        # Locate the config.yaml relative to vault root
        # This script runs from different directories, so let's find the vault root.
        # Let's traverse up from this file's folder to find .antigravity
        current_dir = Path(__file__).resolve().parent
        vault_root = None
        for parent in [current_dir] + list(current_dir.parents):
            if (parent / ".antigravity").is_dir():
                vault_root = parent
                break
        
        if not vault_root:
            # Fallback to current working directory
            vault_root = Path.cwd()
            
        config_path = vault_root / "config.yaml"
        if not config_path.exists():
            return
            
        try:
            content = config_path.read_text(encoding="utf-8")
            self._parse_yaml(content)
        except Exception as e:
            print(f"[SemanticLinker] Warning: Failed to read config.yaml: {e}")

    def _parse_yaml(self, content: str):
        # A simple, robust line-by-line YAML parser for our config.yaml format
        current_section = None
        for line in content.splitlines():
            # Strip comments and whitespace
            line = re.sub(r'#.*$', '', line).strip()
            if not line:
                continue
                
            if ':' in line:
                key, val = line.split(':', 1)
                key = key.strip()
                val = val.strip()
                
                if not val:
                    # Section header (e.g. semantic_linker:)
                    current_section = key
                    continue
                    
                # Convert type
                parsed_val: bool | float | int | str = val
                if val.lower() == "true":
                    parsed_val = True
                elif val.lower() == "false":
                    parsed_val = False
                else:
                    try:
                        if '.' in val:
                            parsed_val = float(val)
                        else:
                            parsed_val = int(val)
                    except ValueError:
                        # Keep as string, strip quotes if any
                        parsed_val = val.strip('"').strip("'")
                        
                # Update attributes
                attr_name = key
                if hasattr(self, attr_name):
                    setattr(self, attr_name, parsed_val)
