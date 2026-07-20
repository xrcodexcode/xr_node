# Folder: .antigravity/skills

## File: skills\biography-research\SKILL.md

```markdown
---
name: biography-research
description: Exhaustively research a person, verify claims across source tiers, compile timelines, quotes, and controversies, and produce a raw research file structured for downstream atomic note extraction.
version: 1.0
---

# Biography Research Skill

## Mission

Perform exhaustive, verified biographical research on a specified individual to produce a raw, fact-dense research file at `01_RAW/<person_slug>_raw.md`. 

This is a **rigorous knowledge engineering task**, not a summary task. The output must be sufficiently detailed, granular, and verified that a downstream atomic-notes extraction agent can operate without needing to search the web for major biographical facts. The research should target a density of **100+ atomic note opportunities** and **up to 100 verified quotes**.

---

## Operating Rules

1. **Prioritize Authoritative Sources**: Always look for primary records, filings, patents, official transcripts, and autobiographies first.
2. **Never Fabricate Facts or Quotes**: Do not generate placeholder details, invent dates, or attribute quotes to a person unless they are verified.
3. **Verify Claims Multi-Laterally**: For any critical biographical claim (e.g., net worth, origin stories, educational degrees, product launches), attempt to verify the claim with at least two independent sources.
4. **Document Conflicts Neutrally**: When sources conflict, do not select one and delete the other. Preserve both versions, explain the nature of the disagreement, and indicate source strength.
5. **Separate Fact from Interpretation**: State what is documented, who said it, and when. Avoid subjective, narrative, or promotional language.
6. **Prioritize Fact Density Over Prose Style**: The output raw file should be highly structured, bulleted, and dense with details, rather than written in narrative paragraphs.

---

## Source Priority Hierarchy

When gathering facts, prioritize information according to these tiers:

* **Tier 1 (Highest Confidence)**: Official websites, SEC filings, government records, patent databases, court records, autobiographies, corporate press releases, transcripts of direct video/audio interviews.
* **Tier 2**: Reputable journalism (e.g., major news outlets with editor-reviewed output), documentaries, long-form published interviews, official podcasts.
* **Tier 3**: Authorized biographies, magazine profiles, industry trade publications, conference presentations.
* **Tier 4 (Lowest Confidence)**: Wikipedia, community wikis, blogs, and social media posts. *Use these only for discovery and initial keyword gathering; never rely on them as sole proof.*

---

## Research Workflow

### Step 1: Initialization & Directory Setup
1. Normalize the person's name into a slug format (e.g., "Warren Buffett" -> `warren-buffett`, "Steve Jobs" -> `steve-jobs`).
2. Identify the target raw file destination: `01_RAW/<person_slug>_raw.md`.
3. Check the vault for any existing raw research files or partial atomic notes relating to this person to avoid duplicating work.

### Step 2: Formulate Query Plan
Formulate structured search queries category-by-category using the search tools. Example query planning:
- *Identity & Early Life*: `"<Person Name>" birthplace childhood parents family ancestry`
- *Education*: `"<Person Name>" university college graduation thesis degree`
- *Career & Companies*: `"<Person Name>" companies founded OR investor OR board OR director OR employment`
- *Philosophy & Principles*: `"<Person Name>" philosophy OR principles OR rules OR work style OR habits`
- *Quotes & Speeches*: `"<Person Name>" speech transcript OR interview OR quotes OR keynote`
- *Controversies*: `"<Person Name>" lawsuit OR controversy OR legal dispute OR criticism`

### Step 3: Gather & Verify Information
1. Run queries. Read and extract information from high-quality pages.
2. Check other sources to verify crucial claims.
3. Fill out the Verification Fields for key facts (claim, source, URL, access date, confidence).
4. Fill out the Conflict block whenever accounts of the same event diverge.

### Step 4: Extract Verified Quotes
1. Search for actual transcripts, recorded audio/video, or written publications.
2. Extract verbatim quotes.
3. Record the exact context, date/period, and source URL/reference for each. Do not shorten quotes in a way that alters meaning.

### Step 5: Draft the Target Document
Assemble the research into the exact output structure defined below.

---

## Output Document Structure

The raw file must be written to `01_RAW/<person_slug>_raw.md` and use the following structural template. Do not omit any sections; if no information is found for a section, write `No information found during search.` and log it as a gap in the `# Gap List`.

```markdown
---
type: raw-research
person: <Name of Person>
research_date: <YYYY-MM-DD>
status: in-progress or complete
estimated_atomic_notes: <Estimated count of potential atomic notes, target 100+>
sources_collected: <Count of distinct sources in catalog>
---

# Executive Summary
A concise summary of the person's historical significance, major achievements, and core areas of influence (2-3 paragraphs).

# Identity
- **Full Legal Name**:
- **Date of Birth**:
- **Place of Birth**:
- **Parents & Immediate Family**:
- **Current Status/Date of Death**:
- **Nationality**:
- **Verification Table**:
| Claim | Source | URL/Ref | Access Date | Confidence (High/Med/Low) |
| --- | --- | --- | --- | --- |

# Childhood
Detailed notes on family background, childhood environment, early influences, and formative experiences.

# Education
Detailed records of schools, universities, degrees obtained, fields of study, theses, and notable mentors/teachers.

# Timeline
A year-by-year chronological list of major life events, relocations, career milestones, launches, and inflection points.
- **<Year>**: <Event/Milestone>
- **<Year>**: <Event/Milestone>

# Companies
Detailed records of companies founded, led, invested in, or influenced. Include dates of involvement, roles, and outcomes.

# Products
Specific products, projects, systems, or creations associated with the person. Detail their role in the creation.

# Decisions
Significant choices, forks in the road, pivots, or strategic decisions made. Include context, options considered, and downstream consequences.

# Quotes
A database of verified quotes. Target up to 100 quotes.
Format each quote as:
> [!NOTE]
> **Quote**: "<Exact verbatim quote>"
> - **Speaker**: <Name>
> - **Date/Period**: <Date or Year>
> - **Source**: <Source title/reference>
> - **URL/Citation**: <Link>
> - **Context**: <Brief description of the occasion, background, or question asked>

# Interviews
List of notable interviews given, with dates, interviewers, key themes, and source transcripts or videos.

# Speeches
Key public speeches, lectures, keynotes, or talks. Provide location, event, date, and core thesis.

# Books
- **Books Written by the Person**:
- **Books Recommended or Frequently Cited**:

# Philosophy
The person's core worldview, belief systems, and intellectual influences.

# Principles
Explicit rules of thumb, operational guidelines, or values stated or practiced by the person.

# Habits
Routines, scheduling preferences, sleep patterns, productivity methods, and lifestyle choices.

# Failures
Setbacks, bankruptcies, failed products, lost elections, or public defeats, including details on the aftermath and lessons.

# Successes
Major achievements, inflection points of rapid growth, key milestones, and breakthroughs.

# Controversies
Neutrally documented criticisms, lawsuits, public disputes, ethical debates, or investigative findings.
- Use a neutral, objective tone ("Critics argue that...", "A lawsuit filed by X alleged that...").
- Document defensive positions or counter-arguments with equal weight.

# Collaborators and Related People
Mentors, rivals, employees, co-founders, partners, and other key figures. Include relationship nature and duration.

# Historical Context
The state of the field, industry, or society during their formative years and active career. How did the environment shape their trajectory?

# Myths and Disputed Claims
Common rumors, urban legends, or disputed claims (e.g., "self-made billionaire" narratives versus family seed money).
- **Dispute Block**:
  - **Claim**: <The rumored or disputed claim>
  - **Version A**: <First source account> (Source: <Reference>)
  - **Version B**: <Second source account> (Source: <Reference>)
  - **Analysis**: <Assessment of which source is more authoritative and why>

# Source Catalog
Complete bibliography of all sources referenced in the document.
1. [<Source Name>](<URL>) - Access Date: <Date> - Quality Tier: <1/2/3/4> - Notes: <Context>

# Gap List
Areas where information was missing, ambiguous, or unverifiable, requiring further research.

# Atomic Note Opportunities
A bulleted checklist of at least 100 potential atomic note titles/concepts that can be extracted from this raw file. Each title should represent a single, standalone idea.
- [ ] <Atomic Note Title 1: Concept/Definition/Rule>
- [ ] <Atomic Note Title 2: Concept/Definition/Rule>
```

---

## Conflict Handling Standards

When sources present differing facts (e.g., differing dates of a launch, conflicting statements on co-founder equity, or contested reasons for a departure):
1. **Never omit the conflict**.
2. Create a sub-heading in the relevant section titled `### Conflict: [Topic]`.
3. Fill out the **Dispute Block** schema (as shown in the Myths and Disputed Claims section).
4. Compare source authority:
   - Tier 1 vs Tier 4: Default to Tier 1 but note the Tier 4 claim.
   - Tier 1 vs Tier 1: State both as equal possibilities.
   - Tier 2 vs Tier 3: Explain the credibility difference and present both.

---

## Acceptance Criteria & Quality Checklist

Before finalizing `01_RAW/<person_slug>_raw.md`, the agent must run the following checks:

- [ ] **Density Check**: Does the document contain enough material for **100+ distinct atomic notes**? (Are there 100+ items listed in the `# Atomic Note Opportunities` section?)
- [ ] **Quote Count & Quality**: Are there at least **20+ verified quotes** (with a target of up to 100 if research depth allows)? Do they include speaker, date, context, and URL?
- [ ] **Verification Verification**: Are there at least **10 key facts** documented in the Verification Tables with explicit confidence levels and access dates?
- [ ] **Formatting Integrity**: Are all the requested headers (from `# Executive Summary` to `# Atomic Note Opportunities`) present in the exact order?
- [ ] **Neutral Tone**: Are controversies and disputes described objectively, avoiding editorializing or bias?
- [ ] **Path Conformity**: Is the file saved at exactly `01_RAW/<person_slug>_raw.md`?

---

## Failure Cases & Mitigation

| Failure Case | Cause | Mitigation |
| --- | --- | --- |
| **Too few sources found** | Niche or historically obscure figure. | Search historical archive websites, university profiles, patents, or book scans. Record all findings and explicitly list empty areas in the `# Gap List`. |
| **No verified quotes** | Historic figure with no audio/text recordings. | Pull quotes from translated letters, contemporaneous journals, or historical biographies (Tier 3), specifying the translation/historical source. |
| **Pervasive myths** | Heavily publicized modern figure. | Run targeted search queries for debunkings or court transcripts (Tier 1) to cross-reference their PR narratives. |
| **Overwhelming detail** | Subject is extremely famous (e.g., Steve Jobs, Elon Musk). | Focus on extracting highly dense, non-obvious details and concrete operational decisions rather than generic biographical narrative. |
```

---

## File: skills\ingestion\SKILL.md

```markdown
---
name: Ingestion Skill
description: Automatically convert EPUB books to Markdown, extract atomic concepts, facts, definitions, methods, examples, and quotes using Gemini, and link them to vault MOCs.
---

# Ingestion Skill (Infinity Brain PKM Engine)

This skill automates the process of importing EPUB books, converting them to clean Markdown source documents, extracting atomic notes using Gemini, placing them in the flat `02_NODES/` directory, and cross-linking them with their source and respective Maps of Content (MOCs).

## Setup & Prerequisites

1. Ensure the virtual environment is active and dependencies are installed:
   ```powershell
   .\.venv\Scripts\pip install -r requirements.txt
   ```

2. Configure your Gemini API key in a `.env` file in the root of the vault:
   ```text
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

## Usage

Run the ingestion script using the Python virtual environment:

```powershell
.\.venv\Scripts\python .antigravity/automations/ingest_book.py --epub "path/to/book.epub" --tags "tag1,tag2" --chapters "1-3"
```

### CLI Arguments

- `--epub` (Required): Absolute or relative path to the EPUB book file.
- `--tags` (Optional): Comma-separated list of tags to append to all extracted notes. Defaults to `dsa,study,books`.
- `--model` (Optional): Gemini model to use for concept extraction. Defaults to `gemini-2.5-flash`.
- `--chapters` (Optional): Chapter filter to process. Examples:
  - `all` (Process all chapters - *Note: This will perform many API calls*)
  - `1-3` (Process chapters 1 to 3 inclusive - *Default*)
  - `1,2,5` (Process chapters 1, 2, and 5)
  - `4` (Process chapter 4 only)

## Workflow Steps

1. **Convert to Markdown**: Extracts text from the EPUB and writes it to `01_RAW/source/<book-slug>.md` following the vault's source template format.
2. **Chunking**: Uses the EPUB Table of Contents (TOC) to group pages into logical chapters. If no TOC is found, it defaults to chunking every 20 pages.
3. **Structured Extraction**: Sends chapter text to the Gemini API with a strict Pydantic JSON schema to extract concepts, facts, definitions, methods, examples, and quotes.
4. **Writing Atomic Notes**: Creates Obsidian notes under `02_NODES/` (completely flat) using the vault's template, linking them to:
   - The source book file (`01_RAW/source/<book>.md`)
   - The relevant Maps of Content (e.g. `study-moc`, `books-moc`)
   - Other notes extracted in the same run that are related.
5. **Rebuilding MOCs**: Calls `generate_mocs.py` to refresh the vault index and promote highly linked nodes.
```

---

## File: skills\youtube-knowledge-ingestion\SKILL.md

```markdown
---
name: youtube-knowledge-ingestion
description: Convert a YouTube transcript into an interconnected knowledge graph for the Infinity Brain by extracting atomic notes, merging into existing vault knowledge, generating a cheatsheet and structured MOC, and auditing for duplicates, gaps, and retrieval quality.
version: 3.0
---

# YouTube Knowledge Ingestion Skill

## Mission

Transform a YouTube transcript into permanent, reusable knowledge.

This is a knowledge engineering task, not a summary task.

The output must preserve the educational value of the video while converting it into atomic, evergreen, linked notes that fit cleanly inside the Infinity Brain.

---

## Operating Rules

### Rule 1: One note = one idea

Each note must express exactly one primary idea.

If a sentence contains multiple independent ideas, split them.

### Rule 2: Prefer precision over volume

Do not extract filler, repetition, or weak noise just to increase note count.

### Rule 3: Preserve meaning

Never distort the speaker’s intent.

If the transcript is obviously mis-transcribed, correct only obvious transcription errors that do not change meaning.

### Rule 4: Reuse existing knowledge

If the vault already contains the same idea, update the existing note instead of creating a duplicate.

### Rule 5: Optimize for retrieval

Every note should be understandable without the transcript and easy to find later.

---

# Input

The user provides either:

* a transcript file, or
* a path to a transcript

Example:

`01_RAW/Source/Youtube/Some Video Transcript.md`

---

# Output

Generate all of the following:

* atomic notes
* a cheatsheet
* a structured video MOC
* relationship links to existing notes
* merge suggestions for near-duplicates
* suggested new notes if a concept has no home yet
* suggested MOCs if the topic needs a new parent structure
* a quality audit report

---

# Processing Pipeline

```
Transcript
→ Normalize
→ Chunk by sections
→ Extract candidate ideas
→ Classify idea type
→ Deduplicate against vault
→ Create or update atomic notes
→ Create typed relationships
→ Build cheatsheet
→ Build video MOC
→ Link to YouTube-MOC and related MOCs
→ Run quality audit
→ Return final report
```

---

# Step 1: Normalize the Transcript

Before extraction, clean the transcript.

Apply only meaning-preserving edits:

* fix punctuation
* fix capitalization
* split broken sentences
* remove duplicated captions
* remove timestamp noise unless useful
* correct obvious ASR mistakes
* preserve speaker intent

Do not invent missing content.

If the transcript is unclear, keep the uncertainty in the note.

---

# Step 2: Filter What Matters

## Keep

Extract content that is reusable knowledge:

* definitions
* concepts
* principles
* mental models
* frameworks
* processes
* algorithms
* techniques
* heuristics
* best practices
* warnings
* pitfalls
* tradeoffs
* comparisons
* examples
* analogies
* formulas
* historical context
* reusable facts
* memorable quotes
* explicit decisions
* important reasoning steps

## Ignore

Do not extract:

* greetings
* intros
* outros
* sponsor reads
* filler phrases
* jokes
* repeated restatements
* generic encouragement
* unrelated stories
* conversational noise

---

# Step 3: Decide the Note Type

Each atomic note must have exactly one primary type.

Use this decision order:

1. **Definition**
   Use when the transcript explicitly defines a term.

2. **Concept**
   Use when the idea is a named thing or central object.

3. **Process**
   Use when the idea is a step-by-step workflow.

4. **Framework**
   Use when the idea is a named structure for thinking or acting.

5. **Algorithm**
   Use when the idea is a procedural method with ordered steps or computation.

6. **Comparison**
   Use when two or more things are directly contrasted.

7. **Tradeoff**
   Use when the point is balancing competing forces like speed, cost, accuracy, memory, or complexity.

8. **Pitfall / Warning**
   Use when the point is about failure mode, danger, or a common mistake.

9. **Technique / Heuristic / Best Practice**
   Use when the point is a practical recommendation or rule of thumb.

10. **Fact**
    Use when the transcript states a reusable factual claim and none of the above fit better.

11. **Example / Analogy / Quote / Formula / Historical Context**
    Use when the content is specifically one of these forms.

If nothing fits cleanly, default to **Fact**.

---

# Step 4: Decide Whether to Create a Note

Create a note only if the idea is reusable and meaningful.

Create a note when the content is:

* novel
* important
* explanatory
* decision-relevant
* reusable in future learning
* useful for comparison or retrieval

Do not create a note for:

* repeated phrasing
* weak filler
* low-value elaboration
* content already represented by a stronger note

If the same idea appears multiple times, keep one canonical note and merge the rest into it.

---

# Step 5: Deterministic Deduplication Before Creating

Before creating a new note, run a vault search and decide the outcome using an explicit merge test.

## Search procedure

For every candidate idea, search in this order:

1. Exact title
2. Known aliases
3. Singular/plural variants
4. Obvious synonyms
5. Same-domain notes
6. Parent and child MOCs
7. Recent notes in the same topic cluster

## Merge decision

Use the strongest applicable outcome:

* **IDENTICAL**
  The candidate and an existing note answer the same question at the same level of abstraction.
  → Update the existing note; do not create a duplicate.

* **NEAR DUPLICATE**
  The candidate overlaps substantially with an existing note, but the wording, emphasis, or scope differs slightly.
  → Merge into the canonical note and add any genuinely new detail as an update.

* **RELATED BUT DISTINCT**
  The candidate covers the same topic area but answers a meaningfully different question.
  → Create a new note and link it to the related note.

* **UNRELATED**
  The candidate is not a conceptual match for any retrieved note.
  → Create a new note normally.

* **AMBIGUOUS**
  The candidate might be a duplicate, but the evidence is not strong enough to merge safely.
  → Create the note, but flag it as `NEEDS_HUMAN_REVIEW` and record the possible duplicate.

## Operational merge test

Treat two notes as the same idea only if at least **two** of the following are true:

* they would answer almost the same future question
* their summaries would differ only in phrasing, not in substance
* they belong to the same domain and abstraction level
* one can safely replace the other without losing meaning
* the new note adds no materially distinct claim, step, warning, or example

If the test is not clearly satisfied, do not silently merge.

## Duplicate handling rule

If the same idea appears multiple times in the transcript, keep one canonical note and merge the repeated mentions into it unless the later mention adds a new dimension, constraint, counterexample, or comparison.

---

# Step 6: Conflict Resolution

If the transcript conflicts with an existing note:

* do not silently overwrite
* preserve the earlier note’s source context
* add the new source as a contrasting, updated, or exception claim
* mark the note as having multiple sources if needed
* if the claims are genuinely incompatible, create a comparison or contradiction note

If the transcript presents a weaker, narrower, or revised version of an earlier claim, preserve both versions and record the relationship between them.

Never erase uncertainty or collapse disagreement into a single asserted truth.

---

# Step 7: Typed Relationship Extraction

Do not rely only on plain wikilinks. Create typed relationships when useful.

Use this relationship decision order:

1. **PART_OF** — A is structurally contained within B.
2. **REQUIRES / DEPENDS_ON** — A cannot function without B, or A depends on B.
3. **USES** — A actively uses B as a tool, mechanism, or input.
4. **ENABLES** — A makes B possible.
5. **CAUSES / RESULTS_IN** — A leads to B.
6. **TYPE_OF** — A is a subtype or instance of B.
7. **EXPLAINS** — A clarifies B.
8. **EXTENDS** — A adds to or generalizes B.
9. **COMPARES_TO / CONTRASTS_WITH** — A is directly compared with or opposed to B.
10. **RELATED_TO** — No stronger relation fits.

Use the strongest relation that clearly fits. Do not invent precision that the transcript does not support.

## Examples

* Transformer `USES` Attention
* Attention `PART_OF` Transformer
* Gradient Descent `DEPENDS_ON` a loss function
* CNN `COMPARES_TO` Transformer

If multiple relationships fit, choose the one that best preserves retrieval usefulness.

---

# Step 8: Atomic Note Format

Each note must be understandable on its own.

```md
---
title:
aliases:
type:
status:
domain:
difficulty:
source:
video:
speaker:
timestamp:
confidence:
created:
updated:
tags:
---

# Summary

2–5 sentences explaining the note independently.

## Key Idea

State the core idea clearly.

## Details

Only the important supporting information.

## Example

Add one if it improves understanding.

## Related

[[Parent Concept]]
[[Child Concept]]
[[Comparison Note]]
[[Process Note]]
```

---

# Step 9: Metadata Rules

Every note should include:

* `title`
* `type`
* `domain`
* `source`
* `timestamp` if available
* `confidence`
* `tags`

Recommended additional fields:

* `aliases`
* `speaker`
* `difficulty`
* `status`
* `updated`

Use consistent naming across the vault.

---

# Step 10: Confidence Rules

Assign one confidence level:

* **High** — explicitly stated
* **Medium** — strongly implied
* **Low** — reasonable inference

Use confidence to inform review.

If confidence is too low and the idea is not clearly reusable, do not create the note.

---

# Step 11: Transcript Noise Handling

Treat transcript artifacts carefully.

If the transcript has:

* broken sentences
* missing punctuation
* repeated words
* wrong technical terms
* speaker drift
* timestamp interruptions
* multiple speakers making conflicting claims

clean them only as far as needed to recover meaning.

## Multi-speaker disagreement handling

If different speakers disagree:

* preserve attribution by speaker
* preserve timestamps where possible
* do not merge conflicting claims into one note
* create a comparison note if the disagreement is central
* assign confidence to each claim independently

If the meaning is still ambiguous, preserve that ambiguity in the note instead of pretending certainty.

---

# Step 12: MOC Generation Rules

Generate one structured MOC for the video.

The MOC should organize, not explain.

Include only sections that actually have content.

Use this structure:

```md
# Video Title

## Overview

## Prerequisites

## Core Concepts

## Definitions

## Processes

## Frameworks

## Algorithms

## Techniques

## Comparisons

## Tradeoffs

## Best Practices

## Pitfalls

## Examples

## Historical Context

## Quotes

## Cheatsheet

[[Video Cheatsheet]]

## Related Topics

## Related MOCs

[[YouTube-MOC]]
```

### Empty-section rule

If a section has no useful items, omit it.

Do not create empty headings.

---

# Step 13: Cheatsheet Rules

Generate one high-density cheatsheet.

The cheatsheet must contain:

* major concepts
* definitions
* frameworks
* processes
* formulas
* key heuristics
* best practices
* pitfalls
* important comparisons
* memorable insights

The cheatsheet should be compact, scannable, and fast to review.

---

# Step 14: Vault Integration

After extraction, update the vault graph.

Connect the video output to:

* related concept notes
* topic MOCs
* domain MOCs
* `[[YouTube-MOC]]`
* the relevant home or index MOC
* any recent knowledge log if used in the vault system

Do not leave isolated notes.

---

# Step 15: Scalability Rules

Use the following strategy by transcript length:

* **Under 30 minutes**
  One pass is usually enough.

* **30 to 90 minutes**
  Chunk by section or chapter, then merge duplicates.

* **90 to 240 minutes**
  Chunk aggressively, extract per chunk, merge by concept, then run a global duplicate sweep.

* **Over 240 minutes**
  Process in passes: local chunk extraction, global deduplication, relationship normalization, then audit.

## Required long-transcript passes

For long transcripts, always perform these passes in order:

1. Core concept extraction
2. Definition extraction
3. Process extraction
4. Framework extraction
5. Comparison extraction
6. Pitfall / warning extraction
7. Example extraction
8. Global deduplication across chunks
9. Relationship normalization
10. Quality audit

Prioritize high-signal material first:

1. core concepts
2. definitions
3. processes
4. frameworks
5. comparisons
6. pitfalls
7. examples
8. quotes and historical context

---

# Step 16: Quality Audit

Before finishing, verify each item below.

## Coverage

* every meaningful section processed
* every major concept extracted
* every definition extracted
* every process extracted
* every comparison extracted
* every warning extracted
* every important example extracted

## Structure

* every note has one primary idea
* every note has a valid type
* every note has metadata
* every note has a clear title
* every note is readable without the transcript

## Vault Hygiene

* duplicates were merged
* near-duplicates were flagged
* links were created
* orphan notes were avoided where possible
* existing notes were updated instead of recreated
* global duplicate sweep completed for long transcripts

## Deliverables

* cheatsheet created
* MOC created
* YouTube-MOC linked
* related MOCs suggested if needed

---

# Step 16A: Process Audit

Audit the skill’s own execution, not only its outputs.

Verify that the workflow itself was followed:

* transcript normalized before extraction
* vault search performed before every note decision
* exact title search attempted
* alias and synonym search attempted
* merge test applied before creating a new note
* ambiguous cases flagged instead of guessed
* cross-chunk deduplication completed when needed
* relationship extraction run after deduplication
* schema fields validated against the existing vault convention
* final audit completed before return

If any required step was skipped or partially executed, state that explicitly in the final report.

---

# Step 16B: Human Review Flags

When confidence is not high enough to merge safely, do not force a decision.

Use this pattern:

```md
NEEDS_HUMAN_REVIEW

Reason: Possible duplicate of [[Existing Note]]

Confidence: Low or ambiguous

Evidence: Shares the same core concept, but scope or abstraction level differs.
```

Use `NEEDS_HUMAN_REVIEW` for:

* ambiguous duplicate decisions
* unclear merge boundaries
* conflicting speaker claims that cannot be reconciled safely
* weak inferences that may matter later

This is preferred over silent guessing.

---

# Step 17: Final Report

Return a compact final report containing:

* transcript title
* sections processed
* knowledge units found
* atomic notes created
* existing notes updated
* merges performed
* backlinks added
* new MOCs created or suggested
* coverage estimate
* confidence summary
* unresolved ambiguities, if any
* any skipped or partially executed process steps

If something could not be recovered confidently, say so clearly.

---

# Success Standard

A successful run should let a future reader:

* understand the video without rewatching it
* navigate the topic quickly
* reuse the knowledge later
* connect the ideas to the rest of the vault
* avoid duplicate notes
* trust the structure over time

The skill is complete only when the output is clean, linked, non-redundant, and ready to live as durable knowledge inside the Infinity Brain.
```

---

