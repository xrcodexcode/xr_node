---
module: core_decision_engine
version: 1.1.0
priority: 2
depends_on:
  - shared_constants
exports:
  - confidence_formulas
  - decision_matrix
  - irreversible_action_protection
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 500
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated decision engine to core module."
---

# Decision Engine

This module defines the quantitative confidence levels, calibration formulas, decision matrices, and safety protections that govern all agent modifications.

## 1. Confidence Policy
Every action requires an explicit confidence score between `0` and `100` computed via Calibration Formulas:
- **95–100% (Safe)**: Apply reversible, rule-compliant action and log in the audit log.
- **80–94% (Suggest)**: Suggest the action to the user; do not make automatic modifications.
- **60–79% (Ask)**: Ask for explicit user approval before modifying files or metadata.
- **<60% (Do Nothing)**: Do not perform any action (except logging optional observations).

## 2. Confidence Calibration Formulas
All confidence values must be calculated using these formulas to prevent arbitrary scoring:

### A. Merge & Duplicate Decisions
Calculated using title similarity (\(S_{\text{title}}\)) and semantic similarity (\(S_{\text{semantic}}\)) from `0.0` to `1.0`:
\[Confidence_{\text{merge}} = \begin{cases} (0.4 \cdot S_{\text{title}} + 0.6 \cdot S_{\text{semantic}}) \times 100 & \text{if } S_{\text{title}} \ge 0.90 \text{ and } S_{\text{semantic}} \ge 0.90 \\ 0 & \text{otherwise} \end{cases}\]

### B. Note-Creation Decisions
Calculated using conceptual uniqueness (\(U\)), source grounding (\(G\)), and schema completeness (\(C\)) from `0.0` to `1.0`:
\[Confidence_{\text{creation}} = (0.4 \cdot U + 0.4 \cdot G + 0.2 \cdot C) \times 100\]
- \(U = 1.0 - \text{maximum semantic similarity to any existing node}\)
- \(G = \text{fraction of claims supported by explicit citations in the raw source}\)
- \(C = \text{fraction of required frontmatter schema fields populated}\)

### C. Link-Priority Decisions
Calculated using key term overlap (\(P\)) and explicit source relationship (\(R\)) from `0.0` to `1.0`:
\[Confidence_{\text{link}} = (0.5 \cdot P + 0.5 \cdot R) \times 100\]
- \(P = \text{semantic closeness of the target note topic to the source note topic}\)
- \(R = \text{strength of explicit connection (direct citation or causal link in source text)}\)

## 3. Unified Decision Matrix

| Action | Auto? | Required threshold / Rule | Human review? |
|---|---|---|---|
| **Create note** | Yes | Source-backed + unique; duplicate confidence `<80`; action confidence `>=95` | Required below `95` |
| **Merge duplicates** | Maybe | Title similarity `>=0.90` AND semantic similarity `>=0.90`; confidence `>=95` | Yes if borderline or title changes |
| **Promote to NOTES** | Maybe | Rubric score `>=8/10` and action confidence `>=95` | Yes if score is `6–7` or confidence `<95` |
| **Archive source** | Yes | Extracted + linked + logged; action confidence `>=95` | Yes if any criteria fail |
| **Delete file** | No | Never by default; requires explicit approval + snapshot + rollback | Always |
| **Change title** | No | Never by default; requires explicit approval | Always |
| **Rewrite user prose** | No | Never by default; requires explicit approval | Always |

## 4. Irreversible-Action Protection
Protected actions include:
1. Deleting source files or notes.
2. Rewriting user-authored prose.
3. Automatically renaming canonical note titles.
4. Merging notes with title/semantic similarity `< 0.90`.

Before executing any protected action, the agent must ensure:
- Explicit user approval has been received.
- A backup snapshot or archived copy of the target file has been created.
- An entry is logged in `.antigravity/logs/audit-log.md` detailing the reason, confidence, and exception scope.
- A concrete rollback path is specified (e.g., git checkout command).
