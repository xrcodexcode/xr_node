---
module: metadata_naming
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_naming_conventions
exports:
  - naming_policies
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 300
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Naming Rules

Every active note has one stable canonical title. For nodes, the title must match the filename.

## Canonical Title Rules

- Use specific, descriptive Title Case.
- Prefer singular nouns unless the idea is inherently plural.
- Avoid dates unless chronology is essential.
- Use aliases for common abbreviations, synonyms, or alternate spellings.
- Do not create a second note for an alias.
- Never change a canonical title automatically. Changes require explicit approval, snapshot, audit entry, and rollback path.

Good: `Gradient Descent`, `Attention Residue`, `Semantic Similarity`.

Bad: `Chapter 4`, `Random Thoughts`, `Misc`, `GD`, `new note`.
