---
title: Nightly Maintenance Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Nightly Maintenance Hook

This hook represents the automated checks that run every night as part of the daily vault hygiene cycle.

## Required Operations

1. **Metadata Linting**: Run `check_vault.py` to check all markdown frontmatter blocks against JSON schemas.
2. **Broken Link Sweep**: Detect any internal wikilinks `[[target]]` pointing to files that do not exist.
3. **Audit Log Validation**: Verify that the `.antigravity/logs/audit-log.md` is well-formed and matches the audit schema structure.
4. **Orphan Sweeper**: Scan `NODES/` for any newly created active nodes that lack a backlink or owner MOC, and dump them to a temporary report.
