---
module: automation_ingestion
version: 2.3.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
  - metadata_schema
exports:
  - ingestion_pipeline_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 600
owner: vault-owner
last_reviewed: 2026-07-19
change_reason: "Integrated detailed Knowledge Pipeline rules, constraints, and decision policies."
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

---

## 2. Core Rule & Hard Constraints

### Core Rule
A file must **not move or change state** from its current location until the user gives explicit permission.

### Hard Constraints
- **Never move or edit a file in CAPTURE automatically.**
- **Never edit or move the original file while processing.**
- **01_RAW/PROCESS is the only writable workspace during ingestion and refinement.**
- **Never assume approval.**
- **Never skip a stage.**

---

## 3. Ingestion & Movement Rules

1. **CAPTURE is Read-Only:** `01_RAW/CAPTURE` is read-only. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved to `01_RAW/PROCESS`.
2. **Process Workspace Constraint:** Create a working copy inside `01_RAW/PROCESS`. All files created during processing (working copies, drafts, processed versions, temporary files, AI-generated outputs, intermediate revisions, supporting artifacts) must remain inside `01_RAW/PROCESS/`.
3. **Iterative Refinement:** Iterate on files in `01_RAW/PROCESS` until the user explicitly approves promotion.
4. **New Knowledge Promotion:** After the user explicitly approves promotion, promote the document to `02_NEW-KNOWLEDGE`.
5. **Original Archival:** After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. **Promote to Wiki:** Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. **Atomic Note Generation:** Atomic note generation in `NODES` occurs only after the document is in `NOTES`.
8. **MOC Curation:** Every mature note must eventually connect to `03_MOC` (INDEX → Domain → Topic → Node).

---

## 4. Decision Policy & Expected Behavior

Before any movement or promotion, the agent must ask:
- Is the content still raw in CAPTURE?
- Is it a working copy undergoing refinement in PROCESS?
- Is it ready for deep study in 02_NEW-KNOWLEDGE?
- Is it in NOTES ready for atomic extraction?
- Is the final note verified and evergreen enough for the NODES layer?

If any answer is unclear, stop and ask for permission. When responding, state:
- Current stage
- Suggested next stage
- Reason
- Permission needed before movement
- Any risks, gaps, or missing context

---

## 5. Completion Gate

An ingestion is complete only when:
- The original source is preserved and archived in `01_RAW/SOURCE/` (moved from `01_RAW/CAPTURE/`).
- Every new source-derived note has provenance.
- Metadata validates against [frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md).
- Duplicate candidates were evaluated.
- Every active node has one owner MOC and justified graph connections.
- The source has reusable knowledge linked or a logged `no_reusable_knowledge` disposition.
- The archive action and material changes are in the audit log.

Never leave a successfully processed original source in `CAPTURE/` after promotion. Do not archive the original source until the document has been successfully promoted to `02_NEW-KNOWLEDGE`.

