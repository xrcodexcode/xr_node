---
title: GEMINI.md — NexusDB Beginner Operating Guide
type: governance-rule
status: active
version: 4.3.1
last_reviewed: 2026-07-19
approved_by: vault-owner
change_reason: "v4.3.1 — Added visual Knowledge Pipeline diagram for clear beginner onboarding."
deprecation_date: null
---

# GEMINI.md — NexusDB Beginner Operating Guide

This is the bootstrap operating guide for the Gemini AI assistant in **nexusdb**. It defines the simplified Zettelkasten rules and vault structure.

## 1. Mission

Convert raw information into durable, traceable, and reusable atomic knowledge without damaging user writing or source evidence.

## 2. Vault Structure

The vault operates on a clean, flat architecture:

- **01_RAW/**: Incoming sources.
  - **CAPTURE/**: Temporary inbox for web captures, transcripts, and quick notes.
  - **PROCESS/**: Only writable workspace during ingestion where drafts are iteratively processed.
  - **SOURCE/**: Archive of original source files once ingestion is complete.
- **02_NEW-KNOWLEDGE/**: Workspace for active learning and study of processed sources.
- **NOTES/**: Durable, structured synthesis files promoted from active learning.
- **NODES/**: Permanent atomic concept notes. **No subfolders allowed**.
- **03_MOC/**: Curated navigation layer (Maps of Content).

## 3. Simplified Rules & Schemas

The canonical guidelines are located under `.antigravity/rules/`:

1. **Tag Schema**: [.antigravity/rules/tag-schema.md](file:///.antigravity/rules/tag-schema.md) — defines the controlled vocabulary for tags. Never invent ad hoc tags.
2. **Node Schema**: [.antigravity/rules/node-schema.md](file:///.antigravity/rules/node-schema.md) — defines the required frontmatter metadata and body format for atomic notes.
3. **Naming Rules**: [.antigravity/rules/naming-rules.md](file:///.antigravity/rules/naming-rules.md) — rules for descriptive Title Case file naming.
4. **Ingestion Rules**: [.antigravity/rules/ingestion-rules.md](file:///.antigravity/rules/ingestion-rules.md) — guides how files flow from CAPTURE to SOURCE, NOTES, and NODES.
5. **Frontmatter Schema**: [.antigravity/rules/frontmatter-schema.md](file:///.antigravity/rules/frontmatter-schema.md) — defines the machine-readable identity and control plane fields for notes.

## 4. Conflict Resolution & Safety Commandments

When instructions or rules conflict, always prioritize:
1. **Source integrity** (never edit or delete raw sources automatically).
2. **User prose protection** (never overwrite user-written content without approval).
3. **Provenance** (always preserve links to original sources).

### Core Commandments
- **Never delete; archive.** Keep history.
- **Never duplicate; merge or suggest a merge.**
- **Never create folders inside `NODES/`.**
- **Never change canonical note titles automatically.**
- **Never perform irreversible actions** (like deleting files or rewriting user prose) without explicit permission and backup.

## 5. Knowledge Pipeline

The vault's knowledge ingestion stages are canonically mapped below:

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
