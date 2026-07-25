---
id: c4e18092-d617-48f8-b391-490218179011
title: Subagent Lifecycle States
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
  - Subagent Lifecycle
  - Subagent Execution States
tags:
  - reference
  - implementation
owner_moc: 🛠️ Tools Map of Content
sources:
  - "[[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents]]"
related:
  - asynchronous-subagents
  - inter-agent-communication-and-security-inheritance
schema_version: 4
---

# Subagent Lifecycle States

## Definition
Subagent Lifecycle States track the runtime status of an asynchronous subagent through three distinct stages: Running, Idle, and Killed.

## Explanation
During execution, a subagent exists in one of three states:

1. **`Running`**: The subagent is actively reasoning, executing tools, or making model calls. It can be cancelled via UI (`Stop Subagent`) or CLI (`k` key), or interrupted by messages.
2. **`Idle`**: The subagent finished its task, delivered its result message to the parent agent, and paused. Receiving a message automatically re-awakens it to `Running` state while retaining all prior turn context.
3. **`Killed`**: The subagent is permanently terminated. Associated temporary Git worktrees are cleaned up, but JSONL logs remain stored for auditing.

```
[Invoked] ──► RUNNING ───────(Completes / Sends Result)──────► IDLE
                 │                                               │
           (Stop / Terminate)                             (Receives Message)
                 │                                               │
                 ▼                                               ▼
              KILLED ◄───────────────────────────────────── RUNNING
```

## Related
- [[asynchronous-subagents|Asynchronous Subagents]]
- [[subagent-workspace-modes|Subagent Workspace Modes]]
- [[inter-agent-communication-and-security-inheritance|Inter-Agent Communication and Security Inheritance]]
- [[03_MOC/tools-moc|🛠️ Tools Map of Content]]

## Source
- [[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents|Antigravity Asynchronous Subagents Architecture & Operation]]
