---
title: tag-schema.md — Controlled Tag Vocabulary & Domains
type: governance-rule
status: active
version: 1.0.0
last_reviewed: 2026-07-19
approved_by: vault-owner
---

# Controlled Tag Vocabulary & Domains

Tags are lowercase, hyphenated, controlled discovery facets. They are not a substitute for frontmatter metadata fields.

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

## Primary Knowledge Domains

All notes must map to exactly one of the following primary domains in their frontmatter `domain` field:

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

## Controlled Tag Aliases

The ingestion pipeline and validators map these aliases during validation:

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
