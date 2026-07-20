---
module: metadata_moc
version: 3.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
  - graph_navigation
exports:
  - moc_schema_rules
loads:
  - moc.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# MOC Schema

MOCs are the navigation layer. They organize knowledge; they never become an explanation layer.

## Required Frontmatter

```yaml
---
id: UUID-v4
concept_id: ai-moc-v1           # immutable slug; see concept-identity.md
title: AI MOC
type: moc
status: curated
domain: ai
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null                 # null only for INDEX-level and root MOCs
moc_level: domain               # NEW: index | domain | topic | subtopic
parent_moc: null                # NEW: title of immediate parent MOC; null for index level
sources: []
related: []
schema_version: 4
---
```

### `moc_level` Values

| Value | Meaning | `owner_moc` | `parent_moc` |
|-------|---------|-------------|-------------|
| `index` | The single vault root INDEX.md | `null` | `null` |
| `domain` | Aggregates topic MOCs for one domain | `null` | INDEX title |
| `topic` | Primary working MOC; links to nodes | Domain MOC title | Domain MOC title |
| `subtopic` | Terminal MOC; created on topic overflow | Topic MOC title | Topic MOC title |

> [!NOTE]
> Existing MOCs without `moc_level` are treated as `topic` by all automation. No migration is required until a MOC is materially edited.

## Required Sections by Level

### INDEX
- `## Overview` — purpose of the vault's knowledge graph
- `## Domains` — one link per Domain MOC
- `## Gaps` (optional) — domains planned but not yet created

### Domain MOC
- `## Overview` — 1–3 sentences describing the domain
- `## Topics` — links to Topic MOCs only (never to individual nodes)
- `## Related Domains` (optional)

### Topic MOC (default level for all existing MOCs)
- `## Overview` — one or two navigation sentences only
- `## Core Nodes` — primary node links, highest-value first
- `## Related MOCs` — links to sibling or subtopic MOCs
- `## Recent Additions` (optional)
- `## Orphans / Gaps` (optional)

### Subtopic MOC
- `## Overview` — one sentence scoping this subtopic
- `## Nodes` — all node links in this subtopic
- `## Parent MOC` — link back to parent Topic MOC

## Rules

- A MOC owns the navigation placement of its member notes but does not own their content.
- Every active non-MOC knowledge note belongs to one owner MOC.
- A root MOC is self-owned navigation and uses `owner_moc: null`; all other MOCs have one owner MOC.
- Put the highest-value links first and split large MOCs into thematic sections.
- Use links, short labels, and gaps. Do not write long explanations or duplicate node content.
