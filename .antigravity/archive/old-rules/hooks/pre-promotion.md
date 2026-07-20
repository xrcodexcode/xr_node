---
title: Pre-Promotion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Pre-Promotion Hook

These rules must be run before promoting any atomic note to a higher synthesis layer (e.g. `evergreen` or moving/referencing in `NOTES/`).

## Required Operations

1. **Promotion Rubric Calculation**: Compute the quantitative score (out of 10) for the note based on the 10-point rubric in `.antigravity/rules/quality/promotion-rules.md`:
   - Source-backed and verified (2 pts)
   - Atomic (2 pts)
   - Reusable beyond source (2 pts)
   - Linked to owner MOC and >=1 related note (2 pts)
   - Stable canonical title (1 pt)
   - Not a duplicate (1 pt)
2. **Decision Matrix Evaluation**:
   - Score **8–10**, Confidence **>=95**: Promote automatically and append an entry in the audit log.
   - Score **8–10**, Confidence **80–94**: Do not promote; output a suggestion for the user.
   - Score **6–7**: Require human review.
   - Score **< 6**: Retain in current state.
3. **Graph Integrity Checks**: Check that promotion does not result in broken wiki links.
