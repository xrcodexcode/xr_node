---
id: b329f101-50d4-4a2e-81fa-d3a908a82910
title: Inter-Agent Communication and Security Inheritance
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
  - Subagent Nesting Limit
  - Subagent Security Inheritance
tags:
  - reference
  - implementation
owner_moc: 🛠️ Tools Map of Content
sources:
  - "[[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents]]"
related:
  - asynchronous-subagents
  - custom-subagent-markdown-schema
  - subagent-lifecycle-states
schema_version: 4
---

# Inter-Agent Communication and Security Inheritance

## Definition
Inter-Agent Communication and Security Inheritance define how autonomous agents exchange messages, maintain security boundaries, and enforce subagent nesting depth limits.

## Explanation

### Messaging & Auto-Wake
- Agents communicate by sending messages to specific agent conversation IDs.
- Sending a message to an `Idle` subagent automatically re-awakens it to `Running` state without resetting its prior context.

### Nesting Depth Limit
- To prevent runaway recursion or resource exhaustion, a strict maximum nesting depth of **10 levels** (subagents spawning subagents) is enforced across the system.

### Security Inheritance & Permission Bubbling
- Subagents automatically inherit the parent agent's security configurations, including allowed terminal command prefixes, file read/write scopes, and sandbox levels.
- If a subagent attempts an action requiring explicit user authorization, the request **bubbles up** to the primary UI / Subagent panel for human approval.

## Related
- [[asynchronous-subagents|Asynchronous Subagents]]
- [[custom-subagent-markdown-schema|Custom Subagent Markdown Schema]]
- [[subagent-lifecycle-states|Subagent Lifecycle States]]
- [[03_MOC/tools-moc|🛠️ Tools Map of Content]]

## Source
- [[02_NEW-KNOWLEDGE/antigravity-asynchronous-subagents|Antigravity Asynchronous Subagents Architecture & Operation]]
