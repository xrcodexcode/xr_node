---
title: Weekly Audit Hook
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v2 — added decay_scheduler, health_dashboard, and graph_analytics operations
deprecation_date: null
---

# Weekly Audit Hook

This hook represents the deeper structural audits executed on a weekly basis to maintain long-term vault scalability.

## Required Operations

1. **Duplicate Detection Scan**: Run `duplicate_detector.py` to compare Jaccard overlap on titles, slugs, and tags. Dump findings to `.antigravity/reports/duplicate-candidates.md`.
2. **MOC Alignment Audit**: Confirm that every active note has an `owner_moc` and that the note is linked inside that MOC file. Report any mismatched associations.
3. **Tag Entropy Check**: Identify tags that are being used outside the allowed tag schema or have high redundancy, and verify tag alias conversions.
4. **Graph Health Metric Report**: Run `health_dashboard.py` to produce a 15-metric health dashboard (orphan %, dead links, avg backlinks, cluster density, schema compliance %, etc.) and save to `.antigravity/reports/health-dashboard.md`.
5. **Knowledge Decay Scheduling**: Run `decay_scheduler.py` (read-only mode) to identify notes with stale or overdue verification schedules. Save to `.antigravity/reports/decay-report.md`.
6. **Graph Analytics Report**: Run `graph_analytics.py` to identify authority nodes, hub nodes, bridge nodes, disconnected clusters, knowledge gaps, and emerging topics. Save to `.antigravity/reports/graph-analytics.md`.
7. **MOC Size Sweep**: Check MOC link counts against limits in `scalability.md` and `navigation-hierarchy.md`. Append warnings to `moc-health.md` if any MOC exceeds its soft limit.
