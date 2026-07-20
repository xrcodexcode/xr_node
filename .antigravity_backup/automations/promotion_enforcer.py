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

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    nodes_dir = os.path.join(vault_root, "02_NODES")
    report_path = os.path.join(vault_root, ".antigravity", "reports", "promotion-candidates.md")
    
    if not os.path.exists(nodes_dir):
        print(f"Nodes directory not found: {nodes_dir}")
        sys.exit(1)
        
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    inbound_links = calculate_backlinks(nodes_dir, note_files)
    
    candidates = []
    
    for f in note_files:
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except:
            continue
            
        fm, _ = parse_frontmatter(content)
        raw_tags = fm.get("tags", [])
        tags_list = [t.strip().lower().lstrip('#') for t in parse_list_value(raw_tags)]
        
        note_id = os.path.splitext(f)[0].lower()
        backlink_count = len(inbound_links.get(note_id, set()))
        
        note_title = note_id
        title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        if title_match:
            note_title = title_match.group(1).strip()
            
        current_status = "unknown"
        if "draft" in tags_list:
            current_status = "draft"
        elif "evergreen" in tags_list:
            current_status = "evergreen"
        elif "processed" in tags_list:
            current_status = "processed"
            
        # Evaluation
        if current_status == "draft" and backlink_count >= 1:
            candidates.append({
                "title": note_title,
                "slug": note_id,
                "current": "draft",
                "suggested": "processed",
                "backlinks": backlink_count,
                "reason": f"Note has {backlink_count} inbound backlink(s) and is ready for integration."
            })
        elif current_status == "processed" and backlink_count >= 3:
            candidates.append({
                "title": note_title,
                "slug": note_id,
                "current": "processed",
                "suggested": "evergreen",
                "backlinks": backlink_count,
                "reason": f"Highly connected note with {backlink_count} backlinks. Eligible for evergreen status."
            })
        elif current_status == "unknown":
            # If no status tag is found, default to draft or suggest processed depending on links
            sug = "processed" if backlink_count >= 1 else "draft"
            candidates.append({
                "title": note_title,
                "slug": note_id,
                "current": "none",
                "suggested": sug,
                "backlinks": backlink_count,
                "reason": f"No status tag found. Suggesting '{sug}' based on {backlink_count} backlinks."
            })
            
    report_lines = [
        "# Promotion Candidates Report\n\n",
        f"Last scanned on {note_files.__len__()} notes.\n\n",
        "| Note Title | Current Status | Suggested Status | Backlink Count | Reason |\n",
        "| :--- | :--- | :--- | :--- | :--- |\n"
    ]
    
    if candidates:
        for c in candidates:
            file_link = f"[[{c['slug']}\\|{c['title']}]]"
            report_lines.append(f"| {c['title']} | `{c['current']}` | **`{c['suggested']}`** | {c['backlinks']} | {c['reason']} |\n")
        print(f"Found {len(candidates)} promotion candidates.")
    else:
        report_lines.append("| *None* | *None* | *None* | 0 | *None* |\n")
        print("No promotion candidates found.")
        
    try:
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing promotion candidates report: {e}")

if __name__ == "__main__":
    main()
