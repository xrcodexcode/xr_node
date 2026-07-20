import os
import re
import sys
import subprocess
from datetime import datetime

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

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    vault_root = os.path.abspath(os.path.join(script_dir, "..", ".."))
    
    automations_dir = os.path.join(vault_root, ".antigravity", "automations")
    nodes_dir = os.path.join(vault_root, "02_NODES")
    mocs_dir = os.path.join(vault_root, "03_MOC")
    source_dir = os.path.join(vault_root, "01_RAW", "source")
    
    health_log_path = os.path.join(vault_root, ".antigravity", "logs", "moc-health.md")
    broken_links_report_path = os.path.join(vault_root, ".antigravity", "reports", "broken-links.md")
    
    # 1. Run all sub-validation scripts
    scripts = [
        "validate_tags.py",
        "orphan_sweeper.py",
        "promotion_enforcer.py",
        "duplicate_detector.py",
        "raw_lifecycle.py"
    ]
    
    print("Running sub-validation scripts...")
    for script in scripts:
        script_path = os.path.join(automations_dir, script)
        if os.path.exists(script_path):
            print(f"Executing {script}...")
            try:
                subprocess.run([sys.executable, script_path], check=True)
            except Exception as e:
                print(f"Error running {script}: {e}")
                
    # 2. Check for broken links
    print("Checking for broken wikilinks...")
    all_files = set()
    
    # Map of lowercase basename without extension -> original file path
    valid_targets = {}
    
    # Root level markdown files
    for f in os.listdir(vault_root):
        if f.endswith('.md'):
            valid_targets[os.path.splitext(f)[0].lower()] = os.path.join(vault_root, f)
            valid_targets[f.lower()] = os.path.join(vault_root, f)
            
    # Nodes directory
    if os.path.exists(nodes_dir):
        for f in os.listdir(nodes_dir):
            if f.endswith('.md'):
                name_lower = os.path.splitext(f)[0].lower()
                valid_targets[name_lower] = os.path.join(nodes_dir, f)
                # Also allow direct folder paths
                valid_targets[f"02_nodes/{name_lower}"] = os.path.join(nodes_dir, f)
                valid_targets[f"02_nodes/{f.lower()}"] = os.path.join(nodes_dir, f)
                
    # MOC directory
    if os.path.exists(mocs_dir):
        for f in os.listdir(mocs_dir):
            if f.endswith('.md'):
                name_lower = os.path.splitext(f)[0].lower()
                valid_targets[name_lower] = os.path.join(mocs_dir, f)
                valid_targets[f"03_moc/{name_lower}"] = os.path.join(mocs_dir, f)
                valid_targets[f"03_moc/{f.lower()}"] = os.path.join(mocs_dir, f)
                
    # Source directory
    if os.path.exists(source_dir):
        for f in os.listdir(source_dir):
            if f.endswith('.md'):
                name_lower = os.path.splitext(f)[0].lower()
                valid_targets[name_lower] = os.path.join(source_dir, f)
                valid_targets[f"01_raw/source/{name_lower}"] = os.path.join(source_dir, f)
                valid_targets[f"01_raw/source/{f.lower()}"] = os.path.join(source_dir, f)
                
    broken_links = []
    
    # Scan all nodes & MOCs for broken links
    directories_to_scan = [nodes_dir, mocs_dir]
    for directory in directories_to_scan:
        if not os.path.exists(directory):
            continue
        for f in os.listdir(directory):
            if not f.endswith('.md'):
                continue
            file_path = os.path.join(directory, f)
            try:
                with open(file_path, 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
            except:
                continue
                
            # Find all [[target]] or [[target|display]]
            links = re.findall(r'\[\[([^\]|#]+)', content)
            for link in links:
                target_clean = link.strip().rstrip('\\').replace('\\', '/').lower()
                target_basename = os.path.basename(target_clean)
                
                # Check if target matches any valid basename or specific path
                if target_clean not in valid_targets and target_basename not in valid_targets:
                    # Ignore anchors or standard external links
                    if not target_clean.startswith('http'):
                        source_note = os.path.splitext(f)[0]
                        broken_links.append({
                            "source": source_note,
                            "target": link.strip(),
                            "file": f
                        })
                        
    # Write broken links report
    broken_lines = [
        "# Broken Wikilinks Report\n\n",
        "| Source Note | Broken Link Target | Suggested Action |\n",
        "| :--- | :--- | :--- |\n"
    ]
    if broken_links:
        for bl in broken_links:
            broken_lines.append(f"| [[{bl['source']}]] | `{bl['target']}` | Fix or remove link in `{bl['file']}` |\n")
        print(f"Found {len(broken_links)} broken wikilinks.")
    else:
        broken_lines.append("| *None* | *None* | *None* |\n")
        print("No broken wikilinks found.")
        
    try:
        with open(broken_links_report_path, 'w', encoding='utf-8') as rf:
            rf.writelines(broken_lines)
    except Exception as e:
        print(f"Error writing broken links report: {e}")
        
    # 3. Check for empty MOCs
    empty_mocs = []
    if os.path.exists(mocs_dir):
        for f in os.listdir(mocs_dir):
            if not f.endswith('.md') or f == "HOME-MOC.md" or f == "HOME-BASE.md":
                continue
            moc_path = os.path.join(mocs_dir, f)
            try:
                with open(moc_path, 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
                # Check if MOC table contains rows (non-header rows)
                lines = content.split('\n')
                has_notes = False
                for line in lines:
                    if line.strip().startswith('|') and '[[' in line and 'HOME-BASE' not in line:
                        has_notes = True
                        break
                if not has_notes:
                    empty_mocs.append(f)
            except:
                continue
                
    # 4. Calculate overall graph metrics
    node_files = [f for f in os.listdir(nodes_dir) if f.endswith('.md')] if os.path.exists(nodes_dir) else []
    moc_files = [f for f in os.listdir(mocs_dir) if f.endswith('.md')] if os.path.exists(mocs_dir) else []
    
    inbound_links = {os.path.splitext(f)[0].lower(): set() for f in node_files}
    for f in node_files:
        source_id = os.path.splitext(f)[0].lower()
        file_path = os.path.join(nodes_dir, f)
        try:
            with open(file_path, 'r', encoding='utf-8') as file_obj:
                content = file_obj.read()
            links = re.findall(r'\[\[([^\]|#]+)', content)
            for link in links:
                target_name = link.strip().rstrip('\\').replace('\\', '/')
                target_basename = os.path.basename(target_name)
                target_id = os.path.splitext(target_basename)[0].lower()
                if target_id in inbound_links and target_id != source_id:
                    inbound_links[target_id].add(source_id)
        except:
            continue
            
    total_backlinks = sum(len(v) for v in inbound_links.values())
    avg_backlinks = total_backlinks / len(node_files) if node_files else 0.0
    
    # Read other reports to compile counts
    orphan_count = 0
    orphan_path = os.path.join(vault_root, ".antigravity", "reports", "_orphans.md")
    if os.path.exists(orphan_path):
        try:
            with open(orphan_path, 'r', encoding='utf-8') as rf:
                orphan_count = sum(1 for line in rf if line.strip().startswith('|') and '0 |' in line)
        except:
            pass
            
    invalid_tag_count = 0
    invalid_tags_path = os.path.join(vault_root, ".antigravity", "reports", "invalid-tags.md")
    if os.path.exists(invalid_tags_path):
        try:
            with open(invalid_tags_path, 'r', encoding='utf-8') as rf:
                # Count table rows with valid data (excluding headers and None)
                invalid_tag_count = sum(1 for line in rf if line.strip().startswith('|') and '[[' in line and '*None*' not in line)
        except:
            pass
            
    duplicate_count = 0
    duplicate_path = os.path.join(vault_root, ".antigravity", "reports", "duplicate-candidates.md")
    if os.path.exists(duplicate_path):
        try:
            with open(duplicate_path, 'r', encoding='utf-8') as rf:
                duplicate_count = sum(1 for line in rf if line.strip().startswith('|') and '[[' in line and '*None*' not in line)
        except:
            pass
            
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # 5. Append health log entry
    health_lines = [
        f"\n## Health Check Report - {timestamp}\n",
        f"- **Node Count**: {len(node_files)}\n",
        f"- **MOC Count**: {len(moc_files)}\n",
        f"- **Orphan Count**: {orphan_count}\n",
        f"- **Broken Link Count**: {len(broken_links)}\n",
        f"- **Invalid Tag Count**: {invalid_tag_count}\n",
        f"- **Duplicate Candidates**: {duplicate_count}\n",
        f"- **Empty MOCs**: {len(empty_mocs)} ({', '.join(empty_mocs) if empty_mocs else 'None'})\n",
        f"- **Average Backlinks per Node**: {avg_backlinks:.2f}\n",
        "---\n"
    ]
    
    try:
        with open(health_log_path, 'a', encoding='utf-8') as hf:
            hf.writelines(health_lines)
        print("Vault Health Report compiled and saved successfully.")
    except Exception as e:
        print(f"Error appending to health log: {e}")

if __name__ == "__main__":
    main()
