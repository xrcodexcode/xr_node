import os
import re
import sys

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

def parse_frontmatter(content):
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
        if ':' in line and not line.strip().startswith('-'):
            key, val = line.split(':', 1)
            key = key.strip().lower()
            val = val.strip()
            if '#' in val:
                val = re.split(r'\s+#', val)[0].strip()
            frontmatter[key] = val
            current_key = key
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
    if not val:
        return []
    if isinstance(val, list):
        return [v.strip().strip('"').strip("'") for v in val]
    val = val.strip()
    if val.startswith('[') and val.endswith(']'):
        items = val[1:-1].split(',')
        return [i.strip().strip('"').strip("'") for i in items if i.strip()]
    return [val.strip().strip('"').strip("'")]

def calculate_backlinks(nodes_dir, note_files):
    inbound_links = {os.path.splitext(f)[0].lower(): set() for f in note_files}
    for f in note_files:
        source_id = os.path.splitext(f)[0].lower()
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except:
            continue
        links = re.findall(r'\[\[([^\]|#]+)', content)
        for link in links:
            target_name = link.strip().rstrip('\\').replace('\\', '/')
            target_basename = os.path.basename(target_name)
            target_id = os.path.splitext(target_basename)[0].lower()
            if target_id in inbound_links and target_id != source_id:
                inbound_links[target_id].add(source_id)
    return inbound_links

def suggest_moc(tags):
    mocs = []
    tags_set = set(tags)
    if "ai-ml" in tags_set or "ai" in tags_set or "ml" in tags_set:
        mocs.append("[[ai-ml-moc|AI & ML MOC]]")
    if any(t in tags_set for t in ["study", "psychology", "nimcet", "dsa", "algorithms"]):
        mocs.append("[[study-moc|Study MOC]]")
    if "books" in tags_set or "book" in tags_set:
        mocs.append("[[books-moc|Books MOC]]")
    if "habits" in tags_set or "atomic-habits" in tags_set:
        mocs.append("[[atomic-habits-moc|Atomic Habits MOC]]")
    if "power" in tags_set or "48-laws-of-power" in tags_set:
        mocs.append("[[48-laws-of-power-moc|48 Laws of Power MOC]]")
    if "people" in tags_set or "person" in tags_set:
        mocs.append("[[people-moc|People MOC]]")
    if "tools" in tags_set or "tool" in tags_set:
        mocs.append("[[tools-moc|Tools MOC]]")
    if "youtube" in tags_set or "yt" in tags_set:
        mocs.append("[[yt-moc|YouTube MOC]]")
    return ", ".join(mocs) if mocs else "[[HOME-BASE|Home Base]]"

def find_suggested_connections(orphan_slug, orphan_tags, notes_meta):
    suggestions = []
    orphan_tags_set = set(orphan_tags)
    for other in notes_meta:
        if other["note_id"] == orphan_slug:
            continue
        # calculate tag overlap
        overlap = len(orphan_tags_set.intersection(set(other["tags"])))
        if overlap > 0:
            suggestions.append((other["title"], other["note_id"], overlap))
            
    # sort by overlap count descending
    suggestions.sort(key=lambda x: -x[2])
    return ", ".join([f"[[{s[1]}\\|{s[0]}]]" for s in suggestions[:2]]) if suggestions else "None"

def find_merge_candidates(orphan_slug, notes_meta):
    candidates = []
    orphan_words = set(orphan_slug.split('-'))
    for other in notes_meta:
        if other["note_id"] == orphan_slug:
            continue
        other_words = set(other["note_id"].split('-'))
        # Jaccard index of words in title slug
        intersection = orphan_words.intersection(other_words)
        union = orphan_words.union(other_words)
        similarity = len(intersection) / len(union) if union else 0
        if similarity > 0.4:
            candidates.append((other["title"], other["note_id"], similarity))
            
    candidates.sort(key=lambda x: -x[2])
    return ", ".join([f"[[{c[1]}\\|{c[0]}]]" for c in candidates[:1]]) if candidates else "None"

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    nodes_dir = os.path.join(vault_root, "02_NODES")
    report_path = os.path.join(vault_root, ".antigravity", "reports", "_orphans.md")
    
    if not os.path.exists(nodes_dir):
        print(f"Nodes directory not found: {nodes_dir}")
        sys.exit(1)
        
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    inbound_links = calculate_backlinks(nodes_dir, note_files)
    
    notes_meta = []
    for f in note_files:
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except:
            continue
        fm, _ = parse_frontmatter(content)
        title = os.path.splitext(f)[0]
        title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        if title_match:
            title = title_match.group(1).strip()
            
        raw_tags = fm.get("tags", [])
        tags_list = parse_list_value(raw_tags)
        
        notes_meta.append({
            "filename": f,
            "note_id": os.path.splitext(f)[0].lower(),
            "title": title,
            "tags": [t.strip().lower().lstrip('#') for t in tags_list]
        })
        
    orphans = []
    for meta in notes_meta:
        note_id = meta["note_id"]
        backlink_count = len(inbound_links.get(note_id, set()))
        if backlink_count == 0:
            orphans.append(meta)
            
    report_lines = [
        "# Orphan Notes Report\n\n",
        f"Last scanned on {note_files.__len__()} notes.\n\n",
        "| Note Title | Link | Backlinks | Suggested MOC | Suggested Connections | Suggested Merge |\n",
        "| :--- | :--- | :--- | :--- | :--- | :--- |\n"
    ]
    
    if orphans:
        for o in orphans:
            o_slug = o["note_id"]
            file_link = f"[[{o_slug}\\|{o['filename']}]]"
            moc_sug = suggest_moc(o["tags"])
            conn_sug = find_suggested_connections(o_slug, o["tags"], notes_meta)
            merge_sug = find_merge_candidates(o_slug, notes_meta)
            
            report_lines.append(f"| {o['title']} | {file_link} | 0 | {moc_sug} | {conn_sug} | {merge_sug} |\n")
        print(f"Found {len(orphans)} orphan notes.")
    else:
        report_lines.append("| *None* | *None* | 0 | *None* | *None* | *None* |\n")
        print("No orphan notes found.")
        
    try:
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing orphan notes report: {e}")

if __name__ == "__main__":
    main()
