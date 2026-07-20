# Folder: .antigravity/hooks

## File: hooks\nightly-maintenance.md

```markdown
---
title: Nightly Maintenance Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Nightly Maintenance Hook

This hook represents the automated checks that run every night as part of the daily vault hygiene cycle.

## Required Operations

1. **Metadata Linting**: Run `check_vault.py` to check all markdown frontmatter blocks against JSON schemas.
2. **Broken Link Sweep**: Detect any internal wikilinks `[[target]]` pointing to files that do not exist.
3. **Audit Log Validation**: Verify that the `.antigravity/logs/audit-log.md` is well-formed and matches the audit schema structure.
4. **Orphan Sweeper**: Scan `NODES/` for any newly created active nodes that lack a backlink or owner MOC, and dump them to a temporary report.
```

---

## File: hooks\post-ingest.md

```markdown
---
title: Post-Ingestion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Post-Ingestion Hook

These rules must be run immediately after a raw source is successfully parsed and its atomic notes have been created in `NODES/`.

## Required Operations

1. **Owner-MOC Coverage**: Verify that every newly created atomic note is assigned to exactly one authoritative owner MOC in its frontmatter.
2. **Link Justification Check**: Ensure the new notes have at least one incoming or outgoing wikilink. If not, tag as a temporary orphan.
3. **Source Archival**: Move the original source file from `01_RAW/CAPTURE/` (or `01_RAW/PROCESS/`) to `01_RAW/SOURCE/`. Never delete raw sources.
4. **Audit Log Registration**: Append a structured log entry detailing the ingestion action, actor, target files, and confidence to `.antigravity/logs/audit-log.md`.
5. **Health Report Update**: Regenerate the vault health metrics (orphan rate, graph density, etc.) to incorporate the new nodes.
```

---

## File: hooks\pre-ingest.md

```markdown
---
title: Pre-Ingestion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Pre-Ingestion Hook

These rules must be run prior to ingesting any new knowledge source into the vault.

## Required Operations

1. **Frontmatter Validation**: Verify that the raw source contains a valid frontmatter block matching `.antigravity/schemas/source.schema.json`.
2. **Tag Verification**: Check all discovery tags against the controlled vocabulary in `.antigravity/schemas/tag.schema.json`. Resolve any tag aliases.
3. **Duplicate Precheck**: Run duplicate checks against existing notes in the vault using Jaccard word similarity.
4. **Action Confidence Verification**: Compute the action confidence score. If confidence is `< 95%`, flag for human review; if `< 60%`, halt the ingestion pipeline.
5. **Source Provenance Integrity**: Ensure that the incoming file has a defined `origin_path` and a valid source ID before placing it in the `01_RAW/CAPTURE/` folder.
```

---

## File: hooks\pre-promotion.md

```markdown
---
title: Pre-Promotion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Pre-Promotion Hook

These rules must be run before promoting any atomic note to a higher synthesis layer (e.g. `evergreen` or moving/referencing in `NOTES/`).

## Required Operations

1. **Promotion Rubric Calculation**: Compute the quantitative score (out of 10) for the note based on the 10-point rubric in `.antigravity/rules/quality/promotion-rules.md`:
   - Source-backed and verified (2 pts)
   - Atomic (2 pts)
   - Reusable beyond source (2 pts)
   - Linked to owner MOC and >=1 related note (2 pts)
   - Stable canonical title (1 pt)
   - Not a duplicate (1 pt)
2. **Decision Matrix Evaluation**:
   - Score **8–10**, Confidence **>=95**: Promote automatically and append an entry in the audit log.
   - Score **8–10**, Confidence **80–94**: Do not promote; output a suggestion for the user.
   - Score **6–7**: Require human review.
   - Score **< 6**: Retain in current state.
3. **Graph Integrity Checks**: Check that promotion does not result in broken wiki links.
```

---

## File: hooks\weekly-audit.md

```markdown
---
title: Weekly Audit Hook
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v2 — added decay_scheduler, health_dashboard, and graph_analytics operations
deprecation_date: null
---

# Weekly Audit Hook

This hook represents the deeper structural audits executed on a weekly basis to maintain long-term vault scalability.

## Required Operations

1. **Duplicate Detection Scan**: Run `duplicate_detector.py` to compare Jaccard overlap on titles, slugs, and tags. Dump findings to `.antigravity/reports/duplicate-candidates.md`.
2. **MOC Alignment Audit**: Confirm that every active note has an `owner_moc` and that the note is linked inside that MOC file. Report any mismatched associations.
3. **Tag Entropy Check**: Identify tags that are being used outside the allowed tag schema or have high redundancy, and verify tag alias conversions.
4. **Graph Health Metric Report**: Run `health_dashboard.py` to produce a 15-metric health dashboard (orphan %, dead links, avg backlinks, cluster density, schema compliance %, etc.) and save to `.antigravity/reports/health-dashboard.md`.
5. **Knowledge Decay Scheduling**: Run `decay_scheduler.py` (read-only mode) to identify notes with stale or overdue verification schedules. Save to `.antigravity/reports/decay-report.md`.
6. **Graph Analytics Report**: Run `graph_analytics.py` to identify authority nodes, hub nodes, bridge nodes, disconnected clusters, knowledge gaps, and emerging topics. Save to `.antigravity/reports/graph-analytics.md`.
7. **MOC Size Sweep**: Check MOC link counts against limits in `scalability.md` and `navigation-hierarchy.md`. Append warnings to `moc-health.md` if any MOC exceeds its soft limit.
```

---

# Folder: .antigravity/templates

## File: templates\atomic-note-v4.md

```markdown
---
id: 00000000-0000-4000-8000-000000000000
concept_id: note-title-v1
title: Note Title
type: atomic-note
status: verified
domain: general
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
last_verified: YYYY-MM-DD
confidence: 95
version: 1
verification_interval: 365
stale_after: null
review_priority: normal
confidence_decay: 0
aliases: []
tags: []
owner_moc: General MOC
sources: []
related: []
relations:
  - target: "Related Note Title"
    type: "related_to"
    confidence: 80
    reason: "Brief reason"
    creation_method: "human"
    human_verified: true
decision_context:
  why_created: null
  decision: null
  assumptions: []
  tradeoffs: []
  importance: normal
  context: null
  future_work: null
schema_version: 4
---

# Note Title

One-sentence claim or definition.

## Explanation

Explain the idea in plain language. This note should be independently understandable.

## Why It Matters

Why is this concept important or useful?

## Relations

- [[Related Note Title]] — `related_to`

## Source

- [[01_RAW/SOURCE/example-source]]
```

---

## File: templates\atomic-note.md

```markdown
---
id: 123e4567-e89b-42d3-a456-426614174000
title: Note Title
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

# Note Title

One-sentence claim.

## Why it matters

Explain the idea in plain language.

## Related

- [[NODES/related-note]]

Relationship: `related_to`

## Source

- [[01_RAW/SOURCE/example-source]]
```

---

## File: templates\book-note.md

```markdown
---
id: 123e4567-e89b-42d3-a456-426614174000
title: Book Notes — {{title}}
type: knowledge-document
status: processed
domain: general
source_type: book
created: {{date}}
updated: {{date}}
review: {{date}}
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: General MOC
sources: []
related: []
author: ""
rating: null
---

# Book Notes — {{title}}

## Summary
- 

## Chapters / Key Concepts
- 
```

---

## File: templates\daily-log.md

```markdown
---
id: 123e4567-e89b-42d3-a456-426614174000
title: Daily Log — {{date}}
type: log
status: maintained
domain: general
source_type: null
created: {{date}}
updated: {{date}}
review: {{date}}
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
---

# Daily Log — {{date}}

## Focus today
- 

## Log
- 
```

---

## File: templates\domain-moc.md

```markdown
---
id: 00000000-0000-4000-8000-000000000001
concept_id: domain-name-moc-v1
title: Domain Name MOC
type: moc
status: curated
domain: general
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
moc_level: domain
parent_moc: null
sources: []
related: []
schema_version: 4
---

# Domain Name MOC

## Overview

This domain covers [1–3 sentences describing the domain and its scope in the vault].

## Topics

Links to Topic-level MOCs in this domain. Each entry should be a specific, cohesive topic.

- [[topic-one-moc|Topic One]] — Brief description of what this topic covers
- [[topic-two-moc|Topic Two]] — Brief description
- [[topic-three-moc|Topic Three]] — Brief description

## Related Domains

- [[other-domain-moc|Other Domain MOC]] — How it relates
```

---

## File: templates\index-moc.md

```markdown
---
id: 00000000-0000-4000-8000-000000000002
concept_id: vault-index-v1
title: Vault Index
type: moc
status: curated
domain: general
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: [INDEX, Home, Start Here]
tags: []
owner_moc: null
moc_level: index
parent_moc: null
sources: []
related: []
schema_version: 4
---

# Vault Index

## Overview

This is the root navigation index for the NexusDB knowledge vault. Each entry below is a canonical domain of knowledge, linking to its Domain MOC. Navigate from domains to topics to individual nodes.

## Domains

| Domain | Description | MOC |
|--------|-------------|-----|
| AI & ML | Artificial intelligence, machine learning, LLMs | [[ai/ai-moc\|AI MOC]] |
| Psychology | Cognitive science, habits, behavior | [[psychology/psychology-moc\|Psychology MOC]] |
| Business | Strategy, investing, leadership | [[business/business-moc\|Business MOC]] |
| Productivity | Systems, tools, workflows | [[productivity/productivity-moc\|Productivity MOC]] |
| Philosophy | Thinking frameworks, ethics | [[philosophy/philosophy-moc\|Philosophy MOC]] |
| Research | Methods, papers, data analysis | [[research/research-moc\|Research MOC]] |

> [!NOTE]
> This INDEX is maintained by automation (`generate_mocs.py`) and reviewed monthly. Add new domains only via a versioned update to `tag-schema.md`.

## Gaps

Domains defined in tag-schema.md but not yet having curated MOCs:
- [ ] `writing`
- [ ] `engineering`
- [ ] `dsa`
- [ ] `manufacturing`
- [ ] `innovation`
- [ ] `risk`
- [ ] `study`
- [ ] `habits`
- [ ] `strategy`
- [ ] `leadership`
- [ ] `self-improvement`
- [ ] `tools`
- [ ] `llm`
```

---

## File: templates\moc.md

```markdown
---
id: 123e4567-e89b-42d3-a456-426614174000
title: MOC Title
type: moc
status: curated
domain: general
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
---

# MOC Title

Purpose: describe what this MOC organizes.

## Core

- [[NODES/example-node]]

## Related

- [[03_MOC/related-moc]]
```

---

## File: templates\source.md

```markdown
---
id: 123e4567-e89b-42d3-a456-426614174000
title: Source Title
type: raw-source
status: captured
domain: general
source_type: book
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
author: Author Name
origin_path: null
captured_at: YYYY-MM-DD
processed_at: null
---

# Source Title

Original source reference.
```

---

