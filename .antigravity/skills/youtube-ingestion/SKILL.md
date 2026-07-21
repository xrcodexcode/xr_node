---
name: youtube-knowledge-ingestion
description: Ingest YouTube transcripts by creating a single detailed study/reference note regardless of video length. Places notes in 02_NEW-KNOWLEDGE for active learning, which are later promoted to NOTES/ as synthesis references.
version: 4.0.0
---

# YouTube Ingestion Skill

## Mission

Transform YouTube transcripts into high-fidelity, detailed reference notes to support active learning.

---

## Operating Rules

### Rule 1: Detailed Reference Focus
During initial ingestion, do NOT automatically extract atomic notes, cheatsheets, or MOCs. The output must consist entirely of detailed, comprehensive study notes containing the full context, examples, and claims of the video.

### Rule 2: Chronological & Logical Completeness
The detailed notes must preserve the sequential flow of the transcript, capturing key definitions, arguments, analogies, and book/source references.

### Rule 3: Single Consolidated Note Constraint
- Always merge and output the detailed notes into **one single comprehensive file**, regardless of the video length or transcript size. Do not split the output into multiple files.

---

## Ingestion Workflow Pipeline

1. **Capture**: Transcript is fetched and saved to `01_RAW/CAPTURE`.
2. **Process**: The transcript is parsed, cleaned of timestamp/ASR noise, and structured into detailed note drafts inside `01_RAW/PROCESS`.
3. **Consolidation**: Ensure all transcript parts are consolidated into a single comprehensive draft note.
4. **Promotion to Learning**: Upon user approval, the detailed note files move to `02_NEW-KNOWLEDGE` (the active learning space), and the original transcript moves to `01_RAW/SOURCE`.
5. **Promotion to NOTES**: After the user reviews and studies the files, the detailed notes are promoted to `NOTES/` to serve as permanent synthesis wiki pages.
6. **Atomic Extraction**: Atomic concept notes are extracted into `NODES/` at a later stage using a dedicated atomization skill, rather than during initial transcript processing.
