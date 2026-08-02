---
title: Frontmatter Schema
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Relocated frontmatter schema."
---

# Frontmatter Schema

Frontmatter is the machine-readable identity and control plane for every note in NexusDB.

## Canonical Schema (schema_version 4)

Every newly created or materially revised knowledge note must use this schema:

```yaml
---
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
title: Canonical Title
type: atomic-note  # atomic-note | evergreen-note | raw-source | moc | governance-rule | log | project | journal
status: verified   # captured | processed | learning | verified | evergreen | canonical | maintained | archived | atomic
domain: general    # canonical domain from tagging rules (tagging.md)
source_type: null  # book | article | paper | youtube | podcast | web-clip | transcript | course | null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
confidence: 95              # integer 0–100
version: 1                  # note content version
aliases: []
tags: []                    # controlled discovery facets only (from tagging.md)
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
- **tags**: Controlled discovery facets from `tagging.md`.
- **owner_moc**: Title of the primary MOC organizing this note.
