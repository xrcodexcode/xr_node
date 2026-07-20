---
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: "v2.0.0 — Reorganized registry to point exclusively to the refactored modules/ and shared/ directory structures, eliminating rules/."
deprecation_date: null
---

# Module Registry

This registry is the single source of truth for resolving physical workspace paths of all Agent OS modules, shared files, and schemas.

## 1. Shared Core Registry (`shared/`)
- **shared_constants**: `.antigravity/shared/constants.md`
- **shared_glossary**: `.antigravity/shared/glossary.md`
- **shared_taxonomy**: `.antigravity/shared/taxonomy.md`
- **shared_aliases**: `.antigravity/shared/aliases.md`
- **shared_relationship_types**: `.antigravity/shared/relationship-types.md`
- **shared_naming_conventions**: `.antigravity/shared/naming-conventions.md`

## 2. Core Governance Modules (`modules/core/`)
- **core_governance**: `.antigravity/modules/core/governance.md`
- **core_ownership**: `.antigravity/modules/core/ownership.md`
- **core_exception**: `.antigravity/modules/core/exception_policy.md`
- **core_audit_log**: `.antigravity/modules/core/audit_log.md`
- **core_rule_versioning**: `.antigravity/modules/core/rule_versioning.md`
- **core_decision_engine**: `.antigravity/modules/core/decision_engine.md`

## 3. Metadata Modules (`modules/metadata/`)
- **metadata_schema**: `.antigravity/modules/metadata/frontmatter-schema.md`
- **metadata_tags**: `.antigravity/modules/metadata/tag-schema.md`
- **metadata_naming**: `.antigravity/modules/metadata/naming-rules.md`
- **metadata_concept**: `.antigravity/modules/metadata/concept-identity.md`
- **metadata_source**: `.antigravity/modules/metadata/source-schema.md`
- **metadata_node**: `.antigravity/modules/metadata/node-schema.md`
- **metadata_moc**: `.antigravity/modules/metadata/moc-schema.md`
- **metadata_decision_context**: `.antigravity/modules/metadata/decision-context.md`

## 4. Graph Operation Modules (`modules/graph/`)
- **graph_linking**: `.antigravity/modules/graph/linking-rules.md`
- **graph_merge**: `.antigravity/modules/graph/merge-rules.md`
- **graph_retrieval**: `.antigravity/modules/graph/retrieval-rules.md`
- **graph_scalability**: `.antigravity/modules/graph/scalability.md`
- **graph_navigation**: `.antigravity/modules/graph/navigation-hierarchy.md`

## 5. Automation and Workflow Modules (`modules/automation/`, `modules/workflow/`)
- **automation_ingestion**: `.antigravity/modules/automation/ingestion-rules.md`
- **automation_hooks**: `.antigravity/modules/automation/automation-hooks.md`
- **workflow_incubation**: `.antigravity/modules/workflow/incubation-rules.md`

## 6. Quality Metrics Modules (`modules/quality/`)
- **quality_metrics**: `.antigravity/modules/quality/health-metrics.md`
- **quality_maturity**: `.antigravity/modules/quality/maturity-model.md`
- **quality_promotion**: `.antigravity/modules/quality/promotion-rules.md`
- **quality_decay**: `.antigravity/modules/quality/knowledge-decay.md`
- **quality_graph_health**: `.antigravity/modules/quality/graph-health.md`
- **quality_checklist**: `.antigravity/modules/quality/quality-checklist.md`
