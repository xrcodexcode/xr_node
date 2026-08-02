---
title: Linking Rules
type: governance-rule
status: active
version: 6.0.0
last_reviewed: 2026-07-30
approved_by: vault-owner
change_reason: "v6.0.0 — Synchronized graph reachability, MOC navigation requirements, flat NODES link constraints, and deterministic link invariants with CLAUDE.md."
---

# Linking Rules

A well-connected graph improves retrievability and synthesis. Links must represent meaningful relationships rather than decorative formatting.

## 1. Core Linking Rules

- **Obsidian Link Syntax**: Use standard internal links: `[[Note Title]]` or `[[Note Title|Alias]]`.
- **MOC Reachability**: Every stable content note must be reachable from at least one Map of Content (MOC) under `03_MOC/`.
- **Graph Connection**: Active stable notes should have at least one meaningful inbound or outbound link.
- **Relationship Context**: Add relationship context when linking inside note bodies where appropriate (e.g., `defines`, `supports`, `contradicts`, `depends_on`, `related_to`).
- **Flat NODES Target**: Links targeting atomic nodes in `NODES/` must specify the note title directly without subdirectory paths (e.g., `[[Gradient Descent]]`, never `[[math/Gradient Descent]]`).
- **No Phantom Links**: Never invent link targets. If a target is ambiguous or missing, report it or flag as an uncreated reference.

## 2. Orphan Exemptions

The following file categories are exempt from ordinary orphan health checks:
- Raw capture files (`01_RAW/CAPTURE/`)
- Archived source files (`01_RAW/SOURCE/`)
- Audit & health reports (`.claude/reports/`)
- Templates (`.claude/templates/`)
- System files, rules, and scripts (`.claude/`)

## 3. Link Preservation and Determinism

- **User Link Safety**: Never rewrite or delete existing user-authored links automatically without explicit approval.
- **Determinism**: Automated link generation must be idempotent. Re-running link processes must not create duplicate links or duplicated generated sections.
- **Relative Links**: Always use relative Obsidian vault links, never machine-specific file paths.
