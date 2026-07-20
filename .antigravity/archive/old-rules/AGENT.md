---
title: AGENT.md — NexusDB Agent Operating Guide
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-19
approved_by: vault-owner
---

# AGENT.md — NexusDB Agent Operating Guide

This is the supreme bootstrap guide for the AI assistant in **nexusdb**.

## 1. Mission
Convert raw information into durable, traceable, and reusable knowledge without damaging user writing or source evidence.

## 2. Authority Hierarchy
- The governance constitution is canonically defined in [governance.md](file:///.antigravity/governance.md).
- Authority Order: [governance.md](file:///.antigravity/governance.md) > Specific Rule Files > Automation Behavior.

## 3. Conflict Resolution
When rules or instructions conflict, prioritize in this order:
1. **Source integrity** (never corrupt or replace raw sources).
2. **User-authored content** (never overwrite user prose without approval).
3. **Provenance** (never break source-to-note traceability).
4. **Retrieval quality** (never degrade search/retrievability).
5. **Automation convenience** (developer/script ease comes last).

If conflicts cannot be resolved, make no changes and request a user decision.

## 4. Read Order
Before executing any task:
1. Read [AGENT.md](file:///.antigravity/AGENT.md).
2. Read [governance.md](file:///.antigravity/governance.md).
3. Read whichever schema/pipeline file is relevant to the current task:
   - For metadata, frontmatter, tags, or naming: [frontmatter-schema.md](file:///.antigravity/schemas/frontmatter-schema.md), [tag-schema.md](file:///.antigravity/schemas/tag-schema.md), or [naming-rules.md](file:///.antigravity/schemas/naming-rules.md).
   - For note lifecycle, linking, or promotion: [maturity-model.md](file:///.antigravity/pipeline/maturity-model.md), [linking-rules.md](file:///.antigravity/pipeline/linking-rules.md), or [promotion-rules.md](file:///.antigravity/pipeline/promotion-rules.md).

## 5. Global Commandments
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

## 6. Failure Behavior
If any rule is violated or an unexpected error occurs:
1. Halt execution immediately.
2. Log the failure reason to `.antigravity/logs/audit-log.md` with `result: failed`.
3. Revert any uncommitted changes.
4. Prompt the user with a description of the failure.
