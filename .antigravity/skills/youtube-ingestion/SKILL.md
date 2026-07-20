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
