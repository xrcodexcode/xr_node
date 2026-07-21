---
title: Naming Rules
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Relocated and consolidated naming rules."
---

# Naming Rules

Every active note has one stable canonical title. For nodes in `NODES/`, the title must match the filename exactly.

## Canonical Title Rules

- **Descriptive & Specific**: Use specific, descriptive Title Case (e.g., `Gradient Descent`).
- **Singular Form**: Prefer singular nouns unless the concept is inherently plural.
- **No Chronology**: Avoid dates in the title unless chronology is an essential part of the concept.
- **Synonyms & Abbreviations**: Use aliases in frontmatter for common abbreviations, synonyms, or alternate spellings.
- **No Duplication**: Do not create a separate note for an alias.
- **Change Control**: Never change a canonical title automatically. Any title change requires explicit approval, snapshot, audit entry, and a rollback path.

## Examples

- **Good**: `Gradient Descent`, `Attention Residue`, `Semantic Similarity`.
- **Bad**: `Chapter 4`, `Random Thoughts`, `Misc`, `GD`, `new note`.
