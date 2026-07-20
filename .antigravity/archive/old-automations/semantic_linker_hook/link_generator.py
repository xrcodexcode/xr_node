#!/usr/bin/env python3
"""Link generator module to format and append wikilinks to notes."""

from __future__ import annotations
import re
from pathlib import Path
from typing import Any

def classify_target(tags: list[str], title: str) -> str:
    """Classifies a target note category based on tags and title."""
    tags_set = set(t.lower() for t in tags)
    
    # 1. Principles
    if any(t in tags_set for t in ["principle", "law", "heuristic", "rule", "mental-model"]):
        return "Related Principles"
        
    # 2. Examples
    if any(t in tags_set for t in ["example", "case-study", "history", "anecdote", "biography"]):
        return "Related Examples"
        
    # 3. Default to Concepts
    return "Related Concepts"

def append_links_to_note(
    note_path: Path,
    suggestions: list[dict[str, Any]],
    append_related_section: bool = True
) -> bool:
    """
    Intelligently appends wikilinks to the end of a note under appropriate headings.
    Avoids duplicate links. Returns True if modified.
    """
    if not suggestions or not append_related_section:
        return False
        
    content = note_path.read_text(encoding="utf-8")
    
    # Extract all existing outbound links: [[Target]] or [[Target|Label]]
    existing_links = set(re.findall(r'\[\[([^\]|#]+)', content))
    existing_links = {l.strip().lower() for l in existing_links}
    
    # Filter out suggestions that already have links
    new_suggestions = []
    for s in suggestions:
        target_name = s["target_title"]
        target_file = s["target_file"]
        target_id = Path(target_file).stem
        
        # Check by file stem/id and by title
        if target_id.lower() in existing_links or target_name.lower() in existing_links:
            continue
        new_suggestions.append(s)
        
    if not new_suggestions:
        return False
        
    # Group suggestions by category
    grouped_suggestions: dict[str, list[dict[str, Any]]] = {
        "Related Concepts": [],
        "Related Examples": [],
        "Related Principles": []
    }
    
    for s in new_suggestions:
        category = classify_target(s["target_tags"], s["target_title"])
        grouped_suggestions[category].append(s)
        
    # Build new bullet lines for each suggestion grouped by category
    # When the ## Related X header already exists, insert new bullets directly
    # under the last bullet in that section.  Only create a fresh ## header
    # when the section is absent entirely.

    lines = content.splitlines(keepends=True)
    modified = False

    for category, items in grouped_suggestions.items():
        if not items:
            continue

        # Build the bullet lines to add for this category
        new_bullets: list[str] = []
        for item in items:
            target_stem = Path(item["target_file"]).stem
            reason = item["reason"]
            if reason:
                new_bullets.append(f"- [[{target_stem}]] — {reason}\n")
            else:
                new_bullets.append(f"- [[{target_stem}]]\n")

        # Locate the existing ## <category> header (if any)
        header_pattern = re.compile(rf"^##\s+{re.escape(category)}\b", re.IGNORECASE)
        header_line_idx = None
        for i, line in enumerate(lines):
            if header_pattern.match(line.rstrip("\r\n")):
                header_line_idx = i
                break

        if header_line_idx is not None:
            # Find the last bullet line inside this section before the next ## heading
            last_bullet_idx = header_line_idx
            for i in range(header_line_idx + 1, len(lines)):
                stripped = lines[i].rstrip("\r\n")
                if stripped.startswith("##"):
                    break  # reached the next section
                if stripped.startswith("-"):
                    last_bullet_idx = i

            # Insert new bullets immediately after the last bullet in the section
            insert_at = last_bullet_idx + 1
            lines[insert_at:insert_at] = new_bullets
        else:
            # Section does not exist — append a fresh ## heading + bullets at the end
            if lines and not lines[-1].endswith("\n"):
                lines.append("\n")
            lines.append(f"\n## {category}\n")
            lines.extend(new_bullets)

        modified = True

    if modified:
        new_content = "".join(lines)
        note_path.write_text(new_content, encoding="utf-8")
        return True

    return False
