---
name: agents
description: Displays and lists all available agents, subagents, and slash commands in NexusDB along with their operational roles, capabilities, and execution rules.
version: 1.0.0
---

# NexusDB Agents Overview Skill (`/agents`)

## 🎯 Purpose
Provide an exhaustive registry of all available autonomous agents, subagents, and slash commands inside **NexusDB**.

---

## 🤖 Registered Agents & Slash Commands

| Command | Agent / Subagent Name | Role & Mission | Key Capabilities |
| :--- | :--- | :--- | :--- |
| **`/youtube-ingestion-agent`** | `youtube-ingestion-agent` | YouTube Ingestion Specialist | Transforms raw transcripts into high-fidelity study notes with Schema v4, Hinglish translation, Markdown tables, and Mermaid flowcharts. |
| **`/knowledge-agent`** | `knowledge-agent` | Knowledge Transformation Agent | Converts raw captured material into structured, modular, and traceable vault knowledge. |
| **`/planner-agent`** | `planner-agent` | Task Decomposition & Routing | Deconstructs complex user requests, manages subagent routing, and enforces Authority Hierarchy. |
| **`/review-agent`** | `review-agent` | Quality & Schema Auditor | Audits metadata frontmatter against schemas, checks graph connectivity, and approves stage promotions. |
| **`/writing-agent`** | `writing-agent` | Synthesis & Wiki Author | Compiles discrete atomic nodes into comprehensive explanatory narratives, articles, and wiki pages. |
| **`/maintenance-agent`** | `maintenance-agent` | Graph & Vault Diagnostic Agent | Monitors graph health, detects orphan notes, enforces flat folder constraints in `NODES/`, and builds diagnostic reports. |
| **`/code-auditor`** | `code-auditor` | Security & Code Auditor | Conducts static code analysis, security vulnerability audits, memory safety checks, and code reviews. |

---

## 🛠️ Specialized Vault Skills

| Command | Skill Name | Description |
| :--- | :--- | :--- |
| **`/biography-research`** | `biography-research` | Conducts 20-tier verified biographical research on individuals to produce `01_RAW/<slug>_raw.md`. |
| **`/atomization`** | `atomization` | Atomizes study notes into singular, evergreen concept notes inside `NODES/`. |
| **`/ingestion`** | `ingestion` | Ingests EPUB books and long-form literature into structured vault notes. |
| **`/local-rag`** | `local-rag` | Zero-RAM file-based knowledge search across NexusDB Markdown notes using MOC navigation and backlinks. |

---

## 📋 How to Invoke
- **Via Slash Command**: Type `/<command>` in the chat UI (e.g. `/agents`, `/youtube-ingestion-agent`, `/review-agent`).
- **Via Subagent Call**: Invoke any subagent in conversation using `invoke_subagent` with the agent's `TypeName`.
