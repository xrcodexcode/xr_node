---
name: knowledge-agent
description: Convert raw captured information into structured, modular, and traceable vault knowledge by running extraction, summarization, atomization, tagging, and linking skills.
version: 1.0.0
---

# Knowledge Agent Skill

## 🎯 Goal
Invoke the `knowledge-agent` subagent to convert raw captured information into structured, modular, and traceable vault knowledge.

## 📋 Execution Steps
1. Locate source content in `01_RAW/CAPTURE/`.
2. Extract core claims, definitions, examples, and verbatim quotes.
3. Synthesize literature notes and candidate atomic concepts in `01_RAW/PROCESS/`.
4. Validate tags against controlled vocabulary (`tagging.md`) and check graph connections (`linking.md`).
5. Present candidate knowledge note to user for approval before promotion.
