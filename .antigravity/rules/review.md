---
title: Review & Safety Rules
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Created centralized review and safety rules."
---

# Review & Safety Rules

This document outlines the validation, quality checks, safety commandments, and promotion review standards for NexusDB.

## 1. Safety Commandments (Non-Negotiable)

- **Never Delete; Archive**: Do not delete content. Archive history when it is superseded.
- **Never Duplicate; Merge**: Avoid duplicate or near-duplicate notes. Update existing notes or suggest a merge if duplicates are detected.
- **Never Change Canonical Titles Automatically**: Title renames require user confirmation and audit trails.
- **No Irreversible Actions**: Never delete files or rewrite user prose without explicit permission.

## 2. Review Cycles & Fields

- **Review Schedule**: Every active note should have a `review` date field indicating when it should next be audited for accuracy or relevance.
- **Confidence Scoring**: Use the `confidence` field (integer `0–100`) to represent the level of certainty or backing evidence for the claims in the note.
- **Auditing**: Automation tools can run checks (e.g. tag validation, duplicate detection, link health) to produce read-only reports, but must not make automated structural edits without permission.

## 3. Promotion Rubric & Review

Before a note is promoted to `NOTES/` or `NODES/`:
1. **Backlink Count**: The note must be referenced or linked by at least one other page (or MOC).
2. **Metadata Integrity**: Frontmatter must be complete and valid according to the schema.
3. **Format Check**: The markdown body structure must match the target template.
