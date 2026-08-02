import os
import re
import sys
import pathlib

sys.path.append(os.path.join(os.path.dirname(__file__), 'lib'))
from vault_paths import get_vault_root

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')


def main():
    vault_root = get_vault_root()
    
    nodes_dir = os.path.join(vault_root, "NODES")
    mocs_dir = os.path.join(vault_root, "03_MOC")
    source_dir = os.path.join(vault_root, "01_RAW", "source")
    reports_dir = os.path.join(vault_root, ".codex", "reports")
    report_path = os.path.join(reports_dir, "broken-links.md")

    os.makedirs(reports_dir, exist_ok=True)

    valid_targets = set()
    
    # Register root markdown files
    for root, dirs, files in os.walk(vault_root):
        if any(d in root for d in ['.git', '.venv', '.obsidian', '.codex', '.codex', 'codex']):
            continue
        for f in files:
            if f.endswith('.md'):
                stem = os.path.splitext(f)[0].lower()
                valid_targets.add(stem)
                valid_targets.add(f.lower())

    broken_links = []
    scan_dirs = [nodes_dir, mocs_dir]

    for directory in scan_dirs:
        if not os.path.exists(directory):
            continue
        for f in os.listdir(directory):
            if not f.endswith('.md'):
                continue
            file_path = os.path.join(directory, f)
            try:
                with open(file_path, 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
            except Exception:
                continue

            links = re.findall(r'\[\[([^\]|#]+)', content)
            for link in links:
                target_clean = link.strip().rstrip('\\').replace('\\', '/').lower()
                target_basename = os.path.splitext(os.path.basename(target_clean))[0]

                if target_clean not in valid_targets and target_basename not in valid_targets:
                    if not target_clean.startswith('http'):
                        source_note = os.path.splitext(f)[0]
                        broken_links.append({
                            "source": source_note,
                            "target": link.strip(),
                            "file": f
                        })
                        print(f"Broken link: [[{link.strip()}]] in {f}")

    report_lines = [
        "# Broken Wikilinks Report\n\n",
        "| Source Note | Broken Link Target | Suggested Action |\n",
        "| :--- | :--- | :--- |\n"
    ]
    if broken_links:
        for bl in broken_links:
            report_lines.append(f"| [[{bl['source']}]] | `{bl['target']}` | Fix or remove link in `{bl['file']}` |\n")
        print(f"Found {len(broken_links)} broken wikilinks.")
    else:
        report_lines.append("| *None* | *None* | *None* |\n")
        print("No broken wikilinks found.")

    try:
        with open(report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(report_lines)
    except Exception as e:
        print(f"Error writing broken links report: {e}")

if __name__ == "__main__":
    main()
