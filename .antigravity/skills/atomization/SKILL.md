---
name: atomization
description: Create schema-compliant atomic notes in NODES/ from any input source — concepts, study notes, literature notes, or raw research — with deduplication, controlled tagging, MOC linkage, and relationship discovery. Activate this skill when the user asks to create atomic notes, extract concepts from study notes, atomize knowledge, or promote content to NODES/.
version: 1.0.0
---

# Atomization Skill (Atomic Note Creation Engine)

## Mission

Transform any knowledge input into **one or more standalone, permanent atomic notes** inside `NODES/`.

Each note produced by this skill must represent **exactly one concept, definition, method, example, fact, or quote**. Every note must be:
- **Schema-compliant**: Valid Frontmatter Schema v4 with all required fields.
- **Deduplicated**: Verified against all existing nodes before creation.
- **Graph-connected**: Linked to at least one MOC and at least one related node.
- **Source-traced**: Provenance chain intact back to original source or marked as original thought.

This skill is the **final transformation step** in the NexusDB knowledge pipeline — it takes validated, understood knowledge and crystallizes it into permanent reusable atoms.

---

## Governance Laws

These laws are **non-negotiable**. Every atomic note produced by this skill must satisfy all seven laws before being written to disk.

### Law 1: Single-Idea Purity
- Each atomic note must answer **exactly one question** or state **exactly one reusable concept**.
- If a concept has multiple distinct sub-ideas, split them into separate notes and cross-link them.
- A note that requires more than 3 paragraphs of explanation to be self-contained is likely **too broad** — decompose it.
- **Test**: Can this note be meaningfully linked from an unrelated domain? If yes, it is atomic. If it only makes sense within one specific narrative, it is not yet atomic.

### Law 2: Deduplication Before Creation
- **Never create a note without first searching for duplicates** in `NODES/`.
- Execute the full 3-tier deduplication protocol (defined in Section 6) before drafting any note.
- If a near-duplicate is found:
  - Do **NOT** silently create a new note.
  - Present the existing note to the user and offer: **(a) merge into existing**, **(b) differentiate with a distinct angle**, or **(c) cancel creation**.
- If a partial overlap is found (existing note covers 30–70% of the new concept), suggest updating the existing note with the new information rather than creating a separate note.

### Law 3: Schema v4 Strict Compliance
- Every note must use **Frontmatter Schema Version 4** as defined in `.antigravity/schemas/frontmatter.md`.
- Required fields with no exceptions:
  - `id`: Fresh UUID v4, generated at creation time. Never reuse.
  - `title`: Title Case, must match filename exactly.
  - `type`: One of the approved note types from `.antigravity/schemas/note-types.md`.
  - `status`: `atomic` for new standalone concepts; `linked` once integrated into the graph.
  - `domain`: Classify based on content (e.g., `ai`, `general`, `psychology`, `business`). Default to `general` only when the concept genuinely spans multiple domains.
  - `source_type`: Set based on origin (`book`, `youtube`, `article`, `podcast`, `web-clip`, `course`, `null`). Use `null` for original thought.
  - `created` / `updated`: ISO date (`YYYY-MM-DD`) of creation.
  - `review`: Set to `created + 90 days` by default.
  - `confidence`: Integer `0–100`. Use `95` for well-sourced facts, `80` for inferred concepts, `60` for speculative or partially verified claims.
  - `version`: Always `1` for new notes.
  - `schema_version`: Always `4`.
  - `owner_moc`: The **exact title string** of the primary MOC (not a wikilink, not a filename — the title as it appears in the MOC's frontmatter).
  - `sources`: Array of wikilinks or paths to source notes (e.g., `["[[source-note]]"]`).
  - `related`: Array of related note **filenames without extension** (e.g., `["gradient-descent", "backpropagation"]`).
  - `aliases`: Array of alternate names, abbreviations, or synonyms. Empty array `[]` if none.
  - `tags`: Array of controlled discovery tags from `.antigravity/rules/tagging.md`. Empty array `[]` if no tags apply.

### Law 4: Controlled Tag Discipline
- Use **ONLY** the 12 approved discovery tags defined in `.antigravity/rules/tagging.md`:
  - `beginner`, `advanced`, `comparison`, `case-study`, `implementation`, `reference`, `history`, `decision`, `example`, `checklist`, `open-question`, `contrarian`
- **Never invent tags**. If none of the 12 tags apply, use an empty array `[]`.
- Tags are **discovery facets**, not categories. Do not attempt to encode the concept's domain or topic in tags — that is what `domain`, `owner_moc`, and wikilinks are for.
- Apply tags conservatively: 0–3 tags per note. Prefer fewer high-signal tags over many low-signal ones.

### Law 5: Graph Connectivity Guarantee
- Every new note must satisfy **all three** connectivity requirements:
  1. **MOC Link**: The note body must contain a wikilink to its `owner_moc` MOC file in `03_MOC/`.
  2. **Related Notes**: The `related` frontmatter array must contain at least one existing node filename.
  3. **Body Links**: The `## Related` section must contain at least one `[[wikilink]]` to another note.
- **Zero orphan tolerance**: If no related notes can be found, the concept may be too novel or too niche. In that case:
  - Search more broadly using grep across `NODES/`, `NOTES/`, and `02_NEW-KNOWLEDGE/`.
  - If truly no related notes exist, link to the broadest applicable MOC and document the isolation in a comment.

### Law 6: Naming Discipline
- **Canonical Title**: Use descriptive, specific **Title Case** (e.g., `Gradient Descent`, `Habit Loop`, `Sorites Paradox`).
- **Filename**: Convert the canonical title to **kebab-case** for the filename (e.g., `gradient-descent.md`, `habit-loop.md`).
- **Singular Form**: Prefer singular nouns unless the concept is inherently plural (e.g., `Implementation Intentions`).
- **Title ↔ Filename Match**: The `title` field in frontmatter must be the Title Case version that, when converted to kebab-case, produces the filename exactly.
- **No Generic Names**: Never use names like `New Note`, `Untitled`, `Concept 1`, `Misc`, or abbreviations.
- **No Dates in Titles**: Unless chronology is the defining characteristic (e.g., `Elon Musk SpaceX Founding`).

### Law 7: Source Provenance
- Every note must document its origin in both frontmatter (`sources` array) and the `## Source` body section.
- **From a book**: `sources: ["[[book-slug]]"]` and body link `[[01_RAW/SOURCE/book-slug]]`.
- **From YouTube**: `sources: ["[[study-note-slug]]"]` and body link to the study note in `02_NEW-KNOWLEDGE/`.
- **From web research**: `sources: ["URL"]` with the full URL.
- **From user's original thought**: `sources: []` and body text: `Original thought / personal synthesis.`
- **From another note**: `sources: ["[[parent-note-slug]]"]` with wikilink.
- Never leave `sources` as an empty array without explicitly documenting "original thought" in the body.

---

## Input Modes

This skill operates in **four distinct modes** depending on the input context.

### Mode A: Single Concept Creation
**Trigger**: User provides a concept name, definition, or idea to atomize.
**Input**: Concept name + optional context, source, or explanation.
**Process**: Full 8-step pipeline for one note.
**Output**: Exactly 1 atomic note in `NODES/`.

**Example invocation**:
> "Create an atomic note for the concept of Spaced Repetition"
> "Atomize this concept: Transfer Learning is when a model trained on one task is reused for a different but related task."

### Mode B: Batch Extraction from Study Note
**Trigger**: User points to a study note in `02_NEW-KNOWLEDGE/` that contains a `## 💡 Downstream Atomic Concept Candidates` section, or asks to "atomize" a study note.
**Input**: Path to a study note or literature note.
**Process**:
1. Read the source note and locate the candidates section.
2. For each candidate, run the full 8-step pipeline.
3. Deduplicate each candidate against existing nodes AND against other candidates in the same batch (prevent intra-batch duplication).
4. Present the batch plan to the user for approval before writing.
**Output**: Multiple atomic notes in `NODES/`, each linked back to the source study note.

**Example invocation**:
> "Atomize the downstream candidates from `02_NEW-KNOWLEDGE/detailed-study-notes-video-title.md`"

### Mode C: Topic Deep-Dive
**Trigger**: User asks to create multiple atomic notes covering a topic area.
**Input**: Topic name + optional source material or domain scope.
**Process**:
1. Research the topic using available vault content and optional web search.
2. Identify distinct atomic concepts within the topic.
3. Deduplicate each against existing nodes.
4. Present the concept list to the user for approval.
5. Create approved notes using the full pipeline.
**Output**: Multiple atomic notes in `NODES/`, with a suggested MOC update.

**Example invocation**:
> "Create atomic notes covering the key concepts of Reinforcement Learning"

### Mode D: Merge / Update Existing Note
**Trigger**: Deduplication detects that a new concept overlaps with an existing node.
**Input**: New concept + path to existing overlapping node.
**Process**:
1. Display the existing note alongside the new concept.
2. Offer three options: **(a) Merge** new info into existing note, **(b) Differentiate** by creating a distinct note with a refined scope, **(c) Cancel**.
3. If merging, update the existing note's body, `updated` date, `version` increment, and `related` array.
4. If differentiating, clarify the scope boundary between the two notes and create the new one.
**Output**: Either an updated existing note or a new differentiated note.

---

## 8-Step Creation Pipeline

Every atomic note passes through this complete pipeline. No steps may be skipped.

### Step 1: Input Analysis & Type Classification

Parse the input to determine:
- **Concept name**: Extract or propose the canonical title.
- **Core claim**: Identify the single-sentence statement this note will make.
- **Note type**: Classify as one of the approved types:

| Type | Use When |
|------|----------|
| `atomic-note` | Standalone concept, principle, theory, or insight |
| `glossary` | Formal definition of a term or construct |
| `method` | Actionable technique, process, or procedure |
| `example` | Concrete instance, case study, or illustrative scenario |
| `fact` | Empirically verified data point, statistic, or finding |
| `quote` | Verbatim statement attributed to a specific person |

- **Domain**: Classify the knowledge domain (e.g., `ai`, `general`, `psychology`, `business`).

### Step 2: Deduplication Check

Execute the **3-Tier Deduplication Protocol** (see Section 6). This step is **mandatory** and must complete before proceeding.

If a duplicate or near-duplicate is detected:
- **HALT the pipeline**.
- Present findings to the user.
- Await explicit instruction: merge, differentiate, or cancel.

### Step 3: MOC Discovery

Identify the correct `owner_moc` for this note:

1. **Search existing MOCs**: List all files in `03_MOC/` and read their titles and topic scopes.
2. **Match by domain**: Find the MOC whose topic most closely matches the new note's domain and subject area.
3. **Verify MOC exists**: The `owner_moc` value must reference a real MOC file in `03_MOC/`.
4. **Fallback**: If no suitable MOC exists, assign to the broadest applicable MOC (e.g., `study-moc`) and flag that a new MOC may be needed.

**MOC title resolution**: The `owner_moc` frontmatter field stores the MOC's **display title** (e.g., `AI & Machine Learning Map of Content`), not the filename.

### Step 4: Relationship Mapping

Discover related existing notes to build graph connections:

1. **Keyword search**: Use `grep_search` to find notes in `NODES/` containing the same key terms as the new concept.
2. **Tag affinity**: Find notes sharing the same tags or domain.
3. **Source siblings**: Find notes from the same source document.
4. **MOC neighbors**: Check the owner MOC's table for thematically adjacent notes.
5. **Rank by relevance**: Select the 3–10 most relevant related notes.
6. **Populate `related` array**: Add filenames (without `.md` extension) to the frontmatter `related` array.

### Step 5: Tag Selection

Apply controlled discovery tags from the approved list:

1. Review the concept against each of the 12 approved tags.
2. Select 0–3 tags that genuinely add discovery value.
3. **Do NOT tag reflexively** — a note about a definition does not automatically get `reference`; only apply if the note functions as a reference lookup.
4. Inherit relevant permanent source tags if the source note has them (e.g., `book`, `yt` if they exist in the tagging schema — but verify against `tagging.md` first; if they are not in the approved list, do not use them).

### Step 6: Note Drafting

Generate the complete atomic note using the appropriate body template.

#### Frontmatter Template
```yaml
---
id: {{UUID_V4}}
title: {{Canonical Title}}
type: {{atomic-note | glossary | method | example | fact | quote}}
status: atomic
domain: {{domain}}
source_type: {{book | youtube | article | podcast | web-clip | course | null}}
created: {{YYYY-MM-DD}}
updated: {{YYYY-MM-DD}}
review: {{YYYY-MM-DD+90}}
confidence: {{0-100}}
version: 1
aliases: []
tags: [{{approved tags}}]
owner_moc: {{MOC Display Title}}
sources: [{{source wikilinks or paths}}]
related: [{{related note filenames without .md}}]
schema_version: 4
---
```

#### Body Template — Variant A (Concepts, Definitions, Principles)
Use for types: `atomic-note`, `glossary`

```markdown
# {{Canonical Title}}

## Definition
{{One-sentence formal definition or core claim.}}

## Explanation
{{Plain language explanation of the concept. Why does it exist? What problem does it solve? Include concrete context. Keep to 1–3 focused paragraphs. Use LaTeX for formulas if applicable.}}

## Related
- [[{{related-note-1}}|{{Display Title 1}}]]
- [[{{related-note-2}}|{{Display Title 2}}]]
- [[{{owner-moc-filename}}|{{MOC Display Title}}]]

## Source
- [[{{source-path}}]]
```

#### Body Template — Variant B (Methods, Techniques, Processes)
Use for type: `method`

```markdown
# {{Canonical Title}}

## Core idea
{{One-sentence description of the method or technique.}}

## How it works
{{Step-by-step or descriptive explanation of the method. Include prerequisites, key steps, and expected outcomes.}}

## Why it matters / connection
{{Explain the significance, when to use this method, and how it connects to broader concepts.}}

## Related
- [[{{related-note-1}}|{{Display Title 1}}]]
- [[{{related-note-2}}|{{Display Title 2}}]]
- [[{{owner-moc-filename}}|{{MOC Display Title}}]]

## Source
- [[{{source-path}}]]
```

#### Body Template — Variant C (Examples, Case Studies, Facts)
Use for types: `example`, `fact`, `quote`

```markdown
# {{Canonical Title}}

## Core idea
{{One-sentence summary of the example, fact, or quote.}}

## Why it matters / connection
{{Detailed context: who, what, when, where, why. For quotes, include speaker attribution, date, and occasion. For examples, describe the scenario and outcome. For facts, cite the data source and methodology.}}

## Links
- [[{{related-note-1}}|{{Display Title 1}}]]
- [[{{related-note-2}}|{{Display Title 2}}]]
- [[{{owner-moc-filename}}|{{MOC Display Title}}]]

## Source
- [[{{source-path}}]]
```

### Step 7: Validation Audit

Before writing the note to disk, run the **12-Point Pre-Flight Quality Checklist** (see Section 7). Every check must pass. If any check fails, fix the issue before proceeding.

### Step 8: Graph Integration

1. **Write the note**: Save to `NODES/{{kebab-case-filename}}.md`.
2. **Verify file creation**: Confirm the file exists and is readable.
3. **Log the creation**: Report to the user:
   - Note title and filename
   - Assigned type and MOC
   - Number of related notes linked
   - Any warnings (e.g., low confidence, no close relatives found)
4. **MOC update guidance**: Inform the user that the MOC index can be refreshed by running:
   ```powershell
   .\.venv\Scripts\python .antigravity/automations/generate_mocs.py
   ```

---

## Deduplication Protocol (3-Tier)

Execute all three tiers in sequence. If any tier produces a match, halt and report before proceeding.

### Tier 1: Exact Title Match
```
Search: NODES/*.md filenames
Method: Convert proposed title to kebab-case and check if file exists
Match criteria: Exact filename match
```
**Action on match**: HALT — present the existing note to the user.

### Tier 2: Alias & Title Overlap
```
Search: grep for the proposed title string across all NODES/*.md frontmatter
Fields checked: title, aliases
Match criteria: Case-insensitive substring match of the proposed title against existing titles and aliases
```
**Action on match**: HALT — present the overlapping note(s) and ask user to differentiate or merge.

### Tier 3: Semantic Content Overlap
```
Search: grep for 2–3 key terms from the proposed concept across NODES/*.md bodies
Fields checked: ## Definition, ## Core idea, ## Explanation sections
Match criteria: Multiple key terms co-occurring in the same note
```
**Action on match**: Flag as potential overlap — present the candidate note(s) and let the user decide.

### Deduplication Decision Matrix

| Overlap Level | Definition | Action |
|---------------|------------|--------|
| **100% duplicate** | Same concept, same scope, same angle | Do not create. Link to existing note. |
| **70–99% overlap** | Same core concept, minor differences | Suggest merging new information into existing note. |
| **30–69% overlap** | Related but distinct concepts | Create new note but explicitly cross-link with the overlapping note and clarify scope boundaries. |
| **0–29% overlap** | Different concepts | Proceed with creation normally. |

---

## Pre-Flight Quality Checklist (12-Point)

Every note must pass **all 12 checks** before being written to `NODES/`.

| # | Check | Pass Criteria | Rule Source |
|---|-------|---------------|-------------|
| 1 | **UUID v4 validity** | `id` field is a valid UUID v4 format string | `schemas/frontmatter.md` |
| 2 | **Schema version** | `schema_version: 4` is present | `schemas/frontmatter.md` |
| 3 | **Title ↔ filename match** | Title Case `title` converts to kebab-case filename exactly | `rules/naming.md` |
| 4 | **Approved note type** | `type` is one of: `atomic-note`, `glossary`, `method`, `example`, `fact`, `quote` | `schemas/note-types.md` |
| 5 | **Valid status** | `status` is `atomic` or `linked` | `schemas/frontmatter.md` |
| 6 | **Controlled tags only** | Every tag in `tags` array exists in `.antigravity/rules/tagging.md` | `rules/tagging.md` |
| 7 | **MOC exists** | `owner_moc` references a real MOC title in `03_MOC/` | `rules/linking.md` |
| 8 | **Related notes populated** | `related` array contains ≥ 1 existing node filename | `rules/linking.md` |
| 9 | **Body structure compliant** | Body contains the required `##` sections for its variant | `rules/writing.md` |
| 10 | **No duplicate in vault** | 3-tier deduplication protocol returned no blocking matches | `rules/review.md` |
| 11 | **Kebab-case filename** | Filename uses lowercase-hyphenated format, no spaces or special chars | `rules/naming.md` |
| 12 | **Source provenance** | `sources` array is populated OR body contains "Original thought" | `rules/writing.md` |

---

## Batch Processing Rules

When creating multiple atomic notes in a single session (Mode B or Mode C):

1. **Intra-batch deduplication**: Before creating any note in the batch, check it against every other note in the same batch — not just existing vault nodes.
2. **Presentation before writing**: Present the complete batch plan (titles, types, MOCs, related notes) to the user for review before writing any files.
3. **Atomic commits**: Write notes one at a time. If a write fails, do not abandon the entire batch — report the failure and continue with remaining notes.
4. **Batch summary**: After completing the batch, provide a summary report:
   - Total notes created
   - Total duplicates detected and skipped
   - Total merges performed
   - MOCs affected
   - Relationship links added

---

## Failure Cases & Recovery

| Failure Case | Symptoms | Mitigation |
|-------------|----------|------------|
| **Exact duplicate detected** | Tier 1 dedup returns a match | Present existing note. Offer: link to it, merge new info, or cancel. |
| **Near-duplicate detected** | Tier 2/3 dedup returns overlap | Present both concepts side by side. Ask user to differentiate scope or merge. |
| **No suitable MOC exists** | No MOC in `03_MOC/` covers this topic | Assign to `study-moc` as fallback. Flag that a new topic MOC may be needed. |
| **Concept too broad** | Note requires 4+ paragraphs or covers multiple distinct ideas | Split into 2+ atomic notes. Cross-link them. Re-run pipeline for each. |
| **Concept too narrow** | Note is a minor detail that cannot stand alone | Suggest embedding it as a bullet point in the nearest existing broader note instead of creating a standalone node. |
| **Ambiguous note type** | Concept could be classified as multiple types | Default to `atomic-note`. Document the ambiguity in a comment for user review. |
| **No related notes found** | Grep search returns zero relevant matches | Broaden search to `NOTES/` and `02_NEW-KNOWLEDGE/`. If still empty, link only to MOC and flag isolation. |
| **Source unavailable** | Original source is deleted or unreachable | Set `source_type: null`, `sources: []`, add body note: `Source unavailable — reconstructed from context.` |
| **Invalid tag requested** | User suggests a tag not in the approved list | Reject the tag. Suggest the closest approved alternative or use empty tags. |

---

## Integration with Other Skills

This skill is the **downstream consumer** of several other vault skills:

| Upstream Skill | Handoff Point |
|---------------|--------------|
| **YouTube Ingestion** | Reads `## 💡 Downstream Atomic Concept Candidates` from study notes in `02_NEW-KNOWLEDGE/` |
| **Book Ingestion** | Reads extracted concepts from the ingestion pipeline's structured output |
| **Biography Research** | Reads `# Atomic Note Opportunities` from raw research files in `01_RAW/` |
| **Local Knowledge Search** | Uses MOC navigation and grep to find related notes during Step 4 |

This skill **does not**:
- Create or modify MOC files (that is the job of `generate_mocs.py` automation)
- Edit raw source files in `01_RAW/CAPTURE/` or `01_RAW/SOURCE/`
- Create literature notes or study notes (those are upstream skill outputs)

---

## Quick Reference: Complete Example

### Input
> "Create an atomic note for Spaced Repetition"

### Output: `NODES/spaced-repetition.md`

```markdown
---
id: a1b2c3d4-e5f6-7890-abcd-ef1234567890
title: Spaced Repetition
type: atomic-note
status: atomic
domain: general
source_type: null
created: 2026-07-22
updated: 2026-07-22
review: 2026-10-20
confidence: 95
version: 1
aliases:
  - SRS
  - Spaced Repetition System
tags:
  - reference
owner_moc: Study MOC
sources: []
related:
  - habit-loop
  - plateau-of-latent-potential
schema_version: 4
---

# Spaced Repetition

## Definition
Spaced Repetition is a learning technique where review sessions are scheduled at progressively increasing intervals, exploiting the psychological spacing effect to move information from short-term to long-term memory with minimal total study time.

## Explanation
The core insight is that memories decay exponentially over time (the Ebbinghaus forgetting curve), but each successful retrieval at the right moment strengthens the memory trace and extends the interval before the next review is needed. Instead of cramming (massed practice), spaced repetition distributes reviews across time — initially close together (1 day, 3 days), then progressively further apart (1 week, 2 weeks, 1 month).

Modern implementations (Anki, SuperMemo) use algorithms that adjust intervals based on how easily the learner recalls each item, creating a personalized review schedule that maximizes retention per minute of study.

## Related
- [[habit-loop|Habit Loop]]
- [[plateau-of-latent-potential|Plateau of Latent Potential]]
- [[habits-plus-deliberate-practice|Habits Plus Deliberate Practice]]
- [[study-moc|Study MOC]]

## Source
Original thought / General learning science concepts.
```
