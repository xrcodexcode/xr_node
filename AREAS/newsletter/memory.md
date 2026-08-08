---
id: "b7e4198f-5c21-4f33-912a-89f41b2e67a0"
title: Memory Log — AI Fundamentals Newsletter
type: agent-memory
status: active
created: 2026-08-04
modified: 2026-08-05
tags:
  - reference
  - newsletter
  - memory
---

# 🧠 Newsletter Memory & Context

This file serves as persistent memory for agents working on the **AI Fundamentals Newsletter** (`AREAS/newsletter`).

## 📌 Project Overview
- **Name**: AI Fundamentals Newsletter
- **Tagline**: The signal behind the AI hype.
- **Goal**: Explain complex AI engineering concepts from first principles in a simple, visual, beginner-friendly way.
- **Target Audience**: Beginners in AI/ML — curious builders who know basic prompts but lack deep engineering experience.

## 📐 Editorial & Style Guidelines
- **Word Count**: Under 1000 words per issue (target: 650–850 words).
- **Tone**: Human, warm, conversational, encouraging. Avoid academic or robotic language.
- **Structure**:
  1. Strong relatable hook
  2. Plain-English definition
  3. Exactly ONE core real-world analogy
  4. Pipeline/flowchart diagram
  5. Before vs After comparison
  6. Callout ("Why people think it's dead / fails")
  7. Real-world applications
  8. Memorable takeaway quote
- **Visuals**: Pinterest-dense layout (5–7 images per issue, every section has a visual card). Images stored in `assets/issue#N/N.jpg`.

## 📂 File Architecture
- `issue#1.md`: Prompt Engineering Isn't Dead. It's Evolving.
- `issue#2.md`: RAG Isn't Dead. Most People Just Don't Understand It.
- `issue#3.md`: Better Input, Better Output. That's Context Engineering.
- `issue#4.md`: The Prompt Is Just One Ingredient. The Harness Is the Kitchen.
- `issue#5.md`: Loop Engineering — What Makes AI Agents Improve Themselves?
- `issue#6.md`: Graph Engineering — The Data Structure Behind Everything
- `assets/`: Organized by issue subfolders (`issue#1/`, `issue#2/`, `issue#3/`, `issue#4/`, `issue#5/`, `issue#6/`).
- `site/`: Static HTML web build (including `site/issue-6/` interactive app).

## 📜 Session History & Key Milestones
- **2026-08-04**: Initialized `memory.md`, `GEMINI.md`, and `AGENTS.md`.
- **2026-08-04**: Re-architected Issue #1, Issue #2, and Issue #3 to adhere to the beginner-friendly style guide (<1000 words each).
- **2026-08-04**: Reorganized `assets/` folder into structured subdirectories (`assets/issue#1/`, `assets/issue#2/`, `assets/issue#3/`).
- **2026-08-04**: Updated `README.md` with complete sitemap, issue matrix, and style guide.
- **2026-08-04**: Built `site/issue-4.html` for Issue #4 (Harness Engineering). Updated `site/index.html` (featured issue, archive grid, metrics, tag filter), `site/rss.xml` (new item), `site/issue-3.html` (next-issue nav link), and `site/js/main.js` (⌘K command palette). Created `site/assets/issue#4/` directory.
- **2026-08-05**: Generated and saved seven editorial JPEG visuals for Issue #4 in `assets/issue#4/` as `1.jpg` through `7.jpg`, matching the article's existing image references.
- **2026-08-06**: Designed and published Issue #5 (Loop Engineering). Created 6 custom vector SVGs (`1.svg` to `6.svg`) in `assets/issue#5/` and `site/assets/issue#5/`. Built `issue#5.md` (~850 words) and `site/issue-5.html` with interactive Q&A cards and step-by-step draft cards. Updated `site/index.html` (featured issue & grid), `site/rss.xml`, and `README.md`.
- **2026-08-08**: Designed and built **Issue #6: Graph Engineering Lab**. Generated 9 high-quality visual diagrams (`1.jpg` to `9.jpg`). Built standalone modular interactive Graph Engineering Lab (`site/issue-6/`) featuring Cytoscape-powered `graph-engine.js`, pure algorithmic engine `algorithms.js` (BFS, DFS, Dijkstra, Shortest Path, Connected Components, Cycle Detection, Topological Sort), custom CSS design system `styles.css` with dark/light themes, main app controller `app.js` with live representations (Adjacency List & Matrix) and playback visualizer, `issue#6.md` article, `site/index.html` archive & featured updates, `site/rss.xml`, and `README.md`.

