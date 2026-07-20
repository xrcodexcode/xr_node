---
title: NexusDB Ingestion Rules
type: governance-rule
status: active
version: 2.1.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Refactored 02_NEW-KNOWLEDGE/ to specify active learning and dual promotion workflow to NOTES/ and NODES/
deprecation_date: null
---

# Ingestion Rules

## Pipeline

1. Capture original material in `01_RAW/CAPTURE/`. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved to `01_RAW/PROCESS`.
2. Create a working copy inside `01_RAW/PROCESS/` for all editing, cleaning, and refinement. `01_RAW/PROCESS` is the only writable workspace during ingestion.
3. All intermediate or supporting files created during processing must remain inside `01_RAW/PROCESS/`.
4. Iterate on processing until the user explicitly approves promotion.
5. After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. Atomic note generation in `NODES` occurs only after the document is in `NOTES`.

## Completion Gate

An ingestion is complete only when:

- the original source is preserved and archived in `01_RAW/SOURCE/` (moved from `01_RAW/CAPTURE/`);
- every new source-derived note has provenance;
- metadata validates against `frontmatter-schema.md`;
- duplicate candidates were evaluated;
- every active node has one owner MOC and justified graph connections;
- the source has reusable knowledge linked or a logged `no_reusable_knowledge` disposition;
- the archive action and material changes are in the audit log.

Never leave a successfully processed original source in `CAPTURE/` after promotion. Do not archive the original source until the document has been successfully promoted to `02_NEW-KNOWLEDGE`.


