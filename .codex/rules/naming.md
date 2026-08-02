---
title: Naming Rules
type: governance-rule
status: active
version: 6.0.0
last_reviewed: 2026-07-30
approved_by: vault-owner
change_reason: "v6.0.0 — Synchronized canonical title rules, flat NODES directory matching, character constraints, and approval requirements with CODEX.md."
---

# Naming Rules

Every active note has exactly one stable canonical title. For notes in `NODES/`, the canonical title must match the filename (without extension) exactly.

## 1. Canonical Title Standards

- **Descriptive & Specific**: Use specific, self-describing Title Case names (e.g., `Gradient Descent`, `Attention Residue`).
- **Singular Form**: Prefer singular nouns unless the concept is inherently plural (e.g., `Transformer`, not `Transformers`).
- **No Chronology**: Avoid dates or temporal markers in concept titles unless chronology is an essential part of the concept itself.
- **No Generic Titles**: Avoid vague or placeholder titles (e.g., `Misc`, `Notes`, `Chapter 4`, `Draft 1`).

## 2. Flat Directory & File Matching

- **NODES Requirement**: Notes inside `02_NODES/` (or `NODES/`) must be flat with **no subdirectories**.
- **Filename Match**: The file stem (filename without `.md`) must match the `title` field in YAML frontmatter exactly.
- **Forbidden File Characters**: Filenames must not contain illegal filesystem characters: `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`. Reframe titles using dashes or natural phrasing if needed.

## 3. Synonyms, Acronyms, and Change Control

- **Aliases Array**: Use the frontmatter `aliases` array for common acronyms, synonyms, or alternate spellings (e.g., `aliases: [GD, Steepest Descent]`).
- **No Duplication**: Never create separate notes for aliases or synonyms.
- **Change Control**: Canonical titles are immutable by default. Changing a canonical title requires explicit user approval, snapshot, link audit, and a rollback path.
