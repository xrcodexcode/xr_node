---
module: metadata_schema
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_glossary
exports:
  - frontmatter_schema
loads:
  - frontmatter.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 750
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Frontmatter Schema

## Purpose

Frontmatter is the machine-readable identity and control plane for every note. Tags are only discovery facets; type, state, source, ownership, and lifecycle belong in structured metadata.

## Canonical Schema (schema_version 4)

Every newly created or materially revised knowledge note must use this schema. Do not invent fields outside an approved schema. Schema_version 3 notes remain valid and need not be migrated unless materially edited.

```yaml
---
# ── Core Identity ─────────────────────────────────────────────────────────────
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
concept_id: canonical-title-v1            # NEW: immutable slug; see concept-identity.md
title: Canonical Title
type: atomic-note  # controlled type
status: verified   # 8-stage maturity model; see maturity-model.md
domain: ai         # one canonical domain
source_type: paper # controlled source type; null for original thought

# ── Dates ─────────────────────────────────────────────────────────────────────
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
last_verified: YYYY-MM-DD   # NEW: date claims were last checked against source

# ── Quality Signals ───────────────────────────────────────────────────────────
confidence: 95              # integer 0–100; action confidence
version: 1                  # note content version; increment on material changes
verification_interval: 365  # NEW: days between verifications; null = no decay
stale_after: YYYY-MM-DD     # NEW: computed by decay_scheduler.py; do not edit manually
review_priority: normal     # NEW: low | normal | high | critical
confidence_decay: 0         # NEW: points lost per 365 days if overdue; reports only

# ── Retrieval & Navigation ────────────────────────────────────────────────────
aliases: []
tags: []                    # controlled discovery facets only (max 5)
owner_moc: AI MOC           # exactly one canonical MOC; null only for root MOC

# ── Provenance & Relations ────────────────────────────────────────────────────
sources: []                 # recoverable source paths, URLs, or source IDs
related: []                 # LEGACY: kept for backward compat; prefer relations block
relations: []               # NEW: typed semantic relationships; see relations-schema.md

# ── Decision Context (optional; never overwritten by automation) ───────────────
decision_context:           # NEW: see decision-context.md; leave absent if not needed
  why_created: null
  decision: null
  assumptions: []
  tradeoffs: []
  importance: normal
  context: null
  future_work: null

# ── Schema ────────────────────────────────────────────────────────────────────
schema_version: 4           # current: 4; legacy: 3 still accepted
---
```

## Field Rules

### Core Identity Fields

| Field | Rule |
| --- | --- |
| `id` | UUID v4. Never reuse or change it. Immutable. |
| `concept_id` | Immutable slug. Set at creation per `concept-identity.md`. Never change after creation. |
| `title` | Canonical Title Case name; must match the filename for a node. |
| `type` | One approved type: `raw-source`, `knowledge-document`, `evergreen-note`, `atomic-note`, `moc`, `governance-rule`, or `log`. |
| `status` | One of 8 maturity stages per `maturity-model.md`: `captured`, `processed`, `learning`, `verified`, `evergreen`, `canonical`, `maintained`, or `archived`. Also accepts legacy stages: `atomic`, `linked`, `curated`. |
| `domain` | One canonical domain from `tag-schema.md`'s domain vocabulary. Use `general` only when no established domain fits. |
| `source_type` | One supported source type or `null`: `book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`. |

### Date Fields

| Field | Rule |
| --- | --- |
| `created`, `updated`, `review` | ISO date (`YYYY-MM-DD`). `review` is the next required review date. |
| `last_verified` | ISO date. Set when claims are verified against source. Set by human action only. |
| `stale_after` | ISO date. Computed by `decay_scheduler.py` as `last_verified + verification_interval`. Do not edit manually. |

### Quality Signal Fields

| Field | Rule |
| --- | --- |
| `confidence` | Integer `0–100` for note content confidence. Do not auto-set below 95 without flagging. |
| `version` | Positive integer; increment on material content changes. |
| `verification_interval` | Positive integer (days) or `null`. `null` = no scheduled decay. See `knowledge-decay.md`. |
| `review_priority` | `low \| normal \| high \| critical`. Updated by `decay_scheduler.py`; manual override respected for one cycle. |
| `confidence_decay` | Integer `0–50`. Points lost per 365 overdue days. Applied in reports only; never modifies the `confidence` field. |

### Retrieval & Navigation Fields

| Field | Rule |
| --- | --- |
| `aliases` | Alternative retrieval names; never alternate canonical owners. |
| `tags` | Only approved discovery tags from `tag-schema.md` (maximum 5). |
| `owner_moc` | Exactly one canonical MOC title for active non-MOC knowledge notes. `null` only for root MOC. |

### Provenance & Relation Fields

| Field | Rule |
| --- | --- |
| `sources` | Zero or more recoverable provenance references. Factual, source-derived notes require at least one. |
| `related` | Legacy relation targets. Treated as `related_to` type with no confidence. Migrate to `relations` when editing. |
| `relations` | Typed semantic relationships. See `relations-schema.md`. Maximum 15 entries. |
| `decision_context` | Optional human-authored reasoning block. Never overwritten by automation. See `decision-context.md`. |
| `schema_version` | Note structure version. Current: **4**. Legacy **3** is still accepted by all validators. |

## Compatibility and Migration

Existing notes may use legacy fields or be missing key metadata. When an existing note is materially edited, migrate it to schema_version 4.

Schema version compatibility:
- **schema_version 3**: All validators continue to accept it. No action required.
- **schema_version 4**: Required for new notes. All new optional fields default to `null` or `[]` when absent.

Migration scripts:
- `migrate_metadata.py`: Upgrades frontmatter to schema_version 4 and populates defaults safely.
- `concept_id_migrator.py`: Populates `concept_id` for all existing notes.
- `migrate_metadata.py --status-upgrade`: Maps legacy status values to the 8-stage maturity model.

## Validation

Reject or flag a new active note when it lacks `id`, `title`, `type`, `status`, `created`, `updated`, `confidence`, `owner_moc` (unless root MOC), `schema_version`, or required provenance. Missing optional fields must still be written as an empty list or `null` where appropriate.

For notes with `relations` entries, validate each entry against `relations.schema.json`. Invalid entries are flagged but do not block the note.

For notes with `decision_context` present, validate it against `decision-context.schema.json`. Invalid blocks are flagged but never deleted by automation.
