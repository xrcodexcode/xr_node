"""Markdown parser with YAML Frontmatter and Obsidian WikiLink support."""
from __future__ import annotations

import re
from typing import Any, Dict, List, Tuple
import yaml


_FM_REGEX = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.DOTALL)
_WIKILINK_REGEX = re.compile(r"\[\[([^\]|#\n]+?)(?:[|#][^\]]+)?\]\]")


def parse_frontmatter(text: str) -> Tuple[Dict[str, Any], str]:
    """Parse YAML frontmatter from markdown string."""
    m = _FM_REGEX.match(text)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1))
        if not isinstance(fm, dict):
            fm = {}
    except Exception:
        fm = {}
    body = text[m.end():]
    return fm, body


def extract_wikilinks(text: str) -> List[Dict[str, str]]:
    """Extract [[WikiLink|Alias]] targets from content."""
    matches = re.findall(r"\[\[([^\]\|#\n]+?)(?:#[^\]\|\n]+)?(?:\|([^\]\n]+))?\]\]", text)
    links = []
    seen = set()
    for target, alias in matches:
        target_clean = target.strip()
        slug = target_clean.lower().replace(" ", "-")
        if slug and slug not in seen:
            seen.add(slug)
            links.append({
                "target": target_clean,
                "target_slug": slug,
                "alias": alias.strip() if alias else target_clean
            })
    return links


def extract_tags(fm: Dict[str, Any]) -> List[str]:
    """Normalize tags to flat lowercase list without '#'."""
    raw = fm.get("tags", [])
    if not raw:
        return []
    if isinstance(raw, str):
        raw = [raw]
    elif not isinstance(raw, list):
        raw = []
    return [str(t).strip().lower().lstrip("#") for t in raw if t]
