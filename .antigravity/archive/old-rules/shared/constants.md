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
