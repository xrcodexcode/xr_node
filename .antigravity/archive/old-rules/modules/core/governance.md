---
module: core_governance
version: 2.1.0
priority: 1
depends_on:
  - shared_constants
  - shared_glossary
exports:
  - authority_hierarchy
  - conflict_resolution
  - ai_commandments
  - non_negotiable_graph_laws
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 650
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# NexusDB Governance Constitution

This is the supreme constitution for `nexusdb`. It defines final authority, conflict resolution, global commandments, and graph laws. All agents, automations, and files must operate in absolute compliance with this constitution.

## 1. Authority, Scope, and Conflict Resolution

- **Scope**: This constitution applies to all human actions, AI agents, automations, templates, and files under the vault root.
- **Final Authority**: The vault owner has final authority. Overrides must be logged as exceptions under [Exception Policy](file:///.antigravity/modules/core/exception_policy.md). No override may bypass source integrity, provenance, or irreversible-action protection without explicit approval.
- **Conflict Resolution Hierarchy**: When rules or instructions conflict, prioritize in this order:
  1. Source integrity (never corrupt or replace raw sources)
  2. User-authored content (never overwrite user prose without approval)
  3. Provenance (never break source-to-note traceability)
  4. Retrieval quality (never degrade search/retrievability)
  5. Automation convenience (developer/script ease comes last)
- **Authority Order**: This Constitution > Specific Rule Modules > Automation Behavior > Informal Guide Text.

## 2. AI Commandments

All agents must strictly follow these commandments:
- **Never delete; archive.** Always preserve history.
- **Never duplicate; merge or suggest a merge.**
- **Never summarize first; understand and preserve provenance first.**
- **Never invent metadata.** Infer metadata only when action confidence `>= 95`.
- **Never create folders inside `NODES/`.**
- **Never change canonical titles automatically.**
- **Never overwrite user writing.** Propose a patch or append.
- **Never replace a source.** Preserve the original and create a derived copy.
- **Never create low-confidence links automatically.**
- **Never perform an irreversible action without approval, snapshot, audit entry, and rollback.**

## 3. Non-Negotiable Graph Laws

- **Law 1**: No active orphan nodes. Every active note must belong to at least one MOC and have at least one justified inbound or outbound link.
- **Law 2**: Every note has one canonical title and one canonical file.
- **Law 3**: Every active knowledge note belongs to exactly one owner MOC.
- **Law 4**: Every factual claim has recoverable provenance or is explicitly labeled an unsupported observation.
- **Law 5**: Every ingested source produces reusable knowledge or a logged `no_reusable_knowledge` disposition.
- **Law 6**: Every confirmed duplicate is merged by archival consolidation; unresolved ones remain suggestions.
- **Law 7**: MOCs navigate; they do not contain explanations.
- **Law 8**: No raw source information exists outside `01_RAW/` (except quoted and attributed excerpts in derived notes).

## 4. Operational Module Delegation

To satisfy the Single Responsibility Principle, all specific rule details are delegated to their respective rule files:
- **Decision Engine & Confidence Policies**: Delegated to [decision_engine.md](file:///.antigravity/modules/core/decision_engine.md).
- **Canonical Ownership & Locations**: Delegated to [ownership.md](file:///.antigravity/modules/core/ownership.md).
- **Note Lifecycle & States**: Delegated to [maturity-model.md](file:///.antigravity/modules/quality/maturity-model.md).
- **Frontmatter & Schemas**: Delegated to [frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md).
- **Link Priority & Relationships**: Delegated to [linking-rules.md](file:///.antigravity/modules/graph/linking-rules.md).
- **Promotion & Rubrics**: Delegated to [promotion-rules.md](file:///.antigravity/modules/quality/promotion-rules.md).
- **Duplicate Detection & Merging**: Delegated to [merge-rules.md](file:///.antigravity/modules/graph/merge-rules.md).
- **Exceptions Logging**: Delegated to [exception_policy.md](file:///.antigravity/modules/core/exception_policy.md).
- **Audit Logging Standards**: Delegated to [audit_log.md](file:///.antigravity/modules/core/audit_log.md).
- **Search & Retrieval Ranking**: Delegated to [retrieval-rules.md](file:///.antigravity/modules/graph/retrieval-rules.md).
- **Health Metrics & Reviews**: Delegated to [health-metrics.md](file:///.antigravity/modules/quality/health-metrics.md).
- **Rule Versioning Schema**: Delegated to [rule_versioning.md](file:///.antigravity/modules/core/rule_versioning.md).
