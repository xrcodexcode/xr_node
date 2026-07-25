import os
import re

VAULT_ROOT = r"c:\Users\offic\OneDrive\Desktop\obsidean\nexusdb"

TARGET_FILES = [
    r"HOME-BASE.md",
    r"03_MOC\steve-jobs-moc.md",
    r"03_MOC\people-moc.md",
    r"03_MOC\yt-moc.md",
    r"03_MOC\books-moc.md",
    r"02_NEW-KNOWLEDGE\Steve Jobs in Exile - Study Note.md",
    r"NODES\Capital Abundance Trap.md",
    r"NODES\Channel Stuffing Vulnerability.md",
    r"NODES\Inverted Power Hierarchy.md",
    r"NODES\Perfectionism Execution Trap.md",
    r"NODES\Working Code Paradigm.md",
    r"01_RAW\SOURCE\Steve Jobs in Exile.md"
]

def scan_all_md_files(root):
    md_files = {}
    name_to_relpath = {}
    for r, dirs, files in os.walk(root):
        if '.git' in r or '.venv' in r or '.pytest_cache' in r:
            continue
        for f in files:
            if f.endswith('.md'):
                full_path = os.path.join(r, f)
                rel_path = os.path.relpath(full_path, root)
                norm_rel = rel_path.replace('\\', '/')
                md_files[norm_rel] = full_path
                base_name = f[:-3] # without .md
                if base_name not in name_to_relpath:
                    name_to_relpath[base_name] = []
                name_to_relpath[base_name].append(norm_rel)
    return md_files, name_to_relpath

def extract_wikilinks(file_path):
    if not os.path.exists(file_path):
        return []
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # In Obsidian markdown tables, \| is used for piping aliases inside table cells
    # We replace \| with | first to accurately simulate Obsidian's link parser
    content_clean = content.replace(r'\|', '|')
    
    matches = re.findall(r'\[\[(.*?)\]\]', content_clean)
    links = []
    for m in matches:
        # Strip alias
        clean_link = m.split('|')[0].strip()
        # Strip header anchor
        clean_link = clean_link.split('#')[0].strip()
        if clean_link:
            links.append(clean_link)
    return links

def resolve_wikilink(link_str, source_relpath, md_files, name_to_relpath):
    norm_link = link_str.replace('\\', '/').strip()
    if norm_link.endswith('.md'):
        norm_link_no_ext = norm_link[:-3]
    else:
        norm_link_no_ext = norm_link
        norm_link = norm_link + '.md'
    
    # 1. Exact match relative to vault root
    if norm_link in md_files:
        return md_files[norm_link]
    
    # 2. Exact match with .md
    if norm_link_no_ext in md_files:
        return md_files[norm_link_no_ext]
        
    # 3. Check by basename
    base_name = os.path.basename(norm_link_no_ext)
    if base_name in name_to_relpath:
        matches = name_to_relpath[base_name]
        return md_files[matches[0]]
        
    return None

def main():
    md_files, name_to_relpath = scan_all_md_files(VAULT_ROOT)
    print(f"Total markdown files indexed: {len(md_files)}")
    
    adj = {}
    in_degree = {f: 0 for f in md_files}
    out_degree = {f: 0 for f in md_files}
    broken_links = []
    
    for rel_path, full_path in md_files.items():
        links = extract_wikilinks(full_path)
        resolved_list = []
        for l in links:
            res_full = resolve_wikilink(l, rel_path, md_files, name_to_relpath)
            if res_full:
                res_rel = os.path.relpath(res_full, VAULT_ROOT).replace('\\', '/')
                resolved_list.append(res_rel)
                in_degree[res_rel] = in_degree.get(res_rel, 0) + 1
                out_degree[rel_path] = out_degree.get(rel_path, 0) + 1
            else:
                broken_links.append((rel_path, l))
        adj[rel_path] = resolved_list

    m5_rels = [os.path.relpath(tf, VAULT_ROOT).replace('\\', '/') for tf in TARGET_FILES]
    
    print("\n--- M5 SPECIFIC TARGET FILES ANALYSIS ---")
    for rel in m5_rels:
        exists = rel in md_files
        print(f"File: {rel} | Exists: {exists}")
        if exists:
            links = extract_wikilinks(md_files[rel])
            print(f"  Outbound links ({len(links)}):")
            for l in links:
                res = resolve_wikilink(l, rel, md_files, name_to_relpath)
                res_rel = os.path.relpath(res, VAULT_ROOT).replace('\\', '/') if res else "BROKEN"
                print(f"    - [[{l}]] -> {res_rel}")

    print("\n--- BROKEN LINKS AUDIT (M5 TARGET FILES) ---")
    target_broken = [b for b in broken_links if b[0] in m5_rels]
    print(f"Broken links in M5 target files: {len(target_broken)}")
    for src, l in target_broken:
        print(f"  [BROKEN] In {src}: [[{l}]]")

    print("\n--- GRAPH REACHABILITY FROM HOME-BASE.md ---")
    start = "HOME-BASE.md"
    visited = set()
    queue = [start]
    parent_map = {start: None}
    
    if start in md_files:
        visited.add(start)
        while queue:
            curr = queue.pop(0)
            for nxt in adj.get(curr, []):
                if nxt not in visited:
                    visited.add(nxt)
                    parent_map[nxt] = curr
                    queue.append(nxt)
                    
    print(f"Total nodes reachable from {start}: {len(visited)} / {len(md_files)}")
    
    print("\n--- REACHABILITY TO M5 TARGET FILES ---")
    all_m5_reachable = True
    for target_rel in m5_rels:
        is_reachable = target_rel in visited
        if not is_reachable:
            all_m5_reachable = False
        print(f"Reachable from {start} to {target_rel}: {is_reachable}")
        if is_reachable:
            path = []
            curr = target_rel
            while curr is not None:
                path.append(curr)
                curr = parent_map[curr]
            path.reverse()
            print("  Path: " + " -> ".join(path))

    print("\n--- M5 TARGET ORPHAN NOTES AUDIT ---")
    m5_target_notes = [
        "02_NEW-KNOWLEDGE/Steve Jobs in Exile - Study Note.md",
        "NODES/Capital Abundance Trap.md",
        "NODES/Channel Stuffing Vulnerability.md",
        "NODES/Inverted Power Hierarchy.md",
        "NODES/Perfectionism Execution Trap.md",
        "NODES/Working Code Paradigm.md"
    ]
    m5_orphans = [n for n in m5_target_notes if in_degree.get(n, 0) == 0]
    print(f"M5 Target Note Orphans (in-degree == 0): {len(m5_orphans)}")
    for note in m5_target_notes:
        print(f"  Note: {note} | In-degree: {in_degree.get(note, 0)} | Out-degree: {out_degree.get(note, 0)}")

if __name__ == "__main__":
    main()
