---
title: Frontmatter Schema
type: governance-rule
status: active
version: 4.3.0
last_reviewed: 2026-07-19
approved_by: vault-owner
change_reason: "v4.3.0 — Simplified rules structure for beginner use."
---

# Frontmatter Schema

Frontmatter is the machine-readable identity and control plane for every note.

## Canonical Schema (schema_version 4)

Every newly created or materially revised knowledge note must use this schema:

```yaml
---
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
title: Canonical Title
type: atomic-note  # atomic-note | evergreen-note | raw-source | moc | governance-rule | log
status: verified   # captured | processed | learning | verified | evergreen | canonical | maintained | archived
domain: general    # canonical domain from tag-schema.md
source_type: null  # book | article | paper | youtube | podcast | web-clip | transcript | course | null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
confidence: 95              # integer 0–100
version: 1                  # note content version
aliases: []
tags: []                    # controlled discovery facets only (from tag-schema.md)
owner_moc: General MOC      # exactly one canonical MOC title string
sources: []                 # source paths, URLs, or source IDs
related: []                 # related note titles or IDs
schema_version: 4           # current version
---
```

## Field Rules

- **id**: UUID v4. Never reuse or change. Immutable.
- **title**: Title Case name; must match the filename for a node.
- **type**: One approved type.
- **status**: Note lifecycle maturity stage.
- **domain**: One canonical domain.
- **source_type**: Source classification or `null` for original thought.
- **tags**: Controlled discovery facets from `tag-schema.md`.
