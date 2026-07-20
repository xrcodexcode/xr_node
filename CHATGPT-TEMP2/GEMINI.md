---
title: GEMINI.md — NexusDB Bootstrap Operating Guide
type: governance-rule
status: active
version: 4.2.0
last_reviewed: 2026-07-19
approved_by: vault-owner
change_reason: "v4.2.0 — Externalized detailed Knowledge Pipeline rules to modules/automation/ingestion-rules.md, keeping loader minimal."
deprecation_date: null
---

# GEMINI.md — NexusDB Bootstrap Operating Guide

This is the supreme bootstrap loader file for the AI assistant in **nexusdb**.

## 1. Mission
Convert raw information into durable, traceable, and reusable knowledge without damaging user writing or source evidence.

## 2. Authority Hierarchy
- The governance constitution is canonically defined in [governance.md](file:///.antigravity/modules/core/governance.md).
- Authority Order: [governance.md](file:///.antigravity/modules/core/governance.md) > Specific Rule Modules > Automation Behavior > Informal Guide Text.

## 3. Conflict Resolution
When rules or instructions conflict, prioritize in this order:
1. Source integrity (never corrupt or replace raw sources).
2. User-authored content (never overwrite user prose without approval).
3. Provenance (never break source-to-note traceability).
4. Retrieval quality (never degrade search/retrievability).
5. Automation convenience (developer/script ease comes last).

If conflicts cannot be resolved, make no changes and request a user decision.

## 4. Read Order
Before executing any task:
1. Initialize/read Runtime State from [runtime.md](file:///.antigravity/bootstrap/runtime.md).
2. Consult the Capability Router in [router.md](file:///.antigravity/bootstrap/router.md) to map the task to required capabilities.
3. Consult the registry in [registry.md](file:///.antigravity/bootstrap/registry.md) to locate module file paths.
4. Load target modules via [loader.md](file:///.antigravity/bootstrap/loader.md) rules (checking compatibility, resolving dependencies, caching, and budgeting context).

## 5. Decision Protocol
- All decisions require an explicit confidence score (`0–100`) calculated using calibration formulas in [decision_engine.md](file:///.antigravity/modules/core/decision_engine.md).
- Thresholds: Safe (`95–100`), Suggest (`80–94`), Ask (`60–79`), Do Nothing (`<60`).
- Irreversible-action protection: Deleting source files, renaming canonical titles, overwriting user prose, and merges require explicit owner approval, snapshot backup, audit entry, and rollback path.

## 6. Global Commandments
- **Never delete; archive.** Always preserve history.
- **Never duplicate; merge or suggest a merge.**
- **Never summarize first; understand and preserve provenance first.**
- **Never invent metadata.** Infer metadata only when action confidence `>= 95`.
- **Never create folders inside `NODES/`.**
- **Never change canonical titles automatically.**
- **Never overwrite user writing.** Propose a patch or append.
- **Never replace a source.** Preserve the original and create a derived copy.
- **Never create low-confidence links automatically.**
- **Never perform an irreversible action without approval, snapshot, audit entry, and rollback.**

## 7. Dynamic Module Loading Protocol
Context loading is handled dynamically to minimize token consumption:
1. Identify the capability from the router.
2. Resolve dependency tree and topological order of target modules.
3. Apply context budgeting (pruning modules if token size exceeds threshold).
4. Load only the exact files required using the available file access mechanism. Do not reload already cached modules.

## 8. Failure Behavior
If the loader cannot resolve a module path, if compatibility checks fail, or if any loaded rule is violated:
1. Halt execution immediately.
2. Log the failure reason to `.antigravity/logs/audit-log.md` with `result: failed`.
3. Revert any uncommitted changes.
4. Prompt the user with a description of the failure.
## 9. Knowledge Pipeline

The vault's knowledge ingestion stages are canonically mapped below:

```
Internet → Web Clipper → 01_RAW/CAPTURE (immutable source) → 01_RAW/PROCESS (working copy) → 02_NEW-KNOWLEDGE → 01_RAW/SOURCE (archived source) → NOTES (Wiki) → NODES
```

For all operational details, core rules, hard constraints, and decision policies governing this pipeline, refer to the externalized rules module:
- **Knowledge Ingestion Rules**: [ingestion-rules.md](file:///.antigravity/modules/automation/ingestion-rules.md)