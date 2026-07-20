---
title: NexusDB Tag Schema
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Reserve tags for discovery and move structured attributes to frontmatter
deprecation_date: null
---

# Tag Schema

Tags are controlled discovery facets. They are not a substitute for structured metadata.

## Metadata, Not Tags

Use frontmatter for these properties:

| Property | Frontmatter field |
| --- | --- |
| Knowledge type | `type` |
| Lifecycle state | `status` |
| Source category | `source_type` |
| Canonical domain | `domain` |
| Canonical owner | `owner_moc` |

Never add `#book`, `#paper`, `#concept`, `#evergreen`, `#review`, or a domain tag solely to express these fields.

## Controlled Domains

`ai`, `ml`, `llm`, `psychology`, `productivity`, `philosophy`, `business`, `study`, `research`, `writing`, `tools`, `habits`, `strategy`, `leadership`, `self-improvement`, `dsa`, `engineering`, `manufacturing`, `innovation`, `risk`, `general`.

Use one canonical value in `domain`. Add a domain only by a versioned update to this file.

## Approved Discovery Tags

- `beginner`
- `advanced`
- `comparison`
- `case-study`
- `implementation`
- `reference`
- `history`
- `decision`
- `example`
- `checklist`
- `open-question`
- `contrarian`

Rules:

- Tags are lowercase and hyphenated.
- Use zero or more approved discovery tags; do not tag by habit.
- Validators reject unknown tags.
- Existing type, state, source, and domain tags are legacy metadata. Preserve them until the note is materially edited, then migrate their meaning to frontmatter and log it.
- Approved aliases: `case_study` → `case-study`, `open_question` → `open-question`.

