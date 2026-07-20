---
id: 822b76ab-74a1-4635-8b70-078f39cb0389
title: Cheatsheet — Learn 99% Claude & Codex in 25 mins
type: atomic-note
status: linked
domain: general
source_type: null
created: 2026-07-14
updated: 2026-07-18
review: 2026-10-16
confidence: 95
version: 1
aliases: []
tags:
  - ai
  - ml
  - yt
  - productivity
owner_moc: AI & Machine Learning Map of Content
sources:
  - [[learn-99-percent-claude-and-codex-in-25-mins]]
related:
  - bypass-ask-permissions-mode
  - external-code-review-guardrails
  - local-filesystem-agent-advantage
  - loop-engineering
  - pkm-development-phases
  - self-fixing-code-loops
schema_version: 3
source: "[[learn-99-percent-claude-and-codex-in-25-mins]]"
---

# Cheatsheet — Learn 99% Claude & Codex in 25 mins

## Core idea
This cheatsheet consolidates the core concepts of context engineering, harness engineering, and self-fixing loop engineering discussed in the "Learn 99% Claude & Codex in 25 mins" video transcript by Harnoor Singh.

## Why it matters / connection
### 🏗️ PKM and AI Development Lifecycle
- **Context Engineering**: Prompt creation and optimizing instructions (context) fed into the LLM.
- **Harness Engineering**: Structuring directories and configuration files (`agents.md`, `claude.md`, `todos.md`) locally to guide the agent context.
- **Loop Engineering**: Orchestrating autonomous runs where agents write code, invoke validators, and update indexes without human interaction.

### 🔌 Connectors, Skills, and Tools
- **CLI Advantage**: Local CLI tools access the host computer, enabling recursion, file edits, and search across thousands of files directly.
- **Connectors**: Connecting Claude to external APIs (Gmail, Google Drive, Calendar, Linear, Excalidraw, Chrome Control).
- **Compaction**: Running `/compact` or `/fork` inside Claude Code sessions to compress chat context history and optimize token usage.
- **Bypass Permissions**: Setting the `--bypass-ask-permission` flag (alias `CC`) to allow agents to execute terminal scripts and modify files autonomously.

### 🛡️ Code Review Guardrails
- **Separation of Concerns**: The AI writing the code should not be the one reviewing it.
- **CodeRabbit Integration**: Automating pull request reviews via CodeRabbit CLI inside terminal loops.
- **Self-Fixing Code Loop**: A pipeline where CodeRabbit flags a bug and the CLI agent immediately consumes the review comments to write the fix.

## Links
- [[learn-99-percent-claude-and-codex-in-25-mins-moc|Learn 99% Claude & Codex MOC]]
- [[yt-moc|YouTube MOC]]
- [[pkm-development-phases|PKM Development Phases]]
- [[bypass-ask-permissions-mode|Bypass Ask Permissions Mode]]
- [[local-filesystem-agent-advantage|Local File System Access Advantage]]
- [[external-code-review-guardrails|External Code Review Guardrails]]
- [[self-fixing-code-loops|Self-Fixing Code Loops]]
- [[learn-99-percent-claude-and-codex-in-25-mins|Source Note — Learn 99% Claude & Codex in 25 mins]]


## Related Concepts
- [[loop-engineering]] — Note 'Cheatsheet — Learn 99% Claude & Codex in 25 mins' extends the principles discussed in 'Loop Engineering'.
