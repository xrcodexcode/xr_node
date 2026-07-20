---
module: workflow_incubation
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
  - metadata_schema
exports:
  - incubation_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Idea Incubation Rules

## Purpose

Not every captured idea is ready to become a permanent note. Without a quality gate between *capture* and *processing*, low-quality, vague, or underdeveloped ideas pollute the `NODES/` graph and degrade retrieval quality.

The incubation workflow creates a lightweight **holding pen** inside `01_RAW/CAPTURE/` where ideas mature before entering the main pipeline.

---

## 1. Incubation Lifecycle

```
Idea (status: incubating)
   ↓ [gate: has claim + basis + non-duplicate]
Observation (status: captured)
   ↓ [gate: processed, uniqueness confirmed]
Validated (status: processed)
   ↓ [gate: promotion rubric ≥ 6/10, confidence ≥ 80]
Permanent Node (status: verified → evergreen → canonical)
```

---

## 2. Incubating Notes

### Location
Incubating notes live in **`01_RAW/CAPTURE/`** as immutable draft captures. No new folder is added. They are distinguished by `status: incubating` in frontmatter. Any editing, development, or refinement of these notes must occur inside **`01_RAW/PROCESS/`** on a working copy.

### Required Frontmatter
```yaml
status: incubating
type: atomic-note           # intended type; not yet confirmed
confidence: <integer>       # your confidence this is worth developing
```

### What Makes an Incubating Note
- A rough idea, question, or observation not yet backed by a source.
- A potential atomic concept that has not been validated against existing notes.
- A synthesis hypothesis to be explored later.

### Incubating Note Restrictions
- May not be linked from MOCs.
- May not appear in `owner_moc` of any other note.
- Must not be cited as a source.

---

## 3. Gates

### Gate 1: Idea → Observation (`incubating → captured`)

An incubating note advances to `captured` when **all** are true:
- It has a clear, one-sentence claim or question.
- It has a basis: an observed fact, a source reference, or an explicitly labelled original observation.
- A duplicate check has been run and no existing note covers the same idea at semantic similarity ≥ 0.85.

Action confidence required: **≥ 80** (defined in [constants.md](file:///.antigravity/shared/constants.md)).

### Gate 2: Observation → Validated (`captured → processed`)

A captured incubating note advances to `processed` when:
- Formatting is clean and frontmatter is complete.
- The claim is specific and scoped (not vague).
- The note is confirmed unique in the vault.
- It has been reviewed and the vault owner decided it is worth developing further.

### Gate 3: Validated → Permanent (`processed → verified → ...`)

Entry into the full pipeline (verified, evergreen, canonical) follows the standard workflow in [ingestion-rules.md](file:///.antigravity/modules/automation/ingestion-rules.md) and [maturity-model.md](file:///.antigravity/modules/quality/maturity-model.md).

---

## 4. Timeout Rule

Incubating notes that have not advanced past `incubating` status within **30 days** are flagged by `decay_scheduler.py` with `review_priority: high`.

At 60 days, `review_priority: critical` is set.

The vault owner must then decide: develop, abandon (archive), or continue incubating (reset the clock with a log entry).

> [!NOTE]
> Abandoning an incubating idea is not a failure. Archive it with `status: archived` and a brief note on why it was not developed. This preserves decision provenance.

---

## 5. What Does NOT Belong in Incubation

Incubation is for **original ideas and unconfirmed observations**. Do not use `status: incubating` for:
- Standard ingested notes from a book or article (these are `captured` from the start and enter the normal pipeline).
- Rough drafts of notes you intend to finish soon (use `status: processed` with a `TODO` tag or `future_work` in `decision_context`).
- Notes from a well-understood source (skip incubation, proceed directly to `captured`).

---

## 6. Automation Support

`check_vault.py` reports:
- Count of `incubating` notes in `01_RAW/CAPTURE/`.
- Names and ages of notes in `incubating` status.
- Notes past the 30-day and 60-day timeout thresholds.

`decay_scheduler.py` updates `review_priority` for overdue incubating notes.

No automation may promote an incubating note out of the `incubating` stage without a human decision at Gate 1.
