# Source Schema

Source notes reside in the `01_RAW/source/` directory. They represent the primary resources from which atomic nodes are extracted.

## Frontmatter Schema

All source notes must begin with a YAML frontmatter block:

```yaml
---
type: source
tags: [list of tags including source type like #book, #youtube]
created: YYYY-MM-DD
author: "Author or Creator Name"
url: "Source URL (optional)"
---
```

## Markdown Structure

Following the frontmatter, the file content must follow this heading structure:

```markdown
# Source — [Source Title]

## Key Takeaways
- [Consolidated list of high-level lessons learned from this source.]

## Raw Notes
[Unprocessed text, full transcripts, chapter breakdowns, or page-by-page extractions.]
```

## Rules for Sources
- Raw source materials (EPUB, PDF, raw transcripts) must first be converted or stored as Markdown source notes in `01_RAW/source/`.
- Once ingested, the original raw files must be archived to `01_RAW/source/` or deleted, and the source note remains the permanent anchor.
- All atomic notes extracted from a source must point back to it in their `source:` frontmatter field and under their `## Links` section.
