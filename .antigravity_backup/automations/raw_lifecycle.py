import os
import re
import sys
import shutil

# Force UTF-8 encoding for stdout on Windows
if sys.platform.startswith('win'):
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

def slugify(title):
    cleaned = re.sub(r'[^\w\s-]', '', title).strip().lower()
    return re.sub(r'[-\s]+', '-', cleaned)

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
    
    capture_dir = os.path.join(vault_root, "01_RAW", "capture")
    source_dir = os.path.join(vault_root, "01_RAW", "source")
    nodes_dir = os.path.join(vault_root, "02_NODES")
    
    if not os.path.exists(capture_dir):
        print(f"Capture directory not found: {capture_dir}")
        sys.exit(0)
        
    os.makedirs(source_dir, exist_ok=True)
    
    # 1. Gather existing sources and notes info
    existing_source_files = set(os.listdir(source_dir))
    existing_source_slugs = {os.path.splitext(f)[0].lower() for f in existing_source_files}
    
    referenced_sources = set()
    if os.path.exists(nodes_dir):
        for f in os.listdir(nodes_dir):
            if not f.endswith('.md'):
                continue
            try:
                with open(os.path.join(nodes_dir, f), 'r', encoding='utf-8') as file_obj:
                    content = file_obj.read()
                fm, _ = parse_frontmatter(content)
                source_val = fm.get("source", "").strip()
                # Extract slug from [[wikilink]]
                source_match = re.search(r'\[\[([^\]|#]+)', source_val)
                if source_match:
                    src_base = os.path.splitext(os.path.basename(source_match.group(1).strip()))[0]
                    src_slug = slugify(src_base)
                    referenced_sources.add(src_slug)
            except:
                continue
                
    # 2. Check each file in capture/
    capture_files = os.listdir(capture_dir)
    archived_count = 0
    
    for f in capture_files:
        if f == ".gitignore" or f == "readme.md":
            continue
            
        capture_path = os.path.join(capture_dir, f)
        if os.path.isdir(capture_path):
            continue
            
        filename_no_ext, ext = os.path.splitext(f)
        slug = slugify(filename_no_ext)
        
        # Ingestion condition:
        # - The slugified file already exists in source/ (e.g. converted EPUB/transcript)
        # - Or, some notes in 02_NODES/ actively reference this source slug
        is_processed = False
        
        if slug in existing_source_slugs:
            is_processed = True
        elif slug in referenced_sources:
            is_processed = True
        elif filename_no_ext.lower() in existing_source_slugs:
            is_processed = True
            slug = filename_no_ext.lower()
            
        if is_processed:
            # Archive destination
            dest_name = f"{slug}{ext}"
            dest_path = os.path.join(source_dir, dest_name)
            
            try:
                if os.path.exists(dest_path):
                    # If target file already exists and is different, we can append timestamp or resolve
                    # For simplicity, if they are identical or we are archiving a processed raw epub, we overwrite or rename
                    if os.path.getsize(capture_path) == os.path.getsize(dest_path):
                        os.remove(capture_path)
                        print(f"Removed duplicate raw file from capture: {f}")
                    else:
                        backup_name = f"{slug}_raw_{int(os.path.getmtime(capture_path))}{ext}"
                        shutil.move(capture_path, os.path.join(source_dir, backup_name))
                        print(f"Archived renamed raw file: {f} -> {backup_name}")
                else:
                    shutil.move(capture_path, dest_path)
                    print(f"Archived capture file: {f} -> source/{dest_name}")
                archived_count += 1
            except Exception as e:
                print(f"Error archiving {f}: {e}")
        else:
            print(f"Capture file not yet fully processed: {f}")
            
    print(f"Archived {archived_count} files.")

if __name__ == "__main__":
    main()
