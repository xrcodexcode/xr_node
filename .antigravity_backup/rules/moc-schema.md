# Map of Content (MOC) Schema

Maps of Content (MOCs) reside in the `03_MOC/` directory and act as index hubs for grouping related atomic nodes. MOC files are rebuildable indexes maintained by the automated engine.

## Frontmatter Schema

All MOC notes must begin with a YAML frontmatter block:

```yaml
---
tags: [list of tags including #moc]
status: #active
source: "[[HOME-BASE]]"
---
```

## Markdown Structure

Following the frontmatter, the file content must follow this exact heading structure:

```markdown
# [MOC Title]

## Overview
[A brief description of what this MOC covers, including any sub-sections or related sub-MOCs.]

## 📝 Concept & Study Notes
| Note Title | Link | Type | Tags | Backlinks |
| :--- | :--- | :--- | :--- | :--- |
| [Title] | [[02_NODES/note-slug\|Title]] | `[type]` | #tag1, #tag2 | **[count]** |
```

## Rules for MOCs
- MOCs must list notes in table format.
- Notes within an MOC table are sorted by:
  1. Backlink count (descending)
  2. Alphabetically by Title (ascending)
- MOC files are regenerated automatically via `generate_mocs.py`. Manual edits outside the `Overview` section are subject to overwrite.
