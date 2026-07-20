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
