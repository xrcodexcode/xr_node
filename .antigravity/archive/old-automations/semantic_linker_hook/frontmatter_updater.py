#!/usr/bin/env python3
"""Frontmatter updater module to safely append related notes to YAML frontmatter."""

from __future__ import annotations
import re
from pathlib import Path
import yaml

def update_note_frontmatter(note_path: Path, new_related: list[str]) -> bool:
    """
    Safely adds a list of related note titles/stems to the frontmatter of a markdown file.
    Does not duplicate existing related notes. Returns True if file was updated.
    """
    if not new_related:
        return False
        
    content = note_path.read_text(encoding="utf-8")
    
    # 1. Parse frontmatter and body
    fm_match = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", content, re.DOTALL)
    if not fm_match:
        # No frontmatter exists. Let's create one.
        fm_lines = ["---", "related:"]
        for r in sorted(list(set(new_related))):
            # yaml.dump(['value']) produces '- value\n' — we strip the newline
            item_yaml = yaml.dump([r], default_flow_style=False, allow_unicode=True).rstrip()
            fm_lines.append(f"  {item_yaml}")
        fm_lines.append("---")
        new_content = "\n".join(fm_lines) + "\n\n" + content
        note_path.write_text(new_content, encoding="utf-8")
        return True
        
    fm_text = fm_match.group(1)
    body = content[fm_match.end():]
    
    # 2. Parse lines of frontmatter
    fm_lines = fm_text.splitlines()
    
    # Check if 'related:' key already exists
    related_line_idx = -1
    for idx, line in enumerate(fm_lines):
        if line.strip().lower().startswith("related:"):
            related_line_idx = idx
            break
            
    updated_lines = []
    
    if related_line_idx == -1:
        # 'related:' key does not exist. Add it at the end.
        updated_lines = list(fm_lines)
        # Remove trailing empty lines in frontmatter if any
        while updated_lines and not updated_lines[-1].strip():
            updated_lines.pop()
        updated_lines.append("related:")
        for r in sorted(list(set(new_related))):
            item_yaml = yaml.dump([r], default_flow_style=False, allow_unicode=True).rstrip()
            updated_lines.append(f"  {item_yaml}")
    else:
        # 'related:' key exists. Let's find existing items.
        existing_related = []
        insert_idx = related_line_idx + 1
        
        # Traverse lines after 'related:' to find bullet points
        while insert_idx < len(fm_lines):
            line = fm_lines[insert_idx]
            # If line is another key-value or empty, we stop
            if line.strip() and not line.strip().startswith("-") and ":" in line:
                break
            if line.strip().startswith("-"):
                # Extract value
                val = line.strip().lstrip("-").strip().strip('"').strip("'")
                existing_related.append(val)
                insert_idx += 1
            elif not line.strip():
                # Skip empty lines
                insert_idx += 1
            else:
                break
                
        # Merge and deduplicate
        existing_lower = {r.lower() for r in existing_related}
        to_add = [r for r in new_related if r.lower() not in existing_lower]
        
        if not to_add:
            return False # Nothing new to add
            
        updated_lines = fm_lines[:insert_idx]
        for r in sorted(to_add):
            item_yaml = yaml.dump([r], default_flow_style=False, allow_unicode=True).rstrip()
            updated_lines.append(f"  {item_yaml}")
        updated_lines.extend(fm_lines[insert_idx:])
        
    # Rebuild file
    new_fm_block = "---\n" + "\n".join(updated_lines) + "\n---\n"
    new_content = new_fm_block + body
    note_path.write_text(new_content, encoding="utf-8")
    return True
