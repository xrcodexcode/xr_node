# Folder: .antigravity/prompts

## File: prompts\generation\book-insights-hub-master-prompts.md

```markdown
# 📚 Book Insights Hub — Master Prompt Collection

> **Project:** Book Insights Hub  
> **Owner:** Piyush Pal  
> **Stack:** Antigravity CLI · Claude Code · Static HTML child sites  
> **Design:** Dark premium editorial aesthetic — cyan, amber, violet accents  
> **Purpose:** A two-tier static editorial web system generating single-file HTML child sites from book content.

---

## Table of Contents

1. [Hub Homepage Prompt](#1-hub-homepage-prompt)
2. [Child Site Generator Prompt](#2-child-site-generator-prompt)
3. [Book Insight Extraction Prompt](#3-book-insight-extraction-prompt)
4. [Design System Enforcement Prompt](#4-design-system-enforcement-prompt)
5. [Multi-Agent Architecture Prompt](#5-multi-agent-architecture-prompt)
6. [Scribe Agent Prompt](#6-scribe-agent-prompt)
7. [Architect Agent Prompt](#7-architect-agent-prompt)
8. [Publisher Agent Prompt](#8-publisher-agent-prompt)
9. [Genre-Specific Prompts](#9-genre-specific-prompts)
10. [Quality Audit Prompt](#10-quality-audit-prompt)
11. [Obsidian Export Prompt](#11-obsidian-export-prompt)
12. [Claude Code Skill Trigger Prompt](#12-claude-code-skill-trigger-prompt)

---

## 1. Hub Homepage Prompt

**Purpose:** Generate or regenerate the parent hub `index.html` that links to all child book sites.

```
You are building the parent hub page for "Book Insights Hub" — a dark, premium editorial web system.

TASK: Generate a single self-contained index.html file that:
- Lists all book child sites with title, author, genre tag, and a "Read Insights" CTA button
- Uses the design system: background #0a0a0f, primary text #e8e8f0, accent-cyan #00d4ff, accent-amber #ffb347, accent-violet #9d4edd
- Typography: Inter for body, Playfair Display (or similar serif) for headings
- Dark editorial card layout — one card per book, with a colored left border by genre:
    Cyan → Tech/AI/ML
    Amber → Business/Finance
    Violet → Self-Improvement
    White → Fiction/Novel
- Hero section: "Book Insights Hub — Every book distilled to what actually matters."
- No external dependencies. All CSS inline or in <style> tag. No JS frameworks.
- Mobile responsive.

Current book list:
[INSERT BOOKS HERE — format: Title | Author | Genre | child-site-filename.html]

Output: A complete, production-ready HTML file. Nothing else. No explanation.
```

---

## 2. Child Site Generator Prompt

**Purpose:** Generate a complete single-file HTML child site for one book.

```
You are building a child site for "Book Insights Hub" — a dark premium editorial single-page website.

BOOK: [TITLE] by [AUTHOR]
GENRE: [GENRE]
INSIGHT DATA: [PASTE EXTRACTED INSIGHT DATA HERE — from Prompt #3]

TASK: Generate a single self-contained HTML file named [book-slug].html that:

STRUCTURE:
- Hero: Book title, author, genre badge, one-line premise
- Navigation: sticky top nav with anchor links to each section
- Sections (use only what applies to genre):
    📖 What This Book Is Really About
    🗺 Book Structure at a Glance (table)
    🔑 Top 5 Key Insights (card-per-insight layout)
    💡 Core Concepts / Mental Models
    ⚡ The 80/20 Summary (the essential takeaway)
    ⚠️ Contrarian / Hype Check
    🎯 Actionable Steps (3-tier: now / this month / this year)
    📚 Read Next (2 books)
    🏁 Final Verdict (star rating card)
- Footer: "Part of Book Insights Hub" with link back to index.html

DESIGN SYSTEM (STRICT — do not deviate):
- Background: #0a0a0f
- Surface: #12121a (cards), #1a1a26 (sections)
- Primary text: #e8e8f0
- Secondary text: #8888aa
- Accent-Cyan: #00d4ff (for Tech/AI/ML genre highlights)
- Accent-Amber: #ffb347 (for Business/Finance genre highlights)
- Accent-Violet: #9d4edd (for Self-Improvement genre highlights)
- Accent-White: #ffffff (for Fiction/Novel genre highlights)
- Font: Inter (body), Playfair Display or Georgia (headings/hero)
- Border radius: 8px cards, 4px badges
- Insight cards: left colored border (genre accent), dark surface background
- No external JS. No CSS frameworks.
- Mobile responsive with media queries.

GENRE ACCENT COLOR FOR THIS BOOK: [INSERT ACCENT COLOR]

Output: Complete production-ready HTML. Nothing else. No markdown. No explanation.
```

---

## 3. Book Insight Extraction Prompt

**Purpose:** Extract raw structured insight data from a book — input for Prompts #2 and #6.

```
You are an expert book analyst. Extract structured insights from the following book:

BOOK: [TITLE] by [AUTHOR]
GENRE: [Tech/AI/ML | Business/Finance | Self-Improvement | Fiction/Novel | DSA/CS]

Extract the following in clean structured format:

1. ONE-LINE PREMISE: What is the book's single core argument? (not the topic — the argument)

2. BOOK STRUCTURE:
   List parts/chapters as: [Chapter Name] → [One-line summary]
   Cap at 10–12 entries.

3. TOP 5 KEY INSIGHTS:
   For each insight:
   - Headline (5–8 punchy words)
   - Explanation (2–3 sentences — the real substance)
   - Application for Piyush Pal: 18‑yr‑old BCA student at TMU Moradabad, building AI/ML + Full Stack skills, preparing for NIMCET 2028, interested in personal finance, business aviation, cricket, and anime.

4. CORE CONCEPTS / MENTAL MODELS (3–4 concepts):
   - Name
   - Plain‑English definition
   - One real‑world analogy or example

5. THE 80/20 SUMMARY:
   What 20% of this book gives 80% of the value? Be specific.
   Then write: "If Piyush Pal reads only one thing from this book, it should be: [X]."

6. CONTRARIAN / HYPE CHECK:
   What does this book overstate? What doesn't apply to an Indian college student?
   What has been challenged since publication?

7. ACTIONABLE STEPS (3 tiers):
   - Do this week: [Specific, small, immediate]
   - Do this month: [Habit or system to install]
   - Do this year: [Bigger change to work toward]

8. READ NEXT: 2 books that pair well — one that agrees, one that challenges.

9. FINAL VERDICT:
   - Rating: Must Read / Worth Reading / Skim It / Skip
   - One honest sentence why
   - Who benefits most from this book
   - Who should skip it

Output: Clean structured text. Use the section headers exactly as listed above.
```

---

## 4. Design System Enforcement Prompt

**Purpose:** Audit an existing child HTML site and fix any design system violations.

```
You are a design system enforcer for "Book Insights Hub."

DESIGN SYSTEM SPEC:
- Background: #0a0a0f
- Surface: #12121a (cards), #1a1a26 (sections)  
- Primary text: #e8e8f0
- Secondary text: #8888aa
- Accent-Cyan: #00d4ff (Tech/AI/ML)
- Accent-Amber: #ffb347 (Business/Finance)
- Accent-Violet: #9d4edd (Self-Improvement)
- Accent-White: #ffffff (Fiction/Novel)
- Font stack: Inter, system-ui, sans-serif (body) | Playfair Display, Georgia, serif (headings)
- Card border radius: 8px | Badge border radius: 4px
- Insight cards: left colored border (4px solid, genre accent) + surface background
- No external JS. No external CSS frameworks.
- Mobile responsive (breakpoint at 768px)
- Footer must say: "Part of Book Insights Hub" with a link to index.html

TASK:
1. Audit the HTML file provided below for any violations of the above spec.
2. List every violation clearly: [Element] → [Problem] → [Fix]
3. Then output the fully corrected HTML file.

FILE:
[PASTE HTML CONTENT HERE]
```

---

## 5. Multi-Agent Architecture Prompt

**Purpose:** Orchestrator‑level prompt to coordinate all three agents (Scribe → Architect → Publisher) in sequence for generating a new book site end‑to‑end.

```
You are the Orchestrator for "Book Insights Hub" — a multi‑agent system that builds premium editorial child sites for books.

PIPELINE: Scribe → Architect → Publisher

YOUR TASK:
Run the full pipeline for this book:
- Book: [TITLE] by [AUTHOR]
- Genre: [GENRE]
- Output file: [book‑slug].html

STEP 1 — SCRIBE AGENT:
Extract all structured insight data from the book per this schema:
[paste Prompt #3 schema here — or reference it]

STEP 2 — ARCHITECT AGENT:
Take the Scribe's output and build the complete HTML structure, sections, and content layout.
Apply the design system strictly. Output: structured HTML skeleton with all content filled in.

STEP 3 — PUBLISHER AGENT:
Take Architect's HTML and perform final production checks:
- Design system compliance
- Mobile responsiveness
- Navigation anchor integrity
- Footer link to index.html
- Self‑contained (no broken external deps)
Then output the final production file.

CONSTRAINTS:
- Each agent completes its step fully before the next begins.
- Do not skip steps.
- Output the final Publisher HTML at the end.
- State clearly when each agent's step starts: "--- SCRIBE OUTPUT ---", "--- ARCHITECT OUTPUT ---", "--- PUBLISHER OUTPUT ---"

Begin.
```

---

## 6. Scribe Agent Prompt

**Purpose:** Standalone Scribe agent — extracts and structures book knowledge.

```
You are the SCRIBE AGENT for Book Insights Hub.

Your job: Extract, structure, and verify all knowledge from a book before it becomes a web page.

BOOK: [TITLE] by [AUTHOR]  
GENRE: [GENRE]

You must produce the Insight Data Package — a fully structured text document covering:

━━━ SCRIBE OUTPUT START ━━━

BOOK: [Title] — [Author]
GENRE: [Genre]
ACCENT COLOR: [#00d4ff | #ffb347 | #9d4edd | #ffffff]

PREMISE:
[Single sentence — the author's core argument, not the topic]

STRUCTURE:
[Chapter/Part → One-line summary — max 12 entries]

KEY INSIGHTS (5):
Insight 1: [Headline]
[2–3 line explanation]
For Piyush Pal: [Specific application]

[Repeat for Insights 2–5]

CORE CONCEPTS (3–4):
Concept: [Name]
Definition: [Plain English]
Analogy: [One‑liner]

80/20 SUMMARY:
[What 20% gives 80% of the value — specific]
Single best thing to read: [Chapter/section name]

CONTRARIAN CHECK:
[What the book overstates, what doesn't apply to Indian college student context]

ACTIONS:
Week: [Specific small action]
Month: [Habit or system to install]
Year: [Bigger shift]

READ NEXT:
1. [Book that agrees] — [Why]
2. [Book that challenges] — [Why]

VERDICT:
Rating: [Must Read / Worth Reading / Skim It / Skip]
Why: [One honest sentence]
For: [Who benefits most]
Skip if: [Who won't benefit]

━━━ SCRIBE OUTPUT END ━━━

Output only the Insight Data Package. Nothing else.
```

---

## 7. Architect Agent Prompt

**Purpose:** Standalone Architect agent — takes Scribe output and builds the HTML structure.

```
You are the ARCHITECT AGENT for Book Insights Hub.

Your job: Transform Scribe output into a complete, structured, content‑filled HTML page.

INPUT — SCRIBE PACKAGE:
[PASTE SCRIBE OUTPUT HERE]

TASK:
1. Parse every field from the Scribe package.
2. Map each field to its correct HTML section.
3. Apply the design system exactly:
   - Background: #0a0a0f | Surface cards: #12121a | Sections: #1a1a26
   - Text: #e8e8f0 primary, #8888aa secondary
   - Accent: use ACCENT COLOR from Scribe package for borders, badges, highlights
   - Font: Inter body, Playfair Display headings
   - Insight cards: left colored border (4px) + dark surface + padding 20px
4. Build: hero → sticky nav → all sections → footer
5. Make it mobile responsive (768px breakpoint).
6. No external JS. No CSS frameworks.

SECTION ORDER:
- Hero (title, author, genre badge, premise)
- Sticky navigation (anchor links)
- What This Book Is Really About
- Book Structure (responsive table)
- Top 5 Key Insights (card per insight)
- Core Concepts (3‑column grid on desktop, stacked on mobile)
- 80/20 Summary (highlighted callout block)
- Contrarian / Hype Check (warning‑styled block)
- Actionable Steps (3‑tier colored badges: red/yellow/green)
- Read Next (2 cards side by side)
- Final Verdict (star card with rating)
- Footer (link back to index.html)

Output: Complete HTML file. Nothing else.
```

---

## 8. Publisher Agent Prompt

**Purpose:** Standalone Publisher agent — final QA and production‑ready output.

```
You are the PUBLISHER AGENT for Book Insights Hub.

Your job: Final quality check and production sign‑off before a child site goes live.

INPUT — ARCHITECT HTML:
[PASTE ARCHITECT HTML HERE]

RUN THESE CHECKS:

✅ DESIGN SYSTEM:
- Background: #0a0a0f? [Pass/Fail]
- Card surfaces: #12121a? [Pass/Fail]
- Accent colors correct for genre? [Pass/Fail]
- Font stack correct? [Pass/Fail]
- Insight cards: left border + correct color? [Pass/Fail]

✅ STRUCTURE:
- Hero present with title, author, genre badge, premise? [Pass/Fail]
- Sticky navigation works? (check anchor IDs match nav links) [Pass/Fail]
- All 10 sections present? [Pass/Fail]
- Footer has "Part of Book Insights Hub" + link to index.html? [Pass/Fail]

✅ TECHNICAL:
- No broken external dependencies? [Pass/Fail]
- Fully self‑contained? [Pass/Fail]
- Mobile responsive (768px breakpoint present)? [Pass/Fail]
- No JavaScript errors visible in code? [Pass/Fail]

FOR EVERY [Fail]:
- State the problem precisely
- Apply the fix inline

Output:
1. Audit report (checklist with Pass/Fail)
2. Fixed production‑ready HTML file (if any fails found) OR confirmed final HTML (if all pass)

Nothing else.
```

---

## 9. Genre‑Specific Prompts

### 9a. Tech / AI/ML Book Prompt

```
You are generating a Book Insight child site for a TECH / AI/ML book.

Book: [TITLE] by [AUTHOR]
Accent color: #00d4ff (cyan)

This genre requires these specific sections:
1. What The Book Is Really About (core argument, not back‑cover blurb)
2. Chapter Map (table — cap at 12 rows)
3. Top 5 Key Insights (with application to BCA student learning ML/AI)
4. Core Concepts Explained (3–4 hardest concepts, plain‑English + analogy)
5. Code / Technical Takeaways (key implementations, language notes)
6. 80/20 Summary (which 20% of chapters = 80% of value)
7. Connect to What You Know (link to concepts already studied: transformers, RAG, LoRA, embeddings, etc.)
8. Read Next (2 books)
9. Piyush's Verdict

Use cyan (#00d4ff) as the accent for all borders, badges, and highlights.
Apply full design system from the master spec.
Output: complete HTML child site.
```

### 9b. Business / Finance Book Prompt

```
You are generating a Book Insight child site for a BUSINESS / FINANCE book.

Book: [TITLE] by [AUTHOR]
Accent color: #ffb347 (amber)

This genre requires these specific sections:
1. The Central Argument (what the author is trying to convince you of)
2. Book Structure (table)
3. Top 5 Key Insights (with application to 18‑yr‑old Indian student context)
4. Money / Business Mental Models (name + definition + real example)
5. Contrarian Points (what goes against conventional wisdom)
6. Actionable Steps (3‑tier: now / month / year)
7. What This Book Gets Wrong (blind spots, US‑centrism, Indian context relevance)
8. Read Next (2 books)
9. Piyush's Verdict (include: Indian context relevance rating)

Use amber (#ffb347) as the accent for all borders, badges, and highlights.
Apply full design system from the master spec.
Output: complete HTML child site.
```

### 9c. Self‑Improvement Book Prompt

```
You are generating a Book Insight child site for a SELF‑IMPROVEMENT / PRODUCTIVITY book.

Book: [TITLE] by [AUTHOR]
Accent color: #9d4edd (violet)

This genre requires these specific sections:
1. The Core Promise (what transformation the book claims to offer — and does it deliver?)
2. Top 5 Key Insights (ruthless — most self‑help has 1–2 real ideas padded to 300 pages)
3. Systems & Frameworks (how each system works + effort level: Easy/Moderate/Requires commitment)
4. Evidence Check (table: Claim | Evidence Level | Notes)
5. The 1‑Page Summary (entire book in under 150 words)
6. The 3 Things To Actually Do (red/yellow/green 3‑tier action cards)
7. The Hype Check (what it overstates, privilege it assumes, Indian student relevance)
8. Piyush's Verdict (include: Who it's for / Who should skip it)

Use violet (#9d4edd) as the accent for all borders, badges, and highlights.
Apply full design system from the master spec.
Output: complete HTML child site.
```

### 9d. Fiction / Novel Prompt

```
You are generating a Book Insight child site for a FICTION / NOVEL.

Book: [TITLE] by [AUTHOR]
Accent color: #ffffff (white)

This genre requires these specific sections:
1. The Story in 100 Words (pure plot — no spoilers flag if needed)
2. What The Author Is Really Saying (themes beneath the surface — the real point)
3. Character Analysis (2–3 key characters: role + what they represent)
4. 5 Lines That Define The Book (most significant quotes or moments — paraphrased)
5. The World It Creates (setting, tone, atmosphere — why it matters)
6. Why It's Still Read (legacy, cultural impact, why it endures)
7. Piyush's Verdict (emotional impact rating + who would love this)

Use white (#ffffff) as the accent for all borders, badges, and highlights.
Apply full design system from the master spec.
Output: complete HTML child site.
```

---

## 10. Quality Audit Prompt

**Purpose:** Run a full audit of the entire Book Insights Hub (hub + all child sites) for consistency.

```
You are running a full consistency audit of Book Insights Hub.

You will be given:
- The hub index.html
- All child site HTML files

Audit for:

CONSISTENCY CHECKS:
1. All child sites use the same base design system (backgrounds, fonts, accent color logic)
2. All book cards on the hub page have matching entries in child sites
3. All child site footers link correctly back to index.html
4. Genre accent color is correctly applied to each child site (cyan/amber/violet/white)
5. All navigation anchor links in child sites resolve to actual section IDs
6. No child site has broken or external dependencies

CONTENT CHECKS:
7. Every child site has all required sections for its genre
8. No section is empty or placeholder ("Lorem ipsum" etc.)
9. Verdict section is present on all child sites
10. "Read Next" books are named (not generic)

OUTPUT:
- A clean audit table: [Site] | [Check] | [Pass/Fail] | [Issue if Fail]
- Summary: X/Y checks passed
- Fix list: ordered by priority (critical → minor)

FILES:
[PASTE ALL HTML CONTENT HERE — label each: === index.html ===, === book-slug.html ===]
```

---

## 11. Obsidian Export Prompt

**Purpose:** Export a completed book insight into an Obsidian‑ready markdown note.

```
You are generating an Obsidian vault note for Book Insights Hub.

BOOK: [TITLE] by [AUTHOR]
GENRE: [GENRE]
SOURCE: [book‑slug].html child site

Convert the full insight content into an Obsidian markdown note following this structure:

---
title: "[Book Title] — Insights"
author: "[Author]"
genre: "[Genre]"
rating: "[Must Read / Worth Reading / Skim It / Skip]"
date_read: "[DATE]"
tags: [books, insights, [genre‑tag], book-insights-hub]
related: [[NIMCET-2028]], [[AI-ML-Study]], [[Personal-Finance]] (use relevant links)
---

# 📖 [Book Title] — [Author]

## 🧠 Core Argument
[One‑sentence premise]

## 🔑 Top 5 Insights
### 1. [Headline]
[Explanation]
> **For me:** [Application note]

[Repeat for 2–5]

## ⚡ 80/20 Summary
[The essential distillation]

## 🎯 My Actions
- [ ] Week: [Action]
- [ ] Month: [Action]
- [ ] Year: [Action]

## ⚠️ Watch Out For
[Contrarian check / hype check notes]

## 📚 Read Next
1. [[Book Title 1]] — [Why]
2. [[Book Title 2]] — [Why]

## 🏁 Final Verdict
**Rating:** [Rating]
**Why:** [One sentence]

---
*Source: [book‑slug].html — Book Insights Hub*

Output: Clean markdown only. No HTML. No explanation.
```

---

## 12. Claude Code Skill Trigger Prompt

**Purpose:** The Claude Code invocation prompt to trigger the `book‑insight` skill from terminal.

```
/book‑insight

Book: [TITLE]
Author: [AUTHOR]
Genre: [GENRE — optional, will be auto‑detected if omitted]
Output: [html‑child‑site | md‑insight | obsidian‑note | all]

[Additional context if needed — e.g. "focus on applications to DSA and algorithmic thinking" 
or "emphasize the personal finance angle for an 18‑year‑old Indian student"]
```

**Example invocations:**

```bash
# Generate full HTML child site
/book‑insight Book: "Atomic Habits" Author: "James Clear" Output: html‑child‑site

# Extract insights only as markdown
/book‑insight Book: "Zero to One" Author: "Peter Thiel" Genre: Business Output: md‑insight

# Full pipeline — all outputs
/book‑insight Book: "Deep Learning" Author: "Goodfellow et al." Genre: Tech Output: all
```

---

## Quick Reference — Accent Colors by Genre

| Genre | Accent Color | Hex |
|---|---|---|
| Tech / AI / ML | Cyan | `#00d4ff` |
| Business / Finance | Amber | `#ffb347` |
| Self‑Improvement | Violet | `#9d4edd` |
| Fiction / Novel | White | `#ffffff` |
| DSA / CS | Cyan | `#00d4ff` |

---

## Quick Reference — Design System Tokens

| Token | Value |
|---|---|
| `--bg-base` | `#0a0a0f` |
| `--surface-card` | `#12121a` |
| `--surface-section` | `#1a1a26` |
| `--text-primary` | `#e8e8f0` |
| `--text-secondary` | `#8888aa` |
| `--accent-cyan` | `#00d4ff` |
| `--accent-amber` | `#ffb347` |
| `--accent-violet` | `#9d4edd` |
| `--radius-card` | `8px` |
| `--radius-badge` | `4px` |
| `--border-insight` | `4px solid [genre‑accent]` |

---
```

---

## File: prompts\generation\create-moc.md

```markdown
# Prompt: Create MOC

Task: create or improve a MOC.

Requirements:
- include a short purpose statement
- group notes by concept or theme
- list the most important nodes first
- avoid dumping every note without structure
```

---

## File: prompts\ingestion\atomize-article.md

```markdown
# Prompt: Atomize Article

Task: convert an article into atomic notes.

Rules:
- keep the source tag `article`
- preserve the article's core thesis
- split each claim into one note when useful
- link the source and relevant MOC entries
```

---

## File: prompts\ingestion\atomize-book.md

```markdown
# Prompt: Atomize Book

Task: convert a book source into atomic notes.

Requirements:
- extract one idea per note
- preserve key terms
- create backlinks to related notes
- update the relevant MOC
- archive the source after linking

Output:
- list of created notes
- list of updated notes
- list of new MOC entries
- list of orphan risks
```

---

## File: prompts\ingestion\atomize-podcast.md

```markdown
# Prompt: Atomize Podcast Source

Task: convert a podcast transcript into atomic notes.

Rules:
- keep the source tag `podcast`
- separate speaker claims when they are distinct
- create one note per durable idea
- archive the source when done
```

---

## File: prompts\ingestion\atomize-youtube.md

```markdown
# Prompt: Atomize YouTube Source

Task: convert a YouTube transcript into atomic notes.

Rules:
- keep the source tag `yt`
- separate claims, examples, and frameworks
- prefer concise note titles
- add source backlinks and MOC links
```

---

## File: prompts\maintenance\merge-nodes.md

```markdown
# Prompt: Merge Nodes

Task: decide whether two nodes should merge.

Output:
- merge decision
- reason
- preserved title
- deleted/redirected aliases
- backlinks to update
```

---

## File: prompts\research\research-guide.md

```markdown
# Research Guide Prompt

This prompt guides the research subagent on exploring the codebase and building timelines, profiles, or summaries.

## Core Directives

1. **Locate MOCs first**: Always check MOCs to find canonical entry points for the topic of research.
2. **Follow tag discipline**: Filter notes by tags defined in `.antigravity/rules/metadata/tag-schema.md`.
3. **Verify claims**: Cross-check findings across multiple raw sources in `01_RAW/SOURCE/` before making factual assertions.
4. **Draft and reference**: When drafting research notes, specify the exact source files and UUIDs of references.
```

---

## File: prompts\review\review-vault.md

```markdown
# Prompt: Review Vault

Task: audit the vault for health and structure.

Report:
- orphan notes
- invalid tags
- duplicate candidates
- broken links
- overloaded MOCs
- promotion candidates
```

---

