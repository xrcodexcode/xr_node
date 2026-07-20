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

def calculate_jaccard(set_a, set_b):
    if not set_a or not set_b:
        return 0.0
    return len(set_a.intersection(set_b)) / len(set_a.union(set_b))

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    nodes_dir = os.path.join(vault_root, "02_NODES")
    report_path = os.path.join(vault_root, ".antigravity", "reports", "duplicate-candidates.md")
    
    if not os.path.exists(nodes_dir):
        print(f"Nodes directory not found: {nodes_dir}")
        sys.exit(1)
        
    note_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')]
    notes_meta = []
    
    for f in note_files:
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except:
            continue
            
        fm, _ = parse_frontmatter(content)
        
        note_title = os.path.splitext(f)[0]
        title_match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        if title_match:
            note_title = title_match.group(1).strip()
            
        raw_tags = fm.get("tags", [])
        tags_list = [t.strip().lower().lstrip('#') for t in parse_list_value(raw_tags)]
        
        raw_aliases = fm.get("aliases", [])
        aliases_list = [a.strip().lower() for a in parse_list_value(raw_aliases)]
        
        slug = os.path.splitext(f)[0].lower()
        slug_words = set(slug.split('-'))
        
        notes_meta.append({
            "filename": f,
            "slug": slug,
            "title": note_title,
            "tags": set(tags_list),
            "aliases": set(aliases_list),
            "words": slug_words
        })
        
    duplicates = []
    seen_pairs = set()
    
    for i in range(len(notes_meta)):
        for j in range(i + 1, len(notes_meta)):
            note_a = notes_meta[i]
            note_b = notes_meta[j]
            
            # Check 1: Alias overlap
            alias_overlap = note_a["aliases"].intersection(note_b["aliases"])
            if alias_overlap:
                duplicates.append({
                    "a_title": note_a["title"], "a_slug": note_a["slug"],
                    "b_title": note_b["title"], "b_slug": note_b["slug"],
                    "reason": f"Shared aliases: {', '.join(alias_overlap)}",
                    "action": "Merge notes and preserve unique content."
                })
                continue
                
            # Check 2: Slug word similarity
            word_sim = calculate_jaccard(note_a["words"], note_b["words"])
            if word_sim > 0.5:
                duplicates.append({
                    "a_title": note_a["title"], "a_slug": note_a["slug"],
                    "b_title": note_b["title"], "b_slug": note_b["slug"],
                    "reason": f"High filename similarity ({int(word_sim*100)}% word overlap)",
                    "action": "Evaluate if they cover the same concept."
                })
                continue
                
            # Check 3: Tag overlap + moderate slug word similarity
            tag_overlap = note_a["tags"].intersection(note_b["tags"])
            if len(tag_overlap) >= 2:
                word_sim_mod = calculate_jaccard(note_a["words"], note_b["words"])
                if word_sim_mod > 0.3:
                    duplicates.append({
                        "a_title": note_a["title"], "a_slug": note_a["slug"],
                        "b_title": note_b["title"], "b_slug": note_b["slug"],
                        "reason": f"Shared tags ({', '.join(tag_overlap)}) & filename overlap ({int(word_sim_mod*100)}%)",
                        "action": "Check if Note B is a subset of Note A."
                    })
                    
    report_lines = [
        "# Duplicate Candidates Report\n\n",
        f"Last scanned on {note_files.__len__()} notes.\n\n",
        "| Note A | Note B | Similarity Reason | Action Suggested |\n",
        "| :--- | :--- | :--- | :--- |\n"
    ]
    
    if duplicates:
        for d in duplicates:
            link_a = f"[[{d['a_slug']}\\|{d['a_title']}]]"
            link_b = f"[[{d['b_slug']}\\|{d['b_title']}]]"
            report_lines.append(f"| {link_a} | {link_b} | {d['reason']} | {d['action']} |\n")
        print(f"Found {len(duplicates)} duplicate candidate pairs.")
    else:
        report_lines.append("| *None* | *None* | *None* | *None* |\n")
        print("No duplicate candidates found.")
        
    try:
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing duplicate candidates report: {e}")

if __name__ == "__main__":
    main()
