---
title: Pre-Ingestion Hook
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-18
approved_by: vault-owner
change_reason: Initial release as part of hook-based lifecycle organization
deprecation_date: null
---

# Pre-Ingestion Hook

These rules must be run prior to ingesting any new knowledge source into the vault.

## Required Operations

1. **Frontmatter Validation**: Verify that the raw source contains a valid frontmatter block matching `.antigravity/schemas/source.schema.json`.
2. **Tag Verification**: Check all discovery tags against the controlled vocabulary in `.antigravity/schemas/tag.schema.json`. Resolve any tag aliases.
3. **Duplicate Precheck**: Run duplicate checks against existing notes in the vault using Jaccard word similarity.
4. **Action Confidence Verification**: Compute the action confidence score. If confidence is `< 95%`, flag for human review; if `< 60%`, halt the ingestion pipeline.
5. **Source Provenance Integrity**: Ensure that the incoming file has a defined `origin_path` and a valid source ID before placing it in the `01_RAW/CAPTURE/` folder.
