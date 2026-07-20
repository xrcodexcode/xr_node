---
module: quality_graph_health
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - quality_metrics
exports:
  - graph_health_reporting_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Graph Health

Health reporting measures quality; it does not authorize automatic cleanup.

## Required Metrics

- graph density = justified edges ÷ active nodes
- average links = total justified links ÷ active nodes
- node reuse = nodes referenced by more than one note or MOC ÷ active nodes
- retrieval success = successful retrievals ÷ logged retrieval attempts
- duplicate rate = confirmed duplicates ÷ nodes reviewed
- orphan percentage = active orphan nodes ÷ active nodes
- tag entropy = discovery-tag distribution evenness, reported with overused tags
- MOC coverage = active notes with an owner MOC ÷ active notes
- source traceability = source-backed notes with recoverable source ÷ source-backed notes
- average atomicity score = mean atomicity-review score
- average confidence = mean confidence of applied non-exception actions
- average freshness = mean days since update or verified review
- broken link count
- exception count and repeated-exception count

## Orphan Definition

An active node is an orphan when it has no owner MOC or no justified inbound/outbound graph link (defined in [constants.md](file:///.antigravity/shared/constants.md)). Do not add artificial links merely to lower this metric.

## Reports

Write periodic health reports to `.antigravity/reports/` and append material repair actions to `.antigravity/logs/audit-log.md`.
