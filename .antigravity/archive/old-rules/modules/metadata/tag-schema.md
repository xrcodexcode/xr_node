---
module: metadata_tags
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_taxonomy
  - shared_aliases
exports:
  - tag_validation_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
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

Controlled domains are canonically defined in [taxonomy.md](file:///.antigravity/shared/taxonomy.md).
Use one canonical value in `domain`. Add a domain only by a versioned update to that file.

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
- Approved aliases are canonically defined in [aliases.md](file:///.antigravity/shared/aliases.md).
  - `case_study` → `case-study`
  - `open_question` → `open-question`
