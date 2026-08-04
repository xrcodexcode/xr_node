# AI Fundamentals Newsletter

> **The signal behind the AI hype.**
> A newsletter for curious people who want to understand AI from first principles — no hype, no fluff, just fundamentals that compound.

---

## What This Is

**AI Fundamentals** cuts through AI buzzwords and marketing noise. Each issue takes one widely-misunderstood AI concept and explains it simply, visually, and from first principles.

The core thesis: *progress in AI engineering is additive, not replacive.* New ideas layer on top of existing foundations — they don't replace them.

---

## Project Structure

```
newsletter/
├── issue#1.md              # Prompt Engineering Isn't Dead
├── issue#2.md              # RAG Isn't Dead
├── issue#3.md              # Context Engineering
├── issue#4.md              # Harness Engineering
├── assets/                 # Visual assets organized by issue
│   ├── issue#1/            # Images for Issue #1 (1.jpg to 5.jpg)
│   ├── issue#2/            # Images for Issue #2 (1.jpg to 6.jpg)
│   ├── issue#3/            # Images for Issue #3 (1.jpg to 7.jpg)
│   └── issue#4/            # Images for Issue #4 (1.jpg to 7.jpg)
└── site/                   # Published static website
    ├── index.html          # Landing page
    ├── issue-1.html        # Issue #1 web page
    ├── issue-2.html        # Issue #2 web page
    ├── issue-3.html        # Issue #3 web page
    ├── issue-4.html        # Issue #4 web page
    ├── rss.xml             # RSS feed
    ├── manifest.json       # Web app manifest
    ├── css/                # Stylesheets
    ├── js/                 # JavaScript
    └── assets/             # Site-specific assets
```

---

## Issues

| # | Title | Topic |
|---|-------|-------|
| 1 | [Prompt Engineering Isn't Dead. It's Evolving.](./issue%231.md) | Why every AI buzzword is a new floor, not a demolition crew |
| 2 | [RAG Isn't Dead. Most People Just Don't Understand It.](./issue%232.md) | Why retrieval still matters in a world of large context windows |
| 3 | [Better Input, Better Output. That's Context Engineering.](./issue%233.md) | The skill of giving AI the right information to produce better results |
| 4 | [The Prompt Is Just One Ingredient. The Harness Is the Kitchen.](./issue%234.md) | Why the smartest AI needs tools, not just instructions |

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
2. **Add visual assets** — place images in `assets/` using descriptive snake_case filenames.
3. **Build the HTML** — convert the markdown to a styled HTML page and save it as `site/issue-N.html`.
4. **Update the index** — add the new issue card to `site/index.html`.
5. **Update the RSS feed** — append a new `<item>` to `site/rss.xml`.

---

## Style Guide

Each issue follows a consistent format:

- **Under 1000 words** — concise, not comprehensive
- **Beginner-friendly** — no assumed engineering experience
- **One analogy per issue** — make the concept click
- **One real example** — show, don't tell
- **Pinterest-dense visuals** — 5–7 images per issue, every section has one
- **Human voice** — first-person, conversational, opinionated
- **Strong hook and strong close** — memorable opening and takeaway
- **Mobile-first** — short paragraphs, easy to skim
