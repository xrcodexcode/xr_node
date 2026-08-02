---
title: Tagging Rules & Schema
type: governance-rule
status: active
version: 6.0.0
last_reviewed: 2026-07-30
approved_by: vault-owner
change_reason: "v6.0.0 — Synchronized tag schema with CLAUDE.md, source tags (yt, podcast, book, article, paper, transcript, web-clip), meta tags (moc, draft), discovery facets, and alias mappings."
---

# Tagging Rules & Schema

Tags are controlled discovery facets and content classifiers. They are not a substitute for structured metadata or graph connections.

## 1. Approved Tag Taxonomy

### Discovery Facets
- `beginner` — introductory material or simple explanations
- `advanced` — complex concepts or in-depth technical analysis
- `comparison` — comparing two or more concepts, methods, or entities
- `case-study` — detailed analysis of a real-world example
- `implementation` — code, setup, or execution details
- `reference` — raw definitions, tables, or external reference links
- `history` — historical context, background, or evolution of an idea
- `decision` — architectural decision records, design choices, or trade-offs
- `example` — concrete examples illustrating a concept
- `checklist` — lists of criteria, validation steps, or operational procedures
- `open-question` — unsolved problems or areas requiring further research
- `contrarian` — viewpoints that challenge standard consensus

### Source Tags (Permanent)
Permanent source tags track the origin format of captured material and must never be removed:
- `yt` — YouTube video captures or video transcripts
- `podcast` — audio or video podcast episodes
- `book` — published books or long-form literature
- `article` — online articles, essays, or blog posts
- `paper` — academic, technical, or research papers
- `transcript` — audio/video transcripts or interview logs
- `web-clip` — web-clipped content or bookmarks

### Domain Tags
- `ai` — artificial intelligence concepts and methods
- `ml` — machine learning algorithms and models
- `llm` — large language models and prompt engineering
- `psychology` — psychological principles, behavior, and cognition
- `productivity` — productivity workflows, habits, and time management
- `philosophy` — philosophical frameworks and mental models
- `business` — business models, strategy, and management
- `study` — academic preparation and learning strategies
- `research` — research methodology and literature review
- `writing` — content creation and technical writing
- `tools` — software tools, frameworks, and utilities
- `habits` — habit formation and behavior design
- `strategy` — tactical and strategic planning
- `leadership` — leadership traits and management practices
- `self-improvement` — personal growth and discipline
- `dsa` — data structures and algorithms
- `engineering` — software and systems engineering
- `manufacturing` — industrial processes and operations
- `innovation` — technology trends and ideation
- `risk` — risk management and probability
- `general` — foundational or cross-domain knowledge
- `power` — power dynamics and influence
- `biography` — key historical figures and personal profiles

### Meta & Structural Tags
- `moc` — Map of Content navigation index
- `draft` — incomplete or unverified work-in-progress note


## 2. Approved Aliases

Automatic resolution maps alternate tag forms to canonical forms:
- `case_study` → `case-study`
- `open_question` → `open-question`
- `youtube` → `yt`
- `podcasts` → `podcast`
- `books` → `book`
- `articles` → `article`
- `papers` → `paper`
- `transcripts` → `transcript`

## 3. Strict Rules

- **Lowercase & Hyphenated**: All tags must be lowercase and hyphen-separated (e.g., `case-study`, not `CaseStudy` or `case_study`).
- **No Ad-Hoc Tags**: Never invent ad hoc tags. Every tag used in the vault must exist in this schema.
- **Permanent Source Tags**: Source origin tags (e.g. `yt`, `podcast`, `book`) are permanent and must never be removed during note processing or promotion.
- **Zero or More**: Use zero or more approved discovery facets; tag intentionally, not out of habit.
