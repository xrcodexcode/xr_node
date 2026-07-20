---
title: Ingestion Rules
type: governance-rule
status: active
version: 4.3.0
last_reviewed: 2026-07-19
approved_by: vault-owner
change_reason: "v4.3.0 — Simplified rules structure for beginner use."
---

# Ingestion Rules

This module defines the canonical knowledge ingestion pipeline, core rules, hard constraints, and movement policies for all inputs into the vault.

## 1. Knowledge Pipeline Diagram

```
Internet
    │
    ▼
Web Clipper
    │
    ▼
01_RAW/CAPTURE
(immutable source)
    │
(create working copy)
    ▼
01_RAW/PROCESS
(iterative processing)
    │
(user approval)
    ▼
02_NEW-KNOWLEDGE
    │
(move original source)
    ├──────────────► 01_RAW/SOURCE
    │
(user learns)
    ▼
NOTES (Wiki)
    │
(extract atomic knowledge)
    ▼
NODES
```

## 2. Core Rule & Hard Constraints

### Core Rule
A file must **not move or change state** from its current location until the user gives explicit permission.

### Hard Constraints
- **Never move or edit a file in CAPTURE automatically.**
- **Never edit or move the original file while processing.**
- **01_RAW/PROCESS is the only writable workspace during ingestion and refinement.**
- **Never assume approval.**
- **Never skip a stage.**

## 3. Ingestion & Movement Rules

1. **CAPTURE is Read-Only:** `01_RAW/CAPTURE` is read-only. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved.
2. **Process Workspace Constraint:** Create a working copy inside `01_RAW/PROCESS`. All files created during processing (working copies, drafts, processed versions, supporting artifacts) must remain inside `01_RAW/PROCESS/`.
3. **Iterative Refinement:** Iterate on files in `01_RAW/PROCESS` until the user explicitly approves promotion.
4. **New Knowledge Promotion:** After the user explicitly approves promotion, promote the document to `02_NEW-KNOWLEDGE`.
5. **Original Archival:** After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. **Promote to Wiki:** Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. **Atomic Note Generation:** Atomic note generation in `NODES` occurs only after the document is in `NOTES`.
