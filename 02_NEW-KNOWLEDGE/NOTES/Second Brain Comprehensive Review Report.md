---
id: "ec537d88-cbda-4e3c-b25f-e5bb6a4da191"
title: "Second Brain Comprehensive Review Report"
type: "project"
status: "processed"
created: "2026-09-01T12:00:00Z"
modified: "2026-09-01T12:00:00Z"
review: "2026-12-01"
confidence: 100
tags: ["checklist", "reference"]
aliases: []
owner_moc: "study-moc"
source:
  title: "Vault Health Report"
  author: "Vault Health Report Agent"
  url: ""
  published: "2026-09-01"
  accessed: "2026-09-01"
  locator: "Vault health logs"
  captured_at: "2026-09-01T12:00:00Z"
  content_hash: ""
---

# Second Brain Comprehensive Review Report

*Generated on 2026-09-01.*

---

## 1. Executive Summary

This report presents a health audit of the NexusDB “second brain” vault. It aggregates metrics from the automated health‑log (`.antigravity/logs/moc-health.md`) and the various audit reports (`broken-links.md`, `_orphans.md`, `duplicate-candidates.md`, `promotion-candidates.md`).

Key take‑aways:

- **Total Nodes (atomic concepts)**: **373**
- **MOC count**: **22**
- **Orphan notes**: **32** (≈8.6 % of notes)
- **Broken wikilinks**: **61** (still present after the latest cleanup)
- **Invalid/unknown tags**: **0** flagged by `invalid-tags.md`, but the health log records **67** unknown tags – likely tags not present in the approved taxonomy.
- **Duplicate candidates**: **91** pairwise similarity warnings.
- **Empty MOCs**: **10** MOCs contain no notes.

The audit surfaces three priority areas:
1. **Link hygiene** – resolve the 61 broken links.
2. **Orphan remediation** – either integrate orphan notes into appropriate MOCs or archive them.
3. **Duplicate consolidation** – review the 91 duplicate‑candidate pairs and merge where appropriate, preserving provenance.

---

## 2. Metrics Overview (from `.antigravity/logs/moc-health.md`)

| Metric | Value |
|---|---:|
| **Node Count** | 373 |
| **MOC Count** | 22 |
| **Orphan Count** | 32 |
| **Broken Link Count** | 61 |
| **Invalid Tag Count** | 0 (explicit report) *but* health log notes **67** unknown tags |
| **Duplicate Candidates** | 91 |
| **Empty MOCs** | 10 |
| **Average Backlinks per Node** | 6.75 |

**Note**: The health log shows a decreasing trend for broken links (from 128 → 61) after recent clean‑ups.

---

## 3. Broken Wikilinks (excerpt)

The `broken-links.md` report lists 61 broken targets. Below are the first 10 entries (full list is in the source report).

| Source Note | Broken Target | Suggested Action |
|---|---|---|
| `cardinal-rule-of-behavior-change.md` | `immediate-return-environment` | Fix or remove link |
| `cardinal-rule-of-behavior-change.md` | `delayed-return-environment` | Fix or remove link |
| `cardinal-rule-of-behavior-change.md` | `reinforcement` | Fix or remove link |
| `cardinal-rule-of-behavior-change.md` | `quote-what-is-rewarded-is-repeated` | Fix or remove link |
| `claude-second-brain-levels.md` | `Note Name` | Fix or remove link |
| `claude-second-brain-levels.md` | `about-me.md` | Fix or remove link |
| `claude-second-brain-levels.md` | `decisions.md` | Fix or remove link |
| `diderot-effect.md` | `habit-stacking` | Fix or remove link |
| `dopamine-driven-feedback-loop.md` | `motivation-ritual` | Fix or remove link |
| `genetics-and-environment.md` | `quote-genes-predispose` | Fix or remove link |

**Action**: Open each source note, verify whether the target should exist, rename the target note, or delete the link.

---

## 4. Orphan Notes

The `_orphans.md` report flags 32 notes with zero inbound backlinks. A representative subset is shown below (full list in the source report).

| Orphan Title | Suggested MOC | Suggested Connections |
|---|---|---|
| **Books Cheatsheet: The Duality of Habits & Power** | `Books MOC` | `Anne Thorndike Cafeteria Study`, `Atomic Habit` |
| **The Diderot Effect** | `Study MOC`, `Books MOC`, `Atomic Habits MOC` | `Commitment Devices`, `Decisive Moments` |
| **Cheatsheet — Finally. Agent Loops Clearly Explained** | `AI & ML MOC`, `YouTube MOC` | `Agent Loop Architectures`, `Done Criteria in Agent Loops` |
| **James Clear Injury Recovery** | `Books MOC`, `Atomic Habits MOC` | `Anne Thorndike Cafeteria Study`, `Atomic Habit` |
| **Marginal Gains British Cycling** | `Books MOC`, `Atomic Habits MOC` | `Anne Thorndike Cafeteria Study`, `Atomic Habit` |

**Recommendation**: For each orphan, either (a) add it to the suggested MOC and create at least one inbound link, or (b) archive it to `01_RAW/SOURCE/` with provenance.

---

## 5. Duplicate Candidates

`duplicate-candidates.md` identifies 91 pairwise similarity warnings. The top‑5 pairs (by similarity reason) are:

1. **Agent Loop Architectures ↔ Done Criteria in Agent Loops** – shared tags (`ml, ai, productivity, yt`) and 40 % filename overlap.
2. **Atomic Habit ↔ Habit Contracts** – shared tags (`book, productivity, habits`) and 33 % overlap.
3. **Law of 35 – Master the Art of Timing ↔ The Law of Reversal** – shared tags (`book, power`) and 37 % overlap.
4. **The Futility of Gratitude ↔ The Illusion of Equality** – shared tags (`book, power`) and 33 % overlap.
5. **Environment Design ↔ Environment Priming** – shared tags (`book, productivity, habits`) and 33 % overlap.

**Action**: Review each pair, decide whether to (a) merge into a single canonical note (preserving both sources via provenance), (b) keep both but differentiate scope, or (c) archive one.

---

## 6. Tag Compliance

- **Invalid Tags Report**: `invalid-tags.md` reports *none* across 132 scanned notes.
- **Health Log**: Indicates **67** “unknown tags”. This discrepancy suggests that many notes contain tags not present in the approved taxonomy (`.claude/rules/tagging.md`).

**Steps to Resolve**:
1. Run a tag‑validation script against the taxonomy.
2. Replace any non‑canonical tags with the approved equivalents (see alias mapping in `tagging.md`).
3. Add any genuinely new discovery‑facet tags to the taxonomy after a brief review.

---

## 7. Naming Compliance (NODES)

The `naming.md` rule requires that every file in `NODES/` have a filename that exactly matches the `title` field in its frontmatter. A quick grep shows no mismatches, but a thorough verification is recommended before the next promotion cycle.

---

## 8. Empty MOCs

The health log lists 10 empty MOCs (no notes linked). They are:

- `finally-agent-loops-clearly-explained-moc.md`
- `learn-99-percent-claude-and-codex-in-25-mins-moc.md`
- `neural-network-moc.md`
- `python-for-ai-beginner-course-moc.md`
- `steve-jobs-moc.md`
- `THIS IS WHY PEOPLE HURT YOU.md`
- `uncomfortable-truths-2-moc.md`
- `warren-buffett-moc.md`
- `why-you-are-feeling-stuck-in-your-20s-moc.md`
- `_orphans.md`

**Recommendation**: Either populate each MOC with relevant notes or archive the MOC if it no longer serves a navigation purpose.

---

## 9. Promotion Candidates

`promotion-candidates.md` suggests status tags for 138 notes. The majority are flagged as `processed` based on backlink count, while several are suggested as `draft`. Review the suggested status changes and apply them manually where appropriate.

---

## 10. Recommendations & Next Steps

1. **Resolve Broken Links** – allocate a short‑term sprint to fix the 61 broken wikilinks.
2. **Orphan Integration** – for each orphan, add at least one inbound link from a related note or MOC.
3. **Duplicate Consolidation** – prioritize the 15 highest‑similarity pairs for merging or differentiation.
4. **Tag Audit** – reconcile the 67 unknown tags with the approved taxonomy; update notes accordingly.
5. **MOC Enrichment** – fill the 10 empty MOCs or retire them.
6. **Status Tagging** – apply the status suggestions from `promotion-candidates.md` to bring notes into the proper lifecycle stage.
7. **Automated Health Checks** – schedule a recurring health report (e.g., weekly) using the existing `vault-health-report` agent to keep the vault in a healthy state.

---

*Prepared by the Vault Health Review Agent (automated)*