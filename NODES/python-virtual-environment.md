---
id: c551c49b-edbc-4184-a0d3-785a88e1b247
title: Python Virtual Environment
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: []
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: python-virtual-environment-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Python Virtual Environment

## Definition
A Python Virtual Environment (`venv`) is an isolated folder containing a private Python runtime installation and a localized set of package dependencies, preventing version conflicts between multiple codebases on a single system.

## Explanation
If all packages (e.g. Pandas, NumPy, OpenAI API client) are installed globally on a system, upgrading a package for a new project can break older projects that depend on an earlier version of that package. Virtual environments solve this by copying a lightweight python interpreter and directory structures inside the project workspace (typically named `.venv/`).

When activated, the system PATH is modified so that standard shell calls to `python` or `pip` execute within the environment's isolated binary scope rather than the global system namespace.

## Related
- [[python-package-installer|Python Package Installer (pip)]]
- [[uv-package-manager|Uv Package Manager]]
- [[python-for-ai-beginner-course-moc|Python for AI Beginner Course MOC]]

## Source
Derived from the video transcript [[python-for-ai-beginner-course|Python for AI Beginner Course]].
