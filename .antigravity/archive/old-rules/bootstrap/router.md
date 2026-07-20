---
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: "v2.0.0 — Replaced keyword routing with a capability-based router mapping to module entry points."
deprecation_date: null
---

# Capability Router

This router maps requested Agent OS capabilities to their target entry point modules. The loader resolves the full dependency trees dynamically.

## 1. Capability Mapping Table

| Capability | Entry Point Modules | Purpose |
|---|---|---|
| **INGEST** | `automation_ingestion`, `workflow_incubation` | Ingestion pipelines, capture evaluation, and raw source lifecycles. |
| **LINK** | `graph_linking` | Semantic linking, relationship priorities, and connection policies. |
| **REVIEW** | `quality_decay`, `core_exception` | Freshness verification, decay scheduling, and exceptions logging. |
| **PROMOTE** | `quality_promotion`, `quality_maturity` | Curation evaluation, node maturity state transitions. |
| **GRAPH** | `graph_navigation`, `graph_scalability` | Map of Content (MOC) structure, network density, limits checks. |
| **SEARCH** | `graph_retrieval` | Structured query search and rank-ordered node retrieval. |
| **MERGE** | `graph_merge` | Archival duplicate merging and node consolidation. |
| **MIGRATION** | `core_rule_versioning`, `metadata_schema` | System upgrades, rule updates, schema version shifts. |
| **MAINTENANCE** | `core_audit_log`, `quality_metrics` | Logging changes, tracking system KPIs, health reporting. |

## 2. Capability Resolution Flow
1. Identify the high-level capability needed for the active task.
2. Retrieve the mapped entry-point modules from the table.
3. Pass the entry points to [loader.md](file:///.antigravity/bootstrap/loader.md) to build the load sequence.
