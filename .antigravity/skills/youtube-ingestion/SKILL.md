---
name: youtube-knowledge-ingestion
description: Ingest YouTube transcripts into a single detailed study note in 02_NEW-KNOWLEDGE for active learning using Frontmatter Schema v4, controlled tagging, code-switched language translation, and Mermaid diagrams.
version: 6.0.0
---

# YouTube Knowledge Ingestion Skill (v6.0.0)

## Mission

Transform raw YouTube transcripts (including long-form lectures, code-switched videos, interviews, and deep-dive case studies) into **exactly one high-fidelity, detailed study note** inside **nexusdb**.

The sole purpose of this skill during transcript ingestion is to produce a single, comprehensive reference note that preserves full context, detailed arguments, empirical data, timestamp citations `(MM:SS)`, and visual diagrams.

---

## Operating Governance & Safety Laws

### Law 1: Detailed Notes ONLY Constraint (Strict Scope Boundary)
- **STRICTLY PROHIBITED**: Do NOT create any new MOC (Map of Content) files, atomic notes (`02_NODES/`), or cheatsheet files during YouTube transcript ingestion.
- The output of this skill MUST consist of **EXACTLY ONE detailed study note file** placed in `01_RAW/PROCESS/` pending user approval.
- Extraction of atomic concepts into `NODES/` or MOC generation is strictly out of scope for this skill.

### Law 2: CAPTURE Immutability & Stage Separation
- `01_RAW/CAPTURE/` is strictly **read-only** until user approval. Never edit, rename, overwrite, move, or delete original transcript files located in `01_RAW/CAPTURE/` during processing.
- All parsing, translation, cleaning, and drafting MUST occur inside `01_RAW/PROCESS/`. The generated note MUST remain in `01_RAW/PROCESS/` when processing completes.
- **CRITICAL REQUIREMENT: WAIT FOR USER APPROVAL**. You MUST stop execution after drafting in `01_RAW/PROCESS/` and present the generated draft note path to the user. Do NOT automatically move files to `02_NEW-KNOWLEDGE/` or archive sources to `01_RAW/SOURCE/` without receiving explicit user approval first.
- Only AFTER explicit user approval, move the generated detailed study note from `01_RAW/PROCESS/` to `02_NEW-KNOWLEDGE/` and archive the original raw transcript file to `01_RAW/SOURCE/`.

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

---

## Complete 7-Step Ingestion Pipeline

```text
01_RAW/CAPTURE (Read-Only Source)
       │
       ▼
01_RAW/PROCESS (Working Draft in 01_RAW/PROCESS — WAIT FOR USER APPROVAL)
       │
       ▼ (Explicit User Approval Required)
02_NEW-KNOWLEDGE (Single Detailed Study Note) ───► Source archived to 01_RAW/SOURCE
       │
       ▼ (User Learning & Mastery)
NOTES/ (Synthesis Wiki)
```

### Step 1: Input Verification
- Locate raw transcript file inside `01_RAW/CAPTURE/`.
- Extract video title, channel/creator, watch URL, duration, and speaker names.

### Step 2: Staging in Process Workspace
- Create working note draft in `01_RAW/PROCESS/detailed-study-notes-<slugified-title>.md`.
- Keep all intermediate notes and drafts isolated inside `01_RAW/PROCESS/`.

### Step 3: Transcript Normalization & Cleaning
- Strip ASR noise, timing artifacts, and duplicate captions.
- Translate code-switched phrases to professional English while preserving complete technical detail.

### Step 4: High-Fidelity Detailed Note Drafting
- Structure content into sections using timestamps `(MM:SS)`:
  - **Overview**: Title, Creator, Watch Link, High-Level Executive Summary.
  - **Section Breakdown**: Chronological topic headings `(MM:SS - MM:SS)` with detailed claims, context, tables, and Mermaid flowcharts.
  - **Key Takeaways & Direct Quotes**: Core takeaways and notable quotes with timestamps `(MM:SS)`.
  - **Metadata Links**: Wikilink to `[[01_RAW/SOURCE/<filename>.md]]`.

### Step 5: Metadata & Schema Validation
- Generate UUID v4 `id`.
- Verify `schema_version: 4` and controlled tags against `tagging.md`.

### Step 6: User Approval & Pending Promotion (STOP & WAIT)
- Save draft in `01_RAW/PROCESS/detailed-study-notes-<slugified-title>.md`.
- **STOP EXECUTION** and present the file path to the user for review.
- Do NOT move the draft to `02_NEW-KNOWLEDGE/` or archive the source to `01_RAW/SOURCE/` until the user provides explicit approval.

### Step 7: Promotion & Graph Integration (Post-Approval Only)
- Upon user approval:
  1. Move detailed study note from `01_RAW/PROCESS/` to `02_NEW-KNOWLEDGE/detailed-study-notes-<slugified-title>.md`.
  2. Move raw transcript from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
  3. Run Python automation script to rebuild MOC graph:
     ```powershell
     .\.venv\Scripts\python .antigravity/automations/generate_mocs.py
     ```

---

## Long Video Processing Rule (Videos Longer Than 30 Minutes)

When processing YouTube videos longer than **30 minutes**, do **NOT** process the entire transcript in a single run.

The objective is to achieve **100% knowledge preservation** while remaining within the model's context window.

### Segmentation Rules

- Divide the transcript into segments of approximately **30 minutes** each.
- Whenever possible, split at **natural topic boundaries** instead of cutting a discussion in the middle.
- If a topic spans multiple segments, continue it seamlessly into the next segment.
- Never omit, compress, or oversummarize content simply because the transcript is long.
- Every concept, explanation, example, statistic, argument, quote, table, and timestamp must be preserved.

### Processing Workflow

For each segment:

1. Process only the current segment.
2. Produce a complete high-fidelity draft.
3. Save the draft inside `01_RAW/PROCESS/` using the naming convention:
   ```
   <video-slug>-part-01.md
   <video-slug>-part-02.md
   <video-slug>-part-03.md
   ...
   ```
4. Stop after generating the current draft.
5. Present the draft to the user for review.
6. Wait for explicit instructions before continuing.

### User Approval Workflow

After each segment, wait for one of the following commands:

#### "approved"
- Lock the current segment.
- Do not modify it again unless explicitly requested.

#### "proceed"
- Begin processing the next segment.

#### Revision Request
- Apply every requested modification.
- Do not continue until the user is satisfied.

Never continue automatically.

### Continuity Rules

Each segment must:

- Preserve context from previous parts.
- Avoid unnecessary repetition.
- Maintain identical formatting.
- Maintain consistent terminology.
- Maintain identical frontmatter.
- Preserve chronological flow.
- Preserve timestamp references.
- Ensure that no knowledge is lost between segments.

Each segment should read like one chapter of a much larger document.

### Final Merge (After Last Segment)

Once **all segments have been approved**, perform a final consolidation.

#### Merge Requirements

- Merge every approved segment into **one continuous document**.
- Remove duplicate introductions, conclusions, and repeated explanations.
- Reorder sections if necessary to improve readability while preserving chronology.
- Preserve every timestamp.
- Preserve every Mermaid diagram.
- Preserve every table.
- Preserve every quote.
- Preserve every technical detail.
- Preserve all metadata.
- Ensure the final document reads as if it was written in one pass.

### Final Output

Final outputs should be:

```
01_RAW/PROCESS/
    <video-slug>-part-01.md
    <video-slug>-part-02.md
    <video-slug>-part-03.md
    ...
    <video-slug>-final.md   ← merged document (post-approval)
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
