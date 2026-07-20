---
title: frontmatter-schema.md — Metadata Frontmatter Schema
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-19
approved_by: vault-owner
---

# Frontmatter Schema

Frontmatter is the machine-readable identity and control plane for every note. All metadata fields belong in the YAML block, not in tags.

## Canonical Schema

```yaml
---
# ── Core Identity ─────────────────────────────────────────────────────────────
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
concept_id: canonical-title-v1            # Immutable slug: kebab-case(title) + -v1
title: Canonical Title
type: atomic-note  # controlled type: raw-source | knowledge-document | evergreen-note | atomic-note | moc | governance-rule | log
status: verified   # 8-stage maturity model: captured | processed | learning | verified | evergreen | canonical | maintained | archived
domain: ai         # one canonical domain from controlled vocabulary
source_type: paper # controlled source type: book | article | paper | youtube | podcast | web-clip | transcript | course | interview | dataset | original-observation | misc

# ── Dates ─────────────────────────────────────────────────────────────────────
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
last_verified: YYYY-MM-DD   # date claims were last checked against source

# ── Quality Signals ───────────────────────────────────────────────────────────
confidence: 95              # integer 0–100; content confidence
version: 1                  # note content version; increment on material changes
verification_interval: 365  # days between verifications; null = no decay
stale_after: YYYY-MM-DD     # computed by decay_scheduler.py: last_verified + verification_interval
review_priority: normal     # low | normal | high | critical
confidence_decay: 0         # points lost per 365 days if overdue (reports only)

# ── Retrieval & Navigation ────────────────────────────────────────────────────
aliases: []                 # list of string aliases
tags: []                    # controlled discovery tags only (max 5)
owner_moc: AI MOC           # exactly one canonical MOC; null only for root MOC

# ── Provenance & Relations ────────────────────────────────────────────────────
sources: []                 # recoverable source paths, URLs, or source IDs
relations: []               # typed semantic relationships (max 15)

# ── Decision Context (optional; never overwritten by automation) ───────────────
decision_context:
  why_created: null         # split reasoning / trigger
  decision: null            # scope / framing decisions
  assumptions: []           # assumptions held at creation time
  tradeoffs: []             # what was omitted for atomicity
  importance: normal        # low | normal | high | critical
  context: null             # situational context
  future_work: null         # pending improvements
schema_version: 4
---
```

## Schema Requirements by Note Type

### 1. Atomic Note / Node (`type: atomic-note`)
- Must contain exactly one core claim or idea.
- Required fields: `id`, `concept_id`, `title`, `type` (atomic-note), `status`, `domain`, `created`, `updated`, `confidence`, `owner_moc`, `sources` (if derived).
- Max size: 10,000 characters.

### 2. Map of Content (`type: moc`)
- Designed for navigation, not explanations.
- Required fields: `id`, `title`, `type` (moc), `status` (curated/canonical), `domain`, `created`, `updated`.
- Soft limit: 50 links. Hard limit: 100 links.

### 3. Source Note (`type: raw-source`)
- Represents raw, unedited source files (captured YouTube transcripts, articles, books).
- Required fields: `id`, `title`, `type` (raw-source), `status` (captured/processed), `domain`, `created`, `updated`, `sources` (original path/URL).

## Immutability Rules
- **decision_context**: Never overwritten or deleted by automation.
- **concept_id**: Set at creation as `kebab-case(title) + "-v1"`. Unique across all notes in the vault. Never modified after creation.
