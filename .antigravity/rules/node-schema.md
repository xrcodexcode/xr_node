---
title: Node Schema
type: governance-rule
status: active
version: 4.3.0
last_reviewed: 2026-07-19
approved_by: vault-owner
change_reason: "v4.3.0 — Simplified rules structure for beginner use."
---

# Node Schema

This rule defines the structure and metadata requirements for atomic nodes in `NODES/`.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Canonical Title
type: atomic-note
status: atomic
domain: general
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: General MOC
sources: []
related: []
---
```

## Required Body

- `## Claim` or `## Definition`
- `## Explanation`
- `## Related`
- `## Source`

## Laws for Nodes

- One file answers one question or states one reusable idea.
- `NODES/` is completely flat: no subfolders are allowed.
- `title` in frontmatter matches the filename.
- Every active node has exactly one `owner_moc`, at least one link, and source provenance when source-derived.
- Do not change a canonical title or merge a node without the governance protected-action process.
