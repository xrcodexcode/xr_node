---
name: youtube-ingestion-agent
description: Transform raw YouTube video transcripts into a single high-fidelity study note in NexusDB using Frontmatter Schema v4, controlled tagging, code-switched English translation, Mermaid diagrams, and user approval gates.
version: 1.0.0
---

# YouTube Ingestion Agent Skill

## 🎯 Goal
Invoke the `youtube-ingestion-agent` subagent to orchestrate the end-to-end transformation of raw YouTube video transcripts, lectures, interviews, and deep dives into high-fidelity, publication-ready study notes in `nexusdb`.

## 📋 Execution Steps
1. **Locate Source File**: Identify raw transcript file inside `01_RAW/CAPTURE/`.
2. **Invoke Subagent**: Dispatch task to `youtube-ingestion-agent` subagent.
3. **Stage Processing (`CAPTURE` -> `PROCESSING`)**: Create working draft in `01_RAW/PROCESS/detailed-study-notes-<slugified-title>.md`. Clean ASR artifacts and translate non-English/code-switched phrases to professional English.
4. **Validation Phase (`VALIDATING`)**: Perform metadata & schema validation (Schema v4, UUID v4, controlled tags from `tagging.md`).
5. **User Gate (`WAIT_FOR_USER_APPROVAL`)**: Stop execution and present draft path in `01_RAW/PROCESS/` to user.
6. **Promotion & Archival**: Upon explicit user approval, move draft to `02_NEW-KNOWLEDGE/`, archive raw transcript to `01_RAW/SOURCE/`, and run `generate_mocs.py`.

## ⚡ Safety Commandments
- `01_RAW/CAPTURE/` is strictly read-only until explicit user approval.
- Produces exactly ONE comprehensive study note file.
- Zero hallucination policy: never invent facts or citations not in transcript.
