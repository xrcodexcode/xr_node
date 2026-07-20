---
id: 7a73f957-7f24-4a28-ad2e-d74bf8ad0ebc
title: Uv Package Manager
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: [Uv]
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: uv-package-manager-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Uv Package Manager

## Definition
`uv` is an extremely fast, single-binary Python package installer and resolver written in Rust. Created by Astral, it functions as a high-performance replacement for `pip`, `pip-tools`, and `virtualenv`.

## Explanation
- **Speed**: Resolves and installs packages up to 10-100x faster than standard `pip` by using Rust, parallel requests, and aggressive local caching.
- **Cargo-style workflow**: Integrates virtual environment creation, package downloads, and locked updates in single command lines (similar to Rust's Cargo or Node's npm).
  - Initialize project: `uv init`
  - Add packages: `uv add <package>`
  - Lock environment: `uv sync`

By replacing multiple tools with one binary, `uv` simplifies configuration management in modern Python AI development pipelines.

## Related
- [[python-package-installer|Python Package Installer (pip)]]
- [[python-virtual-environment|Python Virtual Environment]]
- [[ruff-linter-formatter|Ruff Linter & Formatter]]

## Source
Derived from the video transcript [[python-for-ai-beginner-course|Python for AI Beginner Course]].
