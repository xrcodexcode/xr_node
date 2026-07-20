---
module: metadata_node
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - node_schema_rules
loads:
  - atomic-note.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Node Schema

[frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md) is authoritative for shared metadata. This rule adds the atomic-node requirements.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Canonical Title
type: atomic-note
status: atomic
domain: ai
source_type: paper
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: AI MOC
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
- `NODES/` is flat: no subfolders.
- `title` matches the filename and is the only canonical title.
- Every active node has exactly one `owner_moc`, at least one justified link, and source provenance when source-derived.
- Additional MOC appearances are references, never co-ownership.
- `status: linked` is allowed only after the owner MOC and graph-link requirements are satisfied.
- Use aliases for retrieval; never make a second note just for a synonym.
- Do not change a canonical title or merge a node without the governance protected-action process.
