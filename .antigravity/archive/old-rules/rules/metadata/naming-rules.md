---
title: NexusDB Naming Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Establish canonical-title protection and alias policy
deprecation_date: null
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

