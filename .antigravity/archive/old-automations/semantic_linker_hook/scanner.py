#!/usr/bin/env python3
"""Scanner module for scanning and parsing notes inside the vault."""

from __future__ import annotations
import os
import re
import hashlib
from pathlib import Path
from typing import Any
import yaml

class Note:
    def __init__(
        self,
        path: Path,
        title: str,
        aliases: list[str],
        frontmatter: dict[str, Any],
        tags: list[str],
        body: str,
        citations: list[str]
    ):
        self.path = path
        self.relative_path = path.name  # Since NODES/ is flat
        self.title = title
        self.aliases = aliases
        self.frontmatter = frontmatter
        self.tags = tags
        self.body = body
        self.citations = citations
        # Precomputed fields for searching
        self.words = self._tokenize(f"{title} {' '.join(aliases)} {body}")
        
    @staticmethod
    def _tokenize(text: str) -> list[str]:
        # Simple tokenization: lowercase and alphanumeric words
        return re.findall(r'\b[a-z0-9]+(?:-[a-z0-9]+)*\b', text.lower())

def parse_frontmatter(content: str) -> tuple[dict[str, Any], str]:
    """Parses YAML frontmatter delimited by --- using PyYAML safe_load.

    Handles inline lists (``tags: [a, b]``), nested maps, multi-line strings,
    and quoted values — all cases the previous hand-rolled parser mishandled.
    """
    # Match the opening ---, the YAML block, and the closing ---
    fm_match = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", content, re.DOTALL)
    if not fm_match:
        return {}, content

    fm_text = fm_match.group(1)
    body = content[fm_match.end():]

    try:
        parsed = yaml.safe_load(fm_text)
    except yaml.YAMLError:
        parsed = None

    frontmatter: dict[str, Any] = parsed if isinstance(parsed, dict) else {}
    # Normalise keys to lowercase for consistent downstream access
    frontmatter = {str(k).lower(): v for k, v in frontmatter.items()}
    return frontmatter, body

def parse_list_value(val: Any) -> list[str]:
    """Normalizes list values from frontmatter."""
    if not val:
        return []
    if isinstance(val, list):
        return [str(v).strip().strip('"').strip("'") for v in val]
    val_str = str(val).strip()
    if val_str.startswith('[') and val_str.endswith(']'):
        items = val_str[1:-1].split(',')
        return [i.strip().strip('"').strip("'") for i in items if i.strip()]
    return [val_str.strip().strip('"').strip("'")]

def extract_citations(frontmatter: dict[str, Any], body: str) -> list[str]:
    """Extracts citations from frontmatter and body."""
    citations = []
    
    # 1. From frontmatter
    for key in ["citations", "sources", "citation", "source"]:
        if key in frontmatter:
            citations.extend(parse_list_value(frontmatter[key]))
            
    # 2. From ## Citations or ## Sources section in body
    citations_match = re.search(r"##\s+(?:Citations|Sources)\s*\r?\n(.*?)(?:\r?\n##|$)", body, re.DOTALL | re.IGNORECASE)
    if citations_match:
        section_content = citations_match.group(1)
        # Find markdown links or bullet points
        items = re.findall(r"-\s+(.*)", section_content)
        for item in items:
            citations.append(item.strip())
            
    return list(set(citations))

def parse_note(path: Path) -> Note:
    """Parses a markdown file into a Note object."""
    content = path.read_text(encoding="utf-8")
    frontmatter, body = parse_frontmatter(content)
    
    # 1. Extract Title
    title = frontmatter.get("title", "")
    if not title:
        title_match = re.search(r"^#\s+(.+)$", body, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()
        else:
            title = path.stem.replace('-', ' ').title()
            
    # 2. Extract Aliases
    aliases = parse_list_value(frontmatter.get("aliases", []))
    
    # 3. Extract Tags
    tags = [t.lower().lstrip('#') for t in parse_list_value(frontmatter.get("tags", []))]
    # Also find inline tags in body (e.g. #tag-name)
    inline_tags = re.findall(r"(?<!\S)#([a-zA-Z0-9_-]+)", body)
    tags.extend([t.lower() for t in inline_tags])
    tags = list(set(tags))
    
    # 4. Extract Citations
    citations = extract_citations(frontmatter, body)
    
    return Note(
        path=path,
        title=title,
        aliases=aliases,
        frontmatter=frontmatter,
        tags=tags,
        body=body,
        citations=citations
    )

class VaultScanner:
    def __init__(self, vault_root: Path):
        self.vault_root = vault_root
        self.nodes_dir = vault_root / "NODES"
        self.ignore_folders = {"templates", "archive", "trash", ".git", ".obsidian"}

    def scan(self) -> list[Note]:
        """Recursively scan NODES/ for markdown notes, ignoring specified directories."""
        notes = []
        if not self.nodes_dir.exists():
            return notes
            
        for root, dirs, files in os.walk(self.nodes_dir):
            # Modify dirs in-place to ignore specified folders
            dirs[:] = [d for d in dirs if d.lower() not in self.ignore_folders]
            
            for file in files:
                if file.endswith('.md'):
                    path = Path(root) / file
                    try:
                        note = parse_note(path)
                        notes.append(note)
                    except Exception as e:
                        print(f"[SemanticLinker] Error parsing note {path}: {e}")
                        
        return notes
