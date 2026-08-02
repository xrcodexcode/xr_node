import os
import re
import sys
import pathlib

sys.path.append(os.path.join(os.path.dirname(__file__), 'lib'))
from vault_paths import get_vault_root
from vault_utils import parse_frontmatter, parse_list_value

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def calculate_backlinks(nodes_dir, note_files):
    inbound_links = {os.path.splitext(f)[0].lower(): set() for f in note_files}
    for f in note_files:
        source_id = os.path.splitext(f)[0].lower()
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
        except Exception:
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
    vault_root = get_vault_root()
    nodes_dir = os.path.join(vault_root, "NODES")
    report_path = os.path.join(vault_root, "claude", "reports", "promotion-candidates.md")

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
        except Exception:
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

        current_status = fm.get("status", "unknown").lower()
        if current_status == "unknown":
            if "draft" in tags_list:
                current_status = "draft"
            elif "evergreen" in tags_list:
                current_status = "evergreen"
            elif "processed" in tags_list:
                current_status = "processed"

        if current_status == "draft" and backlink_count >= 1:
            candidates.append({
                "title": note_title,
                "slug": note_id,
                "current": "draft",
                "suggested": "processed",
                "backlinks": backlink_count,
                "reason": f"Note has {backlink_count} inbound backlink(s) and is ready for integration."
            })
        elif current_status in ("processed", "verified") and backlink_count >= 3:
            candidates.append({
                "title": note_title,
                "slug": note_id,
                "current": current_status,
                "suggested": "evergreen",
                "backlinks": backlink_count,
                "reason": f"Highly connected note with {backlink_count} backlinks. Eligible for evergreen status."
            })

    report_lines = [
        "# Promotion Candidates Report\n\n",
        f"Last scanned on {len(note_files)} notes.\n\n",
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
        os.makedirs(os.path.dirname(report_path), exist_ok=True)
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing promotion candidates report: {e}")

if __name__ == "__main__":
    main()
