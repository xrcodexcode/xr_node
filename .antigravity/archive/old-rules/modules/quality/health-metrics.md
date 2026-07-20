---
module: quality_metrics
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
exports:
  - health_metrics
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 600
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Knowledge Health Metrics

## Purpose

Health metrics make vault quality **measurable, trackable, and actionable**. They inform review decisions but never authorise automatic cleanup. Every metric below has a formula, a healthy threshold, and an action trigger.

---

## 1. Required Metrics (15)

| # | Metric | Formula | Healthy | Action trigger |
|---|--------|---------|---------|----------------|
| 1 | **Orphan %** | active orphan nodes ÷ active nodes | < 5% | > 10%: weekly review |
| 2 | **Dead link count** | broken wikilinks in active notes | 0 | > 0: fix immediately |
| 3 | **Avg backlinks per node** | total inbound links ÷ active nodes | > 2.0 | < 1.0: graph is sparse |
| 4 | **Avg outgoing links per node** | total outbound links ÷ active nodes | 3–8 | < 2 or > 15: review linking |
| 5 | **Cluster density** | justified edges ÷ active nodes | > 1.5 | < 0.8: low connectivity |
| 6 | **Duplicate probability** | confirmed duplicates ÷ nodes reviewed | < 2% | > 5%: run dedup sweep |
| 7 | **Review freshness %** | notes with `review_priority: normal or low` ÷ notes with decay tracking | > 85% | < 70%: schedule review sprint |
| 8 | **Domain coverage %** | domains with ≥ 1 curated MOC ÷ controlled domains | 100% | < 80%: create missing MOCs |
| 9 | **Source utilization %** | sources referenced by ≥ 1 note ÷ total sources in `01_RAW/SOURCE/` | > 80% | < 50%: check orphaned sources |
| 10 | **Tag entropy** | Shannon entropy of discovery tag distribution | > 0.6 | < 0.3: tag overuse or underuse |
| 11 | **MOC coverage %** | active notes with `owner_moc` ÷ active notes | > 95% | < 90%: assign missing MOCs |
| 12 | **Source traceability %** | source-backed notes with recoverable source ÷ source-backed notes | 100% | < 95%: log and repair |
| 13 | **Broken reference count** | `relations.target` entries pointing to non-existent notes | 0 | > 0: fix or remove |
| 14 | **Schema compliance %** | notes at `schema_version: 3` or higher ÷ all notes | > 95% | < 80%: run migration |
| 15 | **Avg freshness (days)** | mean days since `updated` or `last_verified` across active notes | < 180 | > 365: stale content review |

---

## 2. Dashboard Output

`health_dashboard.py` writes two output files:

### `.antigravity/reports/health-dashboard.json`

Machine-readable JSON:
```json
{
  "generated_at": "ISO-8601",
  "vault_root": "path",
  "active_nodes": 314,
  "metrics": {
    "orphan_pct": 2.5,
    "dead_link_count": 0,
    "avg_backlinks": 3.2,
    ...
  },
  "alerts": [
    {"metric": "review_freshness_pct", "value": 68, "threshold": 70, "severity": "warning"}
  ]
}
```

### `.antigravity/reports/health-dashboard.md`

Human-readable summary:
- Metric table with current values, thresholds, and status (✅ / ⚠️ / 🔴).
- Alert section listing any triggered action items.
- Trend section (delta from last run if previous report exists).

---

## 3. Alert Severity Levels

| Severity | Condition | Review cadence |
|----------|-----------|----------------|
| 🟢 Healthy | All thresholds met | Monthly |
| ⚠️ Warning | Any `action trigger` threshold crossed | Weekly |
| 🔴 Critical | Orphan % > 20%, dead links > 10, schema compliance < 50%, or duplicate probability > 15% (defined in [constants.md](file:///.antigravity/shared/constants.md)) | Immediate |

---

## 4. Metric Governance Rules

- Metrics inform review; they never justify unreviewed destructive cleanup.
- A metric in ⚠️ or 🔴 state generates a report entry; it does not grant permission to auto-fix.
- Threshold changes require a versioned update to this file and an audit log entry.
- Historical metric snapshots are retained in `.antigravity/reports/` for trend analysis.

---

## 5. Orphan Definition

An active node is an orphan when it has **no owner MOC** or **no justified inbound or outbound graph link**. Do not add artificial links merely to lower this metric.

---

## 6. Tag Entropy Formula

```
H = -Σ (p_i × log2(p_i))
where p_i = (count of tag i) / (total tag uses)

Normalised entropy = H / log2(number of distinct tags)
```

Healthy normalised entropy is > 0.6 (reasonably distributed). A value near 0 indicates one tag dominates; near 1 indicates every note has a unique tag pattern.

---

## 7. Review Cadence

| Report | Cadence | Owner |
|--------|---------|-------|
| `health-dashboard.md` | Weekly (automated) | `decay_scheduler.py` trigger |
| `decay-report.md` | Weekly (automated) | `decay_scheduler.py` |
| `graph-analytics.md` | Weekly (automated) | `graph_analytics.py` |
| Monthly governance review | Monthly (human) | Vault owner |
