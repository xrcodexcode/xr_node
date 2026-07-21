---
title: Linking Rules
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Created centralized linking rules."
---

# Linking Rules

A well-connected knowledge graph is essential for retrievability. Every note must be integrated into the graph.

## Core Linking Rules

- **Bidirectional Links**: Use standard Obsidian-style internal links `[[Note Title]]` or `[[Note Title|Alias]]`.
- **MOC Reachability**: Every node must be reachable from at least one Map of Content (MOC) under `03_MOC/`.
- **No Orphans**: Active notes should not exist in isolation. Every note must have at least one incoming or outgoing link.
- **Link Context**: Provide relationship context when linking inside the body (e.g., `Relationship: related_to` or inline explanation).
- **Aliases over Duplication**: If a concept has multiple names, use the `aliases` array in the frontmatter instead of creating duplicate notes.
- **Strict Pathing**: Links to nodes in the flat `NODES/` directory must not include subdirectories (e.g. use `[[note-name]]` or `[[NODES/note-name]]`, never subfolders).
