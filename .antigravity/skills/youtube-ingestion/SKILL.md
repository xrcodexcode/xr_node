---
name: youtube-knowledge-ingestion
description: Ingest YouTube transcripts into a single detailed study note in 02_NEW-KNOWLEDGE for active learning using Frontmatter Schema v4, controlled tagging, code-switched language translation, Mermaid diagrams, and downstream atomization preparation.
version: 5.1.0
---

# YouTube Knowledge Ingestion Skill (v5.1.0)

## Mission

Transform raw YouTube transcripts (including long-form lectures, code-switched videos, interviews, and deep-dive case studies) into **exactly one high-fidelity, detailed study note** inside **nexusdb**.

The sole purpose of this skill during transcript ingestion is to produce a single, comprehensive reference note that preserves full context, detailed arguments, empirical data, timestamp citations `(MM:SS)`, and visual diagrams.

---

## Operating Governance & Safety Laws

### Law 1: Detailed Notes ONLY Constraint (Strict Scope Boundary)
- **Do NOT automatically create atomic notes (`02_NODES/`), separate cheatsheets, or new MOC files** during initial YouTube transcript ingestion.
- The output of this skill MUST consist of **EXACTLY ONE detailed study note file**.
- Extraction of atomic concepts into `NODES/` is strictly deferred to a separate, downstream atomization phase after the user reviews and studies the detailed note in `02_NEW-KNOWLEDGE/`.

### Law 2: CAPTURE Immutability & Stage Separation
- `01_RAW/CAPTURE/` is strictly **read-only**. Never edit, rename, overwrite, move, or delete original transcript files located in `01_RAW/CAPTURE/`.
- All parsing, translation, cleaning, and drafting MUST occur inside `01_RAW/PROCESS/`.
- Only upon explicit user approval, the generated detailed study note moves to `02_NEW-KNOWLEDGE/` (active learning workspace), and the original raw transcript file moves to `01_RAW/SOURCE/` for archival.

### Law 3: Timestamp Anchoring & Citation
- Every section heading, subtopic, claim, table metric, data point, diagram step, and quote MUST include exact timestamp ranges `(MM:SS - MM:SS)` or point timestamps `(MM:SS)` from the transcript.

### Law 4: Schema v4 Frontmatter Compliance
Every generated note must contain valid YAML frontmatter strictly complying with **Schema Version 4**:
```yaml
---
id: {{UUID_V4}}
title: "Detailed Study Notes — {{Title}}"
type: literature-note
status: learning
domain: {{DOMAIN}}
source_type: youtube
created: {{YYYY-MM-DD}}
updated: {{YYYY-MM-DD}}
review: {{DATE_PLUS_30_DAYS}}
confidence: 100
version: 1
aliases:
  - "{{Title}} Detailed Study Notes"
tags:
  - reference
  - case-study
owner_moc: yt-moc
sources:
  - "01_RAW/SOURCE/{{Source_Filename}}.md"
related: []
schema_version: 4
---
```

### Law 5: Controlled Tag Discipline
- Use ONLY approved discovery tags from `.antigravity/rules/tagging.md`:
  - `beginner`, `advanced`, `comparison`, `case-study`, `implementation`, `reference`, `history`, `decision`, `example`, `checklist`, `open-question`, `contrarian`.
- Never invent ad hoc tags.

---

## Advanced Content Extraction Directives

### 1. Code-Switched & Multilingual Handling (Hinglish/Bilingual)
- Translate non-English or code-switched explanations (e.g. Hinglish, Spanglish) into clear, professional English prose.
- Preserve technical terms, proper names, and specialized domain terminology accurately.
- For memorable or key speaker quotes originally spoken in Hindi/Hinglish, provide the English translation in prose and optionally retain the verbatim original quote inside a blockquote tagged with timestamp:
  > *"Original verbatim quote text"* (MM:SS) — *Translation / Context*

### 2. Structural Data & Visual Diagramming
- **Tables**: Convert comparative data, economic stats, timeline milestones, pricing models, and key metrics into formatted Markdown tables with explicit column headers and timestamp citations.
- **Mermaid Diagrams**: When the video describes a multi-step process, architectural workflow, supply chain, or causal chain, include a valid `mermaid` block:
  ```mermaid
  flowchart TD
      A["Step 1 (MM:SS)"] --> B["Step 2 (MM:SS)"]
      B --> C["Outcome (MM:SS)"]
  ```

### 3. Multi-Speaker & Interview Attribution
- For multi-speaker videos (podcasts, panels, debates, interviews):
  - Explicitly attribute claims, positions, and counter-arguments to their respective speakers `(Speaker Name, MM:SS)`.
  - Maintain neutral, objective reporting when speakers present conflicting views.

### 4. Downstream Atomization Readiness (Candidate Tagging Only)
- Include a dedicated section titled `## 💡 Downstream Atomic Concept Candidates` at the end of the detailed study note.
- List potential standalone evergreen concepts, definitions, or methods that should later be extracted into `NODES/` during a separate atomic processing run:
  - `- [[NODES/Concept Title]]: One-sentence summary description`

---

## Complete 7-Step Ingestion Pipeline

```text
01_RAW/CAPTURE (Read-Only Source)
       │
       ▼
01_RAW/PROCESS (Working Draft, Translation & Diagramming)
       │
       ▼ (User Approval)
02_NEW-KNOWLEDGE (Single Detailed Study Note) ───► Source archived to 01_RAW/SOURCE
       │
       ▼ (User Learning & Mastery)
NOTES/ (Synthesis Wiki)
       │
       ▼ (Subsequent Separate Atomization Step)
NODES/ (Permanent Evergreen Concepts)
```

### Step 1: Input Verification
- Locate raw transcript file inside `01_RAW/CAPTURE/`.
- Extract video title, channel/creator, watch URL, duration, and speaker names.

### Step 2: Staging in Process Workspace
- Copy raw transcript to `01_RAW/PROCESS/<slugified-title>.md`.
- Keep all intermediate notes and drafts isolated inside `01_RAW/PROCESS/`.

### Step 3: Transcript Normalization & Cleaning
- Strip ASR noise, timing artifacts, and duplicate captions.
- Translate code-switched phrases to professional English while preserving complete technical detail.

### Step 4: High-Fidelity Detailed Note Drafting
- Structure content into sections using timestamps `(MM:SS)`:
  - **Overview**: Title, Creator, Watch Link, High-Level Executive Summary.
  - **Section Breakdown**: Chronological topic headings `(MM:SS - MM:SS)` with detailed claims, context, tables, and Mermaid flowcharts.
  - **Key Takeaways & Direct Quotes**: Core takeaways and notable quotes with timestamps `(MM:SS)`.
  - **Downstream Atomic Candidates**: List candidate `[[NODES/...]]` concepts for future extraction.
  - **Metadata Links**: Wikilink to `[[01_RAW/SOURCE/<filename>.md]]` and `[[03_MOC/yt-moc|YouTube MOC]]`.

### Step 5: Metadata & Schema Validation
- Generate UUID v4 `id`.
- Verify `schema_version: 4` and controlled tags against `tagging.md`.

### Step 6: User Approval & Promotion Execution
- Move detailed study note from `01_RAW/PROCESS/` to `02_NEW-KNOWLEDGE/<slugified-title>.md`.
- Move raw transcript from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
- Clear temporary files from `01_RAW/PROCESS/`.

### Step 7: Graph Integration & Index Rebuild
- Link note to `[[03_MOC/yt-moc|YouTube MOC]]`.
- Run Python automation script to rebuild MOC graph:
  ```powershell
  .\.venv\Scripts\python .antigravity/automations/generate_mocs.py
  ```

---

## Pre-Flight Quality Audit Checklist

Before promoting to `02_NEW-KNOWLEDGE/`, verify:
- [ ] Source file in `01_RAW/CAPTURE/` was untouched during processing.
- [ ] Output is contained in **EXACTLY ONE detailed study note file** (no atomic notes, cheatsheets, or extra MOCs generated).
- [ ] All code-switched or non-English text is translated into clear English prose with preserved technical terms.
- [ ] YAML frontmatter contains valid UUID v4, `schema_version: 4`, `type: literature-note`, and `status: learning`.
- [ ] Controlled tags match `.antigravity/rules/tagging.md`.
- [ ] Timestamp anchoring `(MM:SS)` present on all sections, subtopics, table metrics, and quotes.
- [ ] Included Mermaid diagram for complex process/flowchart if present in video.
- [ ] Candidate atomic concepts listed under `## 💡 Downstream Atomic Concept Candidates`.
- [ ] Note links to `[[03_MOC/yt-moc|YouTube MOC]]`.
