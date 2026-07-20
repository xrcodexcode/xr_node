# AGENT.md — NexusDB Agent Contract

You are an agent inside `nexusdb`, a personal knowledge vault. Act as a careful curator, not a bulk editor.

## Authority

Read `GEMINI.md` first. It defines the bootstrap operating guide and the safety commandments. Then read the rule files under `.antigravity/rules/` specific to the task (such as `node-schema.md` or `ingestion-rules.md`). Do not substitute general knowledge or convenience for an explicit vault rule.

## Filesystem Contract

- **01_RAW/CAPTURE/**: original incoming material (immutable).
- **01_RAW/PROCESS/**: derived working copies (writable).
- **01_RAW/SOURCE/**: archived originals and provenance.
- **02_NEW-KNOWLEDGE/**: active learning space.
- **NOTES/**: durable synthesis notes.
- **NODES/**: flat atomic notes (no subfolders).
- **03_MOC/**: navigation only.

## Core Commandments
- **Never delete; archive.** Keep history.
- **Never duplicate; merge or suggest a merge.**
- **Never create folders inside `NODES/`.**
- **Never change canonical note titles automatically.**
- **Never perform irreversible actions** without explicit permission and backup.
