# Merge Rules

Duplicate knowledge must never exist in the vault. Overlapping or duplicate concepts must be merged to maintain vault clarity.

## Merge Evaluation Criteria

Merge two notes if they meet any of the following criteria:
1. **Identical Concepts**: The notes discuss the exact same scientific, coding, or historical concept (e.g. `big-o-notation.md` and `big-o-complexity.md`).
2. **High Similarity**: More than 80% of their core idea or contents overlap.
3. **Subset Relationships**: One note is a small subset of another and lacks sufficient depth to stand on its own.

## Consolidation Workflow

When a merge candidate is identified:
1. **Combine Content**: Merge the `## Core idea` and `## Why it matters / connection` sections into a single, comprehensive note.
2. **Combine Links**: Aggregate all outbound links and backlink references from both source notes.
3. **Alias Integration**: Add the title of the deleted note to the `aliases` list in the frontmatter of the surviving note.
4. **Update MOCs**: Remove the deprecated note from all MOC indexes.
5. **Delete Old Note**: Safely delete the deprecated note file.
