import os
import re
import sys
import json
import jsonschema
import datetime
import uuid

# Local imports
from vault_paths import get_vault_root
from vault_utils import parse_frontmatter, load_allowed_tags, resolve_tag, clean_tag, parse_list_value

# Serialization helper


def serialize_for_schema(obj):
    """Convert dates and non-JSON-serializable objects to string representations."""
    if isinstance(obj, dict):
        return {k: serialize_for_schema(v) for k, v in obj.items()}
    elif isinstance(obj, (list, tuple, set)):
        return [serialize_for_schema(i) for i in obj]
    elif isinstance(obj, (datetime.date, datetime.datetime)):
        return obj.isoformat()
    elif isinstance(obj, uuid.UUID):
        return str(obj)
    return obj


def check_file(file_path, all_existing_slugs, allowed_tags, tag_aliases, vault_root, schema_cache, schema_dir, registry=None):
    filename = os.path.basename(file_path)
    errors = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return [f"Could not read file: {e}"]
        
    fm, body = parse_frontmatter(content)
    if not fm and content.startswith('---'):
        errors.append("Unparseable frontmatter YAML")
    
    # 1. JSON Schema Frontmatter Validation
    is_raw_or_capture = "01_raw" in file_path.replace('\\', '/').lower()
    if fm and schema_cache and not is_raw_or_capture:
        note_type = fm.get("type")
        schema_file = "frontmatter.schema.json"
        if note_type == "atomic-note":
            schema_file = "atomic-note.schema.json"
        elif note_type == "moc":
            schema_file = "moc.schema.json"
        elif note_type == "raw-source":
            schema_file = "source.schema.json"
        elif note_type == "log":
            schema_file = "daily-note.schema.json"
        
        if schema_file in schema_cache:
            schema = schema_cache[schema_file]
            serialized_fm = serialize_for_schema(fm)
            try:
                if registry is None:
                    from referencing import Registry, Resource
                    from referencing.jsonschema import DRAFT7
                    registry = Registry()
                    schema_dir_uri = schema_dir.replace('\\', '/')
                    for name, schema_content in schema_cache.items():
                        uri = f"file:///{schema_dir_uri}/{name}"
                        res = Resource.from_contents(schema_content, default_specification=DRAFT7)
                        registry = registry.with_resource(uri=uri, resource=res)
                        registry = registry.with_resource(uri=name, resource=res)
                jsonschema.validate(instance=serialized_fm, schema=schema, registry=registry)
            except jsonschema.ValidationError as err:
                path_str = ".".join(str(p) for p in err.path)
                msg = f"Frontmatter schema violation in {schema_file}: {err.message}"
                if path_str:
                    msg += f" (at field '{path_str}')"
                errors.append(msg)

    # 2. Tag validation against tag-schema.md
    if fm:
        raw_tags = fm.get("tags", [])
        tags_list = parse_list_value(raw_tags)
        schema_version = fm.get("schema_version", 3)
            
        for t in tags_list:
            cleaned = clean_tag(t)
            resolved = resolve_tag(cleaned, tag_aliases)
            if resolved not in allowed_tags:
                if schema_version >= 4:
                    errors.append(f"Invalid tag: `{t}`")
                else:
                    # Legacy tag; allowed to be preserved per tag-schema.md
                    print(f"  [Warning] Legacy tag preserved in {filename}: `{t}`", file=sys.stderr)
            
    # Check for spelling and factual mistakes
    # 1. Warren Buffet vs Warren Buffett
    buffet_matches = re.finditer(r"\bWarren Buffet\b|\bBuffet's\b|\bBuffet (?!restaurant|table|lunch|dinner|breakfast|food|salad|style|meals)\b", content, re.IGNORECASE)
    for m in buffet_matches:
        match_str = m.group(0)
        if "buffett" not in match_str.lower():
            print(f"  [Warning] Possible spelling error/wrong fact in {filename}: '{match_str}' (should be 'Buffett')", file=sys.stderr)
            
    # 2. "obsidean" vs "obsidian" (except in path names)
    lines = content.splitlines()
    for idx, line in enumerate(lines, 1):
        if "obsidean" in line.lower():
            if not re.search(r"[a-zA-Z]:\\[^\\]*obsidean", line, re.IGNORECASE) and not "obsidean/" in line.lower() and not "obsidean\\" in line.lower():
                print(f"  [Warning] Spelling error in {filename} (line {idx}): 'obsidean' (should be 'obsidian')", file=sys.stderr)
        
    # 3. Check for broken internal wiki links [[target]] or [[target|label]]
    wiki_links = re.findall(r"\[\[([^\]|#\n]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]", content)
    for target in wiki_links:
        target_slug = target.strip().replace('\\', '')
        if not target_slug:
            continue
        
        # Check relative path
        full_target_path_md = os.path.join(vault_root, target_slug + ".md")
        full_target_path_raw = os.path.join(vault_root, target_slug)
        if os.path.exists(full_target_path_md) or os.path.exists(full_target_path_raw):
            continue
            
        # Check normalized base slug
        base_slug = os.path.basename(target_slug)
        norm_target = base_slug.lower().replace(' ', '-').replace('_', '-')
        if norm_target in all_existing_slugs:
            continue
            
        # Ignore attachment file extensions and directory paths
        if not target_slug.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.pdf')) and not target_slug.endswith(('/', '\\')):
            print(f"  [Warning] Broken link in {filename}: [[{target}]] (target does not exist)", file=sys.stderr)
            
    return errors


def main():
    # Force UTF-8 encoding for stdout on Windows when run directly
    if sys.platform.startswith('win'):
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
        
    vault_root = get_vault_root()
    
    # Load all schema files
    schema_dir = os.path.join(vault_root, ".antigravity", "schemas")
    schema_cache = {}
    from referencing import Registry, Resource
    from referencing.jsonschema import DRAFT7
    registry = Registry()
    if os.path.exists(schema_dir):
        for f in os.listdir(schema_dir):
            if f.endswith(".schema.json"):
                try:
                    with open(os.path.join(schema_dir, f), "r", encoding="utf-8") as sf:
                        schema_content = json.load(sf)
                        schema_cache[f] = schema_content
                        schema_dir_uri = schema_dir.replace('\\', '/')
                        uri = f"file:///{schema_dir_uri}/{f}"
                        res = Resource.from_contents(schema_content, default_specification=DRAFT7)
                        registry = registry.with_resource(uri=uri, resource=res)
                        registry = registry.with_resource(uri=f, resource=res)
                except Exception as e:
                    print(f"Warning: failed to load schema {f}: {e}")

    # Collect all markdown files and their slugs
    all_files = []
    all_existing_slugs = set()
    
    dirs_to_scan = ["NODES", "03_MOC", "01_RAW/SOURCE", "01_RAW/CAPTURE", "."]
    for d in dirs_to_scan:
        dir_path = os.path.join(vault_root, d)
        if not os.path.exists(dir_path):
            continue
        for f in os.listdir(dir_path):
            if f.endswith('.md'):
                full_path = os.path.join(dir_path, f)
                all_files.append(full_path)
                slug = os.path.splitext(f)[0]
                all_existing_slugs.add(slug.lower())
                norm_slug = slug.lower().replace(' ', '-').replace('_', '-')
                all_existing_slugs.add(norm_slug)
                
    allowed_tags, tag_aliases = load_allowed_tags()
    
    print(f"Scanning {len(all_files)} markdown files...")
    all_errors = {}
    for fp in all_files:
        rel_path = os.path.relpath(fp, vault_root)
        errs = check_file(fp, all_existing_slugs, allowed_tags, tag_aliases, vault_root, schema_cache, schema_dir, registry=registry)
        if errs:
            all_errors[rel_path] = errs
            
    if all_errors:
        print(f"\nFound issues in {len(all_errors)} files:")
        for rel_path, errs in all_errors.items():
            print(f"\n[{rel_path}]")
            for e in errs:
                print(f"  - {e}")
        sys.exit(1)
    else:
        print("\nNo issues found!")
        sys.exit(0)


if __name__ == "__main__":
    main()
