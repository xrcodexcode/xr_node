import os
import re
import sys
import pathlib
sys.path.append(os.path.join(os.path.dirname(__file__), 'lib'))
from vault_paths import get_vault_root
from vault_utils import parse_frontmatter, parse_list_value, clean_tag, load_allowed_tags

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def main():
    vault_root = get_vault_root()
    
    nodes_dir = os.path.join(vault_root, "NODES")
    schema_path = os.path.join(vault_root, ".antigravity", "rules", "tagging.md")
    report_path = os.path.join(vault_root, ".antigravity", "reports", "invalid-tags.md")
    
    allowed_tags, tag_aliases = load_allowed_tags(pathlib.Path(schema_path))
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
            resolved = tag_aliases.get(cleaned, cleaned)
            if resolved not in allowed_tags:
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
