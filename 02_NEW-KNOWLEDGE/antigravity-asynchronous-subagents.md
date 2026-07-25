---
id: 9c48f21e-7b19-4a30-891d-e593a1102b48
title: Antigravity Asynchronous Subagents Architecture & Operation
type: study-note
status: learning
domain: ai
source_type: web-clip
created: 2026-07-25
updated: 2026-07-25
review: 2026-10-23
confidence: 95
version: 1
aliases:
  - Antigravity Subagents
  - Asynchronous Subagents
tags:
  - reference
  - implementation
owner_moc: 🛠️ Tools Map of Content
sources:
  - Antigravity Official Documentation - Asynchronous Subagents
related:
  - asynchronous-subagents
  - subagent-workspace-modes
  - custom-subagent-markdown-schema
  - subagent-lifecycle-states
  - inter-agent-communication-and-security-inheritance
schema_version: 4
---

# Antigravity Asynchronous Subagents Architecture & Operation

## Overview & Core Purpose

**Asynchronous Subagents** in Google Antigravity provide a parallelized, modular architecture for AI-assisted coding and task execution. By delegating heavy context-loading tasks—such as comprehensive codebase searches, security audits, or test execution—to dedicated subagent sessions, the primary (parent) agent avoids context window pollution and remains free to handle high-level orchestrations.

Key architectural benefits include:
- **Context Isolation**: Each subagent starts with a clean slate (zero inherited conversation transcript history).
- **Parallelization**: Multiple subagents can run concurrently alongside the parent agent.
- **Dedicated Tooling & Scopes**: Custom subagents can restrict or grant specific tool capabilities and security permissions.

---

## 1. Invocation & Workspace Isolation Modes

Parent agents invoke subagents via the `invoke_subagent` tool, specifying a target agent type, role, and initial prompt.

### Workspace Modes
Subagents support three distinct filesystem and workspace isolation modes:
1. **`inherit`** (Default): Operates directly in the parent agent's workspace and filesystem root.
2. **`branch`**: Creates an isolated, dedicated Git worktree branch.
3. **`share`**: Shares underlying directory storage for independent branching without duplicating file storage.

### Execution & Monitoring
- **Asynchronous Execution**: The parent agent can launch multiple subagents simultaneously.
- **Monitoring**: Users can monitor subagent trajectory and output in real time via the UI subagent panel or CLI hotkeys (`Alt+J`).

---

## 2. Built-In Subagents

Antigravity comes out-of-the-box with pre-packaged specialized subagents:
- **`research`**: Read-only exploration agent optimized for broad codebase searches, documentation lookup, and file analysis.
- **`browser`**: Sandboxed web browser testing agent (invoked exclusively via `/browser`).
- **`self`**: A exact clone of the calling parent agent, inheriting identical tools and system prompts.

---

## 3. Defining Custom Subagents (.md & YAML Schema)

Custom subagents can be defined persistently as Markdown (`.md`) files with YAML frontmatter or created dynamically during a session via `define_subagent`.

### Agent Discovery Locations
Antigravity automatically discovers subagent markdown files in three locations:
1. **Workspace Root**: `.agents/agents/<name>.md` or `.agents/agents/<name>/agent.md`
2. **Global System**: `~/.gemini/config/agents/<name>.md` or `.../agents/<name>/agent.md`
3. **Plugins**: `plugins/<plugin_name>/agents/`

### Frontmatter Configuration Schema
```yaml
---
name: code-auditor                          # (Required) Unique identifier
description: Specialized security auditor   # (Required) Planner delegation trigger description
tools:                                      # Explicit list of permitted tools
  - view_file
  - grep_search
  - run_command
mainAgent: false                            # Selectable as primary agent in chat UI
subagent: true                              # Invokable via invoke_subagent
model: pro                                  # Model tier: inherit | flash | pro
commandExecutionPolicy: sandbox             # Shell policy: off | auto | eager | sandbox
mcpServers: []                              # Custom MCP servers
skills:                                     # Skill paths or plugin dependencies
  - skills/security-checklist
---
```

> [!WARNING]
> **Known Issue (Tool Name Validation)**: Specifying misspelled or unmapped tool names in the `tools` list can cause the subagent process to hang during execution. Ensure exact tool names (e.g., `view_file`, `run_command`, `grep_search`) are specified.

---

## 4. Subagent Lifecycle & State Transitions

Subagents cycle through three primary states during execution:

```
[Invoked] ──► RUNNING ───────(Completes / Sends Result)──────► IDLE
                 │                                               │
           (Stop / Terminate)                             (Receives Message)
                 │                                               │
                 ▼                                               ▼
              KILLED ◄───────────────────────────────────── RUNNING
```

1. **`Running`**: Actively executing tools and generating reasoning responses. Can be interrupted by sending messages or stopped via UI/CLI (`k` key).
2. **`Idle`**: Task completed, result sent to parent, execution paused. Automatically re-awakens to `Running` state upon receiving new messages, retaining all context from previous turns.
3. **`Killed`**: Permanently terminated. Git worktrees are cleaned up, but JSONL logs remain for auditing.

---

## 5. Inter-Agent Communication & Security Inheritance

### Messaging & Nesting Limits
- **Flexible Routing**: Agents communicate asynchronously by sending messages using unique agent conversation IDs.
- **Auto-Wake**: Sending a message to an idle subagent automatically re-awakens it.
- **Nesting Depth Limit**: A maximum recursion depth of **10 levels** (layers of subagents) is strictly enforced to prevent runaway recursion.

### Permission & Safety Inheritance
Subagents inherit security boundaries directly from their parent agent:
- Allowed terminal command prefixes, file read/write scopes, and sandbox levels are strictly inherited.
- If a subagent attempts an unapproved action requiring human approval, the authorization request **bubbles up** to the main UI / Subagent panel.

---

## 💡 Downstream Atomic Concept Candidates

- [[asynchronous-subagents|Asynchronous Subagents]]
- [[subagent-workspace-modes|Subagent Workspace Modes]]
- [[custom-subagent-markdown-schema|Custom Subagent Markdown Schema]]
- [[subagent-lifecycle-states|Subagent Lifecycle States]]
- [[inter-agent-communication-and-security-inheritance|Inter-Agent Communication and Security Inheritance]]
