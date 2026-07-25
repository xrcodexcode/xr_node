---
id: a82d910f-2e3b-4171-a4b5-680c1020491b
title: Subagent Workspace Modes
type: atomic-note
status: atomic
domain: ai
source_type: web-clip
created: 2026-07-25
updated: 2026-07-25
review: 2026-10-23
confidence: 95
version: 1
aliases:
  - Subagent Isolation Modes
  - Workspace Isolation
tags:
  - reference
  - decision
owner_moc: 🛠️ Tools Map of Content
sources:
  - "[[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents]]"
related:
  - asynchronous-subagents
  - custom-subagent-markdown-schema
  - subagent-lifecycle-states
schema_version: 4
---

# Subagent Workspace Modes

## Definition
Subagent Workspace Modes define the level of filesystem and repository isolation granted to a subagent when it is invoked.

## Explanation
When spawning a subagent using `invoke_subagent`, the parent agent can configure how file modifications and working directories are isolated:

| Mode | Behavior | Use Case |
| :--- | :--- | :--- |
| **`inherit`** (Default) | Shares the exact working directory and environment as the parent agent. | Quick file lookups, codebase searches, shared file edits. |
| **`branch`** | Creates an isolated Git worktree branch for the subagent. | Risky refactors, experimental code changes, isolated testing. |
| **`share`** | Shares directory storage while allowing independent Git branching without disk duplication. | Parallel feature development requiring separate Git states. |

Isolated worktrees generated under `branch` mode are automatically cleaned up when the subagent is killed or completes.

## Related
- [[asynchronous-subagents|Asynchronous Subagents]]
- [[custom-subagent-markdown-schema|Custom Subagent Markdown Schema]]
- [[subagent-lifecycle-states|Subagent Lifecycle States]]
- [[03_MOC/tools-moc|🛠️ Tools Map of Content]]

## Source
- [[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents|Antigravity Asynchronous Subagents Architecture & Operation]]
