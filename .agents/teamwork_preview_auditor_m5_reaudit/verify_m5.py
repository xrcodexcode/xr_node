import os
import sys
import uuid
import pathlib
import yaml
import re

VAULT_ROOT = pathlib.Path(r"c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb")
NODES_DIR = VAULT_ROOT / "NODES"
RULES_TAGGING = VAULT_ROOT / ".antigravity" / "rules" / "tagging.md"

TARGET_FILES = [
    VAULT_ROOT / "02_NEW-KNOWLEDGE" / "Steve Jobs in Exile - Study Note.md",
    VAULT_ROOT / "NODES" / "Capital Abundance Trap.md",
    VAULT_ROOT / "NODES" / "Inverted Power Hierarchy.md",
    VAULT_ROOT / "NODES" / "Perfectionism Execution Trap.md",
    VAULT_ROOT / "NODES" / "Working Code Paradigm.md",
    VAULT_ROOT / "NODES" / "Channel Stuffing Vulnerability.md",
    VAULT_ROOT / "03_MOC" / "steve-jobs-moc.md",
    VAULT_ROOT / "03_MOC" / "people-moc.md",
    VAULT_ROOT / "03_MOC" / "yt-moc.md",
    VAULT_ROOT / "03_MOC" / "books-moc.md",
    VAULT_ROOT / "03_MOC" / "HOME-BASE.md",
    VAULT_ROOT / "01_RAW" / "SOURCE" / "Steve Jobs in Exile.md"
]

VALID_TYPES = {
    "atomic-note", "evergreen-note", "raw-source", "moc", "governance-rule",
    "log", "project", "journal", "source-youtube", "source-book", "source-paper",
    "source-article", "source-podcast", "literature-note"
}

VALID_STATUSES = {
    "captured", "processed", "learning", "verified", "evergreen", "canonical",
    "maintained", "archived", "atomic"
}

def parse_frontmatter(text: str):
    fm_re = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.DOTALL)
    m = fm_re.match(text)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1))
        if not isinstance(fm, dict):
            fm = {}
    except Exception as e:
        print(f"Error parsing YAML: {e}")
        fm = {}
    return fm, text[m.end():]

def load_allowed_tags():
    text = RULES_TAGGING.read_text(encoding="utf-8")
    allowed = set()
    aliases = {}
    alias_pair_re = re.compile(r"`([^`]+)`\s*[→\->]+\s*`([^`]+)`")
    tag_re = re.compile(r"^-\s+`([^`\s]+)`")
    for line in text.splitlines():
        stripped = line.strip()
        found_aliases = alias_pair_re.findall(stripped)
        if found_aliases:
            for src, dst in found_aliases:
                aliases[src.strip()] = dst.strip()
                allowed.add(dst.strip())
            continue
        m = tag_re.match(stripped)
        if m:
            allowed.add(m.group(1).strip())
    return allowed, aliases

def run_checks():
    print("=== Milestone 5 Re-Audit Verification ===")
    
    # Check 1: Directory Structure of NODES/
    print("\n--- Check 1: NODES Directory Structure ---")
    nodes_subdirs = [d for d in NODES_DIR.iterdir() if d.is_dir()]
    if nodes_subdirs:
        print(f"FAIL: Found {len(nodes_subdirs)} subdirectories in NODES/: {[d.name for d in nodes_subdirs]}")
    else:
        print("PASS: NODES/ contains zero subdirectories.")

    allowed_tags, tag_aliases = load_allowed_tags()
    print(f"\nLoaded {len(allowed_tags)} allowed tags: {sorted(list(allowed_tags))}")

    results = []

    for path in TARGET_FILES:
        print(f"\nChecking: {path.relative_to(VAULT_ROOT)}")
        if not path.exists():
            print(f"  FAIL: File does not exist!")
            results.append({"path": str(path), "status": "MISSING"})
            continue
        
        text = path.read_text(encoding="utf-8")
        fm, body = parse_frontmatter(text)

        if not fm:
            print("  FAIL: Frontmatter missing or invalid!")
            results.append({"path": str(path), "status": "NO_FRONTMATTER"})
            continue

        # Check UUID
        uid = fm.get("id")
        uuid_pass = False
        if uid:
            try:
                u = uuid.UUID(str(uid))
                if u.version == 4 and u.variant == uuid.RFC_4122:
                    uuid_pass = True
                    print(f"  UUID: PASS ({uid} is v4, RFC_4122)")
                else:
                    print(f"  UUID: FAIL ({uid} version={u.version}, variant={u.variant})")
            except Exception as e:
                print(f"  UUID: FAIL (Invalid UUID string: {uid} - {e})")
        else:
            print("  UUID: FAIL (id field missing)")

        # Check Enum - type
        note_type = fm.get("type")
        type_pass = note_type in VALID_TYPES
        if type_pass:
            print(f"  Type: PASS ('{note_type}')")
        else:
            print(f"  Type: FAIL ('{note_type}' not in valid enums)")

        # Check Enum - status
        note_status = fm.get("status")
        status_pass = note_status in VALID_STATUSES
        if status_pass:
            print(f"  Status: PASS ('{note_status}')")
        else:
            print(f"  Status: FAIL ('{note_status}' not in valid enums)")

        # Check Tags
        raw_tags = fm.get("tags", [])
        if raw_tags is None:
            raw_tags = []
        elif isinstance(raw_tags, str):
            raw_tags = [raw_tags]
        
        invalid_tags = []
        for t in raw_tags:
            cleaned = str(t).strip().lower().lstrip("#")
            resolved = tag_aliases.get(cleaned, cleaned)
            if resolved not in allowed_tags:
                invalid_tags.append(t)

        if not invalid_tags:
            print(f"  Tags: PASS ({raw_tags})")
            tags_pass = True
        else:
            print(f"  Tags: FAIL (Invalid tags found: {invalid_tags})")
            tags_pass = False

        results.append({
            "path": str(path.relative_to(VAULT_ROOT)),
            "uuid_pass": uuid_pass,
            "type_pass": type_pass,
            "status_pass": status_pass,
            "tags_pass": tags_pass,
            "fm": fm
        })

    return results

if __name__ == "__main__":
    run_checks()
