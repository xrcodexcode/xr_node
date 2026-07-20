# Vault Health Dashboard

**Generated**: 2026-07-19 12:39 UTC  
**Active nodes**: 339

## Metrics

| # | Metric | Value | Status |
|---|--------|-------|--------|
| 1 | Orphan % | 52.51 | 🔴 |
| 2 | Dead Link Count | 805 | 🔴 |
| 3 | Avg Backlinks / Node | 8.5 | ✅ |
| 4 | Avg Outgoing Links / Node | 7.14 | ✅ |
| 5 | Cluster Density | 7.822 | ✅ |
| 6 | Duplicate Probability % | 0.0 | ✅ |
| 7 | Review Freshness % | 100.0 | ✅ |
| 8 | Domain Coverage % | 9.52 | 🔴 |
| 9 | Source Utilization % | 20.0 | 🔴 |
| 10 | Tag Entropy (normalised) | 0.751 | ❓ |
| 11 | MOC Coverage % | 47.49 | 🔴 |
| 12 | Source Traceability % | 100.0 | ✅ |
| 13 | Broken Reference Count | 7 | 🔴 |
| 14 | Schema Compliance % | 100.0 | ✅ |
| 15 | Avg Freshness (days) | 1.2 | ✅ |

## Alerts

- **🔴 Critical**: `orphan_pct` = 52.51
- **🔴 Critical**: `dead_link_count` = 805
- **🔴 Critical**: `domain_coverage_pct` = 9.52
- **🔴 Critical**: `source_utilization_pct` = 20.0
- **🔴 Critical**: `moc_coverage_pct` = 47.49
- **🔴 Critical**: `broken_ref_count` = 7

---

_Governed by `.antigravity/rules/quality/health-metrics.md`. Metrics inform review; they never authorise automatic cleanup._