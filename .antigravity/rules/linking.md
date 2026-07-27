---
title: Linking Rules
type: governance-rule
status: active
version: 5.0.0
last_reviewed: 2026-07-27
approved_by: vault-owner
change_reason: "Aligned graph reachability, orphan exceptions, and relationship context with GEMINI.md."
---

# Linking Rules

A well-connected graph improves retrieval, but links must represent meaningful relationships rather than decoration.

## Core Linking Rules

- Use standard Obsidian-style internal links such as [[Note Title]] or [[Note Title|Alias]].
- Every stable content note must be reachable from at least one applicable MOC under 03_MOC/.
- Active stable notes should have at least one meaningful incoming or outgoing link.
- Raw captures, source archives, reports, templates, MOCs, and system files are exempt from ordinary orphan checks where the applicable workflow says so.
- Add relationship context when linking inside the body, such as definition, supports, contradicts, depends_on, or related_to.
- Use aliases for alternate names instead of creating duplicate notes.
- Links to nodes in the flat NODES directory must not include subdirectories.
- Never invent a link target. If a target is ambiguous or missing, report it.
- Never rewrite existing user-authored links automatically. Propose repairs unless explicitly authorized.
- Link generation must be deterministic and idempotent. Re-running it must not duplicate links or generated sections.

