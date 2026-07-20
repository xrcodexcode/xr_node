# ==============================================================================
# XR_node "Infinity Brain" MOC Generation Engine
# 
# ARCHITECTURE UPDATE NOTE:
# Category subfolders under NODES/ (e.g., ai-ml/, psychology/, facts/) have 
# been completely removed in favor of a flat structure. All categorization 
# now relies strictly on front-matter metadata ('type' and 'tags') as the 
# single source of truth.
#
# BACKLINK RESOLUTION NOTE:
# To prevent broken link lookups under a flat structure (where old links might 
# contain subfolder paths like [[NODES/ai-ml/neural-networks]]), all wikilinks
# are resolved by note filename/ID (basename) instead of folder path. 
# Notes in the MOC lists are sorted primarily by their backlink counts to 
# "promote" the most highly connected conceptual nodes.
#
# HIERARCHY SUPPORT (navigation-hierarchy.md):
# MOCs with moc_level: domain | index are NOT injected with direct node links.
# Domain MOCs link only to Topic MOCs; INDEX links only to Domain MOCs.
# Topic MOCs (default) continue to receive direct node links as before.
# Existing MOCs without moc_level are treated as moc_level: topic.
# generate_hierarchy_index() builds 03_MOC/INDEX.md from domain MOCs.
# ==============================================================================

import argparse
import os
import re
import subprocess
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), 'lib'))
from vault_paths import get_vault_root
from vault_utils import parse_frontmatter, parse_list_value, clean_tag


# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

# MOC Mapping Definitions
MOC_DEFS = {
    "ai-ml-moc.md": {
        "title": "🤖 AI & Machine Learning Map of Content",
        "tags": "#ai #ml #moc",
        "match": lambda type_val, tag_vals: "ai" in tag_vals or "ml" in tag_vals,
        "desc": "Index of artificial intelligence, machine learning, and LLM concept notes.\n\n### 🧠 Topic Maps of Content\n- [[neural-network-moc|Neural Network Map of Content]] — Fundamental building blocks, optimization algorithms, and architectures."
    },
    "study-moc.md": {
        "title": "📚 Study Map of Content",
        "tags": "#study #moc",
        "match": lambda type_val, tag_vals: any(t in tag_vals for t in ["study", "psychology", "nimcet", "dsa"]),
        "desc": "Index of core academic studies, DSA, NIMCET prep, and psychology notes."
    },
    "books-moc.md": {
        "title": "📖 Books Map of Content",
        "tags": "#books #moc",
        "match": lambda type_val, tag_vals: (any(t in tag_vals for t in ["book", "books"]) or type_val == "book") and "habits" not in tag_vals and "power" not in tag_vals,
        "desc": "Index of detailed book notes, summaries, and literature reviews.\n\n### ⚡ Books in this Vault\n- [[books-cheatsheet|⚡ Books Cheatsheet (Duality of Habits & Power)]] — A consolidated quick-reference cheatsheet for both *Atomic Habits* and *The 48 Laws of Power*.\n- [[atomic-habits-moc|⚡ Atomic Habits MOC]] — Dedicated index of all 48 concepts, methods, facts, and examples from *Atomic Habits* by James Clear.\n- [[48-laws-of-power-moc|⚡ 48 Laws of Power MOC]] — Dedicated index of all notes from *The 48 Laws of Power* by Robert Greene.\n- [[atomic-habits|Source Note — Atomic Habits]] — The central source note under `01_RAW/source/` containing takeaways and chapter mapping.\n- [[48-laws-of-power|Source Note — The 48 Laws of Power]] — The central source note under `01_RAW/source/` containing takeaways."
    },
    "atomic-habits-moc.md": {
        "title": "⚡ Atomic Habits Map of Content",
        "tags": "#atomic-habits #moc",
        "match": lambda type_val, tag_vals: any(t in tag_vals for t in ["habits", "atomic-habits"]),
        "desc": "A dedicated Map of Content indexing all 48 atomic notes extracted from *Atomic Habits* by James Clear, including core concepts, actionable methods, glossary definitions, facts, and illustrative case studies.\n\n### 📚 Quick Links\n- [[books-cheatsheet|⚡ Books Cheatsheet (Duality of Habits & Power)]] — A consolidated quick-reference cheatsheet comparing and summarizing both *Atomic Habits* and *The 48 Laws of Power*."
    },
    "48-laws-of-power-moc.md": {
        "title": "⚡ 48 Laws of Power Map of Content",
        "tags": "#48-laws-of-power #moc",
        "match": lambda type_val, tag_vals: any(t in tag_vals for t in ["power", "48-laws-of-power"]),
        "desc": "A dedicated Map of Content indexing all 64 atomic notes extracted from *The 48 Laws of Power* by Robert Greene, including the 48 laws, key historical examples, and core power dynamics concepts.\n\n### 📚 Quick Links\n- [[books-cheatsheet|⚡ Books Cheatsheet (Duality of Habits & Power)]] — A consolidated quick-reference cheatsheet comparing and summarizing both *Atomic Habits* and *The 48 Laws of Power*.",
        "sort": lambda notes: sorted(notes, key=lambda n: (0 if n["filename"].startswith("law-") else 1, n["filename"]))
    },
    "people-moc.md": {
        "title": "👥 People Map of Content",
        "tags": "#people #moc",
        "match": lambda type_val, tag_vals: any(t in tag_vals for t in ["person", "people"]) or type_val == "person",
        "desc": "Index of biographies, key figures, and personal network notes."
    },
    "tools-moc.md": {
        "title": "🛠️ Tools Map of Content",
        "tags": "#tools #moc",
        "match": lambda type_val, tag_vals: any(t in tag_vals for t in ["tool", "tools"]),
        "desc": "Index of software, productivity tools, and development libraries."
    },
    "yt-moc.md": {
        "title": "📺 YouTube Map of Content",
        "tags": "#yt #moc",
        "match": lambda type_val, tag_vals: "yt" in tag_vals or "youtube" in tag_vals,
        "desc": "Index of notes synthesized from YouTube videos and transcripts."
    }
}

# ── Hierarchy helpers (navigation-hierarchy.md) ───────────────────────────────

def parse_moc_level(moc_path):
    """
    Read moc_level from an existing MOC file's frontmatter.
    Returns: 'index' | 'domain' | 'topic' | 'subtopic' | None (treated as 'topic')
    """
    try:
        with open(moc_path, 'r', encoding='utf-8') as f:
            content = f.read()
        fm, _ = parse_frontmatter(content)
        level = fm.get('moc_level', '').strip().lower()
        if level in ('index', 'domain', 'topic', 'subtopic'):
            return level
    except Exception:
        pass
    return None  # Default: treat as topic


def get_domain_mocs(mocs_dir):
    """
    Scan 03_MOC/ (and one level of subdirs) for MOCs with moc_level: domain.
    Returns list of dicts: {path, title, domain, stem}
    """
    domain_mocs = []
    if not os.path.exists(mocs_dir):
        return domain_mocs
    candidates = []
    for f in os.listdir(mocs_dir):
        full_path = os.path.join(mocs_dir, f)
        if os.path.isfile(full_path) and f.endswith('.md'):
            candidates.append(full_path)
        elif os.path.isdir(full_path):
            for sf in os.listdir(full_path):
                if sf.endswith('.md'):
                    candidates.append(os.path.join(full_path, sf))
    for moc_path in candidates:
        if parse_moc_level(moc_path) == 'domain':
            try:
                with open(moc_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                fm, _ = parse_frontmatter(content)
                title_match = re.search(r'^#\s+(.+)$', content, re.MULTILINE)
                title = fm.get('title', '') or (title_match.group(1).strip() if title_match else os.path.splitext(os.path.basename(moc_path))[0])
                domain_mocs.append({
                    'path': moc_path,
                    'title': title,
                    'domain': fm.get('domain', 'general'),
                    'stem': os.path.splitext(os.path.basename(moc_path))[0],
                })
            except Exception:
                pass
    return domain_mocs


def generate_hierarchy_index(vault_root, mocs_dir):
    """
    Generate or update 03_MOC/INDEX.md — the root navigation index.
    Lists all domain-level MOCs. Does NOT inject node links (INDEX law).
    Only creates INDEX.md when at least one domain MOC exists.
    Governed by navigation-hierarchy.md and moc-schema.md.
    """
    domain_mocs = get_domain_mocs(mocs_dir)
    if not domain_mocs:
        print('[generate_mocs] No domain-level MOCs found; skipping INDEX.md generation.')
        return
    from datetime import datetime, timezone
    index_path = os.path.join(mocs_dir, 'INDEX.md')
    today = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    lines = [
        '---\n',
        'title: Vault Index\n',
        'type: moc\n',
        'status: curated\n',
        'domain: general\n',
        'moc_level: index\n',
        'parent_moc: null\n',
        'owner_moc: null\n',
        'confidence: 100\n',
        f'updated: {today}\n',
        'schema_version: 4\n',
        '---\n\n',
        '# Vault Index\n\n',
        '> Root navigation. Links only to Domain MOCs (never to individual nodes).\n\n',
        '## Overview\n\n',
        'The Infinity Brain knowledge graph. Navigate: INDEX → Domain MOC → Topic MOC → Node.\n\n',
        '## Domains\n\n',
    ]
    for dm in sorted(domain_mocs, key=lambda x: x['domain']):
        rel_stem = os.path.relpath(os.path.splitext(dm['path'])[0], mocs_dir).replace(os.sep, '/')
        lines.append(f'- [[{rel_stem}|{dm["title"]}]] `{dm["domain"]}`\n')
    lines += [
        '\n## Gaps\n\n',
        '_Domains without a domain-level MOC yet. Create one using `.antigravity/templates/domain-moc.md`._\n',
        '\n---\n',
        f'_Generated {today} by `generate_mocs.py`. Governed by `navigation-hierarchy.md`._\n',
    ]
    try:
        with open(index_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)
        print(f'[generate_mocs] Generated INDEX.md with {len(domain_mocs)} domain MOC(s).')
    except Exception as e:
        print(f'[generate_mocs] Error writing INDEX.md: {e}', file=sys.stderr)


# Utility functions are imported from vault_utils

def calculate_backlinks(nodes_dir, note_files):
    """
    Scans all notes and extracts outbound [[wikilinks]].
    Calculates inbound link count (backlinks) for each note in nodes_dir.
    Keys off note filename/ID (basename) rather than folder path to prevent breaking.
    """
    inbound_links = {os.path.splitext(f)[0].lower(): set() for f in note_files}
    
    for f in note_files:
        source_id = os.path.splitext(f)[0].lower()
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except Exception as e:
            print(f"Error reading {f} for backlinks: {e}")
            continue
            
        # Extract wikilinks: [[target]] or [[target|label]] or [[target#anchor]]
        # We match everything inside [[ and before | or #
        links = re.findall(r'\[\[([^\]|#]+)', content)
        for link in links:
            # Clean link: extract basename (path-independent)
            target_name = link.strip().rstrip('\\').replace('\\', '/')
            target_basename = os.path.basename(target_name)
            target_id = os.path.splitext(target_basename)[0].lower()
            
            # Count backlink if the target exists in NODES and is not a self-link
            if target_id in inbound_links and target_id != source_id:
                inbound_links[target_id].add(source_id)
                
    return {k: len(v) for k, v in inbound_links.items()}

def generate_home_base(vault_root, mocs_dir):
    """Generates the central HOME-BASE.md index."""
    home_path = os.path.join(vault_root, "HOME-BASE.md")
    home_lines = [
        "---\n",
        "type: moc\n",
        "title: Infinity Brain Home\n",
        "tags: [moc]\n",
        "---\n\n",
        "# 🌌 Infinity Brain (XR_node) Home\n\n",
        "Welcome to your central knowledge repository.\n\n",
        "## 🗺️ Maps of Content (MOCs)\n",
        "- [[ai-ml-moc|🤖 AI & Machine Learning MOC]] — Artificial intelligence, agents, and LLMs.\n",
        "- [[study-moc|📚 Study MOC]] — Academics, DSA, prep work, and psychology.\n",
        "- [[books-moc|📖 Books MOC]] — In-depth book summaries and literature.\n",
        "- [[atomic-habits-moc|⚡ Atomic Habits MOC]] — Dedicated index of notes from *Atomic Habits* by James Clear.\n",
        "- [[48-laws-of-power-moc|⚡ 48 Laws of Power MOC]] — Dedicated index of notes from *The 48 Laws of Power* by Robert Greene.\n",
        "- [[people-moc|👥 People MOC]] — Person notes and key contacts.\n",
        "- [[warren-buffett-moc|💰 Warren Buffett MOC]] — Warren Buffett's investment philosophy, habits, and legacy MOC.\n",
        "- [[tools-moc|🛠️ Tools MOC]] — Software, tools, and technical stacks.\n",
        "- [[yt-moc|📺 YouTube MOC]] — Synthesized notes from video transcripts.\n\n",
        "---\n",
        "*Generated automatically by Antigravity PKM engine.*\n"
    ]
    try:
        with open(home_path, 'w', encoding='utf-8') as f:
            f.writelines(home_lines)
        print("Generated/Updated HOME-BASE.md.")
        
        # Clean up legacy home.md if it exists
        legacy_home = os.path.join(mocs_dir, "home.md")
        if os.path.exists(legacy_home):
            os.remove(legacy_home)
            print("Removed legacy home.md.")
            
        # Clean up legacy HOME-MOC.md in 03_MOC if it exists
        legacy_home_moc = os.path.join(mocs_dir, "HOME-MOC.md")
        if os.path.exists(legacy_home_moc):
            os.remove(legacy_home_moc)
            print("Removed legacy 03_MOC/HOME-MOC.md.")
            
        # Clean up legacy HOME-MOC.md in vault root if it exists
        root_legacy_home_moc = os.path.join(vault_root, "HOME-MOC.md")
        if os.path.exists(root_legacy_home_moc):
            os.remove(root_legacy_home_moc)
            print("Removed legacy HOME-MOC.md from vault root.")
    except Exception as e:
        print(f"Error writing HOME-BASE.md: {e}")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))

    ap = argparse.ArgumentParser()
    ap.add_argument("--vault", default=None, help="Path to the Obsidian vault root")
    ap.add_argument("--threshold", type=int, default=1, help="Backlink threshold for orphans")
    args = ap.parse_args()

    if args.vault:
        vault_root = os.path.abspath(args.vault)
    else:
        vault_root = get_vault_root()
    
    nodes_dir = os.path.join(vault_root, "NODES")
    mocs_dir = os.path.join(vault_root, "03_MOC")
    
    if not os.path.exists(nodes_dir):
        print(f"Error: nodes directory not found at {nodes_dir}")
        sys.exit(1)
        
    os.makedirs(mocs_dir, exist_ok=True)
    
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    print(f"Scanned {len(note_files)} notes in NODES/")
    
    # 1. Parse all notes and extract metadata
    notes_meta = []
    for f in note_files:
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except Exception as e:
            print(f"Error reading {f}: {e}")
            continue
            
        fm, body = parse_frontmatter(content)
        
        # Title extraction: first H1, else filename
        title = os.path.splitext(f)[0]
        title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()
            
        # Parse Type and Tags
        if "type" not in fm:
            print(f"[Warning] Note missing 'type' field, defaulting to 'concept': {f}", file=sys.stderr)
            type_val = "concept"
        else:
            type_val = fm["type"].strip().lower()
        
        raw_tags = fm.get("tags", [])
        tags_list = parse_list_value(raw_tags)
        clean_tags = [clean_tag(t) for t in tags_list]
        
        # Brief description/summary extraction (first non-empty, non-header line of body)
        desc = ""
        body_lines = [l.strip() for l in body.split('\n') if l.strip()]
        for line in body_lines:
            if not line.startswith('#') and not line.startswith('-') and not line.startswith('*'):
                # Exclude potential frontmatter residue or links
                if not line.startswith('type:') and not line.startswith('tags:'):
                    desc = line
                    break
        if len(desc) > 120:
            desc = desc[:117] + "..."
        if not desc:
            desc = "No summary available."
            
        notes_meta.append({
            "filename": f,
            "note_id": os.path.splitext(f)[0].lower(),
            "title": title,
            "type": type_val,
            "tags": clean_tags,
            "desc": desc,
            "clean_id": f"NODES/{os.path.splitext(f)[0]}"
        })
        
    # 2. Calculate backlink counts
    backlink_counts = calculate_backlinks(nodes_dir, note_files)
    for meta in notes_meta:
        meta["backlinks"] = backlink_counts.get(meta["note_id"], 0)
        
    # 3. Map notes to MOCs
    moc_groups = {moc_file: [] for moc_file in MOC_DEFS}
    for meta in notes_meta:
        for moc_file, moc_def in MOC_DEFS.items():
            if moc_def["match"](meta["type"], meta["tags"]):
                moc_groups[moc_file].append(meta)
                
    # Load limits from scalability.md if possible
    moc_soft_limit = 50
    moc_hard_limit = 100
    scalability_path = os.path.join(vault_root, ".antigravity", "modules", "graph", "scalability.md")
    if os.path.exists(scalability_path):
        try:
            with open(scalability_path, 'r', encoding='utf-8') as sf:
                text = sf.read()
                soft_match = re.search(r"Soft Limit \((\d+) links\)", text)
                hard_match = re.search(r"Hard Limit \((\d+) links\)", text)
                if soft_match:
                    moc_soft_limit = int(soft_match.group(1))
                if hard_match:
                    moc_hard_limit = int(hard_match.group(1))
        except Exception as e:
            print(f"Error parsing scalability limits: {e}", file=sys.stderr)
            
    moc_warnings = []

    # 4. Generate MOC files
    for moc_file, moc_def in MOC_DEFS.items():
        moc_path = os.path.join(mocs_dir, moc_file)
        notes = moc_groups[moc_file]
        
        # Check size limits
        if len(notes) >= moc_hard_limit:
            w_msg = f"[Warning] MOC '{moc_file}' has reached/exceeded the hard limit of {moc_hard_limit} links (current: {len(notes)} links). Split is REQUIRED."
            print(w_msg, file=sys.stderr)
            moc_warnings.append(w_msg)
        elif len(notes) >= moc_soft_limit:
            w_msg = f"[Warning] MOC '{moc_file}' has exceeded the soft limit of {moc_soft_limit} links (current: {len(notes)} links). Consider splitting it."
            print(w_msg, file=sys.stderr)
            moc_warnings.append(w_msg)

        # Sort notes: use custom sort if defined, otherwise backlink count descending
        if "sort" in moc_def:
            notes = moc_def["sort"](notes)
        else:
            notes.sort(key=lambda x: (-x["backlinks"], x["title"].lower()))
        
        # ── Hierarchy guard (navigation-hierarchy.md Law H2) ──────────────────
        # Domain-level and index-level MOCs must NOT receive direct node links.
        moc_full_path = os.path.join(mocs_dir, moc_file)
        if os.path.exists(moc_full_path):
            existing_level = parse_moc_level(moc_full_path) or 'topic'
            if existing_level in ('domain', 'index'):
                print(f"[generate_mocs] Skipping node injection for {moc_file} (moc_level: {existing_level}).")
                continue
        # ─────────────────────────────────────────────────────────────────────
        
        moc_lines = []
        moc_lines.append("---\n")
        moc_lines.append("type: moc\n")
        moc_lines.append(f"title: {moc_def['title']}\n")
        
        # Resolve tags to whitelist-compliant list
        clean_tags = []
        if isinstance(moc_def['tags'], str):
            for t in moc_def['tags'].split():
                clean_tags.append(t.lstrip('#'))
        else:
            clean_tags = [t.lstrip('#') for t in moc_def['tags']]
        
        canonical_map = {
            "books": "book",
            "atomic-habits": "habits",
            "48-laws-of-power": "power",
            "people": "biography"
        }
        mapped_tags = [canonical_map.get(t, t) for t in clean_tags]
        if 'moc' not in mapped_tags:
            mapped_tags.append('moc')
            
        moc_lines.append(f"tags: [{', '.join(mapped_tags)}]\n")
        moc_lines.append("status: curated\n")
        moc_lines.append("source: [[HOME-BASE]]\n")
        moc_lines.append("---\n\n")
        moc_lines.append(f"# {moc_def['title']}\n")
        
        # Special handling for yt-moc to dynamically list video-specific MOCs
        if moc_file == "yt-moc.md":
            video_mocs = []
            if os.path.exists(mocs_dir):
                for f in os.listdir(mocs_dir):
                    if f.endswith('-moc.md') and f not in MOC_DEFS and f != "HOME-MOC.md" and f != "HOME-BASE.md":
                        moc_title = f[:-7].replace('-', ' ').title() + " MOC"
                        try:
                            with open(os.path.join(mocs_dir, f), 'r', encoding='utf-8') as mf:
                                first_line = mf.readline()
                                if first_line.startswith('# '):
                                    moc_title = first_line[2:].strip()
                        except:
                            pass
                        video_mocs.append(f"- [[{f[:-3]}|{moc_title}]]")
            if video_mocs:
                desc_with_mocs = moc_def['desc'] + "\n\n### 📺 Video-Specific Maps of Content\n" + "\n".join(video_mocs)
                moc_lines.append(f"## Overview\n{desc_with_mocs}\n\n")
            else:
                moc_lines.append(f"## Overview\n{moc_def['desc']}\n\n")
        else:
            moc_lines.append(f"## Overview\n{moc_def['desc']}\n\n")
            
        moc_lines.append("## 📝 Concept & Study Notes\n")
        
        if notes:
            moc_lines.append("| Note Title | Link | Type | Tags | Backlinks |\n")
            moc_lines.append("| :--- | :--- | :--- | :--- | :--- |\n")
            for n in notes:
                tags_str = ", ".join([f"#{t}" for t in n["tags"]])
                file_link = f"[[{n['clean_id']}\\|{n['title']}]]"
                moc_lines.append(f"| {n['title']} | {file_link} | `{n['type']}` | {tags_str} | **{n['backlinks']}** |\n")
        else:
            moc_lines.append("*No notes found matching this MOC.*\n")
            
        try:
            with open(moc_path, 'w', encoding='utf-8') as out_f:
                out_f.writelines(moc_lines)
            print(f"Generated/Updated MOC: {moc_file} with {len(notes)} notes.")
        except Exception as e:
            print(f"Error writing MOC {moc_file}: {e}")
            
    # 5. Generate HOME-BASE.md (Index MOC)
    generate_home_base(vault_root, mocs_dir)
    
    # 5b. Generate hierarchy INDEX.md from domain-level MOCs (if any exist)
    generate_hierarchy_index(vault_root, mocs_dir)
    
    # 6. Generate Orphan Report and Update Health Log
    # 6. Generate Orphan Report and Update Health Log
    # Calculate orphans: notes in notes_meta with < args.threshold backlinks
    orphans = []
    for meta in notes_meta:
        if meta["backlinks"] < args.threshold:
            orphans.append((meta["title"], f"NODES/{meta['filename']}", meta["backlinks"]))
            
    orphans_file = os.path.join(mocs_dir, "_orphans.md")
    from datetime import datetime, timezone
    orphan_lines = [
        "# Orphan Report\n\n",
        f"Generated: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}\n\n",
        f"Threshold: {args.threshold}\n\n",
        "| Title | Path | Backlinks |\n",
        "|---|---|---:|\n"
    ]
    for title, rel, count in sorted(orphans, key=lambda x: (x[2], x[0].lower())):
        orphan_lines.append(f"| {title} | `{rel}` | {count} |\n")
        
    try:
        with open(orphans_file, 'w', encoding='utf-8') as f:
            f.writelines(orphan_lines)
        print(f"Generated Orphan Report: {orphans_file} with {len(orphans)} orphans.")
    except Exception as e:
        print(f"Error writing orphan report: {e}")
        
    # Gather other health metrics from validation tools
    env = os.environ.copy()
    env["VAULT_ROOT"] = vault_root

    unknown_tags = 0
    try:
        tag_script = os.path.join(script_dir, "validate_tags.py")
        tag_result = subprocess.run([sys.executable, tag_script], capture_output=True, text=True, encoding="utf-8", errors="replace", env=env, cwd=script_dir)
        match = re.search(r"Found (\d+) notes with invalid tags", tag_result.stdout)
        if match:
            unknown_tags = int(match.group(1))
    except Exception as e:
        print(f"Error executing validate_tags.py: {e}", file=sys.stderr)

    dup_candidates = 0
    try:
        dup_script = os.path.join(script_dir, "duplicate_detector.py")
        dup_result = subprocess.run([sys.executable, dup_script], capture_output=True, text=True, encoding="utf-8", errors="replace", env=env, cwd=script_dir)
        match = re.search(r"Found (\d+) duplicate candidate pairs", dup_result.stdout)
        if match:
            dup_candidates = int(match.group(1))
    except Exception as e:
        print(f"Error executing duplicate_detector.py: {e}", file=sys.stderr)

    broken_links = 0
    try:
        check_script = os.path.join(script_dir, "check_vault.py")
        check_result = subprocess.run([sys.executable, check_script], capture_output=True, text=True, encoding="utf-8", errors="replace", env=env, cwd=script_dir)
        broken_links = check_result.stdout.count("Broken link:")
    except Exception as e:
        print(f"Error executing check_vault.py: {e}", file=sys.stderr)

    log_file = os.path.join(vault_root, ".antigravity", "logs", "moc-health.md")
    os.makedirs(os.path.dirname(log_file), exist_ok=True)
    existing_log = ""
    if os.path.exists(log_file):
        try:
            with open(log_file, 'r', encoding='utf-8') as f:
                existing_log = f.read()
        except:
            pass
    if not existing_log:
        existing_log = "# MOC Health Log\n\n| Date | Nodes | MOCs | Orphans | Unknown Tags | Duplicate Candidates | Broken Links | Avg Backlinks | Notes |\n|---|---:|---:|---:|---:|---:|---:|---:|---|\n"
        
    nodes_count = len(notes_meta)
    mocs_count = len(os.listdir(mocs_dir))
    avg_backlinks = (sum(n["backlinks"] for n in notes_meta) / nodes_count) if nodes_count else 0.0
    row = f"| {datetime.now(timezone.utc).strftime('%Y-%m-%d')} | {nodes_count} | {mocs_count} | {len(orphans)} | {unknown_tags} | {dup_candidates} | {broken_links} | {avg_backlinks:.2f} | rebuild |"
    if row not in existing_log:
        existing_log += row + "\n"
        
    if "## MOC Size Warnings" in existing_log:
        existing_log = existing_log.split("## MOC Size Warnings")[0].strip() + "\n"
        
    if moc_warnings:
        existing_log += "\n## MOC Size Warnings\n"
        for w in moc_warnings:
            existing_log += f"- {w}\n"

    try:
        with open(log_file, 'w', encoding='utf-8') as f:
            f.write(existing_log)
        print(f"Updated MOC Health Log: {log_file}")
    except Exception as e:
        print(f"Error writing health log: {e}")

    print("MOC Generation completed successfully.")

if __name__ == "__main__":
    main()
