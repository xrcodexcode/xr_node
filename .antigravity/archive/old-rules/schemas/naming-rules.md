---
title: naming-rules.md — Note Naming & Concept ID Rules
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-19
approved_by: vault-owner
---

# Note Naming & Concept ID Rules

Every active note has a stable canonical title. For nodes (atomic notes), the title must match the filename stem.

## 1. Canonical Title Rules

- Use specific, descriptive **Title Case** (e.g., `Gradient Descent`, `Attention Residue`, `Semantic Similarity`).
- Prefer singular nouns unless the idea is inherently plural.
- Avoid dates in filenames/titles unless chronology is essential.
- Use aliases in frontmatter for common abbreviations, synonyms, or alternate spellings. Do not create duplicate files for aliases.
- Never change a canonical title automatically; changes require manual approval.

## 2. Concept ID (`concept_id`) Generation Rules

The `concept_id` is an immutable, human-readable slug that identifies a concept across file renames or title updates.

- **Format**: `kebab-case(title)` + `-v` + `<version-at-creation>` (almost always `1`).
  - Example: `Gradient Descent` version 1 → `gradient-descent-v1`
- **Collision Resistance**: Check for collisions across all existing concept IDs in the vault. If a collision is found, append a counter suffix (e.g., `gradient-descent-v1-2`).
- **Title Updates**: When a note's canonical title is updated, the `concept_id` remains **unchanged**. The old title is added to `aliases` for retrieval, preserving traceability.
- **Usage in Code**: Automation scripts should prefer `concept_id` over filename when generating cross-references in reports and JSON outputs.
- **Immutability Guarantee**: Once set, the `concept_id` is a protected field and may not be changed automatically.
