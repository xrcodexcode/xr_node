# Atomic Node Schema

Every atomic note in `02_NODES/` must adhere to this structural schema. Notes that violate this schema will be flagged by automated health checks.

## Frontmatter Schema

All atomic notes must begin with a YAML frontmatter block containing exactly these keys:

```yaml
---
type: [concept | fact | glossary | example | quote]
tags: [list of tags matching tag-schema.md]
created: YYYY-MM-DD
source: "[[source-note-name]]"
aliases: [optional list of alternative names]
---
```

## Markdown Structure

Following the frontmatter, the file content must follow this exact heading structure:

```markdown
# [Note Title (Title Case, 5-7 words max)]

## Core idea
[A concise 1-3 sentence summary explaining the primary concept.]

## Why it matters / connection
[Detailed explanations, evidence, examples, code snippets, or quotes. This contains the meat of the knowledge.]

## Links
- [[parent-moc-name|MOC Title]]
- [[related-node-name|Related Note Title]]
- [[source-note-name|Source Description]]
```

## Validation Constraints
- **One Concept Only**: A note must not cover multiple unrelated ideas.
- **No Empty Sections**: All headers (`## Core idea`, `## Why it matters / connection`, `## Links`) must contain non-empty content.
- **Valid Links**: All wikilinks must point to valid files. No absolute paths or local system paths.
