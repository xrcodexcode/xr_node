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
