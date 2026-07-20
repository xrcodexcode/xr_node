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
