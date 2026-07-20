# Folder: .antigravity/rules

## File: rules\README.md

```markdown
---
title: NexusDB Rules Index
type: governance-rule
status: active
version: 1.2.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Reorganize rule files into domain-based subdirectories
deprecation_date: null
---

# NexusDB Rules Index

`core/governance.md` is the supreme rulebook. It defines authority, confidence levels, decision thresholds, protected actions, ownership, exceptions, audit logging, metrics, and review cadence. When another rule is ambiguous or conflicts with it, follow `core/governance.md`.

Rules are organized into 5 functional domains:

## 1. Core (`core/`)
Rules governing the vault constitution, authority boundaries, decision matrix, exceptions, and versioning.
*   [governance.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/core/governance.md) — Constitution: authority, decision engine, and non-negotiable laws.
*   [ownership.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/core/ownership.md) — Canonical ownership of vault locations.
*   [exception_policy.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/core/exception_policy.md) — Standard operating procedure for logging policy exceptions.
*   [rule_versioning.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/core/rule_versioning.md) — Metadata and review guidelines for rule updates.
*   [decision_engine.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/core/decision_engine.md) — Confidence levels and general decision matrix.

## 2. Metadata (`metadata/`)
Rules governing note metadata structure, naming conventions, and validation.
*   [frontmatter-schema.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/frontmatter-schema.md) — Canonical note identity and controlled metadata (schema_version 3).
*   [tag-schema.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/tag-schema.md) — Controlled discovery tags and metadata vocabulary.
*   [source-schema.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/source-schema.md) — Raw-source identity and preservation metadata.
*   [node-schema.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/node-schema.md) — Atomic-node structure and ownership requirements.
*   [moc-schema.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/moc-schema.md) — Map of Content layout and navigation constraints.
*   [naming-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/metadata/naming-rules.md) — Canonical note title and filename conventions.

## 3. Graph (`graph/`)
Rules governing link priorities, merge thresholds, and scaling limits.
*   [linking-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/graph/linking-rules.md) — Relationship priority and automatic link thresholds.
*   [merge-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/graph/merge-rules.md) — Duplicate thresholds and archival merge protocol.
*   [retrieval-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/graph/retrieval-rules.md) — Deterministic search and answer retrieval ranking.
*   [scalability.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/graph/scalability.md) — Quantitative scalability limits for MOCs, links, tags, and sizes.

## 4. Automation (`automation/`)
Rules governing trigger timings, execution constraints, and pipeline stages.
*   [automation-hooks.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/automation/automation-hooks.md) — Hook timing, execution pipeline sequencing, and safeguards.
*   [ingestion-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/automation/ingestion-rules.md) — Ingest pipelines from capture inbox to archival source.

## 5. Quality (`quality/`)
Rules governing health metrics, promotion checks, and verification validation.
*   [quality-checklist.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/quality/quality-checklist.md) — Ingestion validation checklist.
*   [graph-health.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/quality/graph-health.md) — Health metric definitions and required report KPIs.
*   [promotion-rules.md](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/rules/quality/promotion-rules.md) — Quantitative 10-point promotion rubric.
```

---

## File: rules\automation\automation-hooks.md

```markdown
---
title: NexusDB Automation Hooks (Legacy)
type: governance-rule
status: archived
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Deprecated and split into modular lifecycle hooks under .antigravity/hooks/
deprecation_date: 2026-07-18
---

# Legacy Automation Hooks

> [!IMPORTANT]
> This rule has been deprecated and split into modular, executable files under the `.antigravity/hooks/` directory.

Please refer to the following new locations:
- [Pre-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-ingest.md)
- [Post-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/post-ingest.md)
- [Pre-Promotion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-promotion.md)
- [Nightly Maintenance Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/nightly-maintenance.md)
- [Weekly Audit Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/weekly-audit.md)
```

---

## File: rules\automation\ingestion-rules.md

```markdown
---
title: NexusDB Ingestion Rules
type: governance-rule
status: active
version: 2.1.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Refactored 02_NEW-KNOWLEDGE/ to specify active learning and dual promotion workflow to NOTES/ and NODES/
deprecation_date: null
---

# Ingestion Rules

## Pipeline

1. Capture original material in `01_RAW/CAPTURE/`. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved to `01_RAW/PROCESS`.
2. Create a working copy inside `01_RAW/PROCESS/` for all editing, cleaning, and refinement. `01_RAW/PROCESS` is the only writable workspace during ingestion.
3. All intermediate or supporting files created during processing must remain inside `01_RAW/PROCESS/`.
4. Iterate on processing until the user explicitly approves promotion.
5. After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. Atomic note generation in `NODES` occurs only after the document is in `NOTES`.

## Completion Gate

An ingestion is complete only when:

- the original source is preserved and archived in `01_RAW/SOURCE/` (moved from `01_RAW/CAPTURE/`);
- every new source-derived note has provenance;
- metadata validates against `frontmatter-schema.md`;
- duplicate candidates were evaluated;
- every active node has one owner MOC and justified graph connections;
- the source has reusable knowledge linked or a logged `no_reusable_knowledge` disposition;
- the archive action and material changes are in the audit log.

Never leave a successfully processed original source in `CAPTURE/` after promotion. Do not archive the original source until the document has been successfully promoted to `02_NEW-KNOWLEDGE`.


```

---

## File: rules\core\audit_log.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of audit log standard file to satisfy the Single Responsibility Principle
deprecation_date: null
---

# Audit Log Standard

This module defines the required fields, rules, and formats for recording agent and system actions in the vault's append-only audit log.

## 1. Audit Log Location
All audit entries must be appended to:
- `.antigravity/logs/audit-log.md`

## 2. Table Column Schema
Every entry must correspond to a row in the audit log table, defined as:

| Field | Description / Format |
|---|---|
| `timestamp` | ISO 8601 formatted timestamp with local offset |
| `actor` | Identifier of the entity executing the change (human, agent name, or automation script name) |
| `action` | The type of action: `create`, `suggest`, `promote`, `link`, `merge`, `archive`, `restore`, `update`, `observe`, or `exception` |
| `target` | Canonical file path or Note UUID being modified |
| `reason` | Concise explanation of why the action was taken |
| `rule` | The specific governing rule file and section (e.g., `linking-rules.md §4`) |
| `sources` | The source file path(s) or IDs from which the knowledge was derived, or `none` |
| `confidence` | Action confidence score (`0–100`) calculated using calibration formulas |
| `result` | The final outcome: `applied`, `suggested`, `rejected`, `logged-observation`, or `rolled-back` |
| `rollback` | Safe rollback command, path to backup snapshot, or `not-applicable` |
| `exception_id` | Unique ID of approved exception from `exception_policy.md` or `none` |

## 3. Markdown Formatting Schema
Audit entries must be appended using this exact markdown table row format:
```markdown
| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
```

## 4. Operational Requirements
- **Append-only**: Never delete, rewrite, or reorder historical rows in `.antigravity/logs/audit-log.md`.
- **Pre-execution logging**: For any protected action (merging, renaming titles, archiving sources, or rewriting prose), the entry must be drafted and approved before execution.
- **Failures**: Audit log failures (e.g., read/write errors on the audit file) must halt the entire pipeline.
```

---

## File: rules\core\decision_engine.md

```markdown
---
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Deprecate file in favor of bootstrap/decision-engine.md, retaining path compatibility
deprecation_date: null
---

# Decision Engine Rules (Redirect)

This rule module has been migrated to the canonical bootstrap directory. 

Please refer to:
- **Decision Engine module**: [decision-engine.md](file:///.antigravity/bootstrap/decision-engine.md)
- **Shared Constants**: [constants.md](file:///.antigravity/bootstrap/constants.md)
```

---

## File: rules\core\exception_policy.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of exception policy rule
deprecation_date: null
---

# Exception Policy

## Principles
- Exceptions may be granted only when a concrete reason is documented.
- An exception must **not** break provenance or source integrity.
- Every exception receives an **expiration/ review date** after which it must be re‑evaluated.
- Repeated exceptions (three or more of the same type) trigger a **rule‑update proposal** during the monthly governance review.

## Required Fields (to be recorded in the audit log)
| Field | Description |
|---|---|
| `exception_id` | Unique identifier for the exception instance |
| `reason` | Clear, concise justification |
| `approver` | Person or agent granting the exception |
| `expiry_date` | ISO‑8601 date when the exception expires |
| `affected_rule` | Reference to the rule being overridden |
| `impact` | Description of any provenance or ownership impact |

## Process
1. **Request** – Submit an exception request (e.g., via a ticket or direct note) containing the fields above.
2. **Review** – The vault owner (or delegated approver) reviews the request.
3. **Approval** – If approved, the exception is logged in `.antigravity/logs/audit-log.md` with `result: approved`.
4. **Implementation** – The AI may temporarily relax the affected rule **only** for the specified scope and duration.
5. **Expiration** – On `expiry_date`, the exception is automatically revoked and the original rule re‑applied.
6. **Repeat Monitoring** – Track frequency of similar exceptions; after three, propose a permanent rule revision.

## Example
```
exception_id: EXC-2023-07-001
reason: Need to temporarily allow duplicate node titles for a rapid import batch.
approver: vault-owner
expiry_date: 2023-08-01T00:00:00Z
affected_rule: Graph Laws → No duplicate titles
impact: No provenance loss; duplicates will be merged after import.
```
```

---

## File: rules\core\governance.md

```markdown
---
title: NexusDB Governance Constitution
type: governance-constitution
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v2.0.0 — Refactor to follow the Single Responsibility Principle, delegating operational rules to specialized rule modules
deprecation_date: null
---

# NexusDB Governance Constitution

This is the supreme constitution for `nexusdb`. It defines final authority, conflict resolution, global commandments, and graph laws. All agents, automations, and files must operate in absolute compliance with this constitution.

## 1. Authority, Scope, and Conflict Resolution

- **Scope**: This constitution applies to all human actions, AI agents, automations, templates, and files under the vault root.
- **Final Authority**: The vault owner has final authority. Overrides must be logged as exceptions under [Exception Policy](file:///.antigravity/rules/core/exception_policy.md). No override may bypass source integrity, provenance, or irreversible-action protection without explicit approval.
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
- **Law 2**: Every node has one canonical title and one canonical file.
- **Law 3**: Every active knowledge note belongs to exactly one owner MOC.
- **Law 4**: Every factual claim has recoverable provenance or is explicitly labeled an unsupported observation.
- **Law 5**: Every ingested source produces reusable knowledge or a logged `no_reusable_knowledge` disposition.
- **Law 6**: Every confirmed duplicate is merged by archival consolidation; unresolved ones remain suggestions.
- **Law 7**: MOCs navigate; they do not contain explanations.
- **Law 8**: No raw source information exists outside `01_RAW/` (except quoted and attributed excerpts in derived notes).

## 4. Operational Module Delegation

To satisfy the Single Responsibility Principle, all specific rule details are delegated to their respective rule files:
- **Decision Engine & Confidence Policies**: Delegated to [decision-engine.md](file:///.antigravity/bootstrap/decision-engine.md).
- **Canonical Ownership & Locations**: Delegated to [ownership.md](file:///.antigravity/rules/core/ownership.md).
- **Note Lifecycle & States**: Delegated to [maturity-model.md](file:///.antigravity/rules/quality/maturity-model.md).
- **Frontmatter & Schemas**: Delegated to [frontmatter-schema.md](file:///.antigravity/rules/metadata/frontmatter-schema.md).
- **Link Priority & Relationships**: Delegated to [linking-rules.md](file:///.antigravity/rules/graph/linking-rules.md).
- **Promotion & Rubrics**: Delegated to [promotion-rules.md](file:///.antigravity/rules/quality/promotion-rules.md).
- **Duplicate Detection & Merging**: Delegated to [merge-rules.md](file:///.antigravity/rules/graph/merge-rules.md).
- **Exceptions Logging**: Delegated to [exception_policy.md](file:///.antigravity/rules/core/exception_policy.md).
- **Audit Logging Standards**: Delegated to [audit_log.md](file:///.antigravity/rules/core/audit_log.md).
- **Search & Retrieval Ranking**: Delegated to [retrieval-rules.md](file:///.antigravity/rules/graph/retrieval-rules.md).
- **Health Metrics & Reviews**: Delegated to [health-metrics.md](file:///.antigravity/rules/quality/health-metrics.md).
- **Rule Versioning Schema**: Delegated to [rule_versioning.md](file:///.antigravity/rules/core/rule_versioning.md).
```

---

## File: rules\core\ownership.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of ownership rule
deprecation_date: null
---

# Ownership Rules

## Canonical Owners
- **NODES** → *Atomic Concept Owner* – responsible for maintaining one canonical, reusable idea per node.
- **NOTES** → *Synthesis Owner* – curates durable human‑readable explanations.
- **03_MOC** → *Navigation Owner* – maintains navigation layers without explanatory content.
- **01_RAW** → *Source Preservation Owner* – ensures original captures are archived unchanged.

## Enforcement
- Every knowledge artifact must declare exactly one `owner_moc` in its front‑matter.
- References may appear in multiple MOCs, but only the `owner_moc` is canonically authoritative.
- Automated actions that would alter ownership must pass the Irreversible‑Action Protection checks (see `irreversible_actions.md`).
```

---

## File: rules\core\rule_versioning.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of rule versioning schema
deprecation_date: null
---

# Rule Versioning Schema

All governance rule files must begin with a YAML front‑matter block containing the following fields:

- `version`: semantic version of the rule file (e.g., `1.0.0`). Increment on any change.
- `last_reviewed`: date (ISO‑8601) of the most recent review.
- `approved_by`: identifier of the person or agent approving the rule.
- `change_reason`: brief description of why the rule was created or updated.
- `deprecation_date`: optional date when the rule is scheduled to be retired (or `null`).

**Enforcement**: Any automation that modifies a rule file must first read this metadata, verify that the proposing change has a higher `version` number, and append an entry to the audit log referencing these fields.
```

---

## File: rules\graph\linking-rules.md

```markdown
---
title: NexusDB Linking Rules
type: governance-rule
status: active
version: 3.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v3 — expanded to 18 semantic relationship types, added relations block spec, backward compat with legacy related field
deprecation_date: null
---

# Linking Rules

Follow `governance.md` Section 8. A link is a semantic claim and must have a real relationship, an appropriate priority, and an action confidence.

## Priority and Threshold Table

| Priority | Relationship types | Automatic behaviour |
| --- | --- | --- |
| HIGH | `depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for` | Add only at `>=95` confidence. Suggest at 80–94. |
| MEDIUM | `supports`, `contradicts`, `extends`, `generalizes`, `specializes`, `compares_with`, `derived_from`, `references` | Suggest at `>=80`; never add automatically. |
| LOW | `related_to`, `inspired_by` | Never create automatically. |

## Full Relationship Vocabulary (18 Types)

See `relations-schema.md` for complete definitions, directionality, and examples.

| Type | Priority | Symmetric? |
|------|----------|----------|
| `depends_on` | HIGH | No |
| `implements` | HIGH | No |
| `causes` | HIGH | No |
| `effect_of` | HIGH | No |
| `example_of` | HIGH | No |
| `instance_of` | HIGH | No |
| `part_of` | HIGH | No |
| `prerequisite_for` | HIGH | No |
| `supports` | MEDIUM | Yes |
| `contradicts` | MEDIUM | Yes |
| `extends` | MEDIUM | No |
| `generalizes` | MEDIUM | No |
| `specializes` | MEDIUM | No |
| `compares_with` | MEDIUM | Yes |
| `derived_from` | MEDIUM | No |
| `references` | MEDIUM | No |
| `related_to` | LOW | Yes |
| `inspired_by` | LOW | No |

## Relations Block

Prefer the structured `relations` frontmatter block over bare body wikilinks for machine-readable relationships:

```yaml
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 98
    reason: "Gradient descent consumes gradients from backprop"
    creation_method: "human"
    human_verified: true
```

Body wikilinks remain the authoritative prose layer; the `relations` block is the machine-readable layer.

## Backward Compatibility

The legacy `related: []` field is preserved. Automation treats bare `related` entries as `{type: related_to, confidence: null, creation_method: legacy}`. Migrate to `relations` when the note is materially edited.

## Rules

- A HIGH-priority automatic link requires a known relationship type and confidence `>=95`.
- MEDIUM and LOW links are suggestions until a human confirms them.
- Preserve manual links unless they are demonstrably invalid and a protected-action approval exists.
- Every active node needs at least one justified graph link and one owner MOC; do not manufacture links just to satisfy a metric.
- A note may not exceed **15 `relations` entries**. Prioritise HIGH types when trimming.
- Record applied and suggested links in the audit log.

```

---

## File: rules\graph\merge-rules.md

```markdown
---
title: NexusDB Merge Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add measurable duplicate and protected merge decisions
deprecation_date: null
---

# Merge Rules

Merging is archival consolidation, not deletion. Follow the protected-action process in `governance.md`.

## Merge Decision

Create a merge candidate only when both are true:

- title similarity `>=0.90`; and
- semantic similarity `>=0.90`.

Aliases, source overlap, claim equivalence, and backlink-neighborhood overlap provide supporting evidence. Related ideas are not duplicates.

| Confidence | Decision |
| --- | --- |
| `>=95` | Eligible for an approved archival merge; preserve a snapshot, aliases, sources, links, and audit entry. |
| `80–94` | Suggest merge; do not change files. |
| `60–79` | Ask for review. |
| `<60` | Do nothing. |

## Merge Protocol

1. Select the canonical note without changing its title automatically.
2. Snapshot or archive both predecessor versions.
3. Preserve sources, aliases, and useful unique content.
4. Redirect or repair links and owner-MOC references.
5. Mark the duplicate as archived; never delete it.
6. Add an audit entry with comparison evidence, confidence, and rollback path.

```

---

## File: rules\graph\navigation-hierarchy.md

```markdown
---
title: NexusDB Multi-Level Navigation Hierarchy
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — scalable 4-level MOC hierarchy to support 250k+ notes
deprecation_date: null
---

# Multi-Level Navigation Hierarchy

## Purpose

As the vault grows beyond 500 nodes per domain, a flat list of MOCs in `03_MOC/` becomes unnavigable. This rule defines a **4-level navigation hierarchy** that aggregates automatically while preserving the flat `NODES/` principle.

The hierarchy is **navigation only**. All knowledge remains in flat `NODES/`. The hierarchy controls only how MOCs link to each other.

---

## 1. Four-Level Structure

```
INDEX
  └── DOMAIN MOC
        └── TOPIC MOC
              └── SUBTOPIC MOC (optional)
                    └── NODE
```

| Level | File pattern | `moc_level` | Max entries | Scope |
|-------|-------------|-------------|-------------|-------|
| **INDEX** | `03_MOC/INDEX.md` | `index` | 30 domains | Links to all Domain MOCs; one per vault |
| **Domain MOC** | `03_MOC/<domain>/<domain>-moc.md` | `domain` | 50 topic MOCs | Links to Topic MOCs only; never to individual nodes |
| **Topic MOC** | `03_MOC/<domain>/<topic>-moc.md` | `topic` | 100 nodes or subtopic MOCs | Primary working level; links to nodes or Subtopic MOCs |
| **Subtopic MOC** | `03_MOC/<domain>/<subtopic>-moc.md` | `subtopic` | 80 nodes | Terminal navigation level; links only to NODES |

> [!NOTE]
> Subtopic MOCs are **optional**. They are created only when a Topic MOC exceeds its node limit. See `scalability.md` for trigger thresholds.

---

## 2. Folder Organisation

```
03_MOC/
├── INDEX.md                        # Root index (one per vault)
├── ai/
│   ├── ai-moc.md                   # Domain MOC
│   ├── machine-learning-moc.md     # Topic MOC
│   ├── deep-learning-moc.md        # Topic MOC
│   └── transformers-moc.md         # Topic MOC or Subtopic MOC
├── psychology/
│   ├── psychology-moc.md           # Domain MOC
│   └── habits-moc.md               # Topic MOC
└── ...
```

> [!IMPORTANT]
> Existing MOCs in the root of `03_MOC/` are treated as **Topic-level** MOCs and remain valid. They do not need to be moved. Assign them `moc_level: topic` and link them from their Domain MOC when one is created.

---

## 3. Frontmatter Requirements for MOCs

All MOCs must include two new fields in addition to the base MOC schema:

```yaml
moc_level: domain        # index | domain | topic | subtopic
parent_moc: ai-moc       # title of the immediate parent MOC; null only for INDEX
```

| `moc_level` | `parent_moc` rule |
|-------------|------------------|
| `index` | `null` (root; no parent) |
| `domain` | Title of INDEX.md |
| `topic` | Title of its Domain MOC |
| `subtopic` | Title of its Topic MOC |

---

## 4. Content Rules per Level

### INDEX
- Contains one link per domain.
- One or two sentences of purpose per domain entry.
- No explanation, no node links.
- Maintained by automation and reviewed monthly.

### Domain MOC
- Contains one link per topic MOC.
- May include a brief (≤3 sentence) domain overview.
- Never links directly to individual nodes.
- Updated automatically by `generate_mocs.py`.

### Topic MOC
- Primary working level. Links to nodes grouped by theme.
- May link to Subtopic MOCs instead of nodes once the limit is approached.
- Format: thematic sections, highest-value first.
- Soft limit: 50 nodes before split review. Hard limit: 100.

### Subtopic MOC
- Terminal level. Links only to NODES.
- Narrow focus. Created only on overflow from Topic MOC.
- Hard limit: 80 nodes.

---

## 5. Size Limits and Overflow Protocol

| Limit type | Threshold | Action |
|-----------|-----------|--------|
| Topic MOC soft limit | 50 node links | `generate_mocs.py` flags as oversized in `moc-health.md` |
| Topic MOC hard limit | 100 node links | Automation refuses to add more; requires human to create Subtopic MOC |
| Subtopic MOC hard limit | 80 node links | Requires human intervention to further split |
| Domain MOC soft limit | 30 topic links | Flag for review |
| Domain MOC hard limit | 50 topic links | Requires human refactoring |
| INDEX hard limit | 30 domain links | Requires governance decision to add new domain |

---

## 6. Navigation Law

- **Law H1**: Every active node belongs to exactly one Topic or Subtopic MOC (its `owner_moc`). This is unchanged from the core law.
- **Law H2**: Topic and Subtopic MOCs are listed in exactly one Domain MOC.
- **Law H3**: Domain MOCs are listed in exactly one INDEX.
- **Law H4**: No MOC is both a Domain MOC and a Topic MOC for the same hierarchy path.
- **Law H5**: INDEX is not owned by any MOC (`owner_moc: null`, `moc_level: index`).

---

## 7. Automation Support

`generate_mocs.py` must be updated to:
1. Read `moc_level` from existing MOC frontmatter.
2. Respect the content rules (Domain MOCs never list nodes; Topic MOCs never list other Topics).
3. Generate INDEX.md from the list of known Domain MOCs.
4. Report overflow violations to `moc-health.md`.

---

## 8. Backward Compatibility

Existing MOCs in root `03_MOC/` receive `moc_level: topic` by default. No files are moved. Domain MOCs and INDEX are created **additively** alongside existing MOCs. No existing `owner_moc` references break.
```

---

## File: rules\graph\retrieval-rules.md

```markdown
---
title: NexusDB Retrieval Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Establish deterministic retrieval ranking
deprecation_date: null
---

# Retrieval Rules

Never retrieve in arbitrary directory or modification-time order. Search by this rank:

1. MOC
2. Atomic Node
3. Evergreen Note
4. Exhaustive Knowledge Document
5. Raw Source

Within each tier, rank by exact canonical-title match, owner-MOC membership, provenance quality, freshness, then reciprocal justified links.

Use raw material only when full context or verification is required. Do not browse `NODES/` as a folder hierarchy.

```

---

## File: rules\graph\scalability.md

```markdown
---
title: NexusDB Scalability and Limit Rules
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of scalability rule defining quantitative limits
deprecation_date: null
---

# Scalability and Limit Rules

To ensure performance and retrievability as the vault scales (e.g., towards 100,000+ notes), the following quantitative limits are enforced.

## 1. Map of Content (MOC) Limits

MOCs are designed for human navigation. If a MOC has too many links, it becomes a traversal bottleneck.

*   **Soft Limit (50 links):** When a MOC directory table grows to 50 entries, the MOC generation engine flags the MOC as "oversized" in `moc-health.md`. The AI or user should prioritize splitting the MOC into hierarchical sub-MOCs.
*   **Hard Limit (100 links):** No automatic MOC generator or tool may append links beyond 100 to a single MOC. Any further additions require manual intervention or the creation of sub-MOCs.
*   **Hierarchical MOC Layout:** A parent MOC (e.g., `ai-ml-moc.md`) must partition its contents by pointing to child MOCs (e.g., `supervised-learning-moc.md`, `deep-learning-moc.md`) once the soft limit is breached.

## 2. Note Backlink and Link Priorities

To prevent "graph explosion" (e.g., notes like `Gradient Descent` accumulating 150+ links):

*   **Automatic Related Links Limit:** The semantic linker or any automation tool must restrict auto-generated related connections to between **5 and 10 links** (default: **8**).
*   **Link Prioritization:**
    *   **Core:** Inbound/outbound relations that represent parent/child hierarchy.
    *   **Prerequisites:** Dependencies required to understand the note.
    *   **Applications:** Implementation notes or case studies.
    *   **Related:** Side connections.
    *   **Further Reading:** Supplemental references.

## 3. Tag and Metadata Constraints

To maintain tag discipline and index performance:

*   **Maximum Tags per Note:** A note may contain at most **5 discovery tags** from the controlled vocabulary in `tag-schema.md`.
*   **Metadata over Tags:** Structured classifications (e.g., `type`, `status`, `domain`, `source_type`) belong in frontmatter fields, not in discovery tags.

## 4. Note Size Constraints

To maintain atomicity and readability:

*   **Maximum Note Size:** Notes should remain under **10,000 characters** (excluding frontmatter). Notes exceeding this limit must be reviewed and split into multiple atomic notes.

## 5. Confidence Thresholds

*   **Minimum Confidence for Automatic Edits:** Strictly **95%**. Any edit proposed with confidence `<95%` must be presented as a suggestion.

## 6. Review Cadence for Large MOCs

*   **MOC Size Sweep (Weekly):** The health script checks MOC link counts and appends warnings to reports if limits are exceeded.
```

---

## File: rules\metadata\concept-identity.md

```markdown
---
title: NexusDB Permanent Concept Identity
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — immutable concept_id independent of filename and title
deprecation_date: null
---

# Permanent Concept Identity

## Purpose

A note's UUID (`id`) is already immutable, but it is machine-opaque. The canonical title (`title`) is human-readable but **can change** under the protected-action process. Filenames can drift from titles. This creates fragile cross-references at scale.

`concept_id` is a **short, stable, human-readable slug** that never changes, even if the file is renamed or the title is updated. It is the primary stable reference for AI systems querying the vault.

---

## 1. Field Definition

```yaml
concept_id: "gradient-descent-v1"
```

| Property | Value |
|----------|-------|
| Format | `kebab-case(title)` + `-v` + `<version-at-creation>` |
| Mutability | **Immutable.** Never changes after creation. |
| Uniqueness | Must be unique across all notes in the vault. |
| AI reference | Preferred stable reference for cross-note mentions in automation output. |
| Human readability | Designed to be recognisable without looking up the UUID. |

---

## 2. Generation Policy

### 2.1 New Notes

When creating a new note:

1. Take the canonical `title` value.
2. Convert to `kebab-case`: lowercase, spaces → hyphens, remove special characters.
3. Append `-v` followed by the note's `version` at creation (almost always `1`).
4. Check for collision against all existing `concept_id` values in the vault.
5. If collision: append a counter suffix `-2`, `-3`, etc. until unique.

```
"Gradient Descent" + version 1 → "gradient-descent-v1"
"Gradient Descent" (collision) → "gradient-descent-v1-2"
```

### 2.2 Collision Resistance

The `-v<version>` suffix provides significant collision resistance because:
- Most notes start at `version: 1`.
- If a true collision occurs (same title, same version), the counter suffix resolves it.
- The vault cannot have two active notes with the same `concept_id`.

### 2.3 After Title Change

When a canonical title is changed (protected action, requires approval):
- `concept_id` is **not updated**. It remains the original slug.
- The new canonical title is placed in `title`.
- The old title is added to `aliases` for retrieval.
- `concept_id` thus preserves the original concept's identity even after rename.

---

## 3. Migration Strategy

### 3.1 Existing Notes

All existing notes without `concept_id` are migrated using the following rule:

```
concept_id = kebab-case(filename_stem) + "-v1"
```

This uses the filename stem (not the title) because the filename is the de facto stable identifier that existing notes use for wikilinks.

### 3.2 Migration Script

`concept_id_migrator.py` performs this migration:

1. **Dry run** (`--dry-run`): Lists proposed `concept_id` values; reports collisions.
2. **Live run** (`--apply`): Updates frontmatter in place; appends audit log entry per note batch.
3. Skips notes that already have `concept_id`.
4. Reports any collision resolutions.

Confidence of this migration is **99** (deterministic, reversible). Logged as a batch action.

### 3.3 Rollback

The migration is reversible: remove the `concept_id` field from affected notes. The migrator creates a manifest at `.antigravity/logs/concept-id-migration-<date>.json` for rollback reference.

---

## 4. Usage in Automation

Automation scripts should prefer `concept_id` over filename when generating cross-references in reports and JSON outputs. This ensures that if a file is renamed, analytics still identify the same concept.

```python
# Preferred (stable)
ref = frontmatter.get("concept_id", path.stem)

# Avoid (fragile on rename)
ref = path.stem
```

---

## 5. Usage in Relations

When specifying `relations`, the `target` field may use either the canonical `title` or the `concept_id` of the target note. Validators accept both. When generating reports, `concept_id` is used for deduplication.

```yaml
relations:
  - target: "gradient-descent-v1"   # concept_id reference (preferred in automation)
    type: "depends_on"
    confidence: 98
```

---

## 6. Immutability Guarantee

`concept_id` is a **protected field**. It may not be changed by any automation, AI agent, or script after creation. Any proposed change requires:
1. Explicit vault-owner approval.
2. An audit log entry.
3. A redirect mapping added to `.antigravity/shared/concept-id-redirects.json`.
4. All references updated in the same transaction.

Only the protected-action process in `governance.md §10` may authorise a `concept_id` change.
```

---

## File: rules\metadata\decision-context.md

```markdown
---
title: NexusDB Decision Context
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — structured reasoning capture for note creation decisions
deprecation_date: null
---

# Decision Context

## Purpose

At 10,000+ notes, it becomes impossible to remember why a note was created: why it was split from another note, why a particular framing was chosen, or what assumptions were made. The `decision_context` block preserves this reasoning in the note itself, making future curation, merging, and AI reasoning far more reliable.

---

## 1. Field Definition

`decision_context` is an **optional** frontmatter block. It is never populated by automation. It is the vault owner's voice and reasoning, preserved permanently.

```yaml
decision_context:
  why_created: "Short reason this note was created or split from another"
  decision: "Key curation decision made about this note's scope or framing"
  assumptions: []          # list of strings; things assumed to be true
  tradeoffs: []            # list of strings; what was sacrificed for atomicity/clarity
  importance: normal       # low | normal | high | critical
  context: "Situational context at the time of creation"
  future_work: "What would make this note more complete"
```

---

## 2. Field Rules

| Field | Required | Rule |
|-------|----------|------|
| `why_created` | No | One sentence explaining the trigger for creation. |
| `decision` | No | One sentence describing the key scope or framing decision. |
| `assumptions` | No | Array of strings. Each assumption is a belief held at creation time. |
| `tradeoffs` | No | Array of strings. What was deliberately omitted for atomicity. |
| `importance` | No | Controlled vocabulary: `low \| normal \| high \| critical`. Default `normal` when absent. |
| `context` | No | Situational context that explains why this note matters now. |
| `future_work` | No | What would improve or complete this note if time allowed. |

---

## 3. Immutability Rules

The `decision_context` block is **user-authored content**. It is governed by the AI commandment: *"Never overwrite user writing."*

Automation may:
- Read `decision_context` for analytics (e.g., count `importance: critical` notes).
- Append a new `decision_context` block if none exists, with `confidence ≥ 95`.

Automation must **never**:
- Overwrite any field within an existing `decision_context` block.
- Delete `decision_context`.
- Change `importance` without explicit human instruction.

---

## 4. When to Populate

Populate `decision_context` when any of the following is true:
- The note was split from another note (record the split decision).
- A merge was rejected (record why the notes are distinct).
- An unusual framing was chosen (record the reasoning).
- The note has a specific use case or audience.
- The note represents a controversial or uncertain position.
- The note was created under time pressure and may need revision.

Do not populate `decision_context` for routine ingestion of atomic facts; the block is for **non-obvious decisions**.

---

## 5. Examples

```yaml
# Split decision
decision_context:
  why_created: "Gradient descent and stochastic gradient descent were previously merged; split to preserve atomicity"
  decision: "Keep batch gradient descent as the canonical note; SGD is a specialization"
  assumptions: ["Reader is familiar with loss functions"]
  tradeoffs: ["Lost some contextual comparison depth by separating the notes"]
  importance: normal
  context: "Split during deep-learning-fundamentals ingestion pass"
  future_work: "Add a comparison table linking to SGD note"

# Merge rejection
decision_context:
  why_created: "Backpropagation and chain rule were flagged as potential duplicates but are distinct"
  decision: "Backprop is an algorithm; chain rule is a mathematical theorem. Keep separate."
  assumptions: []
  tradeoffs: []
  importance: high
  context: "Duplicate detector flagged 72% semantic similarity; human reviewed and rejected merge"
  future_work: "Add explicit differentiation note in body"
```

---

## 6. Analytics

`health_dashboard.py` reports:
- Count of notes with `decision_context` populated.
- Distribution of `importance` values.
- Notes with `importance: critical` or `importance: high` that have pending `future_work`.
- Notes with `decision_context.assumptions` that may need verification.
```

---

## File: rules\metadata\frontmatter-schema.md

```markdown
---
title: NexusDB Frontmatter Schema
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Schema version 4 — added concept_id, relations, last_verified, verification_interval, stale_after, review_priority, confidence_decay, decision_context (all optional; schema_version 3 still accepted)
deprecation_date: null
---

# Frontmatter Schema

## Purpose

Frontmatter is the machine-readable identity and control plane for every note. Tags are only discovery facets; type, state, source, ownership, and lifecycle belong in structured metadata.

## Canonical Schema (schema_version 4)

Every newly created or materially revised knowledge note must use this schema. Do not invent fields outside an approved schema. Schema_version 3 notes remain valid and need not be migrated unless materially edited.

```yaml
---
# ── Core Identity ─────────────────────────────────────────────────────────────
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
concept_id: canonical-title-v1            # NEW: immutable slug; see concept-identity.md
title: Canonical Title
type: atomic-note  # controlled type
status: verified   # 8-stage maturity model; see maturity-model.md
domain: ai         # one canonical domain
source_type: paper # controlled source type; null for original thought

# ── Dates ─────────────────────────────────────────────────────────────────────
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
last_verified: YYYY-MM-DD   # NEW: date claims were last checked against source

# ── Quality Signals ───────────────────────────────────────────────────────────
confidence: 95              # integer 0–100; action confidence
version: 1                  # note content version; increment on material changes
verification_interval: 365  # NEW: days between verifications; null = no decay
stale_after: YYYY-MM-DD     # NEW: computed by decay_scheduler.py; do not edit manually
review_priority: normal     # NEW: low | normal | high | critical
confidence_decay: 0         # NEW: points lost per 365 days if overdue; reports only

# ── Retrieval & Navigation ────────────────────────────────────────────────────
aliases: []
tags: []                    # controlled discovery facets only (max 5)
owner_moc: AI MOC           # exactly one canonical MOC; null only for root MOC

# ── Provenance & Relations ────────────────────────────────────────────────────
sources: []                 # recoverable source paths, URLs, or source IDs
related: []                 # LEGACY: kept for backward compat; prefer relations block
relations: []               # NEW: typed semantic relationships; see relations-schema.md

# ── Decision Context (optional; never overwritten by automation) ───────────────
decision_context:           # NEW: see decision-context.md; leave absent if not needed
  why_created: null
  decision: null
  assumptions: []
  tradeoffs: []
  importance: normal
  context: null
  future_work: null

# ── Schema ────────────────────────────────────────────────────────────────────
schema_version: 4           # current: 4; legacy: 3 still accepted
---
```

## Field Rules

### Core Identity Fields

| Field | Rule |
| --- | --- |
| `id` | UUID v4. Never reuse or change it. Immutable. |
| `concept_id` | Immutable slug. Set at creation per `concept-identity.md`. Never change after creation. |
| `title` | Canonical Title Case name; must match the filename for a node. |
| `type` | One approved type: `raw-source`, `knowledge-document`, `evergreen-note`, `atomic-note`, `moc`, `governance-rule`, or `log`. |
| `status` | One of 8 maturity stages per `maturity-model.md`: `captured`, `processed`, `learning`, `verified`, `evergreen`, `canonical`, `maintained`, or `archived`. Also accepts legacy stages: `atomic`, `linked`, `curated`. |
| `domain` | One canonical domain from `tag-schema.md`'s domain vocabulary. Use `general` only when no established domain fits. |
| `source_type` | One supported source type or `null`: `book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`. |

### Date Fields

| Field | Rule |
| --- | --- |
| `created`, `updated`, `review` | ISO date (`YYYY-MM-DD`). `review` is the next required review date. |
| `last_verified` | ISO date. Set when claims are verified against source. Set by human action only. |
| `stale_after` | ISO date. Computed by `decay_scheduler.py` as `last_verified + verification_interval`. Do not edit manually. |

### Quality Signal Fields

| Field | Rule |
| --- | --- |
| `confidence` | Integer `0–100` for note content confidence. Do not auto-set below 95 without flagging. |
| `version` | Positive integer; increment on material content changes. |
| `verification_interval` | Positive integer (days) or `null`. `null` = no scheduled decay. See `knowledge-decay.md`. |
| `review_priority` | `low \| normal \| high \| critical`. Updated by `decay_scheduler.py`; manual override respected for one cycle. |
| `confidence_decay` | Integer `0–50`. Points lost per 365 overdue days. Applied in reports only; never modifies the `confidence` field. |

### Retrieval & Navigation Fields

| Field | Rule |
| --- | --- |
| `aliases` | Alternative retrieval names; never alternate canonical owners. |
| `tags` | Only approved discovery tags from `tag-schema.md` (maximum 5). |
| `owner_moc` | Exactly one canonical MOC title for active non-MOC knowledge notes. `null` only for root MOC. |

### Provenance & Relation Fields

| Field | Rule |
| --- | --- |
| `sources` | Zero or more recoverable provenance references. Factual, source-derived notes require at least one. |
| `related` | Legacy relation targets. Treated as `related_to` type with no confidence. Migrate to `relations` when editing. |
| `relations` | Typed semantic relationships. See `relations-schema.md`. Maximum 15 entries. |
| `decision_context` | Optional human-authored reasoning block. Never overwritten by automation. See `decision-context.md`. |
| `schema_version` | Note structure version. Current: **4**. Legacy **3** is still accepted by all validators. |

## Compatibility and Migration

Existing notes may use legacy fields or be missing key metadata. When an existing note is materially edited, migrate it to schema_version 4.

Schema version compatibility:
- **schema_version 3**: All validators continue to accept it. No action required.
- **schema_version 4**: Required for new notes. All new optional fields default to `null` or `[]` when absent.

Migration scripts:
- `migrate_metadata.py`: Upgrades frontmatter to schema_version 4 and populates defaults safely.
- `concept_id_migrator.py`: Populates `concept_id` for all existing notes.
- `migrate_metadata.py --status-upgrade`: Maps legacy status values to the 8-stage maturity model.

## Validation

Reject or flag a new active note when it lacks `id`, `title`, `type`, `status`, `created`, `updated`, `confidence`, `owner_moc` (unless root MOC), `schema_version`, or required provenance. Missing optional fields must still be written as an empty list or `null` where appropriate.

For notes with `relations` entries, validate each entry against `relations.schema.json`. Invalid entries are flagged but do not block the note.

For notes with `decision_context` present, validate it against `decision-context.schema.json`. Invalid blocks are flagged but never deleted by automation.
```

---

## File: rules\metadata\moc-schema.md

```markdown
---
title: NexusDB MOC Schema
type: governance-rule
status: active
version: 3.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v3 — added moc_level and parent_moc fields for 4-level navigation hierarchy; see navigation-hierarchy.md
deprecation_date: null
---

# MOC Schema

MOCs are the navigation layer. They organize knowledge; they never become an explanation layer.

## Required Frontmatter

```yaml
---
id: UUID-v4
concept_id: ai-moc-v1           # immutable slug; see concept-identity.md
title: AI MOC
type: moc
status: curated
domain: ai
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null                 # null only for INDEX-level and root MOCs
moc_level: domain               # NEW: index | domain | topic | subtopic
parent_moc: null                # NEW: title of immediate parent MOC; null for index level
sources: []
related: []
schema_version: 4
---
```

### `moc_level` Values

| Value | Meaning | `owner_moc` | `parent_moc` |
|-------|---------|-------------|-------------|
| `index` | The single vault root INDEX.md | `null` | `null` |
| `domain` | Aggregates topic MOCs for one domain | `null` | INDEX title |
| `topic` | Primary working MOC; links to nodes | Domain MOC title | Domain MOC title |
| `subtopic` | Terminal MOC; created on topic overflow | Topic MOC title | Topic MOC title |

> [!NOTE]
> Existing MOCs without `moc_level` are treated as `topic` by all automation. No migration is required until a MOC is materially edited.

## Required Sections by Level

### INDEX
- `## Overview` — purpose of the vault's knowledge graph
- `## Domains` — one link per Domain MOC
- `## Gaps` (optional) — domains planned but not yet created

### Domain MOC
- `## Overview` — 1–3 sentences describing the domain
- `## Topics` — links to Topic MOCs only (never to individual nodes)
- `## Related Domains` (optional)

### Topic MOC (default level for all existing MOCs)
- `## Overview` — one or two navigation sentences only
- `## Core Nodes` — primary node links, highest-value first
- `## Related MOCs` — links to sibling or subtopic MOCs
- `## Recent Additions` (optional)
- `## Orphans / Gaps` (optional)

### Subtopic MOC
- `## Overview` — one sentence scoping this subtopic
- `## Nodes` — all node links in this subtopic
- `## Parent MOC` — link back to parent Topic MOC

## Rules

- A MOC owns the navigation placement of its member notes but does not own their content.
- Every active non-MOC knowledge note belongs to one owner MOC.
- A root MOC is self-owned navigation and uses `owner_moc: null`; all other MOCs have one owner MOC.
- Put the highest-value links first and split large MOCs into thematic sections.
- Use links, short labels, and gaps. Do not write long explanations or duplicate node content.

```

---

## File: rules\metadata\naming-rules.md

```markdown
---
title: NexusDB Naming Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Establish canonical-title protection and alias policy
deprecation_date: null
---

# Naming Rules

Every active note has one stable canonical title. For nodes, the title must match the filename.

## Canonical Title Rules

- Use specific, descriptive Title Case.
- Prefer singular nouns unless the idea is inherently plural.
- Avoid dates unless chronology is essential.
- Use aliases for common abbreviations, synonyms, or alternate spellings.
- Do not create a second note for an alias.
- Never change a canonical title automatically. Changes require explicit approval, snapshot, audit entry, and rollback path.

Good: `Gradient Descent`, `Attention Residue`, `Semantic Similarity`.

Bad: `Chapter 4`, `Random Thoughts`, `Misc`, `GD`, `new note`.

```

---

## File: rules\metadata\node-schema.md

```markdown
---
title: NexusDB Node Schema
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add canonical identity, ownership, and lifecycle metadata
deprecation_date: null
---

# Node Schema

`frontmatter-schema.md` is authoritative for shared metadata. This rule adds the atomic-node requirements.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Canonical Title
type: atomic-note
status: atomic
domain: ai
source_type: paper
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: AI MOC
sources: []
related: []
---
```

## Required Body

- `## Claim` or `## Definition`
- `## Explanation`
- `## Related`
- `## Source`

## Laws for Nodes

- One file answers one question or states one reusable idea.
- `NODES/` is flat: no subfolders.
- `title` matches the filename and is the only canonical title.
- Every active node has exactly one `owner_moc`, at least one justified link, and source provenance when source-derived.
- Additional MOC appearances are references, never co-ownership.
- `status: linked` is allowed only after the owner MOC and graph-link requirements are satisfied.
- Use aliases for retrieval; never make a second node just for a synonym.
- Do not change a canonical title or merge a node without the governance protected-action process.

```

---

## File: rules\metadata\relations-schema.md

```markdown
---
title: NexusDB Semantic Relationship Schema
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — typed semantic relationships with confidence tracking
deprecation_date: null
---

# Semantic Relationship Schema

## Purpose

Plain `related` links carry no semantic meaning and cannot be ranked, queried, or validated. This schema introduces **typed, confidence-scored relationships** that make knowledge connections machine-readable, AI-queryable, and human-verifiable.

---

## 1. Relationship Block Syntax

Each relationship is an entry in the `relations` frontmatter list:

```yaml
relations:
  - target: "Gradient Descent"          # canonical title of the linked note
    type: "prerequisite_for"             # one of the 18 controlled types
    confidence: 95                       # integer 0–100
    reason: "Backprop computes gradients consumed by gradient descent"
    evidence: "Stated in source §3.2"    # optional; quote or section ref
    source: "deep-learning-fundamentals" # optional; source file slug
    creation_method: "human"            # human | ai-suggested | ai-auto
    human_verified: true                 # boolean
```

All fields except `target` and `type` are optional but strongly recommended for AI-generated relationships.

---

## 2. Relationship Vocabulary (18 Types)

| Type | Direction | Meaning | Priority |
|------|-----------|---------|----------|
| `supports` | A → B | A provides evidence or argument for B | MEDIUM |
| `contradicts` | A ↔ B | A and B make incompatible claims | MEDIUM |
| `depends_on` | A → B | A requires B to function or be understood | HIGH |
| `implements` | A → B | A is a concrete implementation of abstract B | HIGH |
| `extends` | A → B | A adds to or builds upon B | MEDIUM |
| `generalizes` | A → B | A is a broader version of B | MEDIUM |
| `specializes` | A → B | A is a narrower or more specific version of B | MEDIUM |
| `causes` | A → B | A is a causal antecedent of B | HIGH |
| `effect_of` | A → B | A is the result or consequence of B | HIGH |
| `example_of` | A → B | A is a concrete case illustrating B | HIGH |
| `instance_of` | A → B | A is a specific instance of concept B | HIGH |
| `part_of` | A → B | A is a component or sub-element of B | HIGH |
| `related_to` | A ↔ B | General association; use only when no stronger type applies | LOW |
| `compares_with` | A ↔ B | A and B are commonly contrasted | MEDIUM |
| `prerequisite_for` | A → B | A must be understood before B | HIGH |
| `derived_from` | A → B | A was derived, adapted, or inspired directly by B | MEDIUM |
| `inspired_by` | A → B | A draws loose conceptual inspiration from B | LOW |
| `references` | A → B | A cites or quotes B | MEDIUM |

### Priority Behaviour

| Priority | Auto-create threshold | Auto-suggest threshold |
|----------|----------------------|----------------------|
| HIGH | `confidence >= 95` AND `human_verified: true` OR `creation_method: human` | `confidence >= 80` |
| MEDIUM | Never auto-create | `confidence >= 80` |
| LOW | Never auto-create | Never auto-suggest |

---

## 3. Confidence Rules

| `confidence` | `creation_method` | Behaviour |
|-------------|-----------------|-----------|
| `>= 95` | `human` | Apply automatically; log |
| `>= 95` | `ai-auto` | Apply automatically only for HIGH-priority types; suggest for MEDIUM/LOW |
| `80–94` | any | Suggest only; never apply automatically |
| `< 80` | any | Do not create or suggest; log as observation only |

---

## 4. Backward Compatibility

The existing `related: []` list is preserved and continues to be valid. Automation scripts treat bare `related` entries as:

```yaml
type: related_to
confidence: null
creation_method: legacy
human_verified: false
```

When a note is materially edited, migrate `related` entries to the `relations` block if the relationship type can be determined with confidence ≥ 80.

---

## 5. Maximum Relations per Note

A note must not declare more than **15 `relations` entries**. If more relationships are identified, prioritise HIGH-priority types and discard or defer LOW-priority ones.

---

## 6. Validation

Validators must reject `relations` entries where:
- `type` is not in the 18-type vocabulary.
- `confidence` is outside `0–100`.
- `target` refers to a note that does not exist in the vault.
- `creation_method` is not one of `human | ai-suggested | ai-auto`.

Report violations to `check_vault.py` output without blocking existing valid notes.

---

## 7. Graph Query Semantics

For graph analytics, relationships have directionality:
- **Directed**: `depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for`, `derived_from`, `inspired_by`, `references`, `extends`, `generalizes`, `specializes`
- **Symmetric** (bidirectional): `contradicts`, `related_to`, `compares_with`, `supports`

When reporting graph metrics, directed relationships count as one edge in the stated direction. Symmetric relationships count as two directed edges.

---

## 8. Examples

```yaml
# Example: gradient-descent.md
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 99
    reason: "Gradient descent uses gradients computed by backpropagation"
    creation_method: "human"
    human_verified: true

  - target: "Learning Rate"
    type: "part_of"
    confidence: 97
    reason: "Learning rate is a hyperparameter within gradient descent"
    creation_method: "human"
    human_verified: true

  - target: "Stochastic Gradient Descent"
    type: "generalizes"
    confidence: 95
    reason: "SGD is a variant of batch gradient descent"
    evidence: "Source §4.1 explicitly contrasts batch vs stochastic"
    source: "deep-learning-fundamentals"
    creation_method: "ai-suggested"
    human_verified: false
```
```

---

## File: rules\metadata\source-schema.md

```markdown
---
title: NexusDB Source Schema
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add source identity, lifecycle, and archival safeguards
deprecation_date: null
---

# Source Schema

Sources in `01_RAW/` preserve evidence. They are never replaced by derived notes.

## Supported `source_type` Values

`book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Source Title
type: raw-source
status: captured
domain: general
source_type: article
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
origin_path: URL-or-original-path
captured_at: YYYY-MM-DD
processed_at: null
ingested_at: null
linked_notes: []
disposition: pending
---
```

## Lifecycle Rules

1. Capture the original in `01_RAW/CAPTURE/` (read-only).
2. Create a working copy in `01_RAW/PROCESS/` (only writable workspace during ingestion).
3. Transform and refine the working copy in `01_RAW/PROCESS/` until approved.
4. Promote to `02_NEW-KNOWLEDGE/` and set `disposition` to `ingested` or `no_reusable_knowledge`.
5. Archive the original file by moving it from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
6. Append the audit entry in the log.

Never delete a source as part of ingestion. `no_reusable_knowledge` is a valid logged outcome, not a reason to discard provenance.

```

---

## File: rules\metadata\tag-schema.md

```markdown
---
title: NexusDB Tag Schema
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Reserve tags for discovery and move structured attributes to frontmatter
deprecation_date: null
---

# Tag Schema

Tags are controlled discovery facets. They are not a substitute for structured metadata.

## Metadata, Not Tags

Use frontmatter for these properties:

| Property | Frontmatter field |
| --- | --- |
| Knowledge type | `type` |
| Lifecycle state | `status` |
| Source category | `source_type` |
| Canonical domain | `domain` |
| Canonical owner | `owner_moc` |

Never add `#book`, `#paper`, `#concept`, `#evergreen`, `#review`, or a domain tag solely to express these fields.

## Controlled Domains

`ai`, `ml`, `llm`, `psychology`, `productivity`, `philosophy`, `business`, `study`, `research`, `writing`, `tools`, `habits`, `strategy`, `leadership`, `self-improvement`, `dsa`, `engineering`, `manufacturing`, `innovation`, `risk`, `general`.

Use one canonical value in `domain`. Add a domain only by a versioned update to this file.

## Approved Discovery Tags

- `beginner`
- `advanced`
- `comparison`
- `case-study`
- `implementation`
- `reference`
- `history`
- `decision`
- `example`
- `checklist`
- `open-question`
- `contrarian`

Rules:

- Tags are lowercase and hyphenated.
- Use zero or more approved discovery tags; do not tag by habit.
- Validators reject unknown tags.
- Existing type, state, source, and domain tags are legacy metadata. Preserve them until the note is materially edited, then migrate their meaning to frontmatter and log it.
- Approved aliases: `case_study` → `case-study`, `open_question` → `open-question`.

```

---

## File: rules\quality\graph-health.md

```markdown
---
title: NexusDB Graph Health
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add actionable health metrics and governance review use
deprecation_date: null
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

An active node is an orphan when it has no owner MOC or no justified inbound/outbound graph link. Do not add artificial links merely to lower this metric.

## Reports

Write periodic health reports to `.antigravity/reports/` and append material repair actions to `.antigravity/logs/audit-log.md`.

```

---

## File: rules\quality\health-metrics.md

```markdown
---
title: NexusDB Knowledge Health Metrics
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: v2.0 — expanded from 12 to 15 metrics, added 3 new scalability metrics and dashboard output specification
deprecation_date: null
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
| 🔴 Critical | Orphan % > 20%, dead links > 10, schema compliance < 50%, or duplicate probability > 15% | Immediate |

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
```

---

## File: rules\quality\knowledge-decay.md

```markdown
---
title: NexusDB Knowledge Decay Management
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — freshness tracking and automated review scheduling
deprecation_date: null
---

# Knowledge Decay Management

## Purpose

Knowledge decays. Facts become outdated, methods are superseded, and evergreen notes drift from accuracy. Without explicit freshness tracking, a large vault develops invisible rot. This rule defines how staleness is detected, reported, and resolved without corrupting source files.

---

## 1. New Frontmatter Fields

```yaml
last_verified: YYYY-MM-DD          # date claims were last checked against source
verification_interval: 365         # days between required verifications; null = no decay
stale_after: YYYY-MM-DD            # computed: last_verified + verification_interval
review_priority: normal            # low | normal | high | critical
confidence_decay: 0                # integer points lost per 365 days if unreviewed
```

All fields are **optional**. Existing notes without these fields are treated as unscheduled (no decay computed).

---

## 2. Field Rules

| Field | Rule |
|-------|------|
| `last_verified` | ISO date. Set on creation and updated whenever claims are verified against source. Never computed automatically — only set by human action. |
| `verification_interval` | Positive integer (days) or `null`. `null` means no scheduled decay (e.g., for mathematics or logic notes that are stable by nature). |
| `stale_after` | Computed field: `last_verified + verification_interval`. Set by `decay_scheduler.py`. Never manually edited. |
| `review_priority` | Controlled vocabulary. Updated by `decay_scheduler.py` based on staleness. Manual override is allowed and takes precedence for one review cycle. |
| `confidence_decay` | Integer `0–50`. Points by which effective confidence decreases per 365 days of overdue status. Applied only in analytics reports; the `confidence` field in the note is never automatically modified. |

---

## 3. Review Priority Thresholds

The `decay_scheduler.py` automation sets `review_priority` based on days overdue:

| Days overdue | `review_priority` |
|-------------|------------------|
| Not overdue | `low` |
| 0–30 days overdue | `normal` |
| 31–90 days overdue | `high` |
| > 90 days overdue | `critical` |

Notes without `verification_interval` are never marked overdue.

---

## 4. Effective Confidence in Reports

The `decay_scheduler.py` reports an **effective confidence** for analytics:

```
effective_confidence = max(0, confidence - (confidence_decay * years_overdue))
```

This value appears only in:
- `.antigravity/reports/health-dashboard.md`
- `.antigravity/reports/decay-report.md`

The `confidence` field in the note itself is **never automatically modified**. Modifying `confidence` requires a human verification action and is logged.

---

## 5. Recommended Verification Intervals by Note Type

| Note type | Recommended interval |
|-----------|---------------------|
| Factual claim (statistics, data) | 180 days |
| Method / process | 365 days |
| Conceptual definition | 730 days |
| Historical fact | `null` (stable) |
| Tool / technology note | 180 days |
| Original observation | 365 days |
| Law of physics / mathematics | `null` (stable) |

These are recommendations. The vault owner sets the actual interval per note.

---

## 6. Automated Review Scheduling

`decay_scheduler.py` runs as part of the weekly audit hook and:

1. Reads all notes with `verification_interval` set.
2. Computes `stale_after = last_verified + verification_interval`.
3. Updates `review_priority` in each note's frontmatter (this is a permitted automated write because it is a computed scheduling field, not a knowledge claim).
4. Writes a decay report to `.antigravity/reports/decay-report.md` listing all overdue and soon-to-be-overdue notes.
5. Appends a summary row to the audit log (one row per batch run, not per note).

> [!IMPORTANT]
> `decay_scheduler.py` is permitted to update `review_priority` and `stale_after` automatically because these are scheduling metadata, not knowledge content. All other frontmatter changes require confidence ≥ 95 and human approval.

---

## 7. Completing a Verification

When a human verifies a note:
1. Update `last_verified` to today's date.
2. Update `confidence` if evidence changed.
3. Increment `version`.
4. Update `updated` to today.
5. Log the verification in the audit log with the rule applied and confidence.

`decay_scheduler.py` will automatically recompute `stale_after` on next run.

---

## 8. Decay Report Format

`.antigravity/reports/decay-report.md` contains:
- Total notes with decay tracking
- Count by `review_priority` band
- List of `critical` priority notes (most overdue first)
- List of `high` priority notes
- Notes expiring within 30 days (`normal` → `high` transition)

This report is produced weekly and does not authorise any automated cleanup.
```

---

## File: rules\quality\maturity-model.md

```markdown
---
title: NexusDB Knowledge Maturity Model
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — 8-stage maturity model replacing ambiguous linear status progression
deprecation_date: null
---

# Knowledge Maturity Model

## Purpose

The legacy status progression (`captured → processed → verified → evergreen → atomic → linked → curated → maintained → archived`) conflated two orthogonal axes: **knowledge quality** and **graph integration**. A note can be `evergreen` but not yet `linked`; the old model implied a single path that ignored this.

The new 8-stage maturity model is strictly about **knowledge quality and readiness**. Graph integration (owner MOC, justified links) is governed by `governance.md §7 Graph Laws` and applies as a parallel requirement at every stage from `verified` onward.

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
- Frontmatter is valid per `frontmatter-schema.md`.
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

From `verified` onward, a note must also satisfy the Graph Laws from `governance.md §7`:
- Owner MOC declared.
- At least one justified inbound or outbound link.

These are **parallel requirements**, not part of the linear maturity progression. A note can be `verified` but not yet graph-connected; it is then in a valid intermediate state and should appear in the orphan report until connected.
```

---

## File: rules\quality\promotion-rules.md

```markdown
---
title: NexusDB Promotion Rules
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Replace qualitative promotion with a numeric rubric
deprecation_date: null
---

# Promotion Rules

Promotion makes a note more visible through `NOTES/`, a MOC, cross-MOC navigation, or featured placement. It is governed by this score out of `10`:

| Criterion | Points |
| --- | --- |
| Source-backed and verified | 2 |
| Atomic | 2 |
| Reusable | 2 |
| Linked to an owner MOC and justified related note | 2 |
| Stable canonical title | 1 |
| Not a duplicate | 1 |

| Score and confidence | Decision |
| --- | --- |
| Score `8–10`, action confidence `>=95` | Promote and log. |
| Score `8–10`, action confidence `80–94` | Suggest promotion. |
| Score `6–7` | Manual review. |
| Score `<6` | Keep as draft or return to processing. |

Never promote only because a note is long, recently created, or already tagged. A note must be source-backed when its content makes source-dependent claims.

```

---

## File: rules\quality\quality-checklist.md

```markdown
---
title: NexusDB Quality Checklist
type: governance-rule
status: active
version: 2.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Add governance and lifecycle validation gates
deprecation_date: null
---

# Quality Checklist

Before marking an ingest complete or promoting a note, validate:

- [ ] Canonical frontmatter schema is present and valid.
- [ ] UUID is present and immutable.
- [ ] Canonical title is specific and unique; aliases are not duplicate nodes.
- [ ] `type`, `status`, `domain`, `source_type`, and `owner_moc` are structured metadata, not tags.
- [ ] Discovery tags are approved and purposeful.
- [ ] Source provenance is recoverable for source-dependent claims.
- [ ] Note is atomic or explicitly remains a knowledge document/synthesis note.
- [ ] One owner MOC is declared and the note is discoverable there.
- [ ] At least one justified graph link exists for an active node.
- [ ] Duplicate decision was measured and logged when a candidate exists.
- [ ] Link priority and confidence satisfy `linking-rules.md`.
- [ ] Promotion score is recorded when promotion is considered.
- [ ] The original source is archived, not deleted.
- [ ] Material changes are append-logged with rule, confidence, and rollback path.
- [ ] No broken internal links are introduced.

If a criterion fails, keep the artifact in its current lifecycle state. Do not promote by assumption.

```

---

## File: rules\workflow\incubation-rules.md

```markdown
---
title: NexusDB Idea Incubation Rules
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release — lightweight incubation workflow to prevent low-quality permanent notes
deprecation_date: null
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

Action confidence required: **≥ 80**.

### Gate 2: Observation → Validated (`captured → processed`)

A captured incubating note advances to `processed` when:
- Formatting is clean and frontmatter is complete.
- The claim is specific and scoped (not vague).
- The note is confirmed unique in the vault.
- It has been reviewed and the vault owner decided it is worth developing further.

### Gate 3: Validated → Permanent (`processed → verified → ...`)

Entry into the full pipeline (verified, evergreen, canonical) follows the standard workflow in `ingestion-rules.md` and `maturity-model.md`.

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
```

---

# Folder: .antigravity/modules

## File: modules\automation\automation-hooks.md

```markdown
---
module: automation_hooks
version: 2.1.0
priority: 5
depends_on:
  - core_governance
exports:
  - legacy_automation_hooks
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 150
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Legacy Automation Hooks

> [!IMPORTANT]
> This rule has been deprecated and split into modular, executable files under the `.antigravity/hooks/` directory.

Please refer to the following new locations:
- [Pre-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-ingest.md)
- [Post-Ingestion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/post-ingest.md)
- [Pre-Promotion Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/pre-promotion.md)
- [Nightly Maintenance Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/nightly-maintenance.md)
- [Weekly Audit Hook](file:///c:/Users/offic/OneDrive/Desktop/obsidean/nexusdb/.antigravity/hooks/weekly-audit.md)
```

---

## File: modules\automation\ingestion-rules.md

```markdown
---
module: automation_ingestion
version: 2.3.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
  - metadata_schema
exports:
  - ingestion_pipeline_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 600
owner: vault-owner
last_reviewed: 2026-07-19
change_reason: "Integrated detailed Knowledge Pipeline rules, constraints, and decision policies."
---

# Ingestion Rules

This module defines the canonical knowledge ingestion pipeline, core rules, hard constraints, and movement policies for all inputs into the vault.

## 1. Knowledge Pipeline Diagram

```
Internet
    │
    ▼
Web Clipper
    │
    ▼
01_RAW/CAPTURE
(immutable source)
    │
(create working copy)
    ▼
01_RAW/PROCESS
(iterative processing)
    │
(user approval)
    ▼
02_NEW-KNOWLEDGE
    │
(move original source)
    ├──────────────► 01_RAW/SOURCE
    │
(user learns)
    ▼
NOTES (Wiki)
    │
(extract atomic knowledge)
    ▼
NODES
```

---

## 2. Core Rule & Hard Constraints

### Core Rule
A file must **not move or change state** from its current location until the user gives explicit permission.

### Hard Constraints
- **Never move or edit a file in CAPTURE automatically.**
- **Never edit or move the original file while processing.**
- **01_RAW/PROCESS is the only writable workspace during ingestion and refinement.**
- **Never assume approval.**
- **Never skip a stage.**

---

## 3. Ingestion & Movement Rules

1. **CAPTURE is Read-Only:** `01_RAW/CAPTURE` is read-only. Original files are immutable and must never be edited, renamed, deleted, overwritten, or moved to `01_RAW/PROCESS`.
2. **Process Workspace Constraint:** Create a working copy inside `01_RAW/PROCESS`. All files created during processing (working copies, drafts, processed versions, temporary files, AI-generated outputs, intermediate revisions, supporting artifacts) must remain inside `01_RAW/PROCESS/`.
3. **Iterative Refinement:** Iterate on files in `01_RAW/PROCESS` until the user explicitly approves promotion.
4. **New Knowledge Promotion:** After the user explicitly approves promotion, promote the document to `02_NEW-KNOWLEDGE`.
5. **Original Archival:** After promotion to `02_NEW-KNOWLEDGE`, archive the original file by moving it from `01_RAW/CAPTURE` to `01_RAW/SOURCE`.
6. **Promote to Wiki:** Only after the user later issues **Promote to Wiki** should the document move from `02_NEW-KNOWLEDGE` to `NOTES`.
7. **Atomic Note Generation:** Atomic note generation in `NODES` occurs only after the document is in `NOTES`.
8. **MOC Curation:** Every mature note must eventually connect to `03_MOC` (INDEX → Domain → Topic → Node).

---

## 4. Decision Policy & Expected Behavior

Before any movement or promotion, the agent must ask:
- Is the content still raw in CAPTURE?
- Is it a working copy undergoing refinement in PROCESS?
- Is it ready for deep study in 02_NEW-KNOWLEDGE?
- Is it in NOTES ready for atomic extraction?
- Is the final note verified and evergreen enough for the NODES layer?

If any answer is unclear, stop and ask for permission. When responding, state:
- Current stage
- Suggested next stage
- Reason
- Permission needed before movement
- Any risks, gaps, or missing context

---

## 5. Completion Gate

An ingestion is complete only when:
- The original source is preserved and archived in `01_RAW/SOURCE/` (moved from `01_RAW/CAPTURE/`).
- Every new source-derived note has provenance.
- Metadata validates against [frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md).
- Duplicate candidates were evaluated.
- Every active node has one owner MOC and justified graph connections.
- The source has reusable knowledge linked or a logged `no_reusable_knowledge` disposition.
- The archive action and material changes are in the audit log.

Never leave a successfully processed original source in `CAPTURE/` after promotion. Do not archive the original source until the document has been successfully promoted to `02_NEW-KNOWLEDGE`.

```

---

## File: modules\core\audit_log.md

```markdown
---
module: core_audit_log
version: 1.1.0
priority: 4
depends_on:
  - core_governance
exports:
  - audit_log_schema
  - audit_log_location
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Audit Log Standard

This module defines the required fields, rules, and formats for recording agent and system actions in the vault's append-only audit log.

## 1. Audit Log Location
All audit entries must be appended to:
- `.antigravity/logs/audit-log.md`

## 2. Table Column Schema
Every entry must correspond to a row in the audit log table, defined as:

| Field | Description / Format |
|---|---|
| `timestamp` | ISO 8601 formatted timestamp with local offset |
| `actor` | Identifier of the entity executing the change (human, agent name, or automation script name) |
| `action` | The type of action: `create`, `suggest`, `promote`, `link`, `merge`, `archive`, `restore`, `update`, `observe`, or `exception` |
| `target` | Canonical file path or Note UUID being modified |
| `reason` | Concise explanation of why the action was taken |
| `rule` | The specific governing rule file and section (e.g., `linking-rules.md §4`) |
| `sources` | The source file path(s) or IDs from which the knowledge was derived, or `none` |
| `confidence` | Action confidence score (`0–100`) calculated using calibration formulas |
| `result` | The final outcome: `applied`, `suggested`, `rejected`, `logged-observation`, or `rolled-back` |
| `rollback` | Safe rollback command, path to backup snapshot, or `not-applicable` |
| `exception_id` | Unique ID of approved exception from `exception_policy.md` or `none` |

## 3. Markdown Formatting Schema
Audit entries must be appended using this exact markdown table row format:
```markdown
| timestamp | actor | action | target | reason | rule | sources | confidence | result | rollback | exception_id |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
```

## 4. Operational Requirements
- **Append-only**: Never delete, rewrite, or reorder historical rows in `.antigravity/logs/audit-log.md`.
- **Pre-execution logging**: For any protected action (merging, renaming titles, archiving sources, or rewriting prose), the entry must be drafted and approved before execution.
- **Failures**: Audit log failures (e.g., read/write errors on the audit file) must halt the entire pipeline.
```

---

## File: modules\core\decision_engine.md

```markdown
---
module: core_decision_engine
version: 1.1.0
priority: 2
depends_on:
  - shared_constants
exports:
  - confidence_formulas
  - decision_matrix
  - irreversible_action_protection
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 500
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated decision engine to core module."
---

# Decision Engine

This module defines the quantitative confidence levels, calibration formulas, decision matrices, and safety protections that govern all agent modifications.

## 1. Confidence Policy
Every action requires an explicit confidence score between `0` and `100` computed via Calibration Formulas:
- **95–100% (Safe)**: Apply reversible, rule-compliant action and log in the audit log.
- **80–94% (Suggest)**: Suggest the action to the user; do not make automatic modifications.
- **60–79% (Ask)**: Ask for explicit user approval before modifying files or metadata.
- **<60% (Do Nothing)**: Do not perform any action (except logging optional observations).

## 2. Confidence Calibration Formulas
All confidence values must be calculated using these formulas to prevent arbitrary scoring:

### A. Merge & Duplicate Decisions
Calculated using title similarity (\(S_{\text{title}}\)) and semantic similarity (\(S_{\text{semantic}}\)) from `0.0` to `1.0`:
\[Confidence_{\text{merge}} = \begin{cases} (0.4 \cdot S_{\text{title}} + 0.6 \cdot S_{\text{semantic}}) \times 100 & \text{if } S_{\text{title}} \ge 0.90 \text{ and } S_{\text{semantic}} \ge 0.90 \\ 0 & \text{otherwise} \end{cases}\]

### B. Note-Creation Decisions
Calculated using conceptual uniqueness (\(U\)), source grounding (\(G\)), and schema completeness (\(C\)) from `0.0` to `1.0`:
\[Confidence_{\text{creation}} = (0.4 \cdot U + 0.4 \cdot G + 0.2 \cdot C) \times 100\]
- \(U = 1.0 - \text{maximum semantic similarity to any existing node}\)
- \(G = \text{fraction of claims supported by explicit citations in the raw source}\)
- \(C = \text{fraction of required frontmatter schema fields populated}\)

### C. Link-Priority Decisions
Calculated using key term overlap (\(P\)) and explicit source relationship (\(R\)) from `0.0` to `1.0`:
\[Confidence_{\text{link}} = (0.5 \cdot P + 0.5 \cdot R) \times 100\]
- \(P = \text{semantic closeness of the target note topic to the source note topic}\)
- \(R = \text{strength of explicit connection (direct citation or causal link in source text)}\)

## 3. Unified Decision Matrix

| Action | Auto? | Required threshold / Rule | Human review? |
|---|---|---|---|
| **Create note** | Yes | Source-backed + unique; duplicate confidence `<80`; action confidence `>=95` | Required below `95` |
| **Merge duplicates** | Maybe | Title similarity `>=0.90` AND semantic similarity `>=0.90`; confidence `>=95` | Yes if borderline or title changes |
| **Promote to NOTES** | Maybe | Rubric score `>=8/10` and action confidence `>=95` | Yes if score is `6–7` or confidence `<95` |
| **Archive source** | Yes | Extracted + linked + logged; action confidence `>=95` | Yes if any criteria fail |
| **Delete file** | No | Never by default; requires explicit approval + snapshot + rollback | Always |
| **Change title** | No | Never by default; requires explicit approval | Always |
| **Rewrite user prose** | No | Never by default; requires explicit approval | Always |

## 4. Irreversible-Action Protection
Protected actions include:
1. Deleting source files or notes.
2. Rewriting user-authored prose.
3. Automatically renaming canonical note titles.
4. Merging notes with title/semantic similarity `< 0.90`.

Before executing any protected action, the agent must ensure:
- Explicit user approval has been received.
- A backup snapshot or archived copy of the target file has been created.
- An entry is logged in `.antigravity/logs/audit-log.md` detailing the reason, confidence, and exception scope.
- A concrete rollback path is specified (e.g., git checkout command).
```

---

## File: modules\core\exception_policy.md

```markdown
---
module: core_exception
version: 1.1.0
priority: 5
depends_on:
  - core_governance
exports:
  - exception_logging_protocol
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Exception Policy

## Principles
- Exceptions may be granted only when a concrete reason is documented.
- An exception must **not** break provenance or source integrity.
- Every exception receives an **expiration/ review date** after which it must be re‑evaluated.
- Repeated exceptions (three or more of the same type) trigger a **rule‑update proposal** during the monthly governance review.

## Required Fields (to be recorded in the audit log)
| Field | Description |
|---|---|
| `exception_id` | Unique identifier for the exception instance |
| `reason` | Clear, concise justification |
| `approver` | Person or agent granting the exception |
| `expiry_date` | ISO‑8601 date when the exception expires |
| `affected_rule` | Reference to the rule being overridden |
| `impact` | Description of any provenance or ownership impact |

## Process
1. **Request** – Submit an exception request (e.g., via a ticket or direct note) containing the fields above.
2. **Review** – The vault owner (or delegated approver) reviews the request.
3. **Approval** – If approved, the exception is logged in `.antigravity/logs/audit-log.md` with `result: approved`.
4. **Implementation** – The AI may temporarily relax the affected rule **only** for the specified scope and duration.
5. **Expiration** – On `expiry_date`, the exception is automatically revoked and the original rule re‑applied.
6. **Repeat Monitoring** – Track frequency of similar exceptions; after three, propose a permanent rule revision.

## Example
```
exception_id: EXC-2023-07-001
reason: Need to temporarily allow duplicate node titles for a rapid import batch.
approver: vault-owner
expiry_date: 2023-08-01T00:00:00Z
affected_rule: Graph Laws → No duplicate titles
impact: No provenance loss; duplicates will be merged after import.
```
```

---

## File: modules\core\governance.md

```markdown
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
```

---

## File: modules\core\ownership.md

```markdown
---
module: core_ownership
version: 1.1.0
priority: 3
depends_on:
  - core_governance
exports:
  - ownership_mapping
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 250
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Ownership Rules

## Canonical Owners
- **NODES** → *Atomic Concept Owner* – responsible for maintaining one canonical, reusable idea per node.
- **NOTES** → *Synthesis Owner* – curates durable human‑readable explanations.
- **03_MOC** → *Navigation Owner* – maintains navigation layers without explanatory content.
- **01_RAW** → *Source Preservation Owner* – ensures original captures are archived unchanged.

## Enforcement
- Every knowledge artifact must declare exactly one `owner_moc` in its front‑matter.
- References may appear in multiple MOCs, but only the `owner_moc` is canonically authoritative.
- Automated actions that would alter ownership must pass the Irreversible‑Action Protection checks (see [governance.md](file:///.antigravity/modules/core/governance.md)).
```

---

## File: modules\core\rule_versioning.md

```markdown
---
module: core_rule_versioning
version: 1.1.0
priority: 2
depends_on:
  - core_governance
exports:
  - rule_versioning_schema
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 250
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Rule Versioning Schema

All governance rule files must begin with a YAML front‑matter block containing the following fields:

- `version`: semantic version of the rule file (e.g., `1.0.0`). Increment on any change.
- `last_reviewed`: date (ISO‑8601) of the most recent review.
- `approved_by`: identifier of the person or agent approving the rule.
- `change_reason`: brief description of why the rule was created or updated.
- `deprecation_date`: optional date when the rule is scheduled to be retired (or `null`).

**Enforcement**: Any automation that modifies a rule file must first read this metadata, verify that the proposing change has a higher `version` number, and append an entry to the audit log referencing these fields.
```

---

## File: modules\graph\linking-rules.md

```markdown
---
module: graph_linking
version: 3.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_relationship_types
exports:
  - linking_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Linking Rules

Follow [governance.md](file:///.antigravity/modules/core/governance.md). A link is a semantic claim and must have a real relationship, an appropriate priority, and an action confidence.

## Priority and Threshold Table

| Priority | Relationship types | Automatic behaviour |
| --- | --- | --- |
| HIGH | `depends_on`, `implements`, `causes`, `effect_of`, `example_of`, `instance_of`, `part_of`, `prerequisite_for` | Add only at `>=95` confidence. Suggest at 80–94. |
| MEDIUM | `supports`, `contradicts`, `extends`, `generalizes`, `specializes`, `compares_with`, `derived_from`, `references` | Suggest at `>=80`; never add automatically. |
| LOW | `related_to`, `inspired_by` | Never create automatically. |

## Full Relationship Vocabulary (18 Types)

See [relationship-types.md](file:///.antigravity/shared/relationship-types.md) for approved semantic definitions.

| Type | Priority | Symmetric? |
|------|----------|----------|
| `depends_on` | HIGH | No |
| `implements` | HIGH | No |
| `causes` | HIGH | No |
| `effect_of` | HIGH | No |
| `example_of` | HIGH | No |
| `instance_of` | HIGH | No |
| `part_of` | HIGH | No |
| `prerequisite_for` | HIGH | No |
| `supports` | MEDIUM | Yes |
| `contradicts` | MEDIUM | Yes |
| `extends` | MEDIUM | No |
| `generalizes` | MEDIUM | No |
| `specializes` | MEDIUM | No |
| `compares_with` | MEDIUM | Yes |
| `derived_from` | MEDIUM | No |
| `references` | MEDIUM | No |
| `related_to` | LOW | Yes |
| `inspired_by` | LOW | No |

## Relations Block

Prefer the structured `relations` frontmatter block over bare body wikilinks for machine-readable relationships:

```yaml
relations:
  - target: "Backpropagation"
    type: "depends_on"
    confidence: 98
    reason: "Gradient descent consumes gradients from backprop"
    creation_method: "human"
    human_verified: true
```

Body wikilinks remain the authoritative prose layer; the `relations` block is the machine-readable layer.

## Backward Compatibility

The legacy `related: []` field is preserved. Automation treats bare `related` entries as `{type: related_to, confidence: null, creation_method: legacy}`. Migrate to `relations` when the note is materially edited.

## Rules

- A HIGH-priority automatic link requires a known relationship type and confidence `>=95`.
- MEDIUM and LOW links are suggestions until a human confirms them.
- Preserve manual links unless they are demonstrably invalid and a protected-action approval exists.
- Every active node needs at least one justified graph link and one owner MOC; do not manufacture links just to satisfy a metric.
- A note may not exceed **15 `relations` entries** (see [constants.md](file:///.antigravity/shared/constants.md)). Prioritise HIGH types when trimming.
- Record applied and suggested links in the audit log.
```

---

## File: modules\graph\merge-rules.md

```markdown
---
module: graph_merge
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_decision_engine
exports:
  - merge_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Merge Rules

Merging is archival consolidation, not deletion. Follow the protected-action process in [governance.md](file:///.antigravity/modules/core/governance.md).

## Merge Decision

Create a merge candidate only when both are true:

- title similarity `>=0.90` (defined in [constants.md](file:///.antigravity/shared/constants.md)); and
- semantic similarity `>=0.90` (defined in [constants.md](file:///.antigravity/shared/constants.md)).

Aliases, source overlap, claim equivalence, and backlink-neighborhood overlap provide supporting evidence. Related ideas are not duplicates.

| Confidence | Decision |
| --- | --- |
| `>=95` | Eligible for an approved archival merge; preserve a snapshot, aliases, sources, links, and audit entry. |
| `80–94` | Suggest merge; do not change files. |
| `60–79` | Ask for review. |
| `<60` | Do nothing. |

## Merge Protocol

1. Select the canonical note without changing its title automatically.
2. Snapshot or archive both predecessor versions.
3. Preserve sources, aliases, and useful unique content.
4. Redirect or repair links and owner-MOC references.
5. Mark the duplicate as archived; never delete it.
6. Add an audit entry with comparison evidence, confidence, and rollback path.
```

---

## File: modules\graph\navigation-hierarchy.md

```markdown
---
module: graph_navigation
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - graph_scalability
exports:
  - navigation_hierarchy_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 650
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Multi-Level Navigation Hierarchy

## Purpose

As the vault grows beyond 500 nodes per domain, a flat list of MOCs in `03_MOC/` becomes unnavigable. This rule defines a **4-level navigation hierarchy** that aggregates automatically while preserving the flat `NODES/` principle.

The hierarchy is **navigation only**. All knowledge remains in flat `NODES/`. The hierarchy controls only how MOCs link to each other.

---

## 1. Four-Level Structure

```
INDEX
  └── DOMAIN MOC
        └── TOPIC MOC
              └── SUBTOPIC MOC (optional)
                    └── NODE
```

| Level | File pattern | `moc_level` | Max entries | Scope |
|-------|-------------|-------------|-------------|-------|
| **INDEX** | `03_MOC/INDEX.md` | `index` | 30 domains | Links to all Domain MOCs; one per vault |
| **Domain MOC** | `03_MOC/<domain>/<domain>-moc.md` | `domain` | 50 topic MOCs | Links to Topic MOCs only; never to individual nodes |
| **Topic MOC** | `03_MOC/<domain>/<topic>-moc.md` | `topic` | 100 nodes or subtopic MOCs | Primary working level; links to nodes or Subtopic MOCs |
| **Subtopic MOC** | `03_MOC/<domain>/<subtopic>-moc.md` | `subtopic` | 80 nodes | Terminal navigation level; links only to NODES |

> [!NOTE]
> Subtopic MOCs are **optional**. They are created only when a Topic MOC exceeds its node limit. See [scalability.md](file:///.antigravity/modules/graph/scalability.md) for trigger thresholds.

---

## 2. Folder Organisation

```
03_MOC/
├── INDEX.md                        # Root index (one per vault)
├── ai/
│   ├── ai-moc.md                   # Domain MOC
│   ├── machine-learning-moc.md     # Topic MOC
│   ├── deep-learning-moc.md        # Topic MOC
│   └── transformers-moc.md         # Topic MOC or Subtopic MOC
├── psychology/
│   ├── psychology-moc.md           # Domain MOC
│   └── habits-moc.md               # Topic MOC
└── ...
```

> [!IMPORTANT]
> Existing MOCs in the root of `03_MOC/` are treated as **Topic-level** MOCs and remain valid. They do not need to be moved. Assign them `moc_level: topic` and link them from their Domain MOC when one is created.

---

## 3. Frontmatter Requirements for MOCs

All MOCs must include two new fields in addition to the base MOC schema:

```yaml
moc_level: domain        # index | domain | topic | subtopic
parent_moc: ai-moc       # title of the immediate parent MOC; null only for INDEX
```

| `moc_level` | `parent_moc` rule |
|-------------|------------------|
| `index` | `null` (root; no parent) |
| `domain` | Title of INDEX.md |
| `topic` | Title of its Domain MOC |
| `subtopic` | Title of its Topic MOC |

---

## 4. Content Rules per Level

### INDEX
- Contains one link per domain.
- One or two sentences of purpose per domain entry.
- No explanation, no node links.
- Maintained by automation and reviewed monthly.

### Domain MOC
- Contains one link per topic MOC.
- May include a brief (≤3 sentence) domain overview.
- Never links directly to individual nodes.
- Updated automatically by `generate_mocs.py`.

### Topic MOC
- Primary working level. Links to nodes grouped by theme.
- May link to Subtopic MOCs instead of nodes once the limit is approached.
- Format: thematic sections, highest-value first.
- Soft limit: 50 nodes before split review. Hard limit: 100.

### Subtopic MOC
- Terminal level. Links only to NODES.
- Narrow focus. Created only on overflow from Topic MOC.
- Hard limit: 80 nodes.

---

## 5. Size Limits and Overflow Protocol

| Limit type | Threshold | Action |
|-----------|-----------|--------|
| Topic MOC soft limit | 50 node links | `generate_mocs.py` flags as oversized in `moc-health.md` |
| Topic MOC hard limit | 100 node links | Automation refuses to add more; requires human to create Subtopic MOC |
| Subtopic MOC hard limit | 80 node links | Requires human intervention to further split |
| Domain MOC soft limit | 30 topic links | Flag for review |
| Domain MOC hard limit | 50 topic links | Requires human refactoring |
| INDEX hard limit | 30 domain links | Requires governance decision to add new domain |

---

## 6. Navigation Law

- **Law H1**: Every active node belongs to exactly one Topic or Subtopic MOC (its `owner_moc`). This is unchanged from the core law.
- **Law H2**: Topic and Subtopic MOCs are listed in exactly one Domain MOC.
- **Law H3**: Domain MOCs are listed in exactly one INDEX.
- **Law H4**: No MOC is both a Domain MOC and a Topic MOC for the same hierarchy path.
- **Law H5**: INDEX is not owned by any MOC (`owner_moc: null`, `moc_level: index`).

---

## 7. Automation Support

`generate_mocs.py` must be updated to:
1. Read `moc_level` from existing MOC frontmatter.
2. Respect the content rules (Domain MOCs never list nodes; Topic MOCs never list other Topics).
3. Generate INDEX.md from the list of known Domain MOCs.
4. Report overflow violations to `moc-health.md`.

---

## 8. Backward Compatibility

Existing MOCs in root `03_MOC/` receive `moc_level: topic` by default. No files are moved. Domain MOCs and INDEX are created **additively** alongside existing MOCs. No existing `owner_moc` references break.
```

---

## File: modules\graph\retrieval-rules.md

```markdown
---
module: graph_retrieval
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
exports:
  - retrieval_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 200
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Retrieval Rules

Never retrieve in arbitrary directory or modification-time order. Search by this rank:

1. MOC
2. Atomic Node
3. Evergreen Note
4. Exhaustive Knowledge Document
5. Raw Source

Within each tier, rank by exact canonical-title match, owner-MOC membership, provenance quality, freshness, then reciprocal justified links.

Use raw material only when full context or verification is required. Do not browse `NODES/` as a folder hierarchy.
```

---

## File: modules\graph\scalability.md

```markdown
---
module: graph_scalability
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
exports:
  - scalability_limits
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Scalability and Limit Rules

To ensure performance and retrievability as the vault scales (e.g., towards 100,000+ notes), the following quantitative limits are enforced.

## 1. Map of Content (MOC) Limits

MOCs are designed for human navigation. If a MOC has too many links, it becomes a traversal bottleneck.

*   **Soft Limit (50 links):** When a MOC directory table grows to 50 entries, the MOC generation engine flags the MOC as "oversized" in `moc-health.md`. The AI or user should prioritize splitting the MOC into hierarchical sub-MOCs.
*   **Hard Limit (100 links):** No automatic MOC generator or tool may append links beyond 100 to a single MOC. Any further additions require manual intervention or the creation of sub-MOCs.
*   **Hierarchical MOC Layout:** A parent MOC (e.g., `ai-ml-moc.md`) must partition its contents by pointing to child MOCs (e.g., `supervised-learning-moc.md`, `deep-learning-moc.md`) once the soft limit is breached.

## 2. Note Backlink and Link Priorities

To prevent "graph explosion" (e.g., notes like `Gradient Descent` accumulating 150+ links):

*   **Automatic Related Links Limit:** The semantic linker or any automation tool must restrict auto-generated related connections to between **5 and 10 links** (default: **8**).
*   **Link Prioritization:**
    *   **Core:** Inbound/outbound relations that represent parent/child hierarchy.
    *   **Prerequisites:** Dependencies required to understand the note.
    *   **Applications:** Implementation notes or case studies.
    *   **Related:** Side connections.
    *   **Further Reading:** Supplemental references.

## 3. Tag and Metadata Constraints

To maintain tag discipline and index performance:

*   **Maximum Tags per Note:** A note may contain at most **5 discovery tags** (defined in [constants.md](file:///.antigravity/shared/constants.md)) from the controlled vocabulary in [tag-schema.md](file:///.antigravity/modules/metadata/tag-schema.md).
*   **Metadata over Tags:** Structured classifications (e.g., `type`, `status`, `domain`, `source_type`) belong in frontmatter fields, not in discovery tags.

## 4. Note Size Constraints

To maintain atomicity and readability:

*   **Maximum Note Size:** Notes should remain under **10,000 characters** (excluding frontmatter). Notes exceeding this limit must be reviewed and split into multiple atomic notes.

## 5. Confidence Thresholds

*   **Minimum Confidence for Automatic Edits:** Strictly **95%** (defined in [constants.md](file:///.antigravity/shared/constants.md)). Any edit proposed with confidence `<95%` must be presented as a suggestion.

## 6. Review Cadence for Large MOCs

*   **MOC Size Sweep (Weekly):** The health script checks MOC link counts and appends warnings to reports if limits are exceeded.
```

---

## File: modules\metadata\concept-identity.md

```markdown
---
module: metadata_concept
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_naming_conventions
exports:
  - concept_identity_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 400
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Permanent Concept Identity

## Purpose

A note's UUID (`id`) is already immutable, but it is machine-opaque. The canonical title (`title`) is human-readable but **can change** under the protected-action process. Filenames can drift from titles. This creates fragile cross-references at scale.

`concept_id` is a **short, stable, human-readable slug** that never changes, even if the file is renamed or the title is updated. It is the primary stable reference for AI systems querying the vault.

---

## 1. Field Definition

```yaml
concept_id: "gradient-descent-v1"
```

| Property | Value |
|----------|-------|
| Format | `kebab-case(title)` + `-v` + `<version-at-creation>` |
| Mutability | **Immutable.** Never changes after creation. |
| Uniqueness | Must be unique across all notes in the vault. |
| AI reference | Preferred stable reference for cross-note mentions in automation output. |
| Human readability | Designed to be recognisable without looking up the UUID. |

---

## 2. Generation Policy

### 2.1 New Notes

When creating a new note:

1. Take the canonical `title` value.
2. Convert to `kebab-case` using the rules in [naming-conventions.md](file:///.antigravity/shared/naming-conventions.md).
3. Append `-v` followed by the note's `version` at creation (almost always `1`).
4. Check for collision against all existing `concept_id` values in the vault.
5. If collision: append a counter suffix `-2`, `-3`, etc. until unique.

```
"Gradient Descent" + version 1 → "gradient-descent-v1"
"Gradient Descent" (collision) → "gradient-descent-v1-2"
```

### 2.2 Collision Resistance

The `-v<version>` suffix provides significant collision resistance because:
- Most notes start at `version: 1`.
- If a true collision occurs (same title, same version), the counter suffix resolves it.
- The vault cannot have two active notes with the same `concept_id`.

### 2.3 After Title Change

When a canonical title is changed (protected action, requires approval):
- `concept_id` is **not updated**. It remains the original slug.
- The new canonical title is placed in `title`.
- The old title is added to `aliases` for retrieval.
- `concept_id` thus preserves the original concept's identity even after rename.

---

## 3. Migration Strategy

### 3.1 Existing Notes

All existing notes without `concept_id` are migrated using the following rule:

```
concept_id = kebab-case(filename_stem) + "-v1"
```

This uses the filename stem (not the title) because the filename is the de facto stable identifier that existing notes use for wikilinks.

### 3.2 Migration Script

`concept_id_migrator.py` performs this migration:

1. **Dry run** (`--dry-run`): Lists proposed `concept_id` values; reports collisions.
2. **Live run** (`--apply`): Updates frontmatter in place; appends audit log entry per note batch.
3. Skips notes that already have `concept_id`.
4. Reports any collision resolutions.

Confidence of this migration is **99** (deterministic, reversible). Logged as a batch action.

### 3.3 Rollback

The migration is reversible: remove the `concept_id` field from affected notes. The migrator creates a manifest at `.antigravity/logs/concept-id-migration-<date>.json` for rollback reference.

---

## 4. Usage in Automation

Automation scripts should prefer `concept_id` over filename when generating cross-references in reports and JSON outputs. This ensures that if a file is renamed, analytics still identify the same concept.

```python
# Preferred (stable)
ref = frontmatter.get("concept_id", path.stem)

# Avoid (fragile on rename)
ref = path.stem
```

---

## 5. Usage in Relations

When specifying `relations`, the `target` field may use either the canonical `title` or the `concept_id` of the target note. Validators accept both. When generating reports, `concept_id` is used for deduplication.

```yaml
relations:
  - target: "gradient-descent-v1"   # concept_id reference (preferred in automation)
    type: "depends_on"
    confidence: 98
```

---

## 6. Immutability Guarantee

`concept_id` is a **protected field**. It may not be changed by any automation, AI agent, or script after creation. Any proposed change requires:
1. Explicit vault-owner approval.
2. An audit log entry.
3. A redirect mapping added to `.antigravity/shared/concept-id-redirects.json`.
4. All references updated in the same transaction.

Only the protected-action process in [governance.md](file:///.antigravity/modules/core/governance.md) may authorise a `concept_id` change.
```

---

## File: modules\metadata\decision-context.md

```markdown
---
module: metadata_decision_context
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - decision_context_rules
loads:
  - decision-context.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Decision Context

## Purpose

At 10,000+ notes, it becomes impossible to remember why a note was created: why it was split from another note, why a particular framing was chosen, or what assumptions were made. The `decision_context` block preserves this reasoning in the note itself, making future curation, merging, and AI reasoning far more reliable.

---

## 1. Field Definition

`decision_context` is an **optional** frontmatter block. It is never populated by automation. It is the vault owner's voice and reasoning, preserved permanently.

```yaml
decision_context:
  why_created: "Short reason this note was created or split from another"
  decision: "Key curation decision made about this note's scope or framing"
  assumptions: []          # list of strings; things assumed to be true
  tradeoffs: []            # list of strings; what was sacrificed for atomicity/clarity
  importance: normal       # low | normal | high | critical
  context: "Situational context at the time of creation"
  future_work: "What would make this note more complete"
```

---

## 2. Field Rules

| Field | Required | Rule |
|-------|----------|------|
| `why_created` | No | One sentence explaining the trigger for creation. |
| `decision` | No | One sentence describing the key scope or framing decision. |
| `assumptions` | No | Array of strings. Each assumption is a belief held at creation time. |
| `tradeoffs` | No | Array of strings. What was deliberately omitted for atomicity. |
| `importance` | No | Controlled vocabulary: `low \| normal \| high \| critical`. Default `normal` when absent. |
| `context` | No | Situational context that explains why this note matters now. |
| `future_work` | No | What would improve or complete this note if time allowed. |

---

## 3. Immutability Rules

The `decision_context` block is **user-authored content**. It is governed by the AI commandment: *"Never overwrite user writing."*

Automation may:
- Read `decision_context` for analytics (e.g., count `importance: critical` notes).
- Append a new `decision_context` block if none exists, with `confidence ≥ 95`.

Automation must **never**:
- Overwrite any field within an existing `decision_context` block.
- Delete `decision_context`.
- Change `importance` without explicit human instruction.

---

## 4. When to Populate

Populate `decision_context` when any of the following is true:
- The note was split from another note (record the split decision).
- A merge was rejected (record why the notes are distinct).
- An unusual framing was chosen (record the reasoning).
- The note has a specific use case or audience.
- The note represents a controversial or uncertain position.
- The note was created under time pressure and may need revision.

Do not populate `decision_context` for routine ingestion of atomic facts; the block is for **non-obvious decisions**.

---

## 5. Examples

```yaml
# Split decision
decision_context:
  why_created: "Gradient descent and stochastic gradient descent were previously merged; split to preserve atomicity"
  decision: "Keep batch gradient descent as the canonical note; SGD is a specialization"
  assumptions: ["Reader is familiar with loss functions"]
  tradeoffs: ["Lost some contextual comparison depth by separating the notes"]
  importance: normal
  context: "Split during deep-learning-fundamentals ingestion pass"
  future_work: "Add a comparison table linking to SGD note"

# Merge rejection
decision_context:
  why_created: "Backpropagation and chain rule were flagged as potential duplicates but are distinct"
  decision: "Backprop is an algorithm; chain rule is a mathematical theorem. Keep separate."
  assumptions: []
  tradeoffs: []
  importance: high
  context: "Duplicate detector flagged 72% semantic similarity; human reviewed and rejected merge"
  future_work: "Add explicit differentiation note in body"
```

---

## 6. Analytics

`health_dashboard.py` reports:
- Count of notes with `decision_context` populated.
- Distribution of `importance` values.
- Notes with `importance: critical` or `importance: high` that have pending `future_work`.
- Notes with `decision_context.assumptions` that may need verification.
```

---

## File: modules\metadata\frontmatter-schema.md

```markdown
---
module: metadata_schema
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_glossary
exports:
  - frontmatter_schema
loads:
  - frontmatter.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 750
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Frontmatter Schema

## Purpose

Frontmatter is the machine-readable identity and control plane for every note. Tags are only discovery facets; type, state, source, ownership, and lifecycle belong in structured metadata.

## Canonical Schema (schema_version 4)

Every newly created or materially revised knowledge note must use this schema. Do not invent fields outside an approved schema. Schema_version 3 notes remain valid and need not be migrated unless materially edited.

```yaml
---
# ── Core Identity ─────────────────────────────────────────────────────────────
id: 123e4567-e89b-42d3-a456-426614174000  # UUID v4; immutable
concept_id: canonical-title-v1            # NEW: immutable slug; see concept-identity.md
title: Canonical Title
type: atomic-note  # controlled type
status: verified   # 8-stage maturity model; see maturity-model.md
domain: ai         # one canonical domain
source_type: paper # controlled source type; null for original thought

# ── Dates ─────────────────────────────────────────────────────────────────────
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD          # next scheduled review date
last_verified: YYYY-MM-DD   # NEW: date claims were last checked against source

# ── Quality Signals ───────────────────────────────────────────────────────────
confidence: 95              # integer 0–100; action confidence
version: 1                  # note content version; increment on material changes
verification_interval: 365  # NEW: days between verifications; null = no decay
stale_after: YYYY-MM-DD     # NEW: computed by decay_scheduler.py; do not edit manually
review_priority: normal     # NEW: low | normal | high | critical
confidence_decay: 0         # NEW: points lost per 365 days if overdue; reports only

# ── Retrieval & Navigation ────────────────────────────────────────────────────
aliases: []
tags: []                    # controlled discovery facets only (max 5)
owner_moc: AI MOC           # exactly one canonical MOC; null only for root MOC

# ── Provenance & Relations ────────────────────────────────────────────────────
sources: []                 # recoverable source paths, URLs, or source IDs
related: []                 # LEGACY: kept for backward compat; prefer relations block
relations: []               # NEW: typed semantic relationships; see relations-schema.md

# ── Decision Context (optional; never overwritten by automation) ───────────────
decision_context:           # NEW: see decision-context.md; leave absent if not needed
  why_created: null
  decision: null
  assumptions: []
  tradeoffs: []
  importance: normal
  context: null
  future_work: null

# ── Schema ────────────────────────────────────────────────────────────────────
schema_version: 4           # current: 4; legacy: 3 still accepted
---
```

## Field Rules

### Core Identity Fields

| Field | Rule |
| --- | --- |
| `id` | UUID v4. Never reuse or change it. Immutable. |
| `concept_id` | Immutable slug. Set at creation per `concept-identity.md`. Never change after creation. |
| `title` | Canonical Title Case name; must match the filename for a node. |
| `type` | One approved type: `raw-source`, `knowledge-document`, `evergreen-note`, `atomic-note`, `moc`, `governance-rule`, or `log`. |
| `status` | One of 8 maturity stages per `maturity-model.md`: `captured`, `processed`, `learning`, `verified`, `evergreen`, `canonical`, `maintained`, or `archived`. Also accepts legacy stages: `atomic`, `linked`, `curated`. |
| `domain` | One canonical domain from `tag-schema.md`'s domain vocabulary. Use `general` only when no established domain fits. |
| `source_type` | One supported source type or `null`: `book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`. |

### Date Fields

| Field | Rule |
| --- | --- |
| `created`, `updated`, `review` | ISO date (`YYYY-MM-DD`). `review` is the next required review date. |
| `last_verified` | ISO date. Set when claims are verified against source. Set by human action only. |
| `stale_after` | ISO date. Computed by `decay_scheduler.py` as `last_verified + verification_interval`. Do not edit manually. |

### Quality Signal Fields

| Field | Rule |
| --- | --- |
| `confidence` | Integer `0–100` for note content confidence. Do not auto-set below 95 without flagging. |
| `version` | Positive integer; increment on material content changes. |
| `verification_interval` | Positive integer (days) or `null`. `null` = no scheduled decay. See `knowledge-decay.md`. |
| `review_priority` | `low \| normal \| high \| critical`. Updated by `decay_scheduler.py`; manual override respected for one cycle. |
| `confidence_decay` | Integer `0–50`. Points lost per 365 overdue days. Applied in reports only; never modifies the `confidence` field. |

### Retrieval & Navigation Fields

| Field | Rule |
| --- | --- |
| `aliases` | Alternative retrieval names; never alternate canonical owners. |
| `tags` | Only approved discovery tags from `tag-schema.md` (maximum 5). |
| `owner_moc` | Exactly one canonical MOC title for active non-MOC knowledge notes. `null` only for root MOC. |

### Provenance & Relation Fields

| Field | Rule |
| --- | --- |
| `sources` | Zero or more recoverable provenance references. Factual, source-derived notes require at least one. |
| `related` | Legacy relation targets. Treated as `related_to` type with no confidence. Migrate to `relations` when editing. |
| `relations` | Typed semantic relationships. See `relations-schema.md`. Maximum 15 entries. |
| `decision_context` | Optional human-authored reasoning block. Never overwritten by automation. See `decision-context.md`. |
| `schema_version` | Note structure version. Current: **4**. Legacy **3** is still accepted by all validators. |

## Compatibility and Migration

Existing notes may use legacy fields or be missing key metadata. When an existing note is materially edited, migrate it to schema_version 4.

Schema version compatibility:
- **schema_version 3**: All validators continue to accept it. No action required.
- **schema_version 4**: Required for new notes. All new optional fields default to `null` or `[]` when absent.

Migration scripts:
- `migrate_metadata.py`: Upgrades frontmatter to schema_version 4 and populates defaults safely.
- `concept_id_migrator.py`: Populates `concept_id` for all existing notes.
- `migrate_metadata.py --status-upgrade`: Maps legacy status values to the 8-stage maturity model.

## Validation

Reject or flag a new active note when it lacks `id`, `title`, `type`, `status`, `created`, `updated`, `confidence`, `owner_moc` (unless root MOC), `schema_version`, or required provenance. Missing optional fields must still be written as an empty list or `null` where appropriate.

For notes with `relations` entries, validate each entry against `relations.schema.json`. Invalid entries are flagged but do not block the note.

For notes with `decision_context` present, validate it against `decision-context.schema.json`. Invalid blocks are flagged but never deleted by automation.
```

---

## File: modules\metadata\moc-schema.md

```markdown
---
module: metadata_moc
version: 3.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
  - graph_navigation
exports:
  - moc_schema_rules
loads:
  - moc.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 450
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# MOC Schema

MOCs are the navigation layer. They organize knowledge; they never become an explanation layer.

## Required Frontmatter

```yaml
---
id: UUID-v4
concept_id: ai-moc-v1           # immutable slug; see concept-identity.md
title: AI MOC
type: moc
status: curated
domain: ai
source_type: null
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null                 # null only for INDEX-level and root MOCs
moc_level: domain               # NEW: index | domain | topic | subtopic
parent_moc: null                # NEW: title of immediate parent MOC; null for index level
sources: []
related: []
schema_version: 4
---
```

### `moc_level` Values

| Value | Meaning | `owner_moc` | `parent_moc` |
|-------|---------|-------------|-------------|
| `index` | The single vault root INDEX.md | `null` | `null` |
| `domain` | Aggregates topic MOCs for one domain | `null` | INDEX title |
| `topic` | Primary working MOC; links to nodes | Domain MOC title | Domain MOC title |
| `subtopic` | Terminal MOC; created on topic overflow | Topic MOC title | Topic MOC title |

> [!NOTE]
> Existing MOCs without `moc_level` are treated as `topic` by all automation. No migration is required until a MOC is materially edited.

## Required Sections by Level

### INDEX
- `## Overview` — purpose of the vault's knowledge graph
- `## Domains` — one link per Domain MOC
- `## Gaps` (optional) — domains planned but not yet created

### Domain MOC
- `## Overview` — 1–3 sentences describing the domain
- `## Topics` — links to Topic MOCs only (never to individual nodes)
- `## Related Domains` (optional)

### Topic MOC (default level for all existing MOCs)
- `## Overview` — one or two navigation sentences only
- `## Core Nodes` — primary node links, highest-value first
- `## Related MOCs` — links to sibling or subtopic MOCs
- `## Recent Additions` (optional)
- `## Orphans / Gaps` (optional)

### Subtopic MOC
- `## Overview` — one sentence scoping this subtopic
- `## Nodes` — all node links in this subtopic
- `## Parent MOC` — link back to parent Topic MOC

## Rules

- A MOC owns the navigation placement of its member notes but does not own their content.
- Every active non-MOC knowledge note belongs to one owner MOC.
- A root MOC is self-owned navigation and uses `owner_moc: null`; all other MOCs have one owner MOC.
- Put the highest-value links first and split large MOCs into thematic sections.
- Use links, short labels, and gaps. Do not write long explanations or duplicate node content.
```

---

## File: modules\metadata\naming-rules.md

```markdown
---
module: metadata_naming
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_naming_conventions
exports:
  - naming_policies
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 300
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Naming Rules

Every active note has one stable canonical title. For nodes, the title must match the filename.

## Canonical Title Rules

- Use specific, descriptive Title Case.
- Prefer singular nouns unless the idea is inherently plural.
- Avoid dates unless chronology is essential.
- Use aliases for common abbreviations, synonyms, or alternate spellings.
- Do not create a second note for an alias.
- Never change a canonical title automatically. Changes require explicit approval, snapshot, audit entry, and rollback path.

Good: `Gradient Descent`, `Attention Residue`, `Semantic Similarity`.

Bad: `Chapter 4`, `Random Thoughts`, `Misc`, `GD`, `new note`.
```

---

## File: modules\metadata\node-schema.md

```markdown
---
module: metadata_node
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - node_schema_rules
loads:
  - atomic-note.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Node Schema

[frontmatter-schema.md](file:///.antigravity/modules/metadata/frontmatter-schema.md) is authoritative for shared metadata. This rule adds the atomic-node requirements.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Canonical Title
type: atomic-note
status: atomic
domain: ai
source_type: paper
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: AI MOC
sources: []
related: []
---
```

## Required Body

- `## Claim` or `## Definition`
- `## Explanation`
- `## Related`
- `## Source`

## Laws for Nodes

- One file answers one question or states one reusable idea.
- `NODES/` is flat: no subfolders.
- `title` matches the filename and is the only canonical title.
- Every active node has exactly one `owner_moc`, at least one justified link, and source provenance when source-derived.
- Additional MOC appearances are references, never co-ownership.
- `status: linked` is allowed only after the owner MOC and graph-link requirements are satisfied.
- Use aliases for retrieval; never make a second note just for a synonym.
- Do not change a canonical title or merge a node without the governance protected-action process.
```

---

## File: modules\metadata\source-schema.md

```markdown
---
module: metadata_source
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - metadata_schema
exports:
  - source_schema_rules
loads:
  - source.schema.json
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Source Schema

Sources in `01_RAW/` preserve evidence. They are never replaced by derived notes.

## Supported `source_type` Values

`book`, `article`, `paper`, `youtube`, `podcast`, `web-clip`, `transcript`, `course`, `interview`, `dataset`, `original-observation`, `misc`.

## Required Frontmatter

```yaml
---
id: UUID-v4
title: Source Title
type: raw-source
status: captured
domain: general
source_type: article
created: YYYY-MM-DD
updated: YYYY-MM-DD
review: YYYY-MM-DD
confidence: 100
version: 1
aliases: []
tags: []
owner_moc: null
sources: []
related: []
origin_path: URL-or-original-path
captured_at: YYYY-MM-DD
processed_at: null
ingested_at: null
linked_notes: []
disposition: pending
---
```

## Lifecycle Rules

1. Capture the original in `01_RAW/CAPTURE/` (read-only).
2. Create a working copy in `01_RAW/PROCESS/` (only writable workspace during ingestion).
3. Transform and refine the working copy in `01_RAW/PROCESS/` until approved.
4. Promote to `02_NEW-KNOWLEDGE/` and set `disposition` to `ingested` or `no_reusable_knowledge`.
5. Archive the original file by moving it from `01_RAW/CAPTURE/` to `01_RAW/SOURCE/`.
6. Append the audit entry in the log.

Never delete a source as part of ingestion. `no_reusable_knowledge` is a valid logged outcome, not a reason to discard provenance.
```

---

## File: modules\metadata\tag-schema.md

```markdown
---
module: metadata_tags
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - shared_taxonomy
  - shared_aliases
exports:
  - tag_validation_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Tag Schema

Tags are controlled discovery facets. They are not a substitute for structured metadata.

## Metadata, Not Tags

Use frontmatter for these properties:

| Property | Frontmatter field |
| --- | --- |
| Knowledge type | `type` |
| Lifecycle state | `status` |
| Source category | `source_type` |
| Canonical domain | `domain` |
| Canonical owner | `owner_moc` |

Never add `#book`, `#paper`, `#concept`, `#evergreen`, `#review`, or a domain tag solely to express these fields.

## Controlled Domains

Controlled domains are canonically defined in [taxonomy.md](file:///.antigravity/shared/taxonomy.md).
Use one canonical value in `domain`. Add a domain only by a versioned update to that file.

## Approved Discovery Tags

- `beginner`
- `advanced`
- `comparison`
- `case-study`
- `implementation`
- `reference`
- `history`
- `decision`
- `example`
- `checklist`
- `open-question`
- `contrarian`

Rules:

- Tags are lowercase and hyphenated.
- Use zero or more approved discovery tags; do not tag by habit.
- Validators reject unknown tags.
- Existing type, state, source, and domain tags are legacy metadata. Preserve them until the note is materially edited, then migrate their meaning to frontmatter and log it.
- Approved aliases are canonically defined in [aliases.md](file:///.antigravity/shared/aliases.md).
  - `case_study` → `case-study`
  - `open_question` → `open-question`
```

---

## File: modules\quality\graph-health.md

```markdown
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
```

---

## File: modules\quality\health-metrics.md

```markdown
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
```

---

## File: modules\quality\knowledge-decay.md

```markdown
---
module: quality_decay
version: 1.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
exports:
  - knowledge_decay_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 650
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Knowledge Decay Management

## Purpose

Knowledge decays. Facts become outdated, methods are superseded, and evergreen notes drift from accuracy. Without explicit freshness tracking, a large vault develops invisible rot. This rule defines how staleness is detected, reported, and resolved without corrupting source files.

---

## 1. New Frontmatter Fields

```yaml
last_verified: YYYY-MM-DD          # date claims were last checked against source
verification_interval: 365         # days between required verifications; null = no decay
stale_after: YYYY-MM-DD            # computed: last_verified + verification_interval
review_priority: normal            # low | normal | high | critical
confidence_decay: 0                # integer points lost per 365 days if unreviewed
```

All fields are **optional**. Existing notes without these fields are treated as unscheduled (no decay computed).

---

## 2. Field Rules

| Field | Rule |
|-------|------|
| `last_verified` | ISO date. Set on creation and updated whenever claims are verified against source. Never computed automatically — only set by human action. |
| `verification_interval` | Positive integer (days) or `null`. `null` means no scheduled decay (e.g., for mathematics or logic notes that are stable by nature). |
| `stale_after` | Computed field: `last_verified + verification_interval`. Set by `decay_scheduler.py`. Never manually edited. |
| `review_priority` | Controlled vocabulary. Updated by `decay_scheduler.py` based on staleness. Manual override is allowed and takes precedence for one review cycle. |
| `confidence_decay` | Integer `0–50`. Points by which effective confidence decreases per 365 days of overdue status. Applied only in analytics reports; the `confidence` field in the note is never automatically modified. |

---

## 3. Review Priority Thresholds

The `decay_scheduler.py` automation sets `review_priority` based on days overdue:

| Days overdue | `review_priority` |
|-------------|------------------|
| Not overdue | `low` |
| 0–30 days overdue | `normal` |
| 31–90 days overdue | `high` |
| > 90 days overdue | `critical` |

Notes without `verification_interval` are never marked overdue.

---

## 4. Effective Confidence in Reports

The `decay_scheduler.py` reports an **effective confidence** for analytics:

```
effective_confidence = max(0, confidence - (confidence_decay * years_overdue))
```

This value appears only in:
- `.antigravity/reports/health-dashboard.md`
- `.antigravity/reports/decay-report.md`

The `confidence` field in the note itself is **never automatically modified**. Modifying `confidence` requires a human verification action and is logged.

---

## 5. Recommended Verification Intervals by Note Type

| Note type | Recommended interval |
|-----------|---------------------|
| Factual claim (statistics, data) | 180 days |
| Method / process | 365 days |
| Conceptual definition | 730 days |
| Historical fact | `null` (stable) |
| Tool / technology note | 180 days |
| Original observation | 365 days |
| Law of physics / mathematics | `null` (stable) |

These are recommendations. The vault owner sets the actual interval per note.

---

## 6. Automated Review Scheduling

`decay_scheduler.py` runs as part of the weekly audit hook and:

1. Reads all notes with `verification_interval` set.
2. Computes `stale_after = last_verified + verification_interval`.
3. Updates `review_priority` in each note's frontmatter (this is a permitted automated write because it is a computed scheduling field, not a knowledge claim).
4. Writes a decay report to `.antigravity/reports/decay-report.md` listing all overdue and soon-to-be-overdue notes.
5. Appends a summary row to the audit log (one row per batch run, not per note).

> [!IMPORTANT]
> `decay_scheduler.py` is permitted to update `review_priority` and `stale_after` automatically because these are scheduling metadata, not knowledge content. All other frontmatter changes require confidence ≥ 95 and human approval.

---

## 7. Completing a Verification

When a human verifies a note:
1. Update `last_verified` to today's date.
2. Update `confidence` if evidence changed.
3. Increment `version`.
4. Update `updated` to today.
5. Log the verification in the audit log with the rule applied and confidence.

`decay_scheduler.py` will automatically recompute `stale_after` on next run.

---

## 8. Decay Report Format

`.antigravity/reports/decay-report.md` contains:
- Total notes with decay tracking
- Count by `review_priority` band
- List of `critical` priority notes (most overdue first)
- List of `high` priority notes
- Notes expiring within 30 days (`normal` → `high` transition)

This report is produced weekly and does not authorise any automated cleanup.
```

---

## File: modules\quality\maturity-model.md

```markdown
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
```

---

## File: modules\quality\promotion-rules.md

```markdown
---
module: quality_promotion
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_decision_engine
exports:
  - promotion_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 300
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Promotion Rules

Promotion makes a note more visible through `NOTES/`, a MOC, cross-MOC navigation, or featured placement. It is governed by this score out of `10`:

| Criterion | Points |
| --- | --- |
| Source-backed and verified | 2 |
| Atomic | 2 |
| Reusable | 2 |
| Linked to an owner MOC and justified related note | 2 |
| Stable canonical title | 1 |
| Not a duplicate | 1 |

| Score and confidence | Decision |
| --- | --- |
| Score `8–10` (defined in [constants.md](file:///.antigravity/shared/constants.md)), action confidence `>=95` | Promote and log. |
| Score `8–10`, action confidence `80–94` | Suggest promotion. |
| Score `6–7` | Manual review. |
| Score `<6` | Keep as draft or return to processing. |

Never promote only because a note is long, recently created, or already tagged. A note must be source-backed when its content makes source-dependent claims.
```

---

## File: modules\quality\quality-checklist.md

```markdown
---
module: quality_checklist
version: 2.1.0
priority: 5
depends_on:
  - shared_constants
  - core_governance
exports:
  - quality_checklist_rules
loads: []
compatible_schema_versions: [3, 4]
estimated_token_cost: 350
owner: vault-owner
last_reviewed: 2026-07-18
change_reason: "Migrated to module system with manifests."
---

# Quality Checklist

Before marking an ingest complete or promoting a note, validate:

- [ ] Canonical frontmatter schema is present and valid.
- [ ] UUID is present and immutable.
- [ ] Canonical title is specific and unique; aliases are not duplicate nodes.
- [ ] `type`, `status`, `domain`, `source_type`, and `owner_moc` are structured metadata, not tags.
- [ ] Discovery tags are approved and purposeful.
- [ ] Source provenance is recoverable for source-dependent claims.
- [ ] Note is atomic or explicitly remains a knowledge document/synthesis note.
- [ ] One owner MOC is declared and the note is discoverable there.
- [ ] At least one justified graph link exists for an active node.
- [ ] Duplicate decision was measured and logged when a candidate exists.
- [ ] Link priority and confidence satisfy [linking-rules.md](file:///.antigravity/modules/graph/linking-rules.md).
- [ ] Promotion score is recorded when promotion is considered.
- [ ] The original source is archived, not deleted.
- [ ] Material changes are append-logged with rule, confidence, and rollback path.
- [ ] No broken internal links are introduced.

If a criterion fails, keep the artifact in its current lifecycle state. Do not promote by assumption.
```

---

## File: modules\workflow\incubation-rules.md

```markdown
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
```

---

# Folder: .antigravity/schemas

## File: schemas\atomic-note.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Atomic Note Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["atomic-note"]
        }
      }
    }
  ],
  "if": {
    "properties": { "schema_version": { "const": 4 } },
    "required": ["schema_version"]
  },
  "then": {
    "properties": {
      "owner_moc": {
        "type": "string",
        "minLength": 1
      }
    },
    "required": ["owner_moc"]
  }
}
```

---

## File: schemas\daily-note.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Daily Log Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["log"]
        },
        "status": {
          "type": "string",
          "enum": ["maintained", "processed", "archived"]
        }
      }
    }
  ]
}
```

---

## File: schemas\decision-context.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "decision-context.schema.json",
  "title": "NexusDB Decision Context Schema",
  "description": "Schema for the optional decision_context frontmatter block",
  "type": "object",
  "properties": {
    "why_created": {
      "type": ["string", "null"],
      "description": "One sentence explaining the trigger for this note's creation"
    },
    "decision": {
      "type": ["string", "null"],
      "description": "Key curation or scoping decision made about this note"
    },
    "assumptions": {
      "type": "array",
      "items": { "type": "string" },
      "description": "Beliefs assumed to be true at creation time"
    },
    "tradeoffs": {
      "type": "array",
      "items": { "type": "string" },
      "description": "What was deliberately omitted for atomicity or clarity"
    },
    "importance": {
      "type": ["string", "null"],
      "enum": ["low", "normal", "high", "critical", null],
      "description": "How important this note is. Default: normal"
    },
    "context": {
      "type": ["string", "null"],
      "description": "Situational context at the time of creation"
    },
    "future_work": {
      "type": ["string", "null"],
      "description": "What would improve or complete this note"
    }
  },
  "additionalProperties": false
}
```

---

## File: schemas\frontmatter.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Frontmatter Schema",
  "description": "Validates all note frontmatter. Schema version 3 and 4 are both accepted.",
  "type": "object",
  "if": {
    "properties": { "schema_version": { "const": 4 } },
    "required": ["schema_version"]
  },
  "then": {
    "properties": {
      "tags": {
        "maxItems": 5
      }
    },
    "required": [
      "id",
      "title",
      "type",
      "status",
      "domain",
      "created",
      "updated",
      "confidence",
      "version",
      "aliases",
      "tags",
      "owner_moc",
      "sources",
      "related",
      "schema_version"
    ]
  },
  "else": {
    "required": [
      "type"
    ]
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[45][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    },
    "concept_id": {
      "type": ["string", "null"],
      "pattern": "^[a-z0-9]+(-[a-z0-9]+)*-v[0-9]+(-.+)?$",
      "description": "Immutable human-readable slug. Set at creation and never changed."
    },
    "title": {
      "type": "string",
      "minLength": 1
    },
    "type": {
      "type": "string",
      "enum": [
        "raw-source", "knowledge-document", "evergreen-note", "atomic-note", "moc", "governance-rule", "log",
        "concept", "fact", "glossary", "example", "quote", "method", "biography", "framework",
        "principle", "person", "source", "book", "mega-source"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "incubating",
        "captured",
        "processed",
        "learning",
        "verified",
        "evergreen",
        "canonical",
        "maintained",
        "archived",
        "atomic",
        "linked",
        "curated",
        "active"
      ],
      "description": "8-stage maturity model. atomic/linked/curated/active are legacy values still accepted."
    },
    "domain": {
      "type": "string",
      "enum": ["ai", "ml", "llm", "psychology", "productivity", "philosophy", "business", "study", "research", "writing", "tools", "habits", "strategy", "leadership", "self-improvement", "dsa", "engineering", "manufacturing", "innovation", "risk", "general"]
    },
    "source_type": {
      "type": ["string", "null"],
      "enum": ["book", "article", "paper", "youtube", "podcast", "web-clip", "transcript", "course", "interview", "dataset", "original-observation", "misc", null]
    },
    "created": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "updated": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "review": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
    },
    "last_verified": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$",
      "description": "Date when claims were last verified against source. Human-set only."
    },
    "confidence": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
    "version": {
      "type": ["integer", "string"],
      "minimum": 1
    },
    "verification_interval": {
      "type": ["integer", "null"],
      "minimum": 1,
      "description": "Days between required verifications. null = no decay tracking."
    },
    "stale_after": {
      "type": ["string", "null"],
      "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$",
      "description": "Computed by decay_scheduler.py. Do not edit manually."
    },
    "review_priority": {
      "type": ["string", "null"],
      "enum": ["low", "normal", "high", "critical", null]
    },
    "confidence_decay": {
      "type": ["integer", "null"],
      "minimum": 0,
      "maximum": 50,
      "description": "Points lost per 365 overdue days. Applied in reports only."
    },
    "aliases": {
      "type": "array",
      "items": { "type": "string" }
    },
    "tags": {
      "type": "array",
      "items": { "type": "string" }
    },
    "owner_moc": {
      "type": ["string", "null"]
    },
    "sources": {
      "type": "array",
      "items": {
        "anyOf": [
          { "type": "string" },
          {
            "type": "array",
            "items": {
              "anyOf": [
                { "type": "string" },
                {
                  "type": "array",
                  "items": { "type": "string" }
                }
              ]
            }
          }
        ]
      }
    },
    "related": {
      "type": "array",
      "description": "Legacy relation list. Treated as related_to with no confidence.",
      "items": {
        "anyOf": [
          { "type": "string" },
          {
            "type": "array",
            "items": {
              "anyOf": [
                { "type": "string" },
                {
                  "type": "array",
                  "items": { "type": "string" }
                }
              ]
            }
          }
        ]
      }
    },
    "relations": {
      "type": "array",
      "description": "Typed semantic relationships. Max 15 entries. See relations.schema.json for entry schema.",
      "maxItems": 15,
      "items": {
        "type": "object",
        "properties": {
          "target": { "type": "string", "minLength": 1 },
          "type": {
            "type": "string",
            "enum": ["supports", "contradicts", "depends_on", "implements", "extends", "generalizes", "specializes", "causes", "effect_of", "example_of", "instance_of", "part_of", "related_to", "compares_with", "prerequisite_for", "derived_from", "inspired_by", "references"]
          },
          "confidence": { "type": "integer", "minimum": 0, "maximum": 100 },
          "reason": { "type": "string" },
          "evidence": { "type": "string" },
          "source": { "type": "string" },
          "creation_method": { "type": "string", "enum": ["human", "ai-suggested", "ai-auto"] },
          "human_verified": { "type": "boolean" }
        },
        "required": ["target", "type"]
      }
    },
    "decision_context": {
      "type": ["object", "null"],
      "description": "Optional human-authored reasoning block. Never overwritten by automation.",
      "properties": {
        "why_created": { "type": ["string", "null"] },
        "decision": { "type": ["string", "null"] },
        "assumptions": { "type": "array", "items": { "type": "string" } },
        "tradeoffs": { "type": "array", "items": { "type": "string" } },
        "importance": { "type": ["string", "null"], "enum": ["low", "normal", "high", "critical", null] },
        "context": { "type": ["string", "null"] },
        "future_work": { "type": ["string", "null"] }
      }
    },
    "schema_version": {
      "type": "integer",
      "enum": [3, 4],
      "description": "Schema version. 3 = legacy (still accepted), 4 = current."
    }
  }
}
```

---

## File: schemas\moc.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Map of Content Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["moc"]
        },
        "status": {
          "type": "string",
          "enum": ["active", "curated", "archived"]
        }
      }
    }
  ]
}
```

---

## File: schemas\relations.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "relations.schema.json",
  "title": "NexusDB Relations Entry Schema",
  "description": "Schema for a single entry in the relations frontmatter list",
  "type": "object",
  "properties": {
    "target": {
      "type": "string",
      "minLength": 1,
      "description": "Canonical title or concept_id of the target note"
    },
    "type": {
      "type": "string",
      "enum": [
        "supports",
        "contradicts",
        "depends_on",
        "implements",
        "extends",
        "generalizes",
        "specializes",
        "causes",
        "effect_of",
        "example_of",
        "instance_of",
        "part_of",
        "related_to",
        "compares_with",
        "prerequisite_for",
        "derived_from",
        "inspired_by",
        "references"
      ],
      "description": "The semantic relationship type (one of 18 controlled vocabulary types)"
    },
    "confidence": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "description": "Confidence in the relationship (0-100). Relationships with confidence < 80 are not created automatically."
    },
    "reason": {
      "type": "string",
      "description": "Brief explanation of why this relationship exists"
    },
    "evidence": {
      "type": "string",
      "description": "Optional: quote or section reference supporting the relationship"
    },
    "source": {
      "type": "string",
      "description": "Optional: slug or path of the source that implies this relationship"
    },
    "creation_method": {
      "type": "string",
      "enum": ["human", "ai-suggested", "ai-auto"],
      "description": "How this relationship was created"
    },
    "human_verified": {
      "type": "boolean",
      "description": "Whether a human has confirmed this relationship is correct"
    }
  },
  "required": ["target", "type"],
  "additionalProperties": false
}
```

---

## File: schemas\source.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Source Schema",
  "type": "object",
  "allOf": [
    { "$ref": "frontmatter.schema.json" },
    {
      "properties": {
        "type": {
          "type": "string",
          "enum": ["raw-source"]
        },
        "status": {
          "type": "string",
          "enum": ["captured", "processed", "verified", "archived"]
        },
        "origin_path": {
          "type": "string"
        },
        "captured_at": {
          "type": "string",
          "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
        },
        "processed_at": {
          "type": ["string", "null"],
          "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
        },
        "ingested_at": {
          "type": ["string", "null"],
          "pattern": "^(\\d{4}-\\d{2}-\\d{2})?$"
        },
        "linked_notes": {
          "type": "array",
          "items": { "type": "string" }
        },
        "disposition": {
          "type": "string",
          "enum": ["pending", "ingested", "no_reusable_knowledge"]
        }
      },
      "required": ["origin_path", "captured_at", "disposition"]
    }
  ]
}
```

---

## File: schemas\tag.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NexusDB Tag Schema",
  "type": "array",
  "items": {
    "type": "string",
    "enum": [
      "beginner",
      "advanced",
      "comparison",
      "case-study",
      "implementation",
      "reference",
      "history",
      "decision",
      "example",
      "checklist",
      "open-question",
      "contrarian",
      "case_study",
      "open_question"
    ]
  }
}
```

---

# Folder: .antigravity/shared

## File: shared\aliases.md

```markdown
# Controlled Tag Aliases Mapping

This file defines the canonical mapping from common tag variations/aliases to their official canonical tag forms.

## 1. Tag Mapping Rules
All ingestion pipelines and tag validators must map these aliases to their targets during validation and normalization:

- `facts` → `fact`
- `concepts` → `concept`
- `methods` → `method`
- `quotes` → `quote`
- `examples` → `example`
- `case_study` → `case-study`
- `open_question` → `open-question`
- `tutorials` → `tutorial`
- `papers` → `paper`
- `books` → `book`
```

---

## File: shared\citation-policy.md

```markdown
# NexusDB Citation and Link Policy

This policy governs how references, links, and citations are added to notes.

## Provenance Rules

1. **Required Sources**: Any factual claim or definition must declare its source in the frontmatter `sources` array.
2. **Body Excerpts**: Quote directly from the raw source file in the `## Source` section of the note to preserve evidence.
3. **No Unbacked Claims**: If a note does not have a source, it must be explicitly labeled in the frontmatter as `source_type: original-observation`.

## Link Creation Rules

1. **High Priority Links**: Parent-child, prerequisite, cause, or part-of. Add automatically when relationship confidence `>= 95%`.
2. **Medium Priority Links**: Related concepts, alternatives, comparisons. Output as suggestions if confidence `>= 80%`.
3. **Low Priority Links**: Loose association. Do not create automatically. Leave to user discretion.
4. **No Orphans**: Every note must have at least one inbound or outbound link to keep the graph connected.
```

---

## File: shared\constants.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Centralize all shared system constants to eliminate magic numbers and duplicate literals
deprecation_date: null
---

# Shared System Constants

## 1. Confidence Levels
- **CONFIDENCE_SAFE**: `95–100`  # Reversible, rule-compliant actions applied automatically and logged
- **CONFIDENCE_SUGGEST**: `80–94`  # Actions suggested/proposed to human, not executed
- **CONFIDENCE_ASK**: `60–79`  # Explicit approval required before action
- **CONFIDENCE_MIN**: `0–59`  # Do nothing except optional observation logging

## 2. Similarity and Merge Thresholds
- **MERGE_TITLE_SIMILARITY**: `0.90`  # Required title similarity for duplicate merging
- **MERGE_SEMANTIC_SIMILARITY**: `0.90`  # Required semantic similarity for duplicate merging

## 3. Node Constraints
- **MAX_TAG_COUNT**: `5`  # Maximum discovery tags per note
- **MAX_RELATION_COUNT**: `15`  # Maximum entries in the frontmatter relations block
- **DEFAULT_VERIFICATION_INTERVAL**: `365`  # Default days before a note is flagged stale (1 year)

## 4. Promotion Rubric thresholds
- **PROMOTION_MAX_SCORE**: `10`  # Maximum score on the promotion rubric
- **PROMOTION_AUTO_SCORE**: `8`  # Minimum rubric score to allow automatic promotion at CONFIDENCE_SAFE
- **PROMOTION_REVIEW_SCORE**: `6`  # Minimum rubric score requiring manual review (6 or 7)
- **PROMOTION_DRAFT_SCORE**: `5`  # Scores below this remain draft or return to processing

## 5. Schema Versions
- **CURRENT_SCHEMA_VERSION**: `4`  # Version 4 contains concept_id, relations, last_verified, etc.
- **LEGACY_SCHEMA_VERSION**: `3`  # Version 3 remains supported for read/write compatibility

## 6. Knowledge States (Maturity Stages)
The canonical 8-stage maturity model (strictly about quality and readiness):
- `captured`: Original material received; not yet interpreted
- `processed`: Cleaned, structured; provenance retained
- `learning`: Placed in `02_NEW-KNOWLEDGE/` for active study/extraction
- `verified`: Factual claims checked against source; accuracy confirmed
- `evergreen`: Stable, reusable, atomic explanation
- `canonical`: Single vault authority for this concept (duplicate check passed, `concept_id` set)
- `maintained`: Freshness checked within `verification_interval`
- `archived`: Historical reference; retired from active vault graph

Legacy statuses mapped to current:
- `atomic` → `learning`
- `linked` → `evergreen`
- `curated` → `canonical`

## 7. Health Metrics Severity Limits
- **HEALTH_CRITICAL_ORPHAN_PCT**: `20`  # Critical alarm if orphans exceed 20%
- **HEALTH_CRITICAL_DEAD_LINKS**: `10`  # Critical alarm if dead wikilinks exceed 10
- **HEALTH_CRITICAL_SCHEMA_PCT**: `50`  # Critical alarm if schema version compliance drops below 50%
- **HEALTH_CRITICAL_DUP_PCT**: `15`  # Critical alarm if duplicate rate exceeds 15%
- **HEALTH_TARGET_ORPHAN_PCT**: `5`  # Healthy orphan limit (under 5%)
- **HEALTH_TARGET_BACKLINKS**: `2.0`  # Healthy minimum average backlinks per node
```

---

## File: shared\evaluation-rubric.md

```markdown
# NexusDB Evaluation Rubric

This document defines the quantitative criteria used to evaluate note promotion and duplication.

## 10-Point Promotion Rubric

Every note is scored out of 10 points:
1. **Source-backed and verified (2 pts)**: The claims are fully backed by a source, and the note status is not captured/processed.
2. **Atomic (2 pts)**: The note covers exactly one concept or fact.
3. **Reusable beyond source (2 pts)**: The explanation is general enough to be useful in other contexts.
4. **Linked (2 pts)**: The note has an owner MOC and at least one other connection in the graph.
5. **Stable Title (1 pt)**: The filename matches the canonical title exactly.
6. **Not Duplicate (1 pt)**: The note has no high Jaccard similarity overlap with existing nodes.

## Duplication Thresholds
- **Jaccard Word Overlap > 0.5**: High similarity. Trigger a potential merge suggestion.
- **Tag Overlap >= 2 & Word Overlap > 0.3**: Moderate similarity. Check if one note is a subset of the other.
```

---

## File: shared\glossary.md

```markdown
---
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial creation of the system glossary
deprecation_date: null
---

# Knowledge Vault Glossary

This glossary defines the authoritative terminology used across all governance rules, metadata schemas, and automations within `nexusdb`.

## Terminology Definitions

- **Atomic Note**: A permanent note representing exactly one concept, fact, method, or claim. It resides in `NODES/` and must be independently understandable without relying on specific source context.
- **Evergreen Note**: A stable, synthesis note that provides structured explanations of complex concepts, residing in `NOTES/`. Unlike raw sources, it uses domain-independent framing where possible and is designed for long-term reusability.
- **Map of Content (MOC)**: A navigation file in `03_MOC/` that organizes related notes. MOCs contain only links, maps, and structures; they do not contain inline descriptions or explanations.
- **Concept ID**: An immutable, human-readable slug (e.g., `backpropagation-v1`) that uniquely identifies a canonical concept across aliases and updates.
- **Archival Consolidation**: The process of merging duplicate notes where predecessor files are marked `status: archived` and their metadata (aliases, backlinks, sources) is merged into the canonical note, ensuring no historical content is deleted.
- **Orphan Node**: An active note that violates Graph Law 1 because it lacks an owner MOC or has zero justified inbound/outbound links.
- **Provenance**: Recoverable evidence tracing a note's factual claims to their original sources (URLs, PDFs, transcripts) stored in `01_RAW/SOURCE/`.
- **Maturity model**: The 8-stage lifecycle model (`captured → processed → learning → verified → evergreen → canonical → maintained → archived`) that tracks note readiness and quality.
- **Tag Entropy**: A metric measuring the distribution and diversity of tag usage. High tag entropy represents healthy tag usage; low entropy suggests over-concentration or excessive tag generation.
```

---

## File: shared\markdown-style.md

```markdown
# NexusDB Markdown Style Guide

This style guide defines formatting requirements for all Markdown files in the vault.

## Spacing and Headers

1. **Title H1**: Exactly one H1 per file, formatted as `# Canonical Title`.
2. **Subheadings**: Use H2 (`## Section Name`) for major sections. Do not skip levels.
3. **Empty Lines**: Exactly one blank line before and after headers, list items, and blockquotes.

## Text Formatting

1. **Emphasis**: Use standard `**bold**` and `*italic*` carefully. Never double-format (e.g. `***bold italic***`).
2. **Lists**: Use hyphens (`-`) for unordered lists. Keep list items short and concise.
3. **Code blocks**: Use fenced code blocks with language specification. Do not use blockquotes (`>`) to format code.

## Wikilinks

1. Use double bracket wikilinks: `[[target]]` or `[[target|label]]`.
2. Never put formatting (like backticks or bold) inside the wikilink brackets (e.g. use `[[target]]` instead of `[[**target**]]` or `[[`target`]]`).
3. For Windows paths, use forward slashes in links.
```

---

## File: shared\naming-conventions.md

```markdown
# File and Note Naming Conventions

This file defines the strict naming rules for all notes, sources, MOCs, and directories in `nexusdb`.

## 1. Directory Structure Naming
- `01_RAW/capture/` - Raw capture inbox.
- `01_RAW/source/` - Archived sources.
- `02_NODES/` - Flat directory for atomic notes. No subdirectories are allowed.
- `03_MOC/` - Maps of Content layer.

## 2. File Name Conventions
- **Atomic Notes in `02_NODES/`**: Must be lowercased, hyphen-separated slugs derived from the canonical title (e.g. `gradient-descent.md`).
- **MOC Notes in `03_MOC/`**: Must be PascalCase or Space-separated ending with the " MOC" suffix (e.g. `Machine Learning MOC.md`).
- **Source Notes in `01_RAW/source/`**: Keep the original file names or use lowercase-hyphenated identifiers matching the original captured document name (e.g. `attention-is-all-you-need.md`).

## 3. Slug Generation Formula
Slugs are generated from the canonical title by:
1. Stripping file extensions.
2. Converting all characters to lowercase.
3. Replacing spaces and underscores with a single hyphen.
4. Stripping all non-alphanumeric characters (except hyphens).
5. Removing duplicate adjacent hyphens.
```

---

## File: shared\output-contract.md

```markdown
# NexusDB AI Output Contract

All agents executing tasks within the vault must adhere to this output contract.

## Rules

1. **No Conversational Filler**: Output only the requested content (Markdown or JSON). Do not say "Here is your file" or "I have processed the note."
2. **Strict Schema Adherence**: Frontmatter must validate perfectly against the corresponding schema in `.antigravity/schemas/`.
3. **Structured Body Format**: Always write structured headings in the body:
   - For atomic notes: `## Claim` (or `## Definition`), `## Explanation`, `## Related`, `## Source`.
   - For MOCs: `## Overview`, `## Core Nodes`, `## Related MOCs`.
4. **Be Concise**: Keep explanations brief and focused. Avoid verbose paragraphs.
5. **No Double Formats**: Do not format headers inside list items or use bold headers inside sections.
```

---

## File: shared\relationship-types.md

```markdown
# Approved Semantic Relationship Types

This file outlines the approved relationship types permitted in the frontmatter `related` or `relations` blocks.

## 1. Allowed Relationship Types

- **extends**: The current note expands or builds upon the core concepts defined in the target note.
- **supports**: The current note provides evidence, details, or proofs that validate the target note's claims.
- **refutes**: The current note provides counter-arguments, counter-examples, or disproofs of the target note's claims.
- **replaces**: The current note supersedes or deprecates the target note (used during merges and consolidation).
- **instantiates**: The current note is a concrete instance or case study of the general principle in the target note.
- **uses**: The current note utilizes methods, formulas, or frameworks defined in the target note.
- **contrasts**: The current note highlights differences or alternative perspectives compared to the target note.
- **depends_on**: The current note requires understanding of the target note as a prerequisite.
```

---

## File: shared\taxonomy.md

```markdown
# Knowledge Domains Taxonomy

This file is the single source of truth for approved knowledge domains and their respective classifications in `nexusdb`.

## 1. Primary Knowledge Domains
All notes must map to exactly one of the following primary domains:

- **ai**: Artificial Intelligence theories, architectures, and algorithms.
- **ml**: Machine Learning practices, models, and optimization.
- **llm**: Large Language Models, prompt engineering, context management, and evaluations.
- **psychology**: Cognitive psychology, behavior, thinking models, and human behavior.
- **productivity**: Time management, focus, deep work, and organization systems.
- **philosophy**: Epistemology, ethics, logic, and philosophical frameworks.
- **business**: Strategy, marketing, economics, startup structures, and operations.
- **study**: Learning techniques, memory retention, note-taking systems, and education.
- **research**: Methodology, literature reviews, search algorithms, and synthesis.
- **writing**: Content creation, editing, storytelling, and communication.
- **tools**: Software, applications, setups, development workflows, and automation.
- **habits**: Routine building, habit loops, triggers, and consistency practices.
- **strategy**: Decision-making frameworks, mental models, game theory, and long-term planning.
- **leadership**: Management, coaching, team dynamics, and organizational psychology.
- **self-improvement**: Personal growth, self-reflection, wellness, and life design.
- **dsa**: Data Structures and Algorithms, computer science fundamentals.
- **engineering**: Software engineering, architecture, code quality, and systems design.
- **manufacturing**: Industrial production, optimization, supply chain, and hardware development.
- **innovation**: Creative thinking, breakthroughs, product management, and invention.
- **risk**: Threat modeling, safety, security, probability, and disaster prevention.
- **general**: Catch-all for miscellaneous facts or observations that do not fit elsewhere.
```

---

## File: shared\terminology.md

```markdown
# NexusDB Canonical Terminology

This document defines the key terms and concepts used across the NexusDB knowledge vault.

- **Atomic Note**: A single, self-contained note answering one question or stating one reusable concept, fact, or definition. Stored in `NODES/` with a flat structure (no subfolders).
- **Map of Content (MOC)**: A curated navigation note that lists and links related atomic notes to make the vault browsable. Stored in `03_MOC/`. MOCs navigate and contain no explanations.
- **Raw Source**: A captured original document, article, book, or transcript. Stored in `01_RAW/SOURCE/` for provenance.
- **Evergreen Note**: A mature, stable synthesized note summarizing a larger concept. Stored in `NOTES/`.
- **Orphan**: An active note that has no inbound links and is not listed in any MOC.
- **Backlink**: A link from another note pointing to the current note.
- **Domain**: A broad category of knowledge (e.g. `ai`, `ml`, `productivity`) used to group notes.
```

---

