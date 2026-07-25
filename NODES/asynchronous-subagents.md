---
id: 5a8e10b1-4c12-4217-bf84-7a0e1992e10a
title: Asynchronous Subagents
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
  - Antigravity Subagent
  - Concurrent Subagent Architecture
tags:
  - reference
  - implementation
owner_moc: 🛠️ Tools Map of Content
sources:
  - "[[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents]]"
related:
  - subagent-workspace-modes
  - custom-subagent-markdown-schema
  - subagent-lifecycle-states
  - inter-agent-communication-and-security-inheritance
schema_version: 4
---

# Asynchronous Subagents

## Definition
Asynchronous Subagents are dedicated, concurrent AI execution sessions spawned by a parent agent to perform targeted tasks in parallel while isolating context window growth.

## Explanation
In complex software tasks, running all research, static analysis, or testing serially inside a single agent session rapidly consumes context window limits and clutters memory. Asynchronous Subagents solve this by starting with a clean conversation transcript and running concurrently in the background.

The parent agent uses the `invoke_subagent` tool to launch a subagent with a dedicated role, model tier, and prompt. While the subagent runs, the parent agent can continue working on other tasks or launch additional subagents.

Key features include:
- **Context Isolation**: Subagents do not inherit conversation history.
- **Built-In Roles**: Pre-packaged roles like `research`, `browser`, and `self`.
- **Parallel Execution**: Multiple subagents run simultaneously without blocking parent execution.

## Related
- [[subagent-workspace-modes|Subagent Workspace Modes]]
- [[custom-subagent-markdown-schema|Custom Subagent Markdown Schema]]
- [[subagent-lifecycle-states|Subagent Lifecycle States]]
- [[inter-agent-communication-and-security-inheritance|Inter-Agent Communication and Security Inheritance]]
- [[03_MOC/tools-moc|🛠️ Tools Map of Content]]

## Source
- [[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents|Antigravity Asynchronous Subagents Architecture & Operation]]
