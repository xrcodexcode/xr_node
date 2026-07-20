# Folder: .antigravity/shared

## File: shared\aliases.md

```markdown
# Controlled Tag Aliases Mapping

This file defines the canonical mapping from common tag variations/aliases to their official canonical tag forms.

## 1. Tag Mapping Rules
All ingestion pipelines and tag validators must map these aliases to their targets during validation and normalization:

- `facts` → `fact`
- `concepts` → `concept`
- `methods` → `method`
- `quotes` → `quote`
- `examples` → `example`
- `case_study` → `case-study`
- `open_question` → `open-question`
- `tutorials` → `tutorial`
- `papers` → `paper`
- `books` → `book`
```

---

## File: shared\citation-policy.md

```markdown
# NexusDB Citation and Link Policy

This policy governs how references, links, and citations are added to notes.

## Provenance Rules

1. **Required Sources**: Any factual claim or definition must declare its source in the frontmatter `sources` array.
2. **Body Excerpts**: Quote directly from the raw source file in the `## Source` section of the note to preserve evidence.
3. **No Unbacked Claims**: If a note does not have a source, it must be explicitly labeled in the frontmatter as `source_type: original-observation`.

## Link Creation Rules

1. **High Priority Links**: Parent-child, prerequisite, cause, or part-of. Add automatically when relationship confidence `>= 95%`.
2. **Medium Priority Links**: Related concepts, alternatives, comparisons. Output as suggestions if confidence `>= 80%`.
3. **Low Priority Links**: Loose association. Do not create automatically. Leave to user discretion.
4. **No Orphans**: Every note must have at least one inbound or outbound link to keep the graph connected.
```

---

## File: shared\constants.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Centralize all shared system constants to eliminate magic numbers and duplicate literals
deprecation_date: null
---

# Shared System Constants

## 1. Confidence Levels
- **CONFIDENCE_SAFE**: `95–100`  # Reversible, rule-compliant actions applied automatically and logged
- **CONFIDENCE_SUGGEST**: `80–94`  # Actions suggested/proposed to human, not executed
- **CONFIDENCE_ASK**: `60–79`  # Explicit approval required before action
- **CONFIDENCE_MIN**: `0–59`  # Do nothing except optional observation logging

## 2. Similarity and Merge Thresholds
- **MERGE_TITLE_SIMILARITY**: `0.90`  # Required title similarity for duplicate merging
- **MERGE_SEMANTIC_SIMILARITY**: `0.90`  # Required semantic similarity for duplicate merging

## 3. Node Constraints
- **MAX_TAG_COUNT**: `5`  # Maximum discovery tags per note
- **MAX_RELATION_COUNT**: `15`  # Maximum entries in the frontmatter relations block
- **DEFAULT_VERIFICATION_INTERVAL**: `365`  # Default days before a note is flagged stale (1 year)

## 4. Promotion Rubric thresholds
- **PROMOTION_MAX_SCORE**: `10`  # Maximum score on the promotion rubric
- **PROMOTION_AUTO_SCORE**: `8`  # Minimum rubric score to allow automatic promotion at CONFIDENCE_SAFE
- **PROMOTION_REVIEW_SCORE**: `6`  # Minimum rubric score requiring manual review (6 or 7)
- **PROMOTION_DRAFT_SCORE**: `5`  # Scores below this remain draft or return to processing

## 5. Schema Versions
- **CURRENT_SCHEMA_VERSION**: `4`  # Version 4 contains concept_id, relations, last_verified, etc.
- **LEGACY_SCHEMA_VERSION**: `3`  # Version 3 remains supported for read/write compatibility

## 6. Knowledge States (Maturity Stages)
The canonical 8-stage maturity model (strictly about quality and readiness):
- `captured`: Original material received; not yet interpreted
- `processed`: Cleaned, structured; provenance retained
- `learning`: Placed in `02_NEW-KNOWLEDGE/` for active study/extraction
- `verified`: Factual claims checked against source; accuracy confirmed
- `evergreen`: Stable, reusable, atomic explanation
- `canonical`: Single vault authority for this concept (duplicate check passed, `concept_id` set)
- `maintained`: Freshness checked within `verification_interval`
- `archived`: Historical reference; retired from active vault graph

Legacy statuses mapped to current:
- `atomic` → `learning`
- `linked` → `evergreen`
- `curated` → `canonical`

## 7. Health Metrics Severity Limits
- **HEALTH_CRITICAL_ORPHAN_PCT**: `20`  # Critical alarm if orphans exceed 20%
- **HEALTH_CRITICAL_DEAD_LINKS**: `10`  # Critical alarm if dead wikilinks exceed 10
- **HEALTH_CRITICAL_SCHEMA_PCT**: `50`  # Critical alarm if schema version compliance drops below 50%
- **HEALTH_CRITICAL_DUP_PCT**: `15`  # Critical alarm if duplicate rate exceeds 15%
- **HEALTH_TARGET_ORPHAN_PCT**: `5`  # Healthy orphan limit (under 5%)
- **HEALTH_TARGET_BACKLINKS**: `2.0`  # Healthy minimum average backlinks per node
```

---

## File: shared\evaluation-rubric.md

```markdown
# NexusDB Evaluation Rubric

This document defines the quantitative criteria used to evaluate note promotion and duplication.

## 10-Point Promotion Rubric

Every note is scored out of 10 points:
1. **Source-backed and verified (2 pts)**: The claims are fully backed by a source, and the note status is not captured/processed.
2. **Atomic (2 pts)**: The note covers exactly one concept or fact.
3. **Reusable beyond source (2 pts)**: The explanation is general enough to be useful in other contexts.
4. **Linked (2 pts)**: The note has an owner MOC and at least one other connection in the graph.
5. **Stable Title (1 pt)**: The filename matches the canonical title exactly.
6. **Not Duplicate (1 pt)**: The note has no high Jaccard similarity overlap with existing nodes.

## Duplication Thresholds
- **Jaccard Word Overlap > 0.5**: High similarity. Trigger a potential merge suggestion.
- **Tag Overlap >= 2 & Word Overlap > 0.3**: Moderate similarity. Check if one note is a subset of the other.
```

---

## File: shared\glossary.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of the system glossary
deprecation_date: null
---

# Knowledge Vault Glossary

This glossary defines the authoritative terminology used across all governance rules, metadata schemas, and automations within `nexusdb`.

## Terminology Definitions

- **Atomic Note**: A permanent note representing exactly one concept, fact, method, or claim. It resides in `NODES/` and must be independently understandable without relying on specific source context.
- **Evergreen Note**: A stable, synthesis note that provides structured explanations of complex concepts, residing in `NOTES/`. Unlike raw sources, it uses domain-independent framing where possible and is designed for long-term reusability.
- **Map of Content (MOC)**: A navigation file in `03_MOC/` that organizes related notes. MOCs contain only links, maps, and structures; they do not contain inline descriptions or explanations.
- **Concept ID**: An immutable, human-readable slug (e.g., `backpropagation-v1`) that uniquely identifies a canonical concept across aliases and updates.
- **Archival Consolidation**: The process of merging duplicate notes where predecessor files are marked `status: archived` and their metadata (aliases, backlinks, sources) is merged into the canonical note, ensuring no historical content is deleted.
- **Orphan Node**: An active note that violates Graph Law 1 because it lacks an owner MOC or has zero justified inbound/outbound links.
- **Provenance**: Recoverable evidence tracing a note's factual claims to their original sources (URLs, PDFs, transcripts) stored in `01_RAW/SOURCE/`.
- **Maturity model**: The 8-stage lifecycle model (`captured → processed → learning → verified → evergreen → canonical → maintained → archived`) that tracks note readiness and quality.
- **Tag Entropy**: A metric measuring the distribution and diversity of tag usage. High tag entropy represents healthy tag usage; low entropy suggests over-concentration or excessive tag generation.
```

---

## File: shared\markdown-style.md

```markdown
# NexusDB Markdown Style Guide

This style guide defines formatting requirements for all Markdown files in the vault.

## Spacing and Headers

1. **Title H1**: Exactly one H1 per file, formatted as `# Canonical Title`.
2. **Subheadings**: Use H2 (`## Section Name`) for major sections. Do not skip levels.
3. **Empty Lines**: Exactly one blank line before and after headers, list items, and blockquotes.

## Text Formatting

1. **Emphasis**: Use standard `**bold**` and `*italic*` carefully. Never double-format (e.g. `***bold italic***`).
2. **Lists**: Use hyphens (`-`) for unordered lists. Keep list items short and concise.
3. **Code blocks**: Use fenced code blocks with language specification. Do not use blockquotes (`>`) to format code.

## Wikilinks

1. Use double bracket wikilinks: `[[target]]` or `[[target|label]]`.
2. Never put formatting (like backticks or bold) inside the wikilink brackets (e.g. use `[[target]]` instead of `[[**target**]]` or `[[`target`]]`).
3. For Windows paths, use forward slashes in links.
```

---

## File: shared\naming-conventions.md

```markdown
# File and Note Naming Conventions

This file defines the strict naming rules for all notes, sources, MOCs, and directories in `nexusdb`.

## 1. Directory Structure Naming
- `01_RAW/capture/` - Raw capture inbox.
- `01_RAW/source/` - Archived sources.
- `02_NODES/` - Flat directory for atomic notes. No subdirectories are allowed.
- `03_MOC/` - Maps of Content layer.

## 2. File Name Conventions
- **Atomic Notes in `02_NODES/`**: Must be lowercased, hyphen-separated slugs derived from the canonical title (e.g. `gradient-descent.md`).
- **MOC Notes in `03_MOC/`**: Must be PascalCase or Space-separated ending with the " MOC" suffix (e.g. `Machine Learning MOC.md`).
- **Source Notes in `01_RAW/source/`**: Keep the original file names or use lowercase-hyphenated identifiers matching the original captured document name (e.g. `attention-is-all-you-need.md`).

## 3. Slug Generation Formula
Slugs are generated from the canonical title by:
1. Stripping file extensions.
2. Converting all characters to lowercase.
3. Replacing spaces and underscores with a single hyphen.
4. Stripping all non-alphanumeric characters (except hyphens).
5. Removing duplicate adjacent hyphens.
```

---

## File: shared\output-contract.md

```markdown
# NexusDB AI Output Contract

All agents executing tasks within the vault must adhere to this output contract.

## Rules

1. **No Conversational Filler**: Output only the requested content (Markdown or JSON). Do not say "Here is your file" or "I have processed the note."
2. **Strict Schema Adherence**: Frontmatter must validate perfectly against the corresponding schema in `.antigravity/schemas/`.
3. **Structured Body Format**: Always write structured headings in the body:
   - For atomic notes: `## Claim` (or `## Definition`), `## Explanation`, `## Related`, `## Source`.
   - For MOCs: `## Overview`, `## Core Nodes`, `## Related MOCs`.
4. **Be Concise**: Keep explanations brief and focused. Avoid verbose paragraphs.
5. **No Double Formats**: Do not format headers inside list items or use bold headers inside sections.
```

---

## File: shared\relationship-types.md

```markdown
# Approved Semantic Relationship Types

This file outlines the approved relationship types permitted in the frontmatter `related` or `relations` blocks.

## 1. Allowed Relationship Types

- **extends**: The current note expands or builds upon the core concepts defined in the target note.
- **supports**: The current note provides evidence, details, or proofs that validate the target note's claims.
- **refutes**: The current note provides counter-arguments, counter-examples, or disproofs of the target note's claims.
- **replaces**: The current note supersedes or deprecates the target note (used during merges and consolidation).
- **instantiates**: The current note is a concrete instance or case study of the general principle in the target note.
- **uses**: The current note utilizes methods, formulas, or frameworks defined in the target note.
- **contrasts**: The current note highlights differences or alternative perspectives compared to the target note.
- **depends_on**: The current note requires understanding of the target note as a prerequisite.
```

---

## File: shared\taxonomy.md

```markdown
# Knowledge Domains Taxonomy

This file is the single source of truth for approved knowledge domains and their respective classifications in `nexusdb`.

## 1. Primary Knowledge Domains
All notes must map to exactly one of the following primary domains:

- **ai**: Artificial Intelligence theories, architectures, and algorithms.
- **ml**: Machine Learning practices, models, and optimization.
- **llm**: Large Language Models, prompt engineering, context management, and evaluations.
- **psychology**: Cognitive psychology, behavior, thinking models, and human behavior.
- **productivity**: Time management, focus, deep work, and organization systems.
- **philosophy**: Epistemology, ethics, logic, and philosophical frameworks.
- **business**: Strategy, marketing, economics, startup structures, and operations.
- **study**: Learning techniques, memory retention, note-taking systems, and education.
- **research**: Methodology, literature reviews, search algorithms, and synthesis.
- **writing**: Content creation, editing, storytelling, and communication.
- **tools**: Software, applications, setups, development workflows, and automation.
- **habits**: Routine building, habit loops, triggers, and consistency practices.
- **strategy**: Decision-making frameworks, mental models, game theory, and long-term planning.
- **leadership**: Management, coaching, team dynamics, and organizational psychology.
- **self-improvement**: Personal growth, self-reflection, wellness, and life design.
- **dsa**: Data Structures and Algorithms, computer science fundamentals.
- **engineering**: Software engineering, architecture, code quality, and systems design.
- **manufacturing**: Industrial production, optimization, supply chain, and hardware development.
- **innovation**: Creative thinking, breakthroughs, product management, and invention.
- **risk**: Threat modeling, safety, security, probability, and disaster prevention.
- **general**: Catch-all for miscellaneous facts or observations that do not fit elsewhere.
```

---

## File: shared\terminology.md

```markdown
# NexusDB Canonical Terminology

This document defines the key terms and concepts used across the NexusDB knowledge vault.

- **Atomic Note**: A single, self-contained note answering one question or stating one reusable concept, fact, or definition. Stored in `NODES/` with a flat structure (no subfolders).
- **Map of Content (MOC)**: A curated navigation note that lists and links related atomic notes to make the vault browsable. Stored in `03_MOC/`. MOCs navigate and contain no explanations.
- **Raw Source**: A captured original document, article, book, or transcript. Stored in `01_RAW/SOURCE/` for provenance.
- **Evergreen Note**: A mature, stable synthesized note summarizing a larger concept. Stored in `NOTES/`.
- **Orphan**: An active note that has no inbound links and is not listed in any MOC.
- **Backlink**: A link from another note pointing to the current note.
- **Domain**: A broad category of knowledge (e.g. `ai`, `ml`, `productivity`) used to group notes.
```

---

