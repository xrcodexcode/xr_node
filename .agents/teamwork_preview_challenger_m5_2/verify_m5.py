import os
import re
import sys
import pathlib
import io
import yaml

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

VAULT_ROOT = pathlib.Path(r"c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb")

UUID_V4_REGEX = re.compile(
    r"^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
)

# Load allowed tags from tagging.md
def load_allowed_tags(schema_path):
    allowed = set()
    aliases = {}
    if not schema_path.exists():
        print(f"ERROR: Schema path missing: {schema_path}")
        return allowed, aliases

    text = schema_path.read_text(encoding="utf-8")
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
            tag = m.group(1).strip()
            allowed.add(tag)

    return allowed, aliases

def parse_frontmatter(text):
    fm_re = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n?", re.DOTALL)
    m = fm_re.match(text)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1))
        if not isinstance(fm, dict):
            fm = {}
    except Exception as e:
        print(f"YAML load error: {e}")
        fm = {}
    return fm, text[m.end():]

def parse_tags(val):
    if val is None:
        return []
    if isinstance(val, (list, tuple, set)):
        return [str(v).strip().lower().lstrip("#") for v in val if v]
    if isinstance(val, str):
        val = val.strip()
        if val.startswith("[") and val.endswith("]"):
            items = val[1:-1].split(",")
            return [i.strip().strip('"').strip("'").lower().lstrip("#") for i in items if i.strip()]
        return [val.lower().lstrip("#")]
    return [str(val).strip().lower().lstrip("#")]

def main():
    print("==================================================")
    print("STARTING EMPIRICAL VALIDATION FOR MILESTONE 5")
    print("==================================================")

    tag_schema_path = VAULT_ROOT / ".antigravity" / "rules" / "tagging.md"
    allowed_tags, tag_aliases = load_allowed_tags(tag_schema_path)
    print(f"Allowed tags ({len(allowed_tags)}): {sorted(list(allowed_tags))}")
    print(f"Tag aliases: {tag_aliases}\n")

    # 1. NODES Directory Flat Structure Check
    nodes_dir = VAULT_ROOT / "NODES"
    subdirs = [d for d in nodes_dir.iterdir() if d.is_dir()]
    print("--- CHECK 1: NODES Flat Directory Structure ---")
    if len(subdirs) == 0:
        print("PASS: NODES/ contains zero subdirectories.")
    else:
        print(f"FAIL: NODES/ contains {len(subdirs)} subdirectories: {[s.name for s in subdirs]}")
    print()

    # Milestone 5 created / modified files:
    m5_files = [
        VAULT_ROOT / "02_NEW-KNOWLEDGE" / "Steve Jobs in Exile - Study Note.md",
        VAULT_ROOT / "NODES" / "Capital Abundance Trap.md",
        VAULT_ROOT / "NODES" / "Channel Stuffing Vulnerability.md",
        VAULT_ROOT / "NODES" / "Inverted Power Hierarchy.md",
        VAULT_ROOT / "NODES" / "Perfectionism Execution Trap.md",
        VAULT_ROOT / "NODES" / "Working Code Paradigm.md",
        VAULT_ROOT / "03_MOC" / "steve-jobs-moc.md",
        VAULT_ROOT / "03_MOC" / "people-moc.md",
        VAULT_ROOT / "03_MOC" / "yt-moc.md",
        VAULT_ROOT / "03_MOC" / "books-moc.md",
        VAULT_ROOT / "HOME-BASE.md",
        VAULT_ROOT / "01_RAW" / "SOURCE" / "Steve Jobs in Exile.md",
    ]

    print("==================================================")
    print("PART A: MILESTONE 5 CREATED/MODIFIED FILES VALIDATION")
    print("==================================================")

    # 2. Check Filename matches Title in M5 NODES/
    print("--- CHECK 2 (M5): NODES Filename matches Title ---")
    m5_nodes = [f for f in m5_files if f.parent == nodes_dir]
    m5_title_failures = []
    for f in m5_nodes:
        if not f.exists():
            print(f"FILE MISSING: {f}")
            continue
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)
        title = fm.get("title")
        expected_filename = f"{title}.md" if title else None
        if not title:
            m5_title_failures.append((f.name, "MISSING_TITLE", None))
            print(f"FAIL: {f.name} is missing 'title' in frontmatter.")
        elif f.name != expected_filename:
            m5_title_failures.append((f.name, title, expected_filename))
            print(f"FAIL: {f.name} title attribute '{title}' does not match filename (expected '{expected_filename}')")
        else:
            print(f"PASS: {f.name} matches title '{title}'")
    print()

    # 3. Check UUID v4 formatting for id in M5 files
    print("--- CHECK 3 (M5): UUID v4 Formatting for `id` ---")
    m5_uuid_failures = []
    for f in m5_files:
        if not f.exists():
            continue
        rel_path = f.relative_to(VAULT_ROOT)
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)
        note_id = fm.get("id")
        if not note_id:
            m5_uuid_failures.append((str(rel_path), "MISSING_ID", note_id))
            print(f"FAIL/WARN: {rel_path} is missing 'id' field in frontmatter.")
        else:
            id_str = str(note_id).strip()
            if UUID_V4_REGEX.match(id_str):
                print(f"PASS: {rel_path} id '{id_str}' is valid UUID v4.")
            else:
                m5_uuid_failures.append((str(rel_path), "INVALID_UUID_V4", id_str))
                print(f"FAIL: {rel_path} id '{id_str}' is NOT a valid UUID v4.")
    print()

    # 4. Check Tags in M5 files
    print("--- CHECK 4 (M5): Tag Schema Compliance ---")
    m5_tag_failures = []
    for f in m5_files:
        if not f.exists():
            continue
        rel_path = f.relative_to(VAULT_ROOT)
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)
        raw_tags = fm.get("tags")
        tags = parse_tags(raw_tags)
        invalid_for_file = []
        for t in tags:
            resolved = tag_aliases.get(t, t)
            if resolved not in allowed_tags:
                invalid_for_file.append(t)
        if invalid_for_file:
            m5_tag_failures.append((str(rel_path), invalid_for_file))
            print(f"FAIL: {rel_path} has invalid tags: {invalid_for_file}")
        else:
            print(f"PASS: {rel_path} tags {tags} are all valid.")
    print()

    # 5. Check schema_version: 4 present in all new notes in M5
    print("--- CHECK 5 (M5): schema_version: 4 in New Notes ---")
    m5_new_notes = [
        VAULT_ROOT / "02_NEW-KNOWLEDGE" / "Steve Jobs in Exile - Study Note.md",
        VAULT_ROOT / "NODES" / "Capital Abundance Trap.md",
        VAULT_ROOT / "NODES" / "Channel Stuffing Vulnerability.md",
        VAULT_ROOT / "NODES" / "Inverted Power Hierarchy.md",
        VAULT_ROOT / "NODES" / "Perfectionism Execution Trap.md",
        VAULT_ROOT / "NODES" / "Working Code Paradigm.md",
        VAULT_ROOT / "03_MOC" / "steve-jobs-moc.md",
    ]
    m5_schema_failures = []
    for f in m5_new_notes:
        if not f.exists():
            continue
        rel_path = f.relative_to(VAULT_ROOT)
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)
        sv = fm.get("schema_version")
        if sv == 4 or str(sv) == "4":
            print(f"PASS: {rel_path} schema_version is 4.")
        else:
            m5_schema_failures.append((str(rel_path), sv))
            print(f"FAIL: {rel_path} schema_version is '{sv}' (expected 4).")
    print()

    print("==================================================")
    print("PART B: VAULT-WIDE COMPREHENSIVE SCAN")
    print("==================================================")

    # Scan all nodes in NODES/ for filename vs title
    nodes_files = list((VAULT_ROOT / "NODES").glob("*.md"))
    vault_node_title_matches = 0
    vault_node_title_mismatches = 0
    vault_node_mismatches_list = []
    for f in nodes_files:
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)
        title = fm.get("title")
        expected_filename = f"{title}.md" if title else None
        if f.name == expected_filename:
            vault_node_title_matches += 1
        else:
            vault_node_title_mismatches += 1
            vault_node_mismatches_list.append((f.name, title, expected_filename))

    print(f"NODES/ Title vs Filename: {vault_node_title_matches} match exact title, {vault_node_title_mismatches} do not (e.g. kebab-case filenames).")

    # Scan all markdown notes in NODES/, 02_NEW-KNOWLEDGE/, 03_MOC/ for tags & UUIDs
    all_notes = list((VAULT_ROOT / "NODES").glob("*.md")) + \
                list((VAULT_ROOT / "02_NEW-KNOWLEDGE").glob("*.md")) + \
                list((VAULT_ROOT / "03_MOC").glob("*.md"))

    vault_uuid_valid = 0
    vault_uuid_invalid = []
    vault_tag_valid = 0
    vault_tag_invalid = []

    for f in all_notes:
        rel_path = f.relative_to(VAULT_ROOT)
        content = f.read_text(encoding="utf-8")
        fm, _ = parse_frontmatter(content)

        # UUID
        note_id = fm.get("id")
        if note_id and UUID_V4_REGEX.match(str(note_id).strip()):
            vault_uuid_valid += 1
        else:
            vault_uuid_invalid.append((str(rel_path), note_id))

        # Tags
        raw_tags = fm.get("tags")
        tags = parse_tags(raw_tags)
        bad_tags = []
        for t in tags:
            resolved = tag_aliases.get(t, t)
            if resolved not in allowed_tags:
                bad_tags.append(t)
        if bad_tags:
            vault_tag_invalid.append((str(rel_path), bad_tags))
        else:
            vault_tag_valid += 1

    print(f"Vault-wide UUID v4: {vault_uuid_valid} valid, {len(vault_uuid_invalid)} invalid/missing.")
    print(f"Vault-wide Tag Schema: {vault_tag_valid} valid, {len(vault_tag_invalid)} with unapproved tags.")

    print("\n==================================================")
    print("FINAL SUMMARY FOR MILESTONE 5")
    print("==================================================")
    print(f"1. NODES/ Subdirectories: {'PASS' if len(subdirs) == 0 else 'FAIL'}")
    print(f"2. M5 NODES Title vs Filename: {'PASS' if len(m5_title_failures) == 0 else 'FAIL'}")
    print(f"3. M5 UUID v4 Formatting: {'PASS' if len(m5_uuid_failures) == 0 else 'FAIL'}")
    print(f"4. M5 Tag Schema Compliance: {'PASS' if len(m5_tag_failures) == 0 else 'FAIL'}")
    print(f"5. M5 Schema Version 4: {'PASS' if len(m5_schema_failures) == 0 else 'FAIL'}")

if __name__ == "__main__":
    main()
