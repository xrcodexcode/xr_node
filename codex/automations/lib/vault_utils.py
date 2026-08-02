"""
vault_utils.py — Shared utilities for all Infinity Brain automation scripts.

Single source of truth for:
  - Vault path constants
  - YAML frontmatter parsing (yaml.safe_load, not hand-rolled)
  - Wikilink extraction
  - Backlink index construction
  - Tag schema loading (with alias resolution)

All other automation scripts should import from here instead of
duplicating parser logic locally.
"""
from __future__ import annotations

import logging
import os
import pathlib
import re
import sys
from typing import Optional

import yaml

log = logging.getLogger(__name__)
_self = sys.modules[__name__]


# ── Imports from centralized constants package ────────────────────────────────
from constants.paths import get_vault_root
from constants.thresholds import PROMOTION_BACKLINK_THRESHOLD, ORPHAN_BACKLINK_THRESHOLD

def __getattr__(name: str):
    if name in {"VAULT", "NODES", "MOCS", "CAPTURE", "SOURCE", "REPORTS", "LOGS", "RULES", "SCHEMAS"}:
        import constants.paths
        return getattr(constants.paths, name)
    raise AttributeError(f"module {__name__} has no attribute {name}")


def ensure_dirs() -> None:
    """Create reports/ and logs/ directories if they don't exist."""
    _self.REPORTS.mkdir(parents=True, exist_ok=True)
    _self.LOGS.mkdir(parents=True, exist_ok=True)


# ── Frontmatter parsing ───────────────────────────────────────────────────────
_FM_RE = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.DOTALL)


def parse_frontmatter(text: str) -> tuple[dict, str]:
    """
    Parse YAML frontmatter from a markdown string using yaml.safe_load.

    Returns:
        (frontmatter_dict, body_text)
        frontmatter_dict is empty dict if absent or unparseable.

    Safe against:
        - Colons in values (URLs, timestamps)
        - Quoted strings
        - Multi-line YAML values
        - Nested objects
        - Malformed YAML (returns {} instead of crashing)
    """
    m = _FM_RE.match(text)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1))
        if not isinstance(fm, dict):
            fm = {}
    except yaml.YAMLError as exc:
        log.debug("YAML parse error in frontmatter: %s", exc)
        fm = {}
    body = text[m.end():]
    return fm, body


def get_tags(fm: dict) -> list[str]:
    """
    Normalise frontmatter tags to a flat list of lowercase strings without '#'.

    Handles:
        - tags: [ai, ml]           (YAML list)
        - tags: ai                  (single string)
        - tags: "#ai"               (hash-prefixed string)
        - tags: null / missing      (returns [])
    """
    raw = fm.get("tags", [])
    if raw is None:
        return []
    if isinstance(raw, str):
        raw = [raw]
    elif not isinstance(raw, list):
        raw = []
    return [str(t).strip().lower().lstrip("#") for t in raw if t]


# ── Wikilink extraction ───────────────────────────────────────────────────────
_WIKILINK_RE = re.compile(r"\[\[([^\]|#\n]+?)(?:[|#][^\]]+)?\]\]")


def extract_wikilinks(text: str) -> list[str]:
    """
    Return wikilink targets from a markdown string.

    Handles [[target]], [[target|label]], [[target#heading]].
    Strips leading/trailing whitespace from targets.
    Does NOT include the label or heading fragment.
    """
    return [m.strip() for m in _WIKILINK_RE.findall(text) if m.strip()]


def slug_of(name: str) -> str:
    """
    Normalise a filename or wikilink target to a comparable slug.
    Strips extension, lowercases, replaces spaces/underscores with hyphens.
    """
    stem = pathlib.Path(name).stem
    return stem.lower().replace(" ", "-").replace("_", "-")


# ── Backlink index ────────────────────────────────────────────────────────────
def build_backlink_index(
    scan_dirs: Optional[list[pathlib.Path]] = None,
) -> dict[str, set[str]]:
    """
    Build an inbound-backlink index: {target_slug → set_of_source_slugs}.

    scan_dirs defaults to [NODES, MOCS]. Every .md file in those directories
    is scanned for [[wikilinks]]; each link contributes an entry to the index.

    Example:
        index["neural-networks"] == {"transformers", "attention-mechanism"}
        means two notes link TO neural-networks.
    """
    if scan_dirs is None:
        scan_dirs = [_self.NODES, _self.MOCS]

    index: dict[str, set[str]] = {}
    for d in scan_dirs:
        if not d.exists():
            log.debug("Scan dir does not exist, skipping: %s", d)
            continue
        for md in sorted(d.glob("*.md")):
            try:
                text = md.read_text(encoding="utf-8")
            except OSError as e:
                log.warning("Cannot read %s: %s", md.name, e)
                continue
            source = slug_of(md.stem)
            for target in extract_wikilinks(text):
                target_slug = slug_of(target)
                if target_slug:
                    index.setdefault(target_slug, set()).add(source)
    return index


# ── Tag schema loading ────────────────────────────────────────────────────────
def load_allowed_tags(
    schema_path: Optional[pathlib.Path] = None,
) -> tuple[set[str], dict[str, str]]:
    """
    Parse tag-schema.md and return the allowed canonical tags plus alias map.

    Returns:
        (allowed, aliases)
        allowed:  set of canonical tag strings (lowercase, no '#')
        aliases:  dict {alias_form → canonical_form}

    Alias lines in the schema look like:
        - `facts` → `fact`

    Regular tag lines look like:
        - `concept` — a reusable concept

    Prose description lines (e.g. "`yt` is canonical and...") are ignored
    because they contain spaces in the backtick content.
    """
    if schema_path is None:
        schema_path = _self.RULES / "tagging.md"

    allowed: set[str] = set()
    aliases: dict[str, str] = {}

    if not schema_path.exists():
        log.warning("Tag schema not found: %s", schema_path)
        return allowed, aliases

    try:
        text = schema_path.read_text(encoding="utf-8")
    except OSError as e:
        log.error("Cannot read tag schema: %s", e)
        return allowed, aliases

    alias_pair_re = re.compile(r"`([^`]+)`\s*[→\->]+\s*`([^`]+)`")
    tag_re = re.compile(r"^-\s+`([^`\s]+)`")  # no spaces inside backticks

    for line in text.splitlines():
        stripped = line.strip()

        # Find all inline aliases
        found_aliases = alias_pair_re.findall(stripped)
        if found_aliases:
            for src, dst in found_aliases:
                aliases[src.strip()] = dst.strip()
                allowed.add(dst.strip())
            continue

        m = tag_re.match(stripped)
        if m:
            tag = m.group(1).strip()
            allowed.add(tag)

    log.debug(
        "Loaded %d allowed tags, %d aliases from %s",
        len(allowed),
        len(aliases),
        schema_path.name,
    )
    return allowed, aliases


def resolve_tag(tag: str, aliases: dict[str, str]) -> str:
    """Map a tag through aliases to its canonical form. Returns tag unchanged if not an alias."""
    return aliases.get(tag, tag)


# ── Note reading helpers ──────────────────────────────────────────────────────
def read_note(path: pathlib.Path) -> Optional[tuple[dict, str, str]]:
    """
    Read a markdown note and return (frontmatter, body, raw_text).
    Returns None on read or parse failure (logs a warning).
    """
    try:
        text = path.read_text(encoding="utf-8")
    except OSError as e:
        log.warning("Cannot read %s: %s", path.name, e)
        return None
    fm, body = parse_frontmatter(text)
    return fm, body, text


def iter_notes(directory: pathlib.Path):
    """
    Yield (path, frontmatter, body, raw_text) for every .md in directory.
    Skips unreadable files with a warning.
    """
    if not directory.exists():
        log.warning("Directory does not exist: %s", directory)
        return
    for md in sorted(directory.glob("*.md")):
        result = read_note(md)
        if result is None:
            continue
        fm, body, text = result
        yield md, fm, body, text


def clean_tag(tag: str) -> str:
    """Normalize tags (lowercase, strip leading #)."""
    return tag.strip().lower().lstrip('#')


def parse_list_value(val: object) -> list[str]:
    """
    Normalizes frontmatter list values, handling:
    - Lists: ['ai-ml', 'dsa']
    - Inline string lists: [ai-ml, dsa]
    - Single strings: "ai-ml"
    - null/missing values
    """
    if not val:
        return []
    if isinstance(val, (list, tuple, set)):
        return [str(v).strip().strip('"').strip("'") for v in val]
    if isinstance(val, str):
        val = val.strip()
        if val.startswith('[') and val.endswith(']'):
            items = val[1:-1].split(',')
            return [i.strip().strip('"').strip("'") for i in items if i.strip()]
        return [val.strip().strip('"').strip("'")]
    return [str(val).strip()]
