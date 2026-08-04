# AI Fundamentals Newsletter

> **The signal behind the AI hype.**  
> A newsletter for engineers and builders who want to understand AI systems from first principles — no hype, no fluff, just fundamentals that compound.

---

## What This Is

**AI Fundamentals** is a technical newsletter that cuts through AI buzzwords and marketing noise. Each issue takes one widely-misunderstood AI concept and breaks it down from first principles, written for engineers who build real products.

The core thesis: *progress in AI engineering is additive, not replacive.* New abstractions layer on top of existing foundations — they don't replace them.

---

## Project Structure

```
newsletter/
├── issue#1.md          # Source markdown for Issue #1
├── issue#2.md          # Source markdown for Issue #2
├── assets/             # Hero images and visual assets
│   ├── ai_fundamentals_hero.jpg
│   ├── abstraction_trap_vs_fundamentals.jpg
│   ├── ai_stack_pyramid.jpg
│   ├── library_analogy_hybrid.jpg
│   ├── rag_architecture_flow.jpg
│   └── rag_vs_long_context.jpg
└── site/               # Published static website
    ├── index.html      # Landing page
    ├── issue-1.html    # Issue #1 web page
    ├── issue-2.html    # Issue #2 web page
    ├── rss.xml         # RSS feed
    ├── manifest.json   # Web app manifest
    ├── css/            # Stylesheets
    ├── js/             # JavaScript
    └── assets/         # Site-specific assets
```

---

## Issues

| # | Title | Topic |
|---|-------|-------|
| 1 | [Prompt Engineering Isn't Dead. It's Evolving.](./issue%231.md) | The additive nature of AI engineering abstractions: prompt → context → agent → graph |
| 2 | [RAG Isn't Dead. Most People Just Don't Understand It.](./issue%232.md) | Why large context windows and RAG solve different problems |

---

## Running the Site Locally

The site is a static HTML site — no build step required.

```bash
# Serve from the site/ directory with any static server, e.g.:
npx serve site/

# Or with Python:
python -m http.server 3000 --directory site/
```

Then open http://localhost:3000.

---

## Writing a New Issue

1. **Draft the content** — create `issue#N.md` in this folder using existing issues as a reference.
2. **Add visual assets** — place images in `assets/` using descriptive, hyphenated filenames.
3. **Build the HTML** — convert the markdown to a styled HTML page and save it as `site/issue-N.html`.
4. **Update the index** — add the new issue card to `site/index.html`.
5. **Update the RSS feed** — append a new `<item>` to `site/rss.xml`.

---

## Philosophy

Each issue is built around one idea:

- **One concept per issue** — depth over breadth.
- **First principles first** — explain the *why* before the *what*.
- **Engineer-to-engineer** — no hand-waving, no oversimplification.
- **Evergreen content** — issues should remain useful months after publication.
