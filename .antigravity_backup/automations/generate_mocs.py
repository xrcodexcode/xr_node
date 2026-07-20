# ==============================================================================
# XR_node "Infinity Brain" MOC Generation Engine
# 
# ARCHITECTURE UPDATE NOTE:
# Category subfolders under 02_NODES/ (e.g., ai-ml/, psychology/, facts/) have 
# been completely removed in favor of a flat structure. All categorization 
# now relies strictly on front-matter metadata ('type' and 'tags') as the 
# single source of truth.
#
# BACKLINK RESOLUTION NOTE:
# To prevent broken link lookups under a flat structure (where old links might 
# contain subfolder paths like [[02_NODES/ai-ml/neural-networks]]), all wikilinks
# are resolved by note filename/ID (basename) instead of folder path. 
# Notes in the MOC lists are sorted primarily by their backlink counts to 
# "promote" the most highly connected conceptual nodes.
# ==============================================================================

import os
import re
import sys

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
        "desc": "Index of artificial intelligence, machine learning, and LLM concept notes."
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

def parse_frontmatter(content):
    """
    Parses YAML frontmatter block starting and ending with ---.
    Returns frontmatter dict and body text.
    """
    fm_match = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", content, re.DOTALL)
    if not fm_match:
        return {}, content
    
    fm_text = fm_match.group(1)
    body = content[fm_match.end():]
    
    frontmatter = {}
    lines = fm_text.split('\n')
    current_key = None
    for line in lines:
        if not line.strip():
            continue
        # Key-value match
        if ':' in line and not line.strip().startswith('-'):
            key, val = line.split(':', 1)
            key = key.strip().lower()
            val = val.strip()
            # Strip comments
            if '#' in val:
                val = re.split(r'\s+#', val)[0].strip()
            frontmatter[key] = val
            current_key = key
        # List bullet point match
        elif line.strip().startswith('-') and current_key:
            val = line.strip().lstrip('-').strip()
            if '#' in val:
                val = re.split(r'\s+#', val)[0].strip()
            if current_key not in frontmatter or isinstance(frontmatter[current_key], str):
                frontmatter[current_key] = []
            if isinstance(frontmatter[current_key], list):
                frontmatter[current_key].append(val)
                
    return frontmatter, body

def parse_list_value(val):
    """
    Normalizes frontmatter list values, handling:
    - Lists: ['ai-ml', 'dsa']
    - Inline string lists: [ai-ml, dsa]
    - Single strings: "ai-ml"
    """
    if not val:
        return []
    if isinstance(val, list):
        return [v.strip().strip('"').strip("'") for v in val]
    val = val.strip()
    if val.startswith('[') and val.endswith(']'):
        items = val[1:-1].split(',')
        return [i.strip().strip('"').strip("'") for i in items if i.strip()]
    return [val.strip().strip('"').strip("'")]

def clean_tag(tag):
    """Normalize tags (lowercase, strip leading #)."""
    return tag.strip().lower().lstrip('#')

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
            
            # Count backlink if the target exists in 02_NODES and is not a self-link
            if target_id in inbound_links and target_id != source_id:
                inbound_links[target_id].add(source_id)
                
    return {k: len(v) for k, v in inbound_links.items()}

def generate_home_base(vault_root, mocs_dir):
    """Generates the central HOME-BASE.md index."""
    home_path = os.path.join(vault_root, "HOME-BASE.md")
    home_lines = [
        "# 🌌 Infinity Brain (XR_node) Home\n\n",
        "Welcome to your central knowledge repository.\n\n",
        "## 🗺️ Maps of Content (MOCs)\n",
        "- [[ai-ml-moc|🤖 AI & Machine Learning MOC]] — Artificial intelligence, agents, and LLMs.\n",
        "- [[study-moc|📚 Study MOC]] — Academics, DSA, prep work, and psychology.\n",
        "- [[books-moc|📖 Books MOC]] — In-depth book summaries and literature.\n",
        "- [[atomic-habits-moc|⚡ Atomic Habits MOC]] — Dedicated index of notes from *Atomic Habits* by James Clear.\n",
        "- [[48-laws-of-power-moc|⚡ 48 Laws of Power MOC]] — Dedicated index of notes from *The 48 Laws of Power* by Robert Greene.\n",
        "- [[people-moc|👥 People MOC]] — Person notes and key contacts.\n",
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
    # Resolve paths relative to script location
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    nodes_dir = os.path.join(vault_root, "02_NODES")
    mocs_dir = os.path.join(vault_root, "03_MOC")
    
    if not os.path.exists(nodes_dir):
        print(f"Error: nodes directory not found at {nodes_dir}")
        sys.exit(1)
        
    os.makedirs(mocs_dir, exist_ok=True)
    
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    print(f"Scanned {len(note_files)} notes in 02_NODES/")
    
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
        type_val = fm.get("type", "concept").strip().lower()
        
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
            "clean_id": f"02_NODES/{os.path.splitext(f)[0]}"
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
                
    # 4. Generate MOC files
    for moc_file, moc_def in MOC_DEFS.items():
        moc_path = os.path.join(mocs_dir, moc_file)
        notes = moc_groups[moc_file]
        
        # Sort notes: use custom sort if defined, otherwise backlink count descending
        if "sort" in moc_def:
            notes = moc_def["sort"](notes)
        else:
            notes.sort(key=lambda x: (-x["backlinks"], x["title"].lower()))
        
        moc_lines = []
        moc_lines.append(f"# {moc_def['title']}\n")
        moc_lines.append(f"Tags: {moc_def['tags']}\n")
        moc_lines.append("Status: #active\n")
        moc_lines.append("Source: [[HOME-BASE]]\n")
        moc_lines.append("---\n\n")
        
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
    print("MOC Generation completed successfully.")

if __name__ == "__main__":
    main()
