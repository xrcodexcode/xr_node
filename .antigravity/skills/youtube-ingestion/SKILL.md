---
name: youtube-knowledge-ingestion
description: Ingest YouTube transcripts into a single detailed study note in 02_NEW-KNOWLEDGE for active learning using Frontmatter Schema v4, controlled tagging, code-switched language translation, and Mermaid diagrams. Includes mandatory validation, hallucination prevention, knowledge coverage verification, and confidence assessment.
version: 7.0.0
---

# YouTube Knowledge Ingestion Skill (v7.0.0)

## Mission

Transform raw YouTube transcripts (including long-form lectures, code-switched videos, interviews, and deep-dive case studies) into **exactly one high-fidelity, detailed study note** inside **nexusdb**.

The sole purpose of this skill during transcript ingestion is to produce a single, comprehensive reference note that preserves full context, detailed arguments, empirical data, timestamp citations `(MM:SS)`, and visual diagrams.

---

## Golden Rule

This skill is an **ingestion pipeline**, not a summarization pipeline.

Its objective is **faithful knowledge transformation** rather than compression.

When forced to choose between brevity and completeness, **always choose completeness**.

Never intentionally reduce information density unless explicitly instructed by the user.

The primary objective is **100% knowledge preservation** while producing a readable, well-structured, factually faithful study note.

At no point should readability be improved by sacrificing information.

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

### Law 3: Hallucination Prevention (Non-Negotiable)

Never invent:
- facts
- statistics
- citations
- quotations
- research papers
- speaker opinions
- code
- dates
- companies
- products
- benchmark numbers

If the transcript does not explicitly contain information, state:

> "Not provided in the transcript."

Never fabricate missing details. This law has zero exceptions.

### Law 4: Clean Note Body Constraint (No Internal Audit Sections in Note File)
- **STRICTLY PROHIBITED**: Do NOT write internal validation checklists, "Verification & Audit Trail", or "Confidence Assessment" headings/sections inside the body of the generated study note markdown file.
- All verification checks, audit trails, and confidence assessments must be communicated **strictly within the chat response** when presenting the draft to the user.
- Keep the generated study note body pure, elegant, clean, and publication-ready.

---

## Processing State Machine

Every ingestion MUST follow the state machine below. **Never skip any state.**

```text
CAPTURE
    │
    ▼
PROCESSING
    │
    ▼
VALIDATING
    │
    ├──────────────┐
    │              │
Validation Pass    Validation Failed
    │              │
    ▼              ▼
READY_FOR_REVIEW  AUTO FIX
    │              │
    │              └───────► VALIDATING
    ▼
WAIT_FOR_USER_APPROVAL
    │
    ├──────────────┐
    │              │
approved         revision
    │              │
    ▼              │
PROMOTION         │
    │              │
    ▼              │
ARCHIVE SOURCE ◄──┘
    │
    ▼
REGENERATE MOCs
```

### State Descriptions

| State | Description |
|---|---|
| **CAPTURE** | Raw transcript located in `01_RAW/CAPTURE/`. Read-only. |
| **PROCESSING** | Active drafting in `01_RAW/PROCESS/`. Translation, structuring, diagramming. |
| **VALIDATING** | Mandatory validation phase (see below). All checks must pass. |
| **AUTO FIX** | If validation fails, automatically repair the issue and return to VALIDATING. |
| **READY_FOR_REVIEW** | All validations passed. Draft is ready for user inspection. |
| **WAIT_FOR_USER_APPROVAL** | **STOP EXECUTION.** Present draft path. Wait for explicit user response. |
| **PROMOTION** | Move draft from `01_RAW/PROCESS/` to `02_NEW-KNOWLEDGE/`. |
| **ARCHIVE SOURCE** | Move raw transcript from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`. |
| **REGENERATE MOCs** | Run MOC generation automation. |

---

## Advanced Content Extraction Directives

### 1. Code-Switched & Multilingual Handling (Hinglish/Bilingual)
- **100% English Output Mandate**: Translate all non-English, Hindi script, or code-switched explanations (e.g., Hinglish, Spanglish) into clear, professional English prose.
- **No Non-English Text in Notes**: Do NOT include Hindi script, Devanagari characters, or raw Hinglish phrases in the generated study note file.
- Preserve technical terms, proper names, and specialized domain terminology accurately.
- For key speaker quotes originally spoken in Hindi/Hinglish, provide clean English translations in blockquotes tagged with timestamp:
  > *"Translated English quote text"* (MM:SS) — *Context / Speaker*

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

### 4. Glossary Extraction

Maintain an internal glossary while processing.

For every important technical concept, record:
- **First appearance** (timestamp)
- **Definition** (as stated or implied in the transcript)
- **Frequency** (how often the concept is discussed)

The glossary should be integrated naturally into the study note where appropriate (e.g., as inline definitions on first use, or as a dedicated glossary section at the end for term-heavy videos).

### 5. Entity Extraction

Track all major entities mentioned throughout the transcript:
- People
- Organizations / Companies
- Libraries / Frameworks
- Datasets
- Programming Languages
- Algorithms / Models
- Protocols / Standards
- Products

These entities must remain **internally consistent** in naming, spelling, and capitalization throughout the entire document.

---

## Complete Ingestion Pipeline

```text
01_RAW/CAPTURE (Read-Only Source)
       │
       ▼
01_RAW/PROCESS (Working Draft — PROCESSING state)
       │
       ▼
VALIDATING (Mandatory Validation Phase — AUTO FIX loop if needed)
       │
       ▼
READY_FOR_REVIEW → WAIT_FOR_USER_APPROVAL (STOP & WAIT)
       │
       ▼ (Explicit User Approval Required)
02_NEW-KNOWLEDGE (Single Detailed Study Note) ───► Source archived to 01_RAW/SOURCE
       │
       ▼
REGENERATE MOCs
       │
       ▼ (User Learning & Mastery)
NOTES/ (Synthesis Wiki)
```

### Step 1: Input Verification (CAPTURE)
- Locate raw transcript file inside `01_RAW/CAPTURE/`.
- Extract video title, channel/creator, watch URL, duration, and speaker names.

### Step 2: Staging in Process Workspace (PROCESSING)
- Create working note draft in `01_RAW/PROCESS/detailed-study-notes-<slugified-title>.md`.
- Keep all intermediate notes and drafts isolated inside `01_RAW/PROCESS/`.

### Step 3: Transcript Normalization & Cleaning (PROCESSING)
- Strip ASR noise, timing artifacts, and duplicate captions.
- Translate code-switched phrases to professional English while preserving complete technical detail.
- Build internal glossary and entity tracking lists.

### Step 4: High-Fidelity Detailed Note Drafting (PROCESSING)
- Structure content into sections using timestamps `(MM:SS)`:
  - **Overview**: Title, Creator, Watch Link, High-Level Executive Summary.
  - **Section Breakdown**: Chronological topic headings `(MM:SS - MM:SS)` with detailed claims, context, tables, and Mermaid flowcharts.
  - **Key Takeaways & Direct Quotes**: Core takeaways and notable quotes with timestamps `(MM:SS)`.
  - **Metadata Links**: Wikilink to `[[01_RAW/SOURCE/<filename>.md]]`.

### Step 5: Metadata & Schema Validation (VALIDATING)
- Generate UUID v4 `id`.
- Verify `schema_version: 4` and controlled tags against `tagging.md`.
- Execute the **Mandatory Validation Phase** (see next section).
- Execute **Knowledge Coverage Verification** (see below).
- Execute **Confidence Assessment** (see below).
- If any check fails → enter **AUTO FIX** state → repair → return to **VALIDATING**.

### Step 6: User Approval & Pending Promotion (WAIT_FOR_USER_APPROVAL)
- Save draft in `01_RAW/PROCESS/detailed-study-notes-<slugified-title>.md`.
- **STOP EXECUTION** and present the file path to the user for review.
- Do NOT move the draft to `02_NEW-KNOWLEDGE/` or archive the source to `01_RAW/SOURCE/` until the user provides explicit approval.

### Step 7: Promotion & Graph Integration (PROMOTION → ARCHIVE → REGENERATE MOCs)
- Upon user approval:
  1. Move detailed study note from `01_RAW/PROCESS/` to `02_NEW-KNOWLEDGE/detailed-study-notes-<slugified-title>.md`.
  2. Move raw transcript from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
  3. Run Python automation script to rebuild MOC graph:
     ```powershell
     .\.venv\Scripts\python .antigravity/automations/generate_mocs.py
     ```

---

## Mandatory Validation Phase

Before requesting user approval, perform a **complete validation pass**. The draft MUST satisfy **ALL** of the following checks. If ANY validation fails, do NOT ask the user for approval — automatically repair the issue and repeat validation until all checks pass.

### Structure Validation

- [ ] Valid Markdown syntax
- [ ] Valid YAML frontmatter (parseable, no syntax errors)
- [ ] `schema_version: 4` present
- [ ] UUID v4 `id` present and valid
- [ ] `title` present and matches filename
- [ ] All required metadata fields populated
- [ ] Tags are controlled (match `.antigravity/rules/tagging.md`)

### Content Validation

- [ ] Chronological order preserved
- [ ] No missing sections (compared against transcript structure)
- [ ] No duplicated headings
- [ ] No truncated paragraphs
- [ ] All timestamps preserved `(MM:SS)`
- [ ] Tables rendered correctly (valid Markdown table syntax)
- [ ] Mermaid syntax valid (no rendering errors)
- [ ] Speaker attribution preserved (for multi-speaker videos)
- [ ] Quotations preserved verbatim
- [ ] Examples preserved in full

### Translation Validation

- [ ] Meaning has not changed from original
- [ ] Technical terminology remains accurate
- [ ] No explanation has been simplified beyond the original's complexity
- [ ] No contextual nuance has been removed

### Internal Consistency Validation

- [ ] Identical terminology used throughout
- [ ] Identical spelling of names, terms, and concepts
- [ ] Identical capitalization conventions
- [ ] No contradictory statements within the document

---

## Knowledge Coverage Verification

After drafting, compare the generated note against the transcript. Ask internally:

| Question | Expected Answer |
|---|---|
| Did any topic disappear? | **NO** |
| Did any explanation become shorter? | **NO** |
| Did any example disappear? | **NO** |
| Did any statistic disappear? | **NO** |
| Did any quote disappear? | **NO** |
| Did any timestamp disappear? | **NO** |
| Did any diagram-worthy process disappear? | **NO** |

If the answer to any question is **YES**:
- Return to **PROCESSING** state.
- Restore the missing knowledge.
- Re-enter **VALIDATING** state.

---

## Confidence Assessment

Before entering the **WAIT_FOR_USER_APPROVAL** state, perform a self-review and generate an internal confidence assessment.

Example format:

```
Confidence: High

Potential Weak Areas:
- unclear speaker at 42:18
- timestamp may be ±2 seconds
- chart interpretation uncertain
```

**Rules:**
- If confidence is **High** → proceed to present the draft for user approval.
- If confidence is **below High** → attempt another refinement pass before presenting the draft.
- Include the confidence assessment in the message to the user when presenting the draft.

---

## Duplicate Detection

When processing long videos, detect repeated explanations.

- Repeated explanations of the same concept should be **merged into one coherent explanation**.
- Never remove genuinely new information — only consolidate true repetitions.
- When merging, preserve the **earliest timestamp** for first mention and note additional timestamps where the concept was revisited.

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
3. Run the **Mandatory Validation Phase** on the segment.
4. Run **Knowledge Coverage Verification** on the segment.
5. Run **Confidence Assessment** on the segment.
6. Save the draft inside `01_RAW/PROCESS/` using the naming convention:
   ```
   <video-slug>-part-01.md
   <video-slug>-part-02.md
   <video-slug>-part-03.md
   ...
   ```
7. Stop after generating the current draft.
8. Present the draft to the user for review (include confidence assessment).
9. Wait for explicit instructions before continuing.

### Recovery Checkpoints

After every completed segment, save processing metadata internally.

Example:

```
Current Part: Part 2 of 5
Last Timestamp: 58:42
Status: Approved
```

**Rules:**
- If execution stops unexpectedly, resume from the latest completed checkpoint.
- Never restart from Part 1 unless explicitly requested by the user.
- Checkpoint metadata should track: part number, total parts, last processed timestamp, approval status.

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

For multi-part processing, every new segment MUST continue naturally from the previous segment.

- Do not restart explanations.
- Do not redefine concepts already explained.
- Avoid repetitive introductions.
- Maintain one consistent writing style.
- Maintain one consistent terminology set.
- Preserve context from previous parts.
- Maintain identical formatting.
- Maintain identical frontmatter structure.
- Preserve chronological flow.
- Preserve timestamp references.
- Ensure that no knowledge is lost between segments.

Each segment should read like one chapter of a much larger document. The final merged document must read as though it was written in one uninterrupted pass.

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
- Run the **Mandatory Validation Phase** on the merged document.
- Run **Knowledge Coverage Verification** on the merged document.
- Run **Confidence Assessment** on the merged document.

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

## Promotion Requirements

Promotion to `02_NEW-KNOWLEDGE/` is allowed **ONLY** when ALL of the following are true:

- [ ] Mandatory Validation Phase passed (all checks green)
- [ ] Knowledge Coverage Verification passed (no missing knowledge)
- [ ] Confidence Assessment is **High**
- [ ] User explicitly approved the draft
- [ ] Source file in `01_RAW/CAPTURE/` remains unchanged
- [ ] Final merged document exists (for long videos with multiple segments)

If any condition is not met: **STOP. Wait for user instructions. Never bypass this rule.**

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
- [ ] All Mandatory Validation checks passed.
- [ ] Knowledge Coverage Verification passed.
- [ ] Confidence Assessment is High.
- [ ] No hallucinated content (Law 3 compliance verified).
- [ ] Glossary and entity consistency verified.
