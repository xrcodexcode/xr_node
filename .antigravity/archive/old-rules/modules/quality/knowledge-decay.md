---
module: quality_decay
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
exports:
  - knowledge_decay_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 650
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Knowledge Decay Management

## Purpose

Knowledge decays. Facts become outdated, methods are superseded, and evergreen notes drift from accuracy. Without explicit freshness tracking, a large vault develops invisible rot. This rule defines how staleness is detected, reported, and resolved without corrupting source files.

---

## 1. New Frontmatter Fields

```yaml
last_verified: YYYY-MM-DD          # date claims were last checked against source
verification_interval: 365         # days between required verifications; null = no decay
stale_after: YYYY-MM-DD            # computed: last_verified + verification_interval
review_priority: normal            # low | normal | high | critical
confidence_decay: 0                # integer points lost per 365 days if unreviewed
```

All fields are **optional**. Existing notes without these fields are treated as unscheduled (no decay computed).

---

## 2. Field Rules

| Field | Rule |
|-------|------|
| `last_verified` | ISO date. Set on creation and updated whenever claims are verified against source. Never computed automatically — only set by human action. |
| `verification_interval` | Positive integer (days) or `null`. `null` means no scheduled decay (e.g., for mathematics or logic notes that are stable by nature). |
| `stale_after` | Computed field: `last_verified + verification_interval`. Set by `decay_scheduler.py`. Never manually edited. |
| `review_priority` | Controlled vocabulary. Updated by `decay_scheduler.py` based on staleness. Manual override is allowed and takes precedence for one review cycle. |
| `confidence_decay` | Integer `0–50`. Points by which effective confidence decreases per 365 days of overdue status. Applied only in analytics reports; the `confidence` field in the note is never automatically modified. |

---

## 3. Review Priority Thresholds

The `decay_scheduler.py` automation sets `review_priority` based on days overdue:

| Days overdue | `review_priority` |
|-------------|------------------|
| Not overdue | `low` |
| 0–30 days overdue | `normal` |
| 31–90 days overdue | `high` |
| > 90 days overdue | `critical` |

Notes without `verification_interval` are never marked overdue.

---

## 4. Effective Confidence in Reports

The `decay_scheduler.py` reports an **effective confidence** for analytics:

```
effective_confidence = max(0, confidence - (confidence_decay * years_overdue))
```

This value appears only in:
- `.antigravity/reports/health-dashboard.md`
- `.antigravity/reports/decay-report.md`

The `confidence` field in the note itself is **never automatically modified**. Modifying `confidence` requires a human verification action and is logged.

---

## 5. Recommended Verification Intervals by Note Type

| Note type | Recommended interval |
|-----------|---------------------|
| Factual claim (statistics, data) | 180 days |
| Method / process | 365 days |
| Conceptual definition | 730 days |
| Historical fact | `null` (stable) |
| Tool / technology note | 180 days |
| Original observation | 365 days |
| Law of physics / mathematics | `null` (stable) |

These are recommendations. The vault owner sets the actual interval per note.

---

## 6. Automated Review Scheduling

`decay_scheduler.py` runs as part of the weekly audit hook and:

1. Reads all notes with `verification_interval` set.
2. Computes `stale_after = last_verified + verification_interval`.
3. Updates `review_priority` in each note's frontmatter (this is a permitted automated write because it is a computed scheduling field, not a knowledge claim).
4. Writes a decay report to `.antigravity/reports/decay-report.md` listing all overdue and soon-to-be-overdue notes.
5. Appends a summary row to the audit log (one row per batch run, not per note).

> [!IMPORTANT]
> `decay_scheduler.py` is permitted to update `review_priority` and `stale_after` automatically because these are scheduling metadata, not knowledge content. All other frontmatter changes require confidence ≥ 95 and human approval.

---

## 7. Completing a Verification

When a human verifies a note:
1. Update `last_verified` to today's date.
2. Update `confidence` if evidence changed.
3. Increment `version`.
4. Update `updated` to today.
5. Log the verification in the audit log with the rule applied and confidence.

`decay_scheduler.py` will automatically recompute `stale_after` on next run.

---

## 8. Decay Report Format

`.antigravity/reports/decay-report.md` contains:
- Total notes with decay tracking
- Count by `review_priority` band
- List of `critical` priority notes (most overdue first)
- List of `high` priority notes
- Notes expiring within 30 days (`normal` → `high` transition)

This report is produced weekly and does not authorise any automated cleanup.
