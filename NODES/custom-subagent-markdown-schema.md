---
id: a7f491c2-3e4b-4b10-918f-51d020268a1f
title: Custom Subagent Markdown Schema
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
  - Custom Subagent Definition
  - Subagent YAML Frontmatter Schema
tags:
  - reference
  - implementation
owner_moc: 🛠️ Tools Map of Content
sources:
  - "[[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents]]"
related:
  - asynchronous-subagents
  - subagent-workspace-modes
  - inter-agent-communication-and-security-inheritance
schema_version: 4
---

# Custom Subagent Markdown Schema

## Definition
The Custom Subagent Markdown Schema specifies how persistent custom subagents are configured using Markdown files with YAML frontmatter in Antigravity.

## Explanation
Custom subagents can be declared in `.md` files placed in workspace roots (`.agents/agents/`), global configs (`~/.gemini/config/agents/`), or plugins (`plugins/<plugin>/agents/`).

### YAML Frontmatter Fields

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | string | *(Required)* | Unique identifier for the agent. |
| `description` | string | *(Required)* | Detailed description used by the planner for delegation decisions. |
| `tools` | string[] | `[]` | Permitted tools (e.g. `view_file`, `grep_search`, `run_command`). |
| `mainAgent` | boolean | `true` | Allows selection as primary chat agent. |
| `subagent` | boolean | `true` | Allows invocation via `invoke_subagent`. |
| `model` | string | `inherit` | Model tier (`inherit`, `flash`, `pro`). |
| `commandExecutionPolicy` | string | `sandbox` | Shell execution policy (`off`, `auto`, `eager`, `sandbox`). |
| `mcpServers` | object[] | `[]` | Custom Model Context Protocol servers. |
| `skills` / `plugins` | string[] | `[]` | Required skill or plugin paths. |

> [!WARNING]
> Misspelling tool names in the `tools` array can cause the subagent execution to hang due to unmapped tool validation errors.

The Markdown body following the frontmatter `---` delimiter defines the subagent's system prompt and operating rules.

## Related
- [[asynchronous-subagents|Asynchronous Subagents]]
- [[subagent-workspace-modes|Subagent Workspace Modes]]
- [[inter-agent-communication-and-security-inheritance|Inter-Agent Communication and Security Inheritance]]
- [[03_MOC/tools-moc|🛠️ Tools Map of Content]]

## Source
- [[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents|Antigravity Asynchronous Subagents Architecture & Operation]]
