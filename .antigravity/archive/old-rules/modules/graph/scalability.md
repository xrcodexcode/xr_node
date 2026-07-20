---
module: graph_scalability
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
exports:
  - scalability_limits
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Scalability and Limit Rules

To ensure performance and retrievability as the vault scales (e.g., towards 100,000+ notes), the following quantitative limits are enforced.

## 1. Map of Content (MOC) Limits

MOCs are designed for human navigation. If a MOC has too many links, it becomes a traversal bottleneck.

*   **Soft Limit (50 links):** When a MOC directory table grows to 50 entries, the MOC generation engine flags the MOC as "oversized" in `moc-health.md`. The AI or user should prioritize splitting the MOC into hierarchical sub-MOCs.
*   **Hard Limit (100 links):** No automatic MOC generator or tool may append links beyond 100 to a single MOC. Any further additions require manual intervention or the creation of sub-MOCs.
*   **Hierarchical MOC Layout:** A parent MOC (e.g., `ai-ml-moc.md`) must partition its contents by pointing to child MOCs (e.g., `supervised-learning-moc.md`, `deep-learning-moc.md`) once the soft limit is breached.

## 2. Note Backlink and Link Priorities

To prevent "graph explosion" (e.g., notes like `Gradient Descent` accumulating 150+ links):

*   **Automatic Related Links Limit:** The semantic linker or any automation tool must restrict auto-generated related connections to between **5 and 10 links** (default: **8**).
*   **Link Prioritization:**
    *   **Core:** Inbound/outbound relations that represent parent/child hierarchy.
    *   **Prerequisites:** Dependencies required to understand the note.
    *   **Applications:** Implementation notes or case studies.
    *   **Related:** Side connections.
    *   **Further Reading:** Supplemental references.

## 3. Tag and Metadata Constraints

To maintain tag discipline and index performance:

*   **Maximum Tags per Note:** A note may contain at most **5 discovery tags** (defined in [constants.md](file:///.antigravity/shared/constants.md)) from the controlled vocabulary in [tag-schema.md](file:///.antigravity/modules/metadata/tag-schema.md).
*   **Metadata over Tags:** Structured classifications (e.g., `type`, `status`, `domain`, `source_type`) belong in frontmatter fields, not in discovery tags.

## 4. Note Size Constraints

To maintain atomicity and readability:

*   **Maximum Note Size:** Notes should remain under **10,000 characters** (excluding frontmatter). Notes exceeding this limit must be reviewed and split into multiple atomic notes.

## 5. Confidence Thresholds

*   **Minimum Confidence for Automatic Edits:** Strictly **95%** (defined in [constants.md](file:///.antigravity/shared/constants.md)). Any edit proposed with confidence `<95%` must be presented as a suggestion.

## 6. Review Cadence for Large MOCs

*   **MOC Size Sweep (Weekly):** The health script checks MOC link counts and appends warnings to reports if limits are exceeded.
