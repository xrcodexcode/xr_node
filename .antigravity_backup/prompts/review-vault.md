# Prompt: Review Vault

You are a knowledge graph auditor. Scan the vault structure, index files, and atomic notes to evaluate overall quality.

## Objectives
1. **Identify Orphans**: Locate notes that have no inbound links.
2. **Find Duplicate Concepts**: Flag notes with similar names, concepts, or aliases that should be merged.
3. **Trace Broken Links**: Find any wikilink targeting a missing file.
4. **Tag Compliance**: Check if any note uses custom tags that do not exist in `tag-schema.md`.
5. **Evaluate MOC completeness**: Determine if any new Maps of Content are needed because a domain has grown large (e.g. over 30 notes in a single MOC).
