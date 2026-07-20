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

def clean_tag(tag):
    return tag.strip().lower().lstrip('#')

def load_allowed_tags(schema_path):
    allowed = set()
    if not os.path.exists(schema_path):
        print(f"Warning: Tag schema not found at {schema_path}")
        return allowed
        
    try:
        with open(schema_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Match patterns like "- `#youtube`" or "- #youtube" or "- `youtube`"
            tags = re.findall(r'-\s+`?#([\w\-]+)`?', content)
            for t in tags:
                allowed.add(clean_tag(t))
    except Exception as e:
        print(f"Error loading tag schema: {e}")
    return allowed

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    nodes_dir = os.path.join(vault_root, "02_NODES")
    schema_path = os.path.join(vault_root, ".antigravity", "rules", "tag-schema.md")
    report_path = os.path.join(vault_root, ".antigravity", "reports", "invalid-tags.md")
    
    allowed_tags = load_allowed_tags(schema_path)
    print(f"Loaded {len(allowed_tags)} allowed tags from schema.")
    
    if not os.path.exists(nodes_dir):
        print(f"Nodes directory not found: {nodes_dir}")
        sys.exit(1)
        
    invalid_notes = []
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    
    for f in note_files:
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except Exception as e:
            print(f"Error reading {f}: {e}")
            continue
            
        fm, _ = parse_frontmatter(content)
        raw_tags = fm.get("tags", [])
        tags_list = parse_list_value(raw_tags)
        
        note_invalid_tags = []
        for t in tags_list:
            cleaned = clean_tag(t)
            if cleaned not in allowed_tags:
                note_invalid_tags.append(t)
                
        if note_invalid_tags:
            note_title = os.path.splitext(f)[0]
            title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
            if title_match:
                note_title = title_match.group(1).strip()
            invalid_notes.append({
                "title": note_title,
                "filename": f,
                "invalid_tags": note_invalid_tags
            })
            
    # Write report
    report_lines = [
        "# Invalid Tags Report\n\n",
        f"Last scanned on {note_files.__len__()} notes.\n\n",
        "| Note Title | File Link | Invalid Tags |\n",
        "| :--- | :--- | :--- |\n"
    ]
    
    if invalid_notes:
        for item in invalid_notes:
            note_slug = os.path.splitext(item["filename"])[0]
            file_link = f"[[{note_slug}\\|{item['filename']}]]"
            tags_str = ", ".join([f"`{t}`" for t in item["invalid_tags"]])
            report_lines.append(f"| {item['title']} | {file_link} | {tags_str} |\n")
        print(f"Found {len(invalid_notes)} notes with invalid tags.")
    else:
        report_lines.append("| *None* | *None* | *None* |\n")
        print("No invalid tags found.")
        
    try:
        os.makedirs(os.path.dirname(report_path), exist_ok=True)
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing invalid tags report: {e}")

if __name__ == "__main__":
    main()
