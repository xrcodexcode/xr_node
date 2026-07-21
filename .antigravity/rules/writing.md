---
title: Writing & Ingestion Rules
type: governance-rule
status: active
version: 4.5.0
last_reviewed: 2026-07-21
approved_by: vault-owner
change_reason: "v4.5.0 — Merged node creation and ingestion pipeline rules."
---

# Writing & Ingestion Rules

This document specifies the pipeline, constraints, and structures for importing and writing knowledge in NexusDB.

## 1. Knowledge Ingestion Pipeline

```
Internet
    │
    ▼
Web Clipper
    │
    ▼
01_RAW/CAPTURE ─────────► [Read-Only original source]
    │
(create working copy)
    ▼
01_RAW/PROCESS ─────────► [Iterative refinement workspace]
    │
(user approval)
    ▼
02_NEW-KNOWLEDGE ───────► [Active study workspace] (Source moves to 01_RAW/SOURCE)
    │
(user learns)
    ▼
NOTES (Wiki) ───────────► [Wiki-style structured synthesis files]
    │
(extract atomic knowledge)
    ▼
NODES ──────────────────► [Permanent atomic concept notes; flat folder]
```

## 2. Ingestion Constraints & Policies

- **State Integrity**: A file must not move or change state from its current location until the user gives explicit permission.
- **CAPTURE is Read-Only**: `01_RAW/CAPTURE` is strictly read-only. Original files are immutable; do not edit, rename, delete, overwrite, or move them during processing.
- **Process Workspace Isolation**: Create a working copy inside `01_RAW/PROCESS`. All files created during processing must remain inside this folder.
- **Archival Policy**: After the user approves promoting a working copy to `02_NEW-KNOWLEDGE`, move the original source from `01_RAW/CAPTURE` to `01_RAW/SOURCE` for long-term archival.

## 3. Note Writing Standards

### Atomic Notes (`NODES/`)
Every active note inside `NODES/` must adhere to these laws:
- **Flat Folder**: `NODES/` is completely flat. No subfolders are allowed.
- **Single Idea**: One file answers one question or states one reusable concept.
- **Naming Match**: The title in the frontmatter must match the filename exactly.
- **Structured Sections**:
  - `## Claim` or `## Definition` (One-sentence clear statement)
  - `## Explanation` (Detailed context in plain language)
  - `## Related` (Wikilinks to related notes)
  - `## Source` (Wikilink or path to original source)
- **Metadata**: Exactly one `owner_moc`, at least one connection, and source provenance.
