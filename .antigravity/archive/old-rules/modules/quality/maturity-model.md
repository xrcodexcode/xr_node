---
module: quality_maturity
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
exports:
  - maturity_model_stages
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 650
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Knowledge Maturity Model

## Purpose

The legacy status progression (`captured → processed → verified → evergreen → atomic → linked → curated → maintained → archived`) conflated two orthogonal axes: **knowledge quality** and **graph integration**. A note can be `evergreen` but not yet `linked`; the old model implied a single path that ignored this.

The new 8-stage maturity model is strictly about **knowledge quality and readiness**. Graph integration (owner MOC, justified links) is governed by [governance.md](file:///.antigravity/modules/core/governance.md) Graph Laws and applies as a parallel requirement at every stage from `verified` onward.

---

## 1. The 8 Stages

```
captured
   ↓
processed
   ↓
learning       ← NEW: active study phase
   ↓
verified
   ↓
evergreen
   ↓
canonical      ← NEW: single vault authority for this concept
   ↓
maintained
   ↓
archived
```

---

## 2. Stage Definitions

| Stage | Meaning | Notes must satisfy |
|-------|---------|-------------------|
| `captured` | Original material received; not yet interpreted. | Raw source in `01_RAW/CAPTURE/` or working copy in `01_RAW/PROCESS/`. Provenance established. |
| `processed` | Cleaned, structured; provenance retained. | Formatting done; ready for active learning. |
| `learning` | Placed in `02_NEW-KNOWLEDGE/`; being actively studied. | All ideas and examples extracted; exhaustive understanding in progress. |
| `verified` | Material claims checked against source; factual accuracy confirmed. | Sources documented; no unsupported claims. |
| `evergreen` | Stable, reusable explanation; does not depend on a specific source's framing. | Atomic; independently understandable; domain-independent phrasing where possible. |
| `canonical` | The single authoritative note for this concept in the vault; no active duplicate exists. | Duplicate check passed; `concept_id` set; owner MOC declared; `verified` status maintained. |
| `maintained` | Reviewed within the cadence defined by `verification_interval`; still accurate. | `last_verified` current; `review_priority` not `critical`; content confirmed accurate. |
| `archived` | Historical reference; no longer an active knowledge asset. | Archived source preserved; links updated to redirect to successor if one exists. |

---

## 3. Transition Rules

A note advances only when all listed conditions are satisfied.

### `captured → processed`
- Original source is preserved in `01_RAW/CAPTURE/` (read-only).
- A working copy is created inside `01_RAW/PROCESS/` for editing and refinement.
- Provenance (source path, URL, or ID) is established.
- No knowledge extraction has occurred yet.

### `processed → learning`
- Note is placed in `02_NEW-KNOWLEDGE/`.
- Frontmatter is valid per [frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md).
- Source identity confirmed; action confidence ≥ 95.

### `learning → verified`
- All material claims checked against the source document.
- `sources` field populated with recoverable references.
- No unsupported factual assertions remain.
- Action confidence ≥ 95.

### `verified → evergreen`
- Note is atomic (one independently understandable idea).
- Phrasing is stable; does not depend on source-specific framing.
- Has at least one `relations` entry or justified body link.
- Promotion rubric score ≥ 6/10.

### `verified → evergreen` (Alternate Path)
- Note is evergreen and is ready for graph integration.

### `evergreen → canonical`
- Duplicate check performed; no active duplicate exists.
- `concept_id` set.
- `owner_moc` declared and note is listed in that MOC.
- Promotion rubric score ≥ 8/10 at action confidence ≥ 95.

### `canonical → maintained`
- Reviewed at least once within `verification_interval`.
- `last_verified` updated.
- Still accurate at time of review.

### `maintained → archived`
- Protected action. Requires explicit vault-owner approval.
- Successor note exists or no successor is needed.
- Links redirected or updated.
- Audit log entry with rollback path.

---

## 4. Rollback Rules

Any note may roll back to a previous stage when evidence warrants it. Rollbacks are **not failures** — they are quality signals.

| Rollback | Trigger |
|----------|---------|
| `canonical → evergreen` | A merge candidate is confirmed as a duplicate; canonical status revoked. |
| `evergreen → verified` | New evidence contradicts a claim; recheck required. |
| `verified → learning` | Source contradicts the extracted note; needs re-study. |
| `maintained → evergreen` | Confidence drops below threshold due to overdue review. |
| `canonical → archived` | Superseded by a better note; retire with successor link. |

All rollbacks require an audit log entry with the reason and confidence.

---

## 5. Status Migration from Legacy Model

Legacy status values are mapped to the new 8-stage model during the monthly review migration:

| Legacy `status` | New `status` | Notes |
|----------------|-------------|-------|
| `captured` | `captured` | Unchanged |
| `processed` | `processed` | Unchanged |
| `atomic` | `learning` | Was pre-verification; re-evaluated |
| `verified` | `verified` | Unchanged |
| `evergreen` | `evergreen` | Unchanged |
| `linked` | `evergreen` | Was post-graph; treat as at least evergreen |
| `curated` | `canonical` | Was featured; treat as canonical |
| `maintained` | `maintained` | Unchanged |
| `archived` | `archived` | Unchanged |

Migration is performed by `migrate_metadata.py --status-upgrade`. Dry run first.

---

## 6. Automation Opportunities

| Stage | Automation |
|-------|-----------|
| `processed → learning` | `run_pipeline.py` can auto-advance at confidence ≥ 95 |
| `learning → verified` | Human step; automation can flag readiness |
| `verified → evergreen` | `promotion_enforcer.py` evaluates and suggests |
| `evergreen → canonical` | `duplicate_detector.py` + `promotion_enforcer.py` combined check |
| `canonical → maintained` | `decay_scheduler.py` tracks freshness |
| Rollback detection | `check_vault.py` flags inconsistent state combinations |

---

## 7. Parallel Graph Requirements

From `verified` onward, a note must also satisfy the Graph Laws from [governance.md](file:///.antigravity/modules/core/governance.md):
- Owner MOC declared.
- At least one justified inbound or outbound link.

These are **parallel requirements**, not part of the linear maturity progression. A note can be `verified` but not yet graph-connected; it is then in a valid intermediate state and should appear in the orphan report until connected.
