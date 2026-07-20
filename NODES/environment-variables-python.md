---
id: 41621ad3-2446-4979-9754-fe8fa63829f2
title: Environment Variables in Python
type: atomic-note
status: evergreen
domain: tools
source_type: youtube
created: 2026-07-19
updated: 2026-07-19
review: 2026-10-19
confidence: 95
version: 1
aliases: [Environment Variables, .env]
tags: []
owner_moc: Python for AI Beginner Course MOC
sources:
  - 01_RAW/SOURCE/python-for-ai-beginner-course.md
related: []
schema_version: 3
concept_id: environment-variables-python-v1
last_verified: null
verification_interval: null
stale_after: null
review_priority: normal
confidence_decay: null
relations: []
---

# Environment Variables in Python

## Definition
Environment variables are dynamic key-value pairs configured outside the program binary scope, typically stored locally inside a `.env` configuration file and loaded at runtime via utility packages like `python-dotenv`.

## Explanation
Hardcoding secrets (e.g. OpenAI/Gemini API keys, database credentials) directly inside scripts is a high security risk, as pushing the files to platforms like GitHub leaks private tokens. 

To avoid this, credentials are externalized to a `.env` file (added to `.gitignore` to prevent version control tracking). At runtime, `python-dotenv` loads these variables, exposing them to Python via `os.environ`.

## Example
```python
# .env file content:
# GEMINI_API_KEY=your_key_here

from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
```

## Related
- [[git-version-control-system|Git Version Control System]]
- [[python-for-ai-beginner-course-moc|Python for AI Beginner Course MOC]]

## Source
Derived from the video transcript [[python-for-ai-beginner-course|Python for AI Beginner Course]].
