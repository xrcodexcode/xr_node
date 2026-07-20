#!/usr/bin/env python3
"""Report generator module for outputting markdown link suggestions reports."""

from __future__ import annotations
from pathlib import Path
from typing import Any

def generate_markdown_report(
    report_path: Path,
    new_notes_count: int,
    all_suggestions: dict[str, list[dict[str, Any]]]
) -> None:
    """Generates a detailed markdown report of all suggested semantic links."""
    # Count metrics
    links_suggested = 0
    high_count = 0
    medium_count = 0
    low_count = 0
    
    details_lines = []
    
    for note_title, suggestions in all_suggestions.items():
        if not suggestions:
            continue
            
        details_lines.append(f"\n### {note_title}\n")
        
        for s in suggestions:
            links_suggested += 1
            conf = s["confidence"]
            target_title = s["target_title"]
            target_file = s["target_file"]
            target_stem = Path(target_file).stem
            reason = s["reason"]
            
            # Categorize confidence
            if conf >= 0.90:
                high_count += 1
            elif conf >= 0.80:
                medium_count += 1
            else:
                low_count += 1
                
            details_lines.append(f"→ [[{target_stem}]]\nConfidence: {conf:.2f}\n")
            if reason:
                details_lines.append(f"Reason:\n{reason}\n")
            details_lines.append("\n---\n")
            
    # Assemble header
    lines = [
        "# Semantic Link Report\n",
        f"New Notes Processed:\n{new_notes_count}\n",
        f"Links Suggested:\n{links_suggested}\n",
        f"High Confidence:\n{high_count}\n",
        f"Medium:\n{medium_count}\n",
        f"Low:\n{low_count}\n",
        "\n---\n"
    ]
    
    if details_lines:
        # Remove the final --- from details if any
        if details_lines[-1] == "\n---\n":
            details_lines.pop()
        lines.extend(details_lines)
    else:
        lines.append("\n*No semantic links were suggested in this run.*\n")
        
    # Write report
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text("".join(lines), encoding="utf-8")
