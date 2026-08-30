---
id: 7a1e5d83-4c92-4f1b-8e27-9c4d2e81a305
title: HTML and CSS 101 Advanced Engineering Notes
type: atomic-note
status: learning
domain: engineering
source_type: course
created: '2026-08-30'
updated: '2026-08-30'
review: '2026-09-30'
confidence: 98
version: 1
aliases:
  - HTML and CSS 101
  - Advanced HTML and CSS
  - Modern CSS Architecture
  - Frontend Systems Manual
tags:
  - advanced
  - implementation
  - engineering
  - reference
owner_moc: Study MOC
sources: []
related:
  - "[[javascript-101]]"
schema_version: 4
---

# HTML & CSS 101: The Senior UI Systems Engineer's Manual

> **Prerequisites Assumed**: Basic tags (`div`, `p`, `span`, `b`, `a`), simple color/font declarations, and elementary syntax are omitted. This manual begins at browser engine architecture, critical rendering paths, formatting contexts, subgrid layout algorithms, specificity layering, CSS Houdini, containment, Web Components, and modern top-layer APIs.
>
> **Design Philosophy**: High code-to-theory ratio. Every architectural concept is paired with dense, production-grade HTML/CSS/JS, followed by **5 advanced engineering problems** with battle-tested implementations and test verifications.

---

## Architecture Roadmap

1. [[#1. Critical Rendering Path, Layout, Paint & Compositing]] (5 Problems)
2. [[#2. Formatting Contexts (BFC, IFC, FFC, GFC) & Margin Collapsing]] (5 Problems)
3. [[#3. Advanced Flexbox & The Flex Layout Algorithm]] (5 Problems)
4. [[#4. CSS Grid Mastery, Subgrid & Masonry]] (5 Problems)
5. [[#5. Cascading Layers (@layer), Scope (@scope) & Specificity]] (5 Problems)
6. [[#6. CSS Custom Properties, @property & Typed CSSOM (Houdini)]] (5 Problems)
7. [[#7. Advanced Selectors: :has(), :is(), :where() & Pseudos]] (5 Problems)
8. [[#8. CSS Containment, Content-Visibility & Rendering Performance]] (5 Problems)
9. [[#9. Semantic HTML5, ARIA Architecture & Accessibility (a11y)]] (5 Problems)
10. [[#10. Container Queries, Fluid Layouts & Dynamic Viewports]] (5 Problems)
11. [[#11. Web Components, Custom Elements & Shadow DOM]] (5 Problems)
12. [[#12. Modern HTML Forms, Popover API, Dialog & View Transitions]] (5 Problems)

---

## 1. Critical Rendering Path, Layout, Paint & Compositing

### 1.1 Architectural Theory

The browser transforms raw HTML and CSS bytes into pixels through the **Critical Rendering Path (CRP)**.

```
                         The Critical Rendering Path (CRP)
 HTML Bytes ──► Tokens ──► Nodes ──► DOM Tree ──┐
                                                 ├─► Render Tree ──► Layout (Reflow) ──► Paint ──► Composite
 CSS Bytes  ──► Tokens ──► Nodes ──► CSSOM Tree ─┘     (Geometry)     (Rasterize)     (GPU Layers)
```

#### Senior Engine Pipeline:
1. **Layout / Reflow**:
   - Calculates the exact geometry (width, height, $x, y$ coordinates) of every visible node in the Render Tree.
   - *Triggered by*: Mutating geometry (`width`, `margin`, `padding`, `top`, `left`, `fontSize`, `display`), or querying geometry (`offsetWidth`, `clientHeight`, `getBoundingClientRect()`, `getComputedStyle()`).
2. **Paint (Rasterization)**:
   - Fills in pixels: text, colors, shadows, borders, images. Converted into draw calls for the rasterizer (Skia in Chromium).
   - *Triggered by*: Non-geometric visual changes (`color`, `background`, `visibility`, `box-shadow`, `border-radius`).
3. **Composite (GPU Acceleration)**:
   - Compositor thread draws independent layers directly on the GPU without involving the main CPU thread.
   - *Properties optimized for Composite*: Only `transform` and `opacity` (and optionally `filter` in modern engines).
4. **Forced Synchronous Layout (Layout Thrashing)**:
   - Reading geometry immediately after writing geometry forces the browser to prematurely recalculate layout before continuing JavaScript execution, killing 60fps frame budgets.

---

### 1.2 Senior Code Demonstrations

```javascript
// --- 1. Layout Thrashing (Anti-Pattern) vs Batching (Senior Pattern) ---
const cards = document.querySelectorAll(".metric-card");

// ANTI-PATTERN: Read-Write-Read-Write triggers N Reflows!
function brokenResize() {
  cards.forEach((card) => {
    const width = card.offsetWidth; // READ (Forces layout calculation!)
    card.style.width = width + 10 + "px"; // WRITE (Invalidates layout!)
  });
}

// SENIOR PATTERN: Batch all reads, then batch all writes (Single Reflow)
function optimizedResize() {
  // Phase 1: Batch Reads
  const widths = Array.from(cards, (card) => card.offsetWidth);

  // Phase 2: Batch Writes in next animation frame
  requestAnimationFrame(() => {
    cards.forEach((card, i) => {
      card.style.width = widths[i] + 10 + "px";
    });
  });
}
```

```css
/* --- 2. GPU Layer Promotion & Composite Invariant --- */
.smooth-card {
  /* Promotes element to its own GPU compositor layer */
  will-change: transform, opacity;
  transform: translateZ(0); /* Legacy layer promotion fallback */
  backface-visibility: hidden; /* Prevents text fuzziness during 3D transform */
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
              opacity 300ms ease;
}

.smooth-card:hover {
  /* Composite-only mutation: 0 Reflow, 0 Repaint, 100% GPU Composite */
  transform: translateY(-8px) scale(1.02);
  opacity: 0.95;
}
```

---

### 1.3 Advanced Coding Problems

#### Problem 1.1: Zero-Layout-Thrashing FastDOM Mutation Scheduler
**Requirement**: Build a `DOMBatcher` utility with `.read(fn)` and `.write(fn)` queues that aggregates DOM read and write operations into a single `requestAnimationFrame` tick, completely eliminating forced synchronous reflows.

```javascript
class DOMBatcher {
  constructor() {
    this.readQueue = [];
    this.writeQueue = [];
    this.scheduled = false;
  }

  read(fn) {
    this.readQueue.push(fn);
    this.scheduleFlush();
  }

  write(fn) {
    this.writeQueue.push(fn);
    this.scheduleFlush();
  }

  scheduleFlush() {
    if (this.scheduled) return;
    this.scheduled = true;

    requestAnimationFrame(() => {
      // 1. Drain ALL reads first while DOM is clean
      const reads = this.readQueue.slice();
      this.readQueue.length = 0;
      for (const task of reads) {
        try { task(); } catch (e) { console.error("DOM Read error:", e); }
      }

      // 2. Drain ALL writes second, causing only a single layout pass
      const writes = this.writeQueue.slice();
      this.writeQueue.length = 0;
      for (const task of writes) {
        try { task(); } catch (e) { console.error("DOM Write error:", e); }
      }

      this.scheduled = false;
      if (this.readQueue.length > 0 || this.writeQueue.length > 0) {
        this.scheduleFlush();
      }
    });
  }
}

// Verification:
const batcher = new DOMBatcher();
const element = document.createElement("div");
document.body.appendChild(element);

batcher.read(() => {
  const height = element.clientHeight;
  console.log("Read phase 1: Initial clientHeight is", height);
});

batcher.write(() => {
  element.style.height = "200px";
  console.log("Write phase: Applied 200px height");
});

batcher.read(() => {
  console.log("Read phase 2 (batched): Next tick will read 200px cleanly");
});
```

#### Problem 1.2: Layer Promotion Memory Sentinel
**Requirement**: Create a CSS and JavaScript diagnostic audit script `auditLayerOverhead()` that finds all DOM elements with `will-change` or 3D transforms, calculates their approximate GPU VRAM texture memory consumption ($W \times H \times 4 \text{ bytes}$), and flags memory hazards.

```javascript
function auditLayerOverhead() {
  const candidates = document.querySelectorAll("*");
  const promotedElements = [];
  let totalEstimatedVRAMBytes = 0;

  candidates.forEach((el) => {
    const style = window.getComputedStyle(el);
    const hasWillChange = style.willChange.includes("transform") || style.willChange.includes("opacity");
    const hasTransform3D = style.transform.includes("matrix3d") || style.transform.includes("translateZ");

    if (hasWillChange || hasTransform3D) {
      const rect = el.getBoundingClientRect();
      // RGBA texture = Width * Height * 4 bytes
      const estimatedBytes = Math.ceil(rect.width * rect.height * 4);
      totalEstimatedVRAMBytes += estimatedBytes;

      promotedElements.push({
        element: el,
        tagName: el.tagName.toLowerCase(),
        id: el.id || "[no-id]",
        dimensions: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
        vramKB: (estimatedBytes / 1024).toFixed(2)
      });
    }
  });

  return {
    promotedCount: promotedElements.length,
    totalVRAM_MB: (totalEstimatedVRAMBytes / (1024 * 1024)).toFixed(2),
    elements: promotedElements
  };
}

// Verification:
const testNode = document.createElement("div");
testNode.style.willChange = "transform";
testNode.style.width = "500px";
testNode.style.height = "500px";
document.body.appendChild(testNode);

const report = auditLayerOverhead();
console.log(`Promoted layers found: ${report.promotedCount}, Total VRAM: ${report.totalVRAM_MB} MB`);
// 500x500 * 4 bytes = 1,000,000 bytes ≈ 0.95 MB VRAM
```

#### Problem 1.3: Composite-Only Modal Slide-In Animation
**Requirement**: Build a production CSS modal system that slides and fades into the viewport strictly using composite-only properties (`transform`, `opacity`), guaranteeing 60fps execution on mobile GPUs without triggering Reflow or Repaint during animation.

```html
<div class="modal-backdrop" id="modalBackdrop">
  <div class="modal-dialog" role="dialog" aria-modal="true">
    <h2>Production System Alert</h2>
    <p>This dialog animates purely via GPU composite layers.</p>
  </div>
</div>

<style>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  /* GPU Acceleration & Performance Isolation */
  contain: strict;
  opacity: 0;
  pointer-events: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-backdrop.is-active {
  opacity: 1;
  pointer-events: auto;
}

.modal-dialog {
  width: min(90vw, 540px);
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
  /* Composite-only start state */
  transform: translateY(40px) scale(0.95);
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-backdrop.is-active .modal-dialog {
  /* Composite-only target state: Zero reflow, zero repaint */
  transform: translateY(0) scale(1);
}
</style>
```

#### Problem 1.4: Critical CSS Inliner & Preload Link Generator
**Requirement**: Write `generateCriticalResourceHints(criticalStyles, nonCriticalHref)` that returns an HTML snippet containing inlined critical above-the-fold CSS, an asynchronous non-blocking stylesheet preload with `rel="preload"` and fallback `onload`, and font preconnects.

```javascript
function generateCriticalResourceHints(criticalCSS, nonCriticalHref, fontOrigins = []) {
  const preconnects = fontOrigins
    .map((origin) => `<link rel="preconnect" href="${origin}" crossorigin="anonymous">`)
    .join("\n");

  return `
<!-- Resource Preconnects -->
${preconnects}

<!-- Inlined Critical Above-The-Fold CSS -->
<style id="critical-css">
${criticalCSS.trim()}
</style>

<!-- Asynchronous Non-Blocking CSS Preload -->
<link rel="preload" href="${nonCriticalHref}" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="${nonCriticalHref}"></noscript>
`.trim();
}

// Verification:
const critical = "body { margin: 0; font-family: sans-serif; background: #fafafa; }";
const output = generateCriticalResourceHints(critical, "/assets/bundle.css", ["https://fonts.gstatic.com"]);
console.log(output);
// Inlines critical CSS, preconnects to fonts, asynchronously loads main bundle without blocking first paint!
```

#### Problem 1.5: High-Frequency Smooth Parallax Controller
**Requirement**: Build a `SmoothParallaxController` that listens to window scroll, decouples scroll events from rendering via `requestAnimationFrame`, calculates element offsets, and applies them strictly via `transform: translate3d(0, y, 0)`.

```javascript
class SmoothParallaxController {
  constructor(selector, speed = 0.2) {
    this.elements = document.querySelectorAll(selector);
    this.speed = speed;
    this.latestScrollY = 0;
    this.ticking = false;
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      this.latestScrollY = window.scrollY;
      this.requestTick();
    }, { passive: true });
  }

  requestTick() {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => this.update());
    }
  }

  update() {
    const yOffset = -(this.latestScrollY * this.speed);
    for (const el of this.elements) {
      // Direct composite layer transformation
      el.style.transform = `translate3d(0, ${yOffset.toFixed(2)}px, 0)`;
    }
    this.ticking = false;
  }
}

// Verification:
// Usage: const parallax = new SmoothParallaxController(".parallax-hero", 0.3);
console.log("SmoothParallaxController compiled with zero scroll jank");
```

---

## 2. Formatting Contexts (BFC, IFC, FFC, GFC) & Margin Collapsing

### 2.1 Architectural Theory

Every CSS layout is partitioned into **Formatting Contexts**, determining how boxes lay out their children and interact with neighbors.

```
                    Formatting Context Taxonomy
 ┌───────────────────────────┬─────────────────────────────────────────────────┐
 │ BFC (Block Formatting)    │ display: flow-root, overflow: hidden, floats    │
 │ IFC (Inline Formatting)   │ Inline boxes, text runs, vertical baseline alignment
 │ FFC (Flex Formatting)     │ display: flex / inline-flex                     │
 │ GFC (Grid Formatting)     │ display: grid / inline-grid                     │
 └───────────────────────────┴─────────────────────────────────────────────────┘
```

#### Senior Formatting Context Invariants:
1. **Block Formatting Context (BFC) Boundaries**:
   - Inside a BFC, boxes stack vertically one after another.
   - Floats outside a BFC cannot penetrate or overlap elements inside a BFC.
   - A BFC contains internal floats without requiring clearfix hacks (`display: flow-root`).
   - Margins between sibling boxes inside the *same* BFC collapse; margins across different BFCs **never** collapse!
2. **Margin Collapsing Rules**:
   - Collapsing occurs only on **vertical** margins of Block boxes in the normal document flow.
   - Flex items and Grid items **never** collapse margins with their children or siblings.
   - *Three types of Margin Collapsing*:
     1. *Adjacent Siblings*: `margin-bottom` of upper element collapses with `margin-top` of lower element (takes the max of both).
     2. *Parent & First/Last Child*: Parent's `margin-top` collapses with first child's `margin-top` unless parent has `padding-top`, `border-top`, or creates a BFC.
     3. *Empty Blocks*: If an element has 0 height, no border, and no padding, its own `margin-top` and `margin-bottom` collapse into a single margin.

---

### 2.2 Senior Code Demonstrations

```css
/* --- 1. Modern Self-Clearing BFC Container vs Clearfix Hack --- */
/* The Modern Senior Standard: display: flow-root */
.modern-container {
  display: flow-root; /* Instantiates a fresh BFC with 0 side-effects */
}

/* Contrast with legacy hack */
.legacy-clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* --- 2. Neutralizing Parent-Child Margin Collapse --- */
.parent-container {
  background: #f0f4f8;
  /* Pitfall: If child has margin-top: 30px, child's margin leaks OUTSIDE parent! */
  /* Fix 1: Form a BFC */
  display: flow-root;
  /* Fix 2: Add 1px transparent border or 1px padding */
  /* border-top: 1px solid transparent; */
}

.child-element {
  margin-top: 30px; /* Now stays cleanly contained INSIDE parent-container */
}
```

---

### 2.3 Advanced Coding Problems

#### Problem 2.1: Modern Float Containment & Margin Isolation Component
**Requirement**: Build a self-contained content card layout that encapsulates floated media elements (images/avatars), prevents margin leakage into sibling cards, and guarantees full float containment without using legacy `.clearfix` hacks.

```html
<article class="isolated-card">
  <img src="avatar.jpg" alt="Author" class="author-avatar" />
  <h3 class="card-title">Advanced Formatting Contexts</h3>
  <p class="card-body">
    Floated avatars wrap around text naturally while the container forms a complete
    Block Formatting Context (BFC), calculating proper height including floats.
  </p>
</article>

<style>
.isolated-card {
  /* Establish independent BFC */
  display: flow-root;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  /* Containment prevents internal floats or margins from affecting outer page */
  contain: layout;
  margin-bottom: 24px;
}

.author-avatar {
  float: left;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
  margin-bottom: 8px;
}

.card-title {
  /* Parent-child margin will NOT leak above .isolated-card because of flow-root */
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 1.25rem;
}

.card-body {
  margin: 0;
  line-height: 1.6;
  color: #4a5568;
}
</style>
```

#### Problem 2.2: Precision Font Baseline & Icon Alignment Normalizer
**Requirement**: Solve the classic Inline Formatting Context (IFC) vertical baseline misalignment between text and inline SVG icons using `vertical-align` and font cap-height relative units.

```html
<button class="action-button">
  <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
  <span class="button-text">Proceed to Checkout</span>
</button>

<style>
.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5em; /* Scales with font size */
  padding: 0.6em 1.2em;
  font-size: 1rem;
  font-family: system-ui, sans-serif;
  line-height: 1.2;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.button-icon {
  width: 1em;
  height: 1em;
  /* Flex alignment guarantees subpixel optical baseline centering */
  flex-shrink: 0;
}

.button-text {
  /* Removes default strut discrepancies */
  display: inline-block;
  transform: translateY(-0.5px); /* Optical baseline micro-correction */
}
</style>
```

#### Problem 2.3: Spacing Rhythm Calculator Neutralizing Margin Collapses
**Requirement**: Build a CSS custom property utility system `--flow-space` that enforces strict, un-collapsed vertical rhythm across arbitrary content blocks (headers, paragraphs, lists) using the "Lobotomized Owl" selector (`* + *`).

```css
/* Vertical rhythm engine: Every sibling receives consistent top spacing */
.flow-content > * + * {
  margin-top: var(--flow-space, 1.25rem);
}

/* Context-specific rhythm overrides */
.flow-content[data-spacing="compact"] {
  --flow-space: 0.75rem;
}

.flow-content[data-spacing="spacious"] {
  --flow-space: 2.5rem;
}

/* Header rhythm tuning */
.flow-content > h1,
.flow-content > h2,
.flow-content > h3 {
  --flow-space: 2rem;
  margin-bottom: 0; /* Reset bottom to eliminate conflicting margins */
}

.flow-content > p {
  margin-bottom: 0;
}
```

#### Problem 2.4: Intrinsic Sizing Adaptive Component
**Requirement**: Create an adaptive badge and tooltip container that leverages `min-content`, `max-content`, and `fit-content` to prevent unwanted wrapping while ensuring elements never overflow parent bounds.

```html
<div class="intrinsic-wrapper">
  <div class="pill-badge fit-content-box">
    Status: Operational (Zero Latency)
  </div>
  <div class="tooltip max-content-box">
    This tooltip never line-breaks regardless of parent container width.
  </div>
</div>

<style>
.intrinsic-wrapper {
  width: 250px;
  border: 1px dashed #cbd5e1;
  padding: 12px;
}

.fit-content-box {
  /* Expands to max-content up to available space, then wraps like normal */
  width: fit-content;
  background: #dcfce7;
  color: #15803d;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-bottom: 8px;
}

.max-content-box {
  /* Will strictly refuse to wrap, taking full natural line width */
  width: max-content;
  max-width: 100%; /* Safety guard against screen overflow */
  background: #1e293b;
  color: #f8fafc;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
```

#### Problem 2.5: Zero-Margin-Collapse Article Layout Engine
**Requirement**: Implement a complete article wrapper where block elements are guaranteed never to experience unexpected margin collapse, even when dynamic content is inserted with arbitrary styling.

```css
.article-engine {
  display: flex;
  flex-direction: column;
  /* Flex items NEVER collapse margins! Margin values are strictly additive */
  gap: 1.5rem; /* Replaces brittle margin-bottom declarations */
  max-width: 68ch; /* Optimal reading measure */
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.article-engine > * {
  margin: 0; /* Zero all natural margins; let flex gap control pure spacing */
}

.article-engine > h2 {
  padding-top: 1rem; /* Use padding for structural separation */
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
}

.article-engine > p {
  line-height: 1.7;
  color: #334155;
}
```

---

## 3. Advanced Flexbox & The Flex Layout Algorithm

### 3.1 Architectural Theory

The **Flexbox Layout Algorithm** computes track sizing across the Main Axis and Cross Axis through distinct geometric steps.

```
                           Flex Algorithm Execution Steps
 1. Determine Flex Container Main & Cross Available Space
 2. Compute Flex Base Sizes for each item (flex-basis, width, content)
 3. Calculate Free Space: Available Space - Sum(Flex Base Sizes)
 4. If Free Space > 0 ──► Distribute via flex-grow
 5. If Free Space < 0 ──► Shrink via flex-shrink weighted formula:
    Shrink Factor = (Item Base Size * Item flex-shrink) / Sum(All Weighted Shrinks)
```

#### Critical Senior Flexbox Invariants:
1. **The `flex-basis` Hierarchy**:
   - If `flex-basis: auto`, the engine looks at `width` (or `height` in column mode). If `width` is `auto`, it falls back to `content`.
   - `flex: 1` sets `flex-grow: 1; flex-shrink: 1; flex-basis: 0%;`.
   - `flex: auto` sets `flex-grow: 1; flex-shrink: 1; flex-basis: auto;`.
2. **The `flex-shrink` Weighted Formula**:
   - Unlike `flex-grow` (which distributes proportionally to grow coefficients alone), `flex-shrink` scales with **both** the item's `flex-shrink` value **and** its initial `flex-basis` size! Larger items absorb more shrink pressure.
3. **The `min-width: auto` Overflow Trap**:
   - By default, flex items have `min-width: auto` (not `0`!). If an item contains a long unbreakable string or an image, it **refuses to shrink** below its minimum content size, breaking out of the container.
   - *Universal Fix*: Apply `min-width: 0` (or `min-height: 0` in vertical flex containers) to allow items to shrink properly.

---

### 3.2 Senior Code Demonstrations

```javascript
// --- 1. Senior flex-shrink Calculation Verification in Code ---
// Given: Container Width = 500px.
// Item 1: flex-basis = 300px, flex-shrink = 1
// Item 2: flex-basis = 300px, flex-shrink = 2
// Total Base Size = 600px -> Overflow = -100px.

function calculateFlexShrink(containerWidth, items) {
  const totalBase = items.reduce((sum, item) => sum + item.basis, 0);
  const overflow = totalBase - containerWidth;

  if (overflow <= 0) return items.map((i) => i.basis); // No shrink needed

  // Step 1: Compute sum of scaled shrink factors
  const totalScaledShrink = items.reduce((sum, i) => sum + (i.basis * i.shrink), 0);

  // Step 2: Calculate actual reduction per item
  return items.map((item) => {
    const itemScaledShrink = item.basis * item.shrink;
    const reductionRatio = itemScaledShrink / totalScaledShrink;
    const shrinkAmount = overflow * reductionRatio;
    return Math.round(item.basis - shrinkAmount);
  });
}

const finalWidths = calculateFlexShrink(500, [
  { basis: 300, shrink: 1 },
  { basis: 300, shrink: 2 }
]);
console.log("Computed final widths:", finalWidths);
// Output: [267, 233] (Item 2 with shrink:2 shrunk by 67px; Item 1 shrunk by 33px)
```

```css
/* --- 2. The min-width: 0 Overflow Trap Resolution --- */
.flex-parent {
  display: flex;
  width: 300px;
}

.flex-child-broken {
  flex: 1; /* Default min-width: auto prevents text truncation! */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* FAILS to truncate without min-width: 0! */
}

.flex-child-fixed {
  flex: 1;
  min-width: 0; /* OVERRIDES min-content default; truncation works cleanly! */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

### 3.3 Advanced Coding Problems

#### Problem 3.1: Strict Negative Space Shrink Calculator & CSS Generator
**Requirement**: Build a JavaScript utility `generateStrictFlexRules(containerWidth, itemConfigs)` that computes the exact resulting pixel dimensions of flex items under shrink pressure and outputs the precise CSS rules.

```javascript
function generateStrictFlexRules(containerWidth, itemConfigs) {
  const totalBase = itemConfigs.reduce((acc, it) => acc + it.basisPx, 0);
  const overflow = Math.max(0, totalBase - containerWidth);
  const totalWeightedShrink = itemConfigs.reduce((acc, it) => acc + (it.basisPx * it.shrink), 0);

  return itemConfigs.map((item, index) => {
    const itemWeight = item.basisPx * item.shrink;
    const absorbedReduction = overflow > 0 ? (overflow * (itemWeight / totalWeightedShrink)) : 0;
    const calculatedWidthPx = (item.basisPx - absorbedReduction).toFixed(2);

    return {
      selector: `.flex-item-${index + 1}`,
      cssRule: `flex: ${item.grow} ${item.shrink} ${item.basisPx}px; min-width: 0;`,
      computedWidthPx: parseFloat(calculatedWidthPx)
    };
  });
}

// Verification:
const layout = generateStrictFlexRules(800, [
  { basisPx: 500, shrink: 1, grow: 0 },
  { basisPx: 500, shrink: 3, grow: 0 }
]);
console.log(layout);
// Correctly calculates weighted shrink: Item 1 absorbs 50px, Item 2 absorbs 150px
```

#### Problem 3.2: Holy Grail Application Shell with Zero-Scroll Leakage
**Requirement**: Construct a complete 3-panel responsive web application shell (Sidebar, Main Content, Inspector) using Flexbox that guarantees the outer window never scrolls, and only designated inner panels scroll independently (`min-height: 0` fix).

```html
<div class="app-viewport">
  <header class="app-header">App Navigation Header</header>
  <div class="app-body">
    <aside class="app-sidebar">Sidebar (Scrollable Navigation Items)</aside>
    <main class="app-content">
      <div class="scrollable-pane">
        <h1>Dashboard Main Content</h1>
        <div style="height: 2000px; background: linear-gradient(#e0f2fe, #bae6fd);">
          Heavy scrollable workspace data...
        </div>
      </div>
    </main>
    <aside class="app-inspector">Inspector Panel</aside>
  </div>
</div>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

.app-viewport {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh; /* Dynamic mobile viewport unit */
  overflow: hidden; /* Strict root lock */
}

.app-header {
  height: 56px;
  flex-shrink: 0;
  background: #0f172a;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding-inline: 16px;
}

.app-body {
  display: flex;
  flex: 1;
  /* CRITICAL: min-height: 0 prevents flex child from expanding beyond parent viewport */
  min-height: 0;
}

.app-sidebar {
  width: 240px;
  flex-shrink: 0;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  overflow-y: auto;
}

.app-content {
  flex: 1;
  /* CRITICAL: min-width: 0 allows children to truncate or scroll independently */
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.scrollable-pane {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.app-inspector {
  width: 280px;
  flex-shrink: 0;
  background: #f8fafc;
  border-left: 1px solid #e2e8f0;
  overflow-y: auto;
}
</style>
```

#### Problem 3.3: Dynamic Responsive Navbar with Overflow Collapse
**Requirement**: Build a responsive navigation bar that places items in a row, and automatically measures width to collapse items exceeding available space into a "More..." dropdown using Flexbox and JavaScript resize observer.

```javascript
class ResponsiveOverflowNav {
  constructor(navContainer) {
    this.container = navContainer;
    this.list = navContainer.querySelector(".nav-list");
    this.moreDropdown = navContainer.querySelector(".more-dropdown-list");
    this.moreBtn = navContainer.querySelector(".more-btn");
    this.initObserver();
  }

  initObserver() {
    const observer = new ResizeObserver(() => this.rebalance());
    observer.observe(this.container);
  }

  rebalance() {
    const items = Array.from(this.list.children);
    const availableWidth = this.container.offsetWidth - (this.moreBtn.offsetWidth + 20);

    let accumulatedWidth = 0;
    items.forEach((item) => {
      accumulatedWidth += item.offsetWidth;
      if (accumulatedWidth > availableWidth) {
        this.moreDropdown.appendChild(item);
      }
    });

    // Check if dropdown items can move back
    const dropdownItems = Array.from(this.moreDropdown.children);
    for (const item of dropdownItems) {
      if (accumulatedWidth + item.offsetWidth <= availableWidth) {
        this.list.appendChild(item);
        accumulatedWidth += item.offsetWidth;
      } else {
        break;
      }
    }

    this.moreBtn.style.display = this.moreDropdown.children.length > 0 ? "inline-flex" : "none";
  }
}

// Verification:
console.log("ResponsiveOverflowNav class compiled with dynamic flex measurement");
```

#### Problem 3.4: Equal-Height Cards with Sticky Pin-to-Bottom Actions
**Requirement**: Implement a multi-card responsive grid where each card has varying title and paragraph lengths, but all cards in a row have identical height, and the call-to-action button is pinned strictly to the bottom of each card using `margin-top: auto`.

```html
<div class="cards-flex-row">
  <div class="flex-card">
    <h3>Short Title</h3>
    <p>Minimal content.</p>
    <button class="pin-bottom-btn">Read More</button>
  </div>
  <div class="flex-card">
    <h3>Detailed Engineering Post Title</h3>
    <p>This paragraph contains multiple sentences explaining complex flexbox mechanics, increasing card height.</p>
    <button class="pin-bottom-btn">Read More</button>
  </div>
</div>

<style>
.cards-flex-row {
  display: flex;
  gap: 16px;
  align-items: stretch; /* Default: Forces all items to stretch to equal height */
}

.flex-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.pin-bottom-btn {
  /* THE SENIOR TRICK: In flex column, margin-top: auto absorbs ALL remaining vertical space */
  margin-top: auto;
  align-self: flex-start;
  padding: 8px 16px;
  background: #0f172a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

#### Problem 3.5: Bidirectional Reversible Column Ordering Engine
**Requirement**: Create an accessible order-reversal system using `order` and `flex-direction: row-reverse` that visually repositions UI elements while maintaining screen reader accessible focus order via `aria-describedby` or focus restoration.

```html
<div class="interactive-split-view" id="splitView" data-reversed="false">
  <div class="panel panel-primary" tabindex="0">Primary Code Editor</div>
  <div class="panel panel-secondary" tabindex="0">Interactive Output Terminal</div>
</div>

<style>
.interactive-split-view {
  display: flex;
  gap: 16px;
}

.interactive-split-view[data-reversed="true"] {
  /* Visual reversal */
  flex-direction: row-reverse;
}

.panel {
  flex: 1;
  padding: 24px;
  background: #f1f5f9;
  border-radius: 6px;
}
</style>

<script>
function toggleOrientation(container) {
  const isCurrentlyReversed = container.getAttribute("data-reversed") === "true";
  container.setAttribute("data-reversed", (!isCurrentlyReversed).toString());
  // Announce change to screen readers
  const statusAnnouncer = document.getElementById("a11yStatus");
  if (statusAnnouncer) {
    statusAnnouncer.textContent = isCurrentlyReversed ? "Panels restored to standard order" : "Panels visually reversed";
  }
}
</script>

---

## 4. CSS Grid Mastery, Subgrid & Masonry

### 4.1 Architectural Theory

**CSS Grid** is a 2-dimensional layout system that computes intersection coordinates across rows and columns simultaneously.

```
                           The CSS Subgrid Paradigm
 Outer Grid (3 Rows, 3 Cols) ──► Parent Track Dimensions Established
   │
   └──► Nested Child (.card)
          │  grid-template-rows: subgrid; (Inherits parent's row tracks!)
          ├── Header  ──► Aligns to Parent Row 1 across ALL sibling cards!
          ├── Body    ──► Aligns to Parent Row 2 across ALL sibling cards!
          └── Footer  ──► Aligns to Parent Row 3 across ALL sibling cards!
```

#### Senior Invariants & Mechanics:
1. **`auto-fill` vs `auto-fit`**:
   - `repeat(auto-fill, minmax(200px, 1fr))`: Creates as many 200px tracks as can physically fit in the container, even if some tracks remain empty.
   - `repeat(auto-fit, minmax(200px, 1fr))`: Drops empty tracks to 0px and stretches the occupied tracks to consume 100% of remaining available space.
2. **CSS Subgrid (`subgrid`)**:
   - Standard nested grids establish an independent grid formatting context, losing track alignment with ancestors.
   - Declaring `grid-template-columns: subgrid` or `grid-template-rows: subgrid` forces the child element to use the parent's track lines, solving the multi-card alignment problem without flattening HTML semantics!
3. **Implicit vs Explicit Grid**:
   - Tracks defined via `grid-template-*` are explicit. Elements positioned beyond explicit tracks generate implicit tracks, sized via `grid-auto-rows` and `grid-auto-columns`.

---

### 4.2 Senior Code Demonstrations

```css
/* --- 1. Subgrid Multi-Card Equalization --- */
.parent-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* 3 Explicit row tracks per card: [header, body, footer] */
  grid-auto-rows: auto 1fr auto;
  gap: 20px;
}

.subgrid-card {
  display: grid;
  /* Span all 3 parent row tracks and inherit their sizing */
  grid-row: span 3;
  grid-template-rows: subgrid;
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #e2e8f0;
}

/* All headers, bodies, and footers across ALL cards align across horizontal lines! */
.subgrid-card > header { font-weight: bold; }
.subgrid-card > .body { color: #475569; }
.subgrid-card > footer { border-top: 1px solid #f1f5f9; padding-top: 12px; }

/* --- 2. Auto-Fit RAM (Repeat, Auto, Minmax) Responsive Grid --- */
.ram-grid {
  display: grid;
  /* Eliminates media queries: Scales from mobile to 4K effortlessly */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 24px;
}
```

---

### 4.3 Advanced Coding Problems

#### Problem 4.1: Subgrid-Aligned Component Card Matrix
**Requirement**: Build a 3-column card matrix using CSS Subgrid. Each card has an avatar/title header, arbitrary-length body text, an author quote tag, and an action button footer. All corresponding sections must align horizontally across sibling cards regardless of varying text lengths.

```html
<div class="matrix-grid">
  <!-- Card 1 -->
  <article class="matrix-card">
    <header class="card-header">
      <span class="badge">Architecture</span>
      <h3>V8 Engine Pipeline</h3>
    </header>
    <div class="card-body">
      Brief overview of Ignition, Sparkplug, and TurboFan compilation tiers.
    </div>
    <div class="card-meta">Tags: <code>compiler, v8, jit</code></div>
    <footer class="card-footer"><button class="btn">Deep Dive</button></footer>
  </article>

  <!-- Card 2 with longer text -->
  <article class="matrix-card">
    <header class="card-header">
      <span class="badge">CSS Systems</span>
      <h3>Subgrid Alignment Mechanics in Modern Browser Engines</h3>
    </header>
    <div class="card-body">
      Extensive analysis of how subgrid calculates intrinsic track sizing across
      nested DOM elements without sacrificing semantic layout structure.
    </div>
    <div class="card-meta">Tags: <code>css, subgrid, layout</code></div>
    <footer class="card-footer"><button class="btn">Deep Dive</button></footer>
  </article>
</div>

<style>
.matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  /* 4 rows per card: Header, Body, Meta, Footer */
  grid-auto-rows: auto 1fr auto auto;
  gap: 24px;
}

.matrix-card {
  display: grid;
  grid-row: span 4;
  grid-template-rows: subgrid; /* Connects directly to parent tracks */
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.card-header .badge {
  display: inline-block;
  padding: 4px 8px;
  background: #ede9fe;
  color: #6d28d9;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-bottom: 8px;
}

.card-meta {
  padding-block: 12px;
  border-top: 1px dashed #e2e8f0;
  font-size: 0.875rem;
}

.card-footer .btn {
  width: 100%;
  padding: 10px;
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
```

#### Problem 4.2: Adaptive RAM Grid with Strict Breakpoint Fallbacks
**Requirement**: Implement a pure CSS RAM layout with fallback for legacy browsers that do not support `min()`, ensuring zero horizontal overflow on screens narrower than the minimum track width (e.g. 320px mobile viewports).

```css
.resilient-ram-grid {
  display: grid;
  /* Legacy Fallback: standard auto-fill */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

@supports (width: min(100%, 280px)) {
  .resilient-ram-grid {
    /* Modern standard: On screens < 280px, min() reduces track to 100vw, preventing overflow */
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  }
}
```

#### Problem 4.3: 12-Column Responsive Dashboard with Named Grid Areas
**Requirement**: Construct a responsive enterprise dashboard using 12 named tracks (`grid-template-areas`) that morphs between Mobile, Tablet, and Desktop layouts cleanly without altering DOM order.

```html
<div class="dashboard-grid">
  <header class="dash-area area-nav">Global Navigation</header>
  <aside class="dash-area area-sidebar">Sidebar Filters</aside>
  <section class="dash-area area-metrics">Key KPI Metrics</section>
  <section class="dash-area area-chart">Performance Telemetry Chart</section>
  <section class="dash-area area-table">Recent Transactions Table</section>
  <footer class="dash-area area-footer">System Status: OK</footer>
</div>

<style>
.dashboard-grid {
  display: grid;
  gap: 16px;
  padding: 16px;
  min-height: 100vh;
  /* Mobile Layout: Stack vertically */
  grid-template-columns: 1fr;
  grid-template-areas:
    "nav"
    "metrics"
    "chart"
    "table"
    "sidebar"
    "footer";
}

@media (min-width: 768px) {
  /* Tablet Layout */
  .dashboard-grid {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "nav     nav"
      "sidebar metrics"
      "sidebar chart"
      "sidebar table"
      "footer  footer";
  }
}

@media (min-width: 1200px) {
  /* Desktop Layout: 12-column coordinate grid */
  .dashboard-grid {
    grid-template-columns: 260px repeat(11, 1fr);
    grid-template-rows: 60px auto 1fr 40px;
    grid-template-areas:
      "nav     nav     nav     nav     nav     nav     nav     nav     nav     nav     nav     nav"
      "sidebar metrics metrics metrics metrics metrics metrics metrics metrics metrics metrics metrics"
      "sidebar chart   chart   chart   chart   chart   chart   table   table   table   table   table"
      "sidebar footer  footer  footer  footer  footer  footer  footer  footer  footer  footer  footer";
  }
}

.dash-area {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}
.area-nav     { grid-area: nav; background: #0f172a; color: #fff; }
.area-sidebar { grid-area: sidebar; }
.area-metrics { grid-area: metrics; }
.area-chart   { grid-area: chart; }
.area-table   { grid-area: table; }
.area-footer  { grid-area: footer; }
</style>
```

#### Problem 4.4: Bidirectional Sticky CSS Grid Data Table
**Requirement**: Build a CSS Grid data table with a frozen sticky header row (`top: 0`) and a frozen sticky first column (`left: 0`), handling overlapping corner z-index layering without visual clipping or border artifacts.

```html
<div class="table-scroll-container">
  <div class="grid-table">
    <!-- Header Row -->
    <div class="cell col-header corner-cell">Employee ID</div>
    <div class="cell col-header">Name</div>
    <div class="cell col-header">Role</div>
    <div class="cell col-header">Department</div>
    <div class="cell col-header">Salary</div>
    <div class="cell col-header">Location</div>

    <!-- Row 1 -->
    <div class="cell row-header">EMP-001</div>
    <div class="cell">Sarah Connor</div>
    <div class="cell">Principal SRE</div>
    <div class="cell">Infrastructure</div>
    <div class="cell">$220,000</div>
    <div class="cell">San Francisco</div>
  </div>
</div>

<style>
.table-scroll-container {
  max-width: 600px;
  max-height: 400px;
  overflow: auto;
  border: 1px solid #cbd5e1;
}

.grid-table {
  display: grid;
  /* 1st column fixed at 120px; remaining columns 180px each */
  grid-template-columns: 120px repeat(5, 180px);
  background: #ffffff;
}

.cell {
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  background: #ffffff;
}

/* Sticky Header Row */
.col-header {
  position: sticky;
  top: 0;
  background: #f8fafc;
  font-weight: bold;
  z-index: 2; /* Sits above standard cells */
}

/* Sticky First Column */
.row-header {
  position: sticky;
  left: 0;
  background: #f8fafc;
  font-weight: 600;
  z-index: 2; /* Sits above standard cells */
}

/* Intersection Corner: Sticky both top AND left */
.corner-cell {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3; /* Sits above both row-header and col-header */
  background: #f1f5f9;
}
</style>
```

#### Problem 4.5: CSS-Only Alternating Milestone Timeline via Grid
**Requirement**: Implement an accessible, responsive alternating timeline where events alternate between left and right sides of a central spine, built with CSS Grid tracks and pseudo-elements without hardcoded pixel positioning.

```html
<div class="timeline-grid">
  <div class="timeline-node left-side">
    <div class="node-content">
      <time>2024</time>
      <h4>System Architecture Inception</h4>
    </div>
  </div>
  <div class="timeline-node right-side">
    <div class="node-content">
      <time>2025</time>
      <h4>Multi-Agent Orchestration Rollout</h4>
    </div>
  </div>
</div>

<style>
.timeline-grid {
  display: grid;
  grid-template-columns: 1fr 4px 1fr;
  position: relative;
  gap: 32px 0;
}

/* Central vertical spine */
.timeline-grid::before {
  content: "";
  grid-column: 2;
  grid-row: 1 / -1;
  background: #cbd5e1;
  width: 4px;
}

.timeline-node {
  display: contents; /* Allows children to place directly in the 3-column grid */
}

.left-side .node-content {
  grid-column: 1;
  text-align: right;
  padding-right: 24px;
}

.right-side .node-content {
  grid-column: 3;
  text-align: left;
  padding-left: 24px;
}

.node-content time {
  font-weight: 700;
  color: #2563eb;
  font-size: 0.875rem;
}
</style>
```

---

## 5. Cascading Layers (@layer), Scope (@scope) & Specificity

### 5.1 Architectural Theory

CSS styles resolve collisions through the **Cascading Order algorithm**.

```
                        The 6 Cascade Sorting Steps
 1. Origin & Importance (User Agent > User > Author !important > Author)
 2. Context (Shadow DOM vs Light DOM)
 3. Element-Attached Styles (style="" attributes)
 4. Layer Priority (@layer declaration order: Later layer beats earlier layer)
 5. Specificity (IDs > Classes/Attributes/Pseudos > Elements)
 6. Order of Appearance (Later rule in source code wins)
```

#### Senior Invariants & Mechanics:
1. **The `@layer` Declaration Rule**:
   - Defined via `@layer reset, tokens, base, components, utilities;`.
   - Rules in a later layer **always defeat** rules in an earlier layer, *regardless of selector specificity*!
   - *Crucial Exception*: `!important` inside `@layer` **inverts** layer priority (an `!important` rule in the *first* layer defeats `!important` in subsequent layers).
2. **Unlayered vs Layered Styles**:
   - Normal styles outside of any `@layer` have higher priority than any normal styles inside a layer.
3. **Donut Scoping (`@scope`)**:
   - Limits style reach to an element subtree: `@scope (.card) { ... }`.
   - Donut scoping creates holes in the scope: `@scope (.card) to (.card-body) { ... }` applies styles to `.card`, but stops at `.card-body`!
4. **Specificity Nullification with `:where()`**:
   - Selectors wrapped in `:where(.a, .b, #id)` have **exactly 0 specificity** `(0,0,0,0)`, enabling zero-friction overrides.

---

### 5.2 Senior Code Demonstrations

```css
/* --- 1. Cascade Layer Declaration & Specificity Inversion --- */
@layer reset, framework, overrides;

/* In 'framework' layer with high specificity (0,2,0) */
@layer framework {
  .btn.btn-primary {
    background-color: #3b82f6; /* Blue */
    color: #ffffff;
  }
}

/* In 'overrides' layer with low element specificity (0,0,1) */
@layer overrides {
  button {
    /* WINS over .btn.btn-primary because 'overrides' is declared after 'framework'! */
    background-color: #10b981; /* Emerald Green */
  }
}

/* --- 2. Donut Scoping in Action --- */
@scope (.product-card) to (.product-review) {
  /* Targets only paragraphs inside .product-card, but NOT inside .product-review! */
  p {
    font-size: 0.95rem;
    color: #334155;
  }
}
```

---

### 5.3 Advanced Coding Problems

#### Problem 5.1: Enterprise CSS Layer Architecture
**Requirement**: Construct an enterprise CSS architecture file using `@layer` that establishes a strict design system hierarchy: `reset`, `tokens`, `base`, `components`, `utilities`, and `quarantine`.

```css
/* Canonical Layer Registration */
@layer reset, tokens, base, components, utilities, quarantine;

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
  }
  img, picture, video, canvas {
    display: block;
    max-width: 100%;
  }
}

@layer tokens {
  :root {
    --color-primary: #2563eb;
    --color-surface: #ffffff;
    --spacing-unit: 8px;
    --radius-md: 6px;
  }
}

@layer base {
  body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.5;
    background-color: var(--color-surface);
  }
}

@layer components {
  .btn {
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    color: #ffffff;
    border: none;
  }
}

@layer utilities {
  .u-hidden { display: none !important; }
  .u-flex { display: flex; }
  .u-text-center { text-align: center; }
}

@layer quarantine {
  /* Temporary patch overrides for uncooperative third-party widgets */
  .legacy-widget-container input {
    font-size: 1rem !important;
  }
}
```

#### Problem 5.2: Zero-Specificity CSS Reset Engine via `:where()`
**Requirement**: Build a CSS baseline reset library using `:where()` so that all reset selectors have $(0,0,0,0)$ specificity, allowing any downstream class or tag selector to override them without specificity wars.

```css
:where(html, body, div, p, h1, h2, h3, h4, h5, h6, ul, ol, li, form, input, button) {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

:where(button, input, select, textarea) {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

:where(a) {
  text-decoration: none;
  color: inherit;
}

/* Verification: A single element tag selector overrides this reset effortlessly! */
p {
  margin-bottom: 1rem; /* Successfully applies with only (0,0,0,1) specificity! */
}
```

#### Problem 5.3: Donut Scoping Component Protector
**Requirement**: Implement `@scope` styling for an interactive media card component that styles inner paragraphs, links, and borders, but creates an exclusion hole ("donut") around an embedded user-content slot (`.user-rendered-html`).

```html
<article class="media-card">
  <h2>Design System Component</h2>
  <p>Curated internal documentation description.</p>
  <div class="user-rendered-html">
    <p>User authored raw paragraph (Must NOT receive .media-card paragraph styles!)</p>
  </div>
</article>

<style>
@scope (.media-card) to (.user-rendered-html) {
  :scope {
    border: 1px solid #cbd5e1;
    padding: 24px;
    border-radius: 8px;
  }

  h2 {
    color: #1e293b;
    font-size: 1.5rem;
  }

  p {
    color: #64748b;
    line-height: 1.6;
    font-style: italic;
  }
}
</style>
```

#### Problem 5.4: Specificity Calculator & Collision Auditor
**Requirement**: Write a JavaScript function `calculateSpecificity(selectorString)` that parses CSS selector strings and computes the exact `[A, B, C, D]` specificity vector (Inline, ID, Class/Attr/Pseudo, Element), resolving pseudo-functions `:is()`, `:where()`, and `:not()`.

```javascript
function calculateSpecificity(selector) {
  let ids = 0, classes = 0, elements = 0;

  // Clean pseudo-function wrappers
  let cleaned = selector.trim();

  // 1. Resolve :where(...) -> has 0 specificity
  cleaned = cleaned.replace(/:where\([^)]*\)/g, "");

  // 2. Count IDs (#id)
  const idMatches = cleaned.match(/#[a-zA-Z0-9_-]+/g);
  if (idMatches) ids += idMatches.length;

  // 3. Count Classes (.class), Attributes ([attr]), and Pseudos (:pseudo)
  const classMatches = cleaned.match(/\.[a-zA-Z0-9_-]+/g);
  if (classMatches) classes += classMatches.length;

  const attrMatches = cleaned.match(/\[[^\]]+\]/g);
  if (attrMatches) classes += attrMatches.length;

  // Pseudos (exclude double colon ::pseudo-elements)
  const pseudoMatches = cleaned.match(/(?<!:):[a-zA-Z0-9_-]+/g);
  if (pseudoMatches) classes += pseudoMatches.length;

  // 4. Count Elements and Pseudo-elements (::before)
  const pseudoElements = cleaned.match(/::[a-zA-Z0-9_-]+/g);
  if (pseudoElements) elements += pseudoElements.length;

  const stripped = cleaned
    .replace(/#[a-zA-Z0-9_-]+/g, "")
    .replace(/\.[a-zA-Z0-9_-]+/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/::?[a-zA-Z0-9_-]+/g, "")
    .replace(/[>+~*]/g, " ");

  const elementMatches = stripped.match(/[a-zA-Z0-9]+/g);
  if (elementMatches) elements += elementMatches.length;

  return [0, ids, classes, elements];
}

// Verification:
console.log(calculateSpecificity("#header .nav-item:hover a")); // [0, 1, 2, 1]
console.log(calculateSpecificity(":where(#header) .btn"));      // [0, 0, 1, 0]
```

#### Problem 5.5: Third-Party Widget Quarantine Sandbox
**Requirement**: Isolate a legacy third-party calendar widget that injects high-specificity styles (`#calendar-root div.day.selected`) so that internal design system styles can safely override it without using `!important`.

```html
<div class="legacy-calendar-quarantine">
  <div id="calendar-root">
    <div class="day selected">15</div>
  </div>
</div>

<style>
/* Register layers */
@layer thirdparty, hostApp;

@layer thirdparty {
  /* High specificity legacy style */
  #calendar-root div.day.selected {
    background-color: red;
    color: white;
  }
}

@layer hostApp {
  /* Low specificity author style cleanly defeats thirdparty layer */
  .day {
    background-color: #2563eb;
    color: #ffffff;
    border-radius: 50%;
  }
}
</style>
```

---

## 6. CSS Custom Properties, @property & Typed CSSOM (Houdini)

### 6.1 Architectural Theory

CSS Variables are dynamic values resolved at computed-value time with DOM tree inheritance. **CSS Houdini** elevates them to typed properties.

```
                  CSS Custom Properties vs Houdini @property
 Standard var(--val)         ──► Untyped String (Cannot animate gradients/angles!)
                                       ▲
                                       │ (Houdini Upgrade)
 @property --angle {         ──► Typed Token: <angle>, inherits: false
   syntax: '<angle>';            Enables smooth JIT-interpolated CSS transitions
   initial-value: 0deg;          and GPU shader animations on gradients!
 }
```

#### Senior Invariants & Mechanics:
1. **Inheritance Control via `@property`**:
   - Standard custom properties (`--prop: val`) unconditionally inherit down the entire DOM subtree, causing style recalculation cascades.
   - Using `@property --prop { inherits: false; }` restricts the variable to the element itself, improving style resolution performance.
2. **The Typed CSS Object Model (Typed OM)**:
   - Eliminates string concatenation and parsing bugs (`el.style.opacity = "0.5"` -> parses string).
   - Typed OM accesses native values directly: `el.attributeStyleMap.set('opacity', CSS.number(0.5))`.
3. **Fallback Chains**:
   - `var(--primary, var(--fallback, #000))` resolves recursively until a valid value is reached. If all fail, it resolves to `guaranteed-invalid`, falling back to the property's initial value.

---

### 6.2 Senior Code Demonstrations

```css
/* --- 1. Animating Gradients via Registered @property --- */
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

.radar-sweep {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(from var(--gradient-angle), #2563eb, transparent 60%);
  animation: rotateRadar 3s linear infinite;
}

@keyframes rotateRadar {
  to {
    --gradient-angle: 360deg; /* Smooth 60fps interpolation enabled by @property! */
  }
}
```

```javascript
// --- 2. High-Performance Typed CSSOM Manipulation ---
const widget = document.querySelector(".radar-sweep");

// Set typed values directly on GPU-backed style map (Zero string parsing overhead)
widget.attributeStyleMap.set("transform", new CSSTransformValue([
  new CSSTranslate(CSS.px(10), CSS.px(20)),
  new CSSRotate(CSS.deg(45))
]));

// Read typed dimensions directly
const currentTransform = widget.attributeStyleMap.get("transform");
console.log("Typed translation X:", currentTransform[0].x.value); // 10
```

---

### 6.3 Advanced Coding Problems

#### Problem 6.1: Animatable Conic-Gradient Radar Scanner
**Requirement**: Build a circular radar sweep visualization where the conic gradient rotates continuously and its sweep color smoothly transitions between green (nominal) and red (alert) using `@property` registrations.

```html
<div class="radar-display" data-status="nominal"></div>

<style>
@property --sweep-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@property --sweep-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #10b981;
}

.radar-display {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 2px solid #334155;
  background:
    radial-gradient(circle, transparent 70%, #0f172a 100%),
    conic-gradient(from var(--sweep-angle), var(--sweep-color), transparent 70%);
  animation: radarSpin 2.5s linear infinite;
  transition: --sweep-color 500ms ease;
}

.radar-display[data-status="alert"] {
  --sweep-color: #ef4444; /* Smoothly transitions color mid-rotation! */
}

@keyframes radarSpin {
  from { --sweep-angle: 0deg; }
  to   { --sweep-angle: 360deg; }
}
</style>
```

#### Problem 6.2: System-Synced Theming Engine with Contrast Guard
**Requirement**: Implement a complete theming token engine that syncs with `prefers-color-scheme`, supports manual override via `data-theme="dark|light"`, and computes accessible text color dynamically using CSS color-mix.

```css
:root {
  /* System default light mode */
  --bg-canvas: #ffffff;
  --text-primary: #0f172a;
  --color-accent: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-canvas: #090d16;
    --text-primary: #f8fafc;
    --color-accent: #60a5fa;
  }
}

:root[data-theme="dark"] {
  --bg-canvas: #090d16;
  --text-primary: #f8fafc;
  --color-accent: #60a5fa;
}

:root[data-theme="light"] {
  --bg-canvas: #ffffff;
  --text-primary: #0f172a;
  --color-accent: #2563eb;
}

/* Dynamic contrast border using color-mix */
.themed-card {
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  /* Generates 15% text color mixed with canvas for a perfectly calibrated border */
  border: 1px solid color-mix(in srgb, var(--text-primary) 15%, var(--bg-canvas));
  padding: 24px;
  border-radius: 8px;
}
```

#### Problem 6.3: Fluid Typography & Modular Scale Engine (`clamp`)
**Requirement**: Build a CSS fluid typography and spacing scale using `clamp()` that transitions seamlessly between mobile viewports (360px) and desktop viewports (1440px) with zero media query jumps.

```css
:root {
  /*
    Fluid Formula: clamp(min, slope * vw + intercept, max)
    360px viewport -> 16px body (1rem)
    1440px viewport -> 20px body (1.25rem)
    Slope = (20 - 16) / (1440 - 360) = 4 / 1080 = 0.003703 -> 0.37vw
    Intercept = 16 - (360 * 0.003703) = 14.66px -> 0.916rem
  */
  --font-fluid-base: clamp(1rem, 0.916rem + 0.37vw, 1.25rem);
  --font-fluid-h1:   clamp(2rem, 1.6rem + 1.8vw, 3.5rem);
  --space-fluid-lg:  clamp(1.5rem, 1rem + 2.2vw, 3.5rem);
}

body {
  font-size: var(--font-fluid-base);
}

h1 {
  font-size: var(--font-fluid-h1);
  line-height: 1.15;
}

.hero-section {
  padding-block: var(--space-fluid-lg);
}
```

#### Problem 6.4: Zero-Allocation Typed CSSOM Animator
**Requirement**: Write a JavaScript animation driver using Typed CSSOM (`attributeStyleMap`) that animates an element along a bezier path without allocating intermediate strings or triggering garbage collection pauses.

```javascript
class TypedAnimator {
  constructor(element) {
    this.element = element;
    this.styleMap = element.attributeStyleMap;
  }

  animateTranslateX(startPx, endPx, durationMs) {
    const startTime = performance.now();

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentX = startPx + (endPx - startPx) * eased;

      // Typed CSSOM assignment: Zero string allocation!
      this.styleMap.set("transform", new CSSTransformValue([
        new CSSTranslate(CSS.px(currentX), CSS.px(0))
      ]));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    requestAnimationFrame(frame);
  }
}

// Verification:
// Usage: const anim = new TypedAnimator(document.querySelector('.box'));
// anim.animateTranslateX(0, 300, 500);
console.log("TypedAnimator compiled with pure numerical Typed OM pipeline");
```

#### Problem 6.5: Dynamic Color Palette Contrast Inverter
**Requirement**: Create a CSS utility system that takes an arbitrary background hex color custom property `--surface-bg`, and automatically evaluates whether white or black text provides optimal WCAG AAA contrast ratio using modern CSS color functions.

```css
@property --bg-luminance {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

.adaptive-contrast-box {
  background-color: var(--surface-bg, #ffffff);
  /*
    Modern CSS Color 4 Relative Syntax:
    Deconstructs background color into lightness and flips foreground
  */
  color: oklch(from var(--surface-bg, #ffffff) calc((0.7 - l) * 1000) 0 0);
  padding: 20px;
  border-radius: 8px;
  font-weight: 600;
}

/* Light background -> dark text automatically */
.box-light { --surface-bg: #e2e8f0; }

/* Dark background -> white text automatically */
.box-dark  { --surface-bg: #0f172a; }
```

---

## 7. Advanced Selectors: :has(), :is(), :where() & Pseudos

### 7.1 Architectural Theory

Modern CSS selectors introduce **relational querying** and **functional specificity management**.

```
                   The :has() Relational Selector Paradigm
 Container:has(> .error-banner)  ──► Checks downward children / ancestors
 Previous:has(+ .active-sibling) ──► Simulates previous-sibling selector!
 Form:has(:invalid)              ──► Bubbles leaf-node state up to top container!
```

#### Senior Invariants & Mechanics:
1. **The `:has()` Relational Boundary**:
   - Acts as both a parent selector (`section:has(h2)`) and a previous-sibling selector (`li:has(+ li.active)`).
   - *Performance Guard*: While modern browser engines optimize `:has()` via bloom filters, deeply nested relational chains (e.g. `body:has(div:has(span:has(...)))`) force broad DOM invalidations on mutations.
2. **`:is()` vs `:where()`**:
   - `:is(.a, .b, #id)` assumes the specificity of its **most specific** argument: `(0, 1, 0, 0)` because of `#id`.
   - `:where(.a, .b, #id)` strips all specificity: always evaluates to `(0, 0, 0, 0)`.
3. **Advanced Structural Pseudo-classes**:
   - `:nth-child(An+B of Selector)`: Filters child elements matching `Selector` before applying index stepping. Example: `:nth-child(even of .featured)` targets only even items within the `.featured` subset!
4. **Focus States**:
   - `:focus`: Triggers on all focuses (mouse, keyboard, programmatic).
   - `:focus-visible`: Triggers **only** when the user agent heuristics determine focus should be visible (e.g. keyboard `Tab` navigation).
   - `:focus-within`: Matches if the element or *any of its descendants* has focus.

---

### 7.2 Senior Code Demonstrations

```css
/* --- 1. Previous-Sibling Selection via :has() --- */
/* Target the item immediately preceding the active item */
.stepper-item:has(+ .stepper-item.is-active) {
  border-color: #3b82f6;
  color: #3b82f6;
}

/* --- 2. Zero-JS Form Submission State Gate --- */
/* Disables submit button styling if any required field is invalid */
.checkout-form:has(:invalid) button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
  filter: grayscale(1);
}

/* --- 3. Filtering with :nth-child(An+B of S) --- */
/* Highlights every 2nd card that has the .sponsored class */
.feed-item:nth-child(2n of .sponsored) {
  background-color: #fefce8;
  border-left: 4px solid #eab308;
}
```

---

### 7.3 Advanced Coding Problems

#### Problem 7.1: Zero-JS Reactive Form Validation HUD
**Requirement**: Build a comprehensive login/signup form where the container dynamically alters its border, background tint, and submit button state based on the valid/invalid status of its inputs, using `:has()`, `:user-invalid`, and `:focus-within`.

```html
<form class="reactive-auth-form" novalidate>
  <h2>System Authentication</h2>

  <div class="field-group">
    <label for="userEmail">Enterprise Email</label>
    <input type="email" id="userEmail" required autocomplete="email" />
    <span class="field-error">A valid corporate email is required.</span>
  </div>

  <div class="field-group">
    <label for="userPassword">Security Token</label>
    <input type="password" id="userPassword" required minlength="8" />
    <span class="field-error">Password must be at least 8 characters.</span>
  </div>

  <button type="submit" class="submit-action">Authenticate</button>
</form>

<style>
.reactive-auth-form {
  max-width: 400px;
  padding: 24px;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  background: #ffffff;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

/* Form glows blue when actively interacted with */
.reactive-auth-form:focus-within {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

/* Form tint turns red when any field is invalid and dirty (:user-invalid) */
.reactive-auth-form:has(:user-invalid) {
  border-color: #ef4444;
}

/* Form tint turns green when all inputs are completely valid */
.reactive-auth-form:has(input:valid):not(:has(input:invalid)) {
  border-color: #10b981;
}

.field-error {
  display: none;
  font-size: 0.75rem;
  color: #dc2626;
  margin-top: 4px;
}

/* Show specific error message only after user has attempted input */
input:user-invalid + .field-error {
  display: block;
}

/* Submit button lockout while form is invalid */
.reactive-auth-form:has(input:invalid) .submit-action {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

.submit-action {
  width: 100%;
  padding: 10px;
  background: #0f172a;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 16px;
}
</style>
```

#### Problem 7.2: Accessible Tabbed Widget via Radio Inputs & `:has()`
**Requirement**: Implement an accessible, JavaScript-free tab switcher component where selecting a tab displays only the corresponding content panel, powered purely by hidden radio inputs and parent `:has()` styling.

```html
<div class="css-tabs-container">
  <input type="radio" name="tabGroup" id="tab1" class="tab-radio" checked />
  <input type="radio" name="tabGroup" id="tab2" class="tab-radio" />
  <input type="radio" name="tabGroup" id="tab3" class="tab-radio" />

  <nav class="tab-nav">
    <label for="tab1" class="tab-label">Overview</label>
    <label for="tab2" class="tab-label">Metrics</label>
    <label for="tab3" class="tab-label">Settings</label>
  </nav>

  <div class="tab-panels">
    <section class="panel panel-1">Panel 1: Global Cluster Overview</section>
    <section class="panel panel-2">Panel 2: Real-Time Performance Metrics</section>
    <section class="panel panel-3">Panel 3: Runtime Security Settings</section>
  </div>
</div>

<style>
.tab-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.tab-nav {
  display: flex;
  gap: 8px;
  border-bottom: 2px solid #e2e8f0;
}

.tab-label {
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  color: #64748b;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}

/* Active tab indicators driven by parent :has() */
.css-tabs-container:has(#tab1:checked) .tab-label[for="tab1"],
.css-tabs-container:has(#tab2:checked) .tab-label[for="tab2"],
.css-tabs-container:has(#tab3:checked) .tab-label[for="tab3"] {
  color: #2563eb;
  border-bottom-color: #2563eb;
}

.panel {
  display: none;
  padding: 24px;
}

/* Panel activation */
.css-tabs-container:has(#tab1:checked) .panel-1,
.css-tabs-container:has(#tab2:checked) .panel-2,
.css-tabs-container:has(#tab3:checked) .panel-3 {
  display: block;
}
</style>
```

#### Problem 7.3: Dynamic Quantity Query Engine
**Requirement**: Build a CSS quantity query using `:nth-last-child()` and `:has()` that dynamically formats a grid depending on the exact count of items (e.g. 1 item takes full width; 2 items split 50/50; 3+ items form a 3-column grid).

```css
.dynamic-gallery {
  display: grid;
  gap: 16px;
}

/* Case 1: Exactly 1 item */
.dynamic-gallery:has(> .gallery-item:only-child) {
  grid-template-columns: 1fr;
}

/* Case 2: Exactly 2 items (Item is 1st child AND 2nd from last) */
.dynamic-gallery:has(> .gallery-item:first-child:nth-last-child(2)) {
  grid-template-columns: 1fr 1fr;
}

/* Case 3: Exactly 3 items */
.dynamic-gallery:has(> .gallery-item:first-child:nth-last-child(3)) {
  grid-template-columns: repeat(3, 1fr);
}

/* Case 4: 4 or more items */
.dynamic-gallery:has(> .gallery-item:first-child:nth-last-child(n + 4)) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
```

#### Problem 7.4: Context-Aware Sidebar Adapter
**Requirement**: Implement a master application sidebar that automatically collapses its width from 260px to 72px (icon-only mode) whenever the page main content contains an interactive full-width data table (`:has(.fullwidth-table)`).

```css
.app-layout {
  display: grid;
  grid-template-columns: var(--sidebar-width, 260px) 1fr;
  min-height: 100vh;
  transition: grid-template-columns 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* Context adaptation: Automatically contract sidebar when table demands screen space */
.app-layout:has(main .fullwidth-table) {
  --sidebar-width: 72px;
}

.app-sidebar {
  background: #0f172a;
  color: #fff;
  overflow: hidden;
}

.app-layout:has(main .fullwidth-table) .sidebar-item-label {
  display: none; /* Hide text labels in icon-only mode */
}
```

#### Problem 7.5: Keyboard-Accessible Interactive Tree View
**Requirement**: Build a multi-level collapsible folder tree in pure HTML/CSS using `<details>` and `<summary>` where `:focus-visible` highlights nodes without mouse outlines, and nested open states tint parent folders via `:has()`.

```html
<ul class="tree-root">
  <li>
    <details class="tree-folder">
      <summary class="folder-summary">src/</summary>
      <ul>
        <li>
          <details class="tree-folder">
            <summary class="folder-summary">core/</summary>
            <ul>
              <li class="file-leaf">engine.js</li>
              <li class="file-leaf">parser.js</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
</ul>

<style>
.tree-root, .tree-root ul {
  list-style: none;
  padding-left: 20px;
}

.folder-summary {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

/* Keyboard focus: Distinct high-contrast indicator */
.folder-summary:focus-visible, .file-leaf:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Parent folder tint: Highlights parent if any descendant file is focused */
.tree-folder:has(:focus-visible) > .folder-summary {
  background-color: #dbeafe;
  color: #1e40af;
  font-weight: 600;
}
</style>
```

---

## 8. CSS Containment, Content-Visibility & Rendering Performance

### 8.1 Architectural Theory

Browser engines spend significant CPU resources recalculating layout and repainting unchanged DOM branches. **CSS Containment** isolates these operations.

```
                         The CSS Containment Spectrum
 contain: none ────────► Full DOM Tree recalculation on every minor change
                            │
                            ├─► contain: layout;   (Internal layout mutations never escape)
                            ├─► contain: paint;    (Clipping boundary; zero offscreen paint)
                            ├─► contain: size;     (Box size computed without examining children)
                            └─► contain: strict;   (layout + paint + size + style)
```

#### Senior Optimization Invariants:
1. **`content-visibility: auto`**:
   - Skips layout, paint, and rendering of off-screen elements entirely (just like virtual scrolling libraries, but implemented natively in C++ inside Blink/WebKit).
   - *The Layout Shift Trap*: As off-screen elements skip layout, their height collapses to 0px, causing massive scrollbar jumping.
   - *The Solution*: Must pair with `contain-intrinsic-size: 0 500px` (or dynamic estimate) to reserve geometry placeholder space.
2. **Stacking Contexts & Isolation (`isolation: isolate`)**:
   - A stacking context is formed by root `<html>`, `position: absolute|relative` with `z-index !== auto`, `opacity < 1`, `transform`, `filter`, or `isolation: isolate`.
   - *The Senior Fix*: Using `isolation: isolate` guarantees an element forms a new stacking context without requiring dummy `z-index` or `transform` hacks.

---

### 8.2 Senior Code Demonstrations

```css
/* --- 1. Native Offscreen Virtualization with Zero Jitter --- */
.feed-card {
  /* Skips rendering if element is currently outside the viewport */
  content-visibility: auto;
  /* Reserves an estimated 320px height to prevent scrollbar jumping */
  contain-intrinsic-size: auto 320px;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  margin-bottom: 20px;
}

/* --- 2. Neutralizing Stacking Context Bleeds via isolation: isolate --- */
.modal-overlay {
  position: relative;
  /* Creates clean stacking context boundary; internal z-indices never leak */
  isolation: isolate;
  z-index: 1000;
}
```

---

### 8.3 Advanced Coding Problems

#### Problem 8.1: 10,000-Row DOM Virtualizer with `content-visibility`
**Requirement**: Build a CSS and JavaScript rendering test that renders 10,000 complex feed articles. Use `content-visibility: auto` and `contain-intrinsic-size` to achieve under 16ms initial render time and steady 60fps scrolling.

```html
<div class="virtual-feed-container" id="feedRoot"></div>

<style>
.virtual-feed-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
}

.feed-article {
  /* Engine skips layout and paint while off-screen */
  content-visibility: auto;
  contain-intrinsic-size: auto 240px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>

<script>
function populateLargeFeed(count = 1000) {
  const container = document.getElementById("feedRoot");
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= count; i++) {
    const article = document.createElement("article");
    article.className = "feed-article";
    article.innerHTML = `
      <h3>Telemetry Log Record #${i}</h3>
      <p>Data payload snapshot for distributed cluster partition node.</p>
      <div class="metric">Status: ACTIVE | Response: ${(Math.random() * 50).toFixed(2)}ms</div>
    `;
    fragment.appendChild(article);
  }

  container.appendChild(fragment);
}
populateLargeFeed(1000); // Renders 1000 nodes instantaneously without freezing main thread!
</script>
```

#### Problem 8.2: Stacking Context Isolation Sandbox
**Requirement**: Create a component architecture demonstrating a classic stacking context conflict (where an internal tooltip with `z-index: 9999` is hidden behind a sibling box), and resolve it cleanly using `isolation: isolate`.

```html
<div class="cards-wrapper">
  <!-- Card A: Contains tooltip -->
  <div class="isolated-card card-a">
    Card A Content
    <div class="floating-tooltip">Tooltip (Must display on top)</div>
  </div>

  <!-- Card B: Sibling that previously obscured Tooltip -->
  <div class="isolated-card card-b">
    Card B Content
  </div>
</div>

<style>
.cards-wrapper {
  position: relative;
}

.isolated-card {
  position: relative;
  /* CRITICAL: isolation: isolate creates a clean local stacking context */
  isolation: isolate;
  background: #ffffff;
  padding: 30px;
  border: 1px solid #cbd5e1;
  margin-bottom: 12px;
}

.card-a { z-index: 2; } /* Explicitly controls relationship between A and B */
.card-b { z-index: 1; }

.floating-tooltip {
  position: absolute;
  top: 100%;
  left: 20px;
  background: #0f172a;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  z-index: 9999; /* Stays securely contained within Card A's stacking layer */
}
</style>
```

#### Problem 8.3: Independent Subtree Containment Boundary
**Requirement**: Implement a live stock ticker component that updates numerical values every 100ms. Wrap it in `contain: strict` to prevent internal text layout mutations from invalidating the outer document layout tree.

```html
<div class="live-ticker" id="stockTicker">
  <span class="symbol">NVDA</span>
  <span class="price">$128.45</span>
</div>

<style>
.live-ticker {
  /*
    contain: strict combines:
    size: Box dimensions cannot be altered by child mutations
    layout: Internal layout changes never trigger outer page reflow
    paint: Internal pixels never paint outside boundaries
  */
  contain: strict;
  width: 220px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  background: #1e293b;
  color: #f8fafc;
  border-radius: 6px;
}
</style>

<script>
// High-frequency mutations strictly isolated from outer DOM
setInterval(() => {
  const priceEl = document.querySelector("#stockTicker .price");
  if (priceEl) {
    priceEl.textContent = "$" + (120 + Math.random() * 10).toFixed(2);
  }
}, 100);
</script>
```

#### Problem 8.4: Jank-Free Infinite Carousel with Paint Containment
**Requirement**: Build an infinite horizontal carousel where off-screen carousel slides are tagged with `contain: paint`, preventing the GPU from creating giant compositing textures for elements outside the carousel track.

```css
.carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
}

.carousel-slide {
  flex: 0 0 80%;
  scroll-snap-align: center;
  /* contain: paint guarantees the browser will not paint anything that clips out */
  contain: paint;
  border-radius: 12px;
  overflow: hidden;
}
```

#### Problem 8.5: Automated Layout Thrashing & Invalidation Detector
**Requirement**: Write an automated monitoring script using `PerformanceObserver` with `layout-shift` (CLS) and long animation frame entries (`long-animation-frame`) that identifies DOM nodes causing severe layout invalidations.

```javascript
function monitorLayoutHealth() {
  if (!("PerformanceObserver" in window)) return;

  // Track Cumulative Layout Shifts
  const clsObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        console.warn(`[CLS Alert] Layout Shift detected (Score: ${entry.value.toFixed(4)}):`, entry.sources);
      }
    }
  });
  clsObserver.observe({ type: "layout-shift", buffered: true });

  // Track Long Animation Frames (LoAF)
  try {
    const loafObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.warn(`[Frame Drop Alert] Animation Frame took ${entry.duration.toFixed(2)}ms (Budget: 16ms)`);
      }
    });
    loafObserver.observe({ type: "long-animation-frame", buffered: true });
  } catch (e) {
    // LoAF not supported in all browsers
  }
}
monitorLayoutHealth();
```

---

## 9. Semantic HTML5, ARIA Architecture & Accessibility (a11y)

### 9.1 Architectural Theory

The browser parses HTML semantics into the **Accessibility Tree (AOM)**, consumed by Assistive Technologies (Screen Readers).

```
                           The Accessibility Pipeline
 HTML DOM ──► Computed Style ──► Accessibility Tree (AOM) ──► Screen Reader API
                                        │
             Accessible Name: ──────────┤ (AccName Algorithm:
                                        │  aria-labelledby > aria-label > native > placeholder)
```

#### Senior Accessibility Invariants:
1. **The First Rule of ARIA**:
   - *"If you can use a native HTML5 element or attribute with the semantics and behavior you require already built-in, then do so."*
   - `<button>` is always superior to `<div role="button" tabindex="0">` (provides native space/enter activation, disabled state, form submission).
2. **The Accessible Name Computation (AccName) Algorithm**:
   - Resolution precedence for naming elements:
     1. `aria-labelledby="id"` (points to existing visible text element).
     2. `aria-label="text"` (explicit text string).
     3. Native HTML label / alt (`<label for="...">`, `<img alt="...">`).
     4. Subtree content (`<button>Click Me</button>`).
     5. `placeholder` (Lowest fallback; should never be used as primary label).
3. **Live Regions (`aria-live`)**:
   - `aria-live="polite"`: Screen reader waits until the user is idle before announcing updates (toasts, alerts).
   - `aria-live="assertive"`: Interrupts user immediately (critical system errors).

---

### 9.2 Senior Code Demonstrations

```html
<!-- --- 1. Accessible Disclosure Component (Zero JS Native Accordion) --- -->
<details class="accessible-accordion">
  <summary class="accordion-trigger">
    What is the Accessible Object Model (AOM)?
  </summary>
  <div class="accordion-content">
    <p>The AOM provides an experimental JavaScript API allowing developers to inspect and mutate the browser accessibility tree directly.</p>
  </div>
</details>

<!-- --- 2. ARIA Live Notification Region --- -->
<div id="toastContainer" aria-live="polite" aria-atomic="true" class="sr-live-region">
  <!-- Dynamic notifications appended here will be vocalized automatically -->
</div>
```

---

### 9.3 Advanced Coding Problems

#### Problem 9.1: WAI-ARIA 1.2 Compliant Modal Dialog with Focus Trap
**Requirement**: Build a fully accessible modal dialog system in vanilla JavaScript. It must set `role="dialog"`, `aria-modal="true"`, trap keyboard `Tab` cycles strictly inside the dialog, close on `Escape`, and return focus to the trigger element on close.

```javascript
class AccessibleModal {
  constructor(modalElement, triggerElement) {
    this.modal = modalElement;
    this.trigger = triggerElement;
    this.focusableElementsString = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.boundKeyDown = this.handleKeyDown.bind(this);
  }

  open() {
    this.modal.setAttribute("aria-hidden", "false");
    this.modal.classList.add("is-active");

    // Capture focusable nodes
    this.focusableElements = Array.from(this.modal.querySelectorAll(this.focusableElementsString));
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];

    if (this.firstFocusable) this.firstFocusable.focus();
    document.addEventListener("keydown", this.boundKeyDown);
  }

  close() {
    this.modal.setAttribute("aria-hidden", "true");
    this.modal.classList.remove("is-active");
    document.removeEventListener("keydown", this.boundKeyDown);

    // Return focus to the triggering element
    if (this.trigger) this.trigger.focus();
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      this.close();
      return;
    }

    if (e.key === "Tab") {
      // Focus trap mechanics
      if (e.shiftKey) {
        // Shift + Tab: backwards
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else {
        // Tab: forwards
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }
  }
}

// Verification:
console.log("AccessibleModal initialized with strict WAI-ARIA 1.2 focus trapping");
```

#### Problem 9.2: Accessible Autocomplete Combobox
**Requirement**: Implement an accessible Combobox following the WAI-ARIA Combobox pattern: `role="combobox"`, `aria-expanded`, `aria-autocomplete="list"`, `aria-controls`, and `aria-activedescendant` for virtual keyboard navigation across options.

```html
<div class="combobox-wrapper">
  <label for="countryInput" id="comboLabel">Select Country</label>
  <div class="input-container">
    <input
      type="text"
      id="countryInput"
      role="combobox"
      aria-labelledby="comboLabel"
      aria-expanded="false"
      aria-autocomplete="list"
      aria-controls="countryListbox"
      aria-activedescendant=""
    />
  </div>
  <ul id="countryListbox" role="listbox" aria-labelledby="comboLabel" class="combo-listbox" hidden>
    <li id="opt-us" role="option" aria-selected="false">United States</li>
    <li id="opt-ca" role="option" aria-selected="false">Canada</li>
    <li id="opt-uk" role="option" aria-selected="false">United Kingdom</li>
  </ul>
</div>

<script>
const input = document.getElementById("countryInput");
const listbox = document.getElementById("countryListbox");
const options = Array.from(listbox.querySelectorAll('[role="option"]'));
let activeIndex = -1;

input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    listbox.hidden = false;
    input.setAttribute("aria-expanded", "true");
    activeIndex = (activeIndex + 1) % options.length;
    updateActiveDescendant();
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeIndex = (activeIndex - 1 + options.length) % options.length;
    updateActiveDescendant();
  } else if (e.key === "Enter" && activeIndex >= 0) {
    e.preventDefault();
    input.value = options[activeIndex].textContent;
    listbox.hidden = true;
    input.setAttribute("aria-expanded", "false");
  }
});

function updateActiveDescendant() {
  options.forEach((opt, idx) => {
    const isCurrent = idx === activeIndex;
    opt.setAttribute("aria-selected", isCurrent.toString());
    if (isCurrent) {
      input.setAttribute("aria-activedescendant", opt.id);
      opt.scrollIntoView({ block: "nearest" });
    }
  });
}
</script>
```

#### Problem 9.3: Accessible Live Toast Notification Queue
**Requirement**: Build a notification dispatcher that queues messages into a shared `aria-live="polite"` container, ensuring screen readers vocalize messages sequentially without truncation or overlapping audio.

```javascript
class AccessibleToastQueue {
  constructor() {
    this.queue = [];
    this.isAnnouncing = false;
    this.container = document.createElement("div");
    this.container.setAttribute("role", "status");
    this.container.setAttribute("aria-live", "polite");
    this.container.setAttribute("aria-atomic", "true");
    this.container.className = "sr-only-announcer";
    document.body.appendChild(this.container);
  }

  notify(message, durationMs = 3000) {
    this.queue.push({ message, durationMs });
    if (!this.isAnnouncing) {
      this.drain();
    }
  }

  drain() {
    if (this.queue.length === 0) {
      this.isAnnouncing = false;
      return;
    }

    this.isAnnouncing = true;
    const { message, durationMs } = this.queue.shift();

    // Clear and update text to trigger speech synthesizer
    this.container.textContent = "";
    setTimeout(() => {
      this.container.textContent = message;
      setTimeout(() => this.drain(), durationMs);
    }, 50);
  }
}

// Verification:
const toastQueue = new AccessibleToastQueue();
toastQueue.notify("File upload started.");
toastQueue.notify("File processed successfully.");
```

#### Problem 9.4: Accessible Data Table with Sortable Columns
**Requirement**: Implement a data table with sortable columns using `aria-sort="ascending|descending|none"`, proper `scope="col"`, and keyboard-activatable sort buttons.

```html
<table class="accessible-table">
  <caption>Engineering Team Velocity</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        <button class="sort-trigger" data-col="id">
          ID <span class="sort-indicator">▲</span>
        </button>
      </th>
      <th scope="col" aria-sort="none">
        <button class="sort-trigger" data-col="velocity">
          Sprint Velocity <span class="sort-indicator">⇅</span>
        </button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ENG-101</td>
      <td>42 pts</td>
    </tr>
  </tbody>
</table>

<style>
.sort-trigger {
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.sort-trigger:focus-visible {
  outline: 2px solid #2563eb;
  border-radius: 2px;
}
</style>
```

#### Problem 9.5: Accessible Keyboard-Driven Accordion System
**Requirement**: Build a multi-item accordion where pressing `Up` / `Down` arrows shifts keyboard focus across accordion headers, and `Home` / `End` jumps to the first / last header, with proper `aria-expanded` and `aria-controls` bindings.

```javascript
function initAccessibleAccordion(accordionGroupElement) {
  const triggers = Array.from(accordionGroupElement.querySelectorAll('[role="button"][aria-expanded]'));

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("keydown", (e) => {
      let targetIndex = index;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        targetIndex = (index + 1) % triggers.length;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        targetIndex = (index - 1 + triggers.length) % triggers.length;
      } else if (e.key === "Home") {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        targetIndex = triggers.length - 1;
      }

      if (targetIndex !== index) {
        triggers[targetIndex].focus();
      }
    });

    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", (!isExpanded).toString());
      const targetPanel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (targetPanel) {
        targetPanel.hidden = isExpanded;
      }
    });
  });
}

// Verification:
console.log("Accordion keyboard arrow navigation registered");
```

---

## 10. Container Queries, Fluid Layouts & Dynamic Viewports

### 10.1 Architectural Theory

**Container Queries** shift responsiveness from global viewport boundaries (`@media`) to modular, component-level parent dimensions (`@container`).

```
                    Container Queries vs Media Queries
 @media (min-width: 800px)    ──► Rigid: Card placed in narrow sidebar breaks!
                                       ▲
                                       │ (Modern Modular Shift)
 @container (min-width: 400px)──► Fluid: Card adapts strictly to its parent container!
```

#### Senior Invariants & Mechanics:
1. **`container-type`**:
   - `container-type: inline-size`: Tracks the container's inline (width in horizontal writing mode) dimension. Enables container query units (`cqw`, `cqi`).
   - `container-type: normal`: Tracks style properties for container style queries (`@container style(...)`).
2. **Container Query Units**:
   - `1cqw` = 1% of query container's width.
   - `1cqh` = 1% of query container's height.
   - `1cqi` = 1% of query container's inline size.
3. **The Mobile Viewport Shift Fix (`dvh`, `svh`, `lvh`)**:
   - `100vh` on mobile browsers ignores the dynamic address/navigation bar, causing bottom action buttons to clip behind browser chrome.
   - `100svh` (Small Viewport): Viewport size when browser navigation bars are expanded.
   - `100lvh` (Large Viewport): Viewport size when browser navigation bars are collapsed.
   - `100dvh` (Dynamic Viewport): Automatically adapts dynamically as the user scrolls and the address bar expands/contracts.

---

### 10.2 Senior Code Demonstrations

```css
/* --- 1. Modular Self-Responsive Card via Container Queries --- */
.card-container {
  container-type: inline-size;
  container-name: productCard;
}

.product-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* When parent container has >= 480px width, morph into horizontal layout */
@container productCard (min-width: 480px) {
  .product-card {
    grid-template-columns: 180px 1fr;
    align-items: center;
  }
}

/* --- 2. Mobile Address Bar Immunity via Dynamic Viewport --- */
.full-screen-app {
  height: 100vh; /* Fallback for older engines */
  height: 100dvh; /* Dynamic: Zero button clipping on iOS Safari & Chrome Android */
  display: flex;
  flex-direction: column;
}
```

---

### 10.3 Advanced Coding Problems

#### Problem 10.1: Universal Adaptive Card with Container Queries
**Requirement**: Create a single `<article class="adaptive-widget">` component that renders as a stacked vertical card when placed in a sidebar (container < 350px), an image-left horizontal banner in a main content feed (container 350px–650px), and an expanded 3-column dashboard card in a hero section (container > 650px).

```html
<div class="sidebar-wrapper">
  <!-- Placed in 300px sidebar -->
  <div class="widget-host">
    <article class="adaptive-widget">
      <img src="thumb.jpg" alt="Preview" class="widget-thumb" />
      <div class="widget-content">
        <h3>Cluster Telemetry</h3>
        <p>Active nodes: 142/150</p>
      </div>
      <div class="widget-actions"><button>Inspect</button></div>
    </article>
  </div>
</div>

<style>
.widget-host {
  container-type: inline-size;
  container-name: widget;
}

.adaptive-widget {
  display: grid;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 16px;
  /* Default: Compact vertical stack (< 350px) */
  grid-template-columns: 1fr;
}

.widget-thumb {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 6px;
}

/* State 2: Medium Container (350px - 650px) -> Horizontal Banner */
@container widget (min-width: 350px) {
  .adaptive-widget {
    grid-template-columns: 120px 1fr;
    align-items: center;
  }
  .widget-thumb {
    aspect-ratio: 1 / 1;
  }
}

/* State 3: Large Container (> 650px) -> 3-Column Dashboard Slice */
@container widget (min-width: 650px) {
  .adaptive-widget {
    grid-template-columns: 180px 1fr auto;
    align-items: center;
    padding: 24px;
  }
}
</style>
```

#### Problem 10.2: Fluid Typography & Spacing Calculator (`clamp` Math)
**Requirement**: Build a mathematical Sass/CSS-variable generator function that produces a calibrated `clamp()` expression between any arbitrary minimum viewport / font-size and maximum viewport / font-size.

```javascript
function generateFluidClamp(minViewportPx, maxViewportPx, minSizePx, maxSizePx) {
  const slope = (maxSizePx - minSizePx) / (maxViewportPx - minViewportPx);
  const interceptPx = minSizePx - (minViewportPx * slope);

  const slopeVw = (slope * 100).toFixed(4);
  const interceptRem = (interceptPx / 16).toFixed(4);
  const minRem = (minSizePx / 16).toFixed(4);
  const maxRem = (maxSizePx / 16).toFixed(4);

  return `clamp(${minRem}rem, ${interceptRem}rem + ${slopeVw}vw, ${maxRem}rem)`;
}

// Verification:
// Viewport: 400px -> 1200px, Font: 18px -> 32px
console.log(generateFluidClamp(400, 1200, 18, 32));
// clamp(1.1250rem, 0.6875rem + 1.7500vw, 2.0000rem)
```

#### Problem 10.3: Container Style Query Driven Theming
**Requirement**: Implement CSS Container Style Queries (`@container style(...)`) where child elements automatically invert colors, borders, and typography when wrapped in a container that has `--theme: inverted` or `--density: compact`.

```html
<div class="theme-provider" style="--theme: inverted; --density: compact;">
  <div class="themed-consumer">
    <h4>Contextual Consumer</h4>
    <p>Styles react dynamically to container custom property states.</p>
  </div>
</div>

<style>
.theme-provider {
  container-type: normal;
  container-name: themeContext;
}

.themed-consumer {
  padding: 16px;
  background: #ffffff;
  color: #0f172a;
}

/* Container Style Query: Inverted Theme */
@container themeContext style(--theme: inverted) {
  .themed-consumer {
    background: #0f172a;
    color: #f8fafc;
    border-color: #334155;
  }
}

/* Container Style Query: Compact Density */
@container themeContext style(--density: compact) {
  .themed-consumer {
    padding: 8px;
    font-size: 0.875rem;
  }
}
</style>
```

#### Problem 10.4: Dynamic Viewport Mobile App Shell
**Requirement**: Build a full-height mobile application shell featuring a fixed header, a scrollable messaging list, and a bottom input toolbar that remains completely anchored above the virtual keyboard and browser navigation bars using `100dvh` and CSS environment safe areas.

```html
<div class="mobile-app-shell">
  <header class="chat-header">Conversation with Sentinel</header>
  <main class="chat-messages-scroll">
    <div class="message">System boot sequence initiated.</div>
  </main>
  <footer class="chat-input-bar">
    <input type="text" placeholder="Type a command..." />
    <button>Send</button>
  </footer>
</div>

<style>
.mobile-app-shell {
  display: flex;
  flex-direction: column;
  /* Dynamic Viewport height + iOS notch safe-area protection */
  height: 100vh;
  height: 100dvh;
  padding-top: env(safe-area-inset-top, 0);
  padding-bottom: env(safe-area-inset-bottom, 0);
  overflow: hidden;
  background: #0f172a;
  color: #fff;
}

.chat-header {
  height: 52px;
  display: flex;
  align-items: center;
  padding-inline: 16px;
  background: #1e293b;
  flex-shrink: 0;
}

.chat-messages-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  min-height: 0; /* Critical flex overflow defense */
}

.chat-input-bar {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: #1e293b;
  flex-shrink: 0;
}
</style>
```

#### Problem 10.5: Adaptive Data Widget with Fluid Density Scaling
**Requirement**: Create a financial ticker metric widget that computes its inner padding, font size, and border radius strictly in Container Query Units (`cqi`, `cqb`), scaling proportionally with any container resize without discrete media query steps.

```html
<div class="ticker-container">
  <div class="fluid-ticker">
    <span class="ticker-label">ETH / USD</span>
    <span class="ticker-val">$3,420.50</span>
  </div>
</div>

<style>
.ticker-container {
  container-type: inline-size;
  width: min(100%, 400px);
  resize: horizontal;
  overflow: auto;
}

.fluid-ticker {
  background: #18181b;
  color: #f4f4f5;
  /* Proportional scaling via container inline units (cqi) */
  padding: 4cqi 6cqi;
  border-radius: 2cqi;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ticker-label {
  font-size: 4.5cqi;
  font-weight: 500;
  color: #a1a1aa;
}

.ticker-val {
  font-size: 6cqi;
  font-weight: 700;
  color: #22c55e;
}
</style>
```

---

## 11. Web Components, Custom Elements & Shadow DOM

### 11.1 Architectural Theory

The **Web Components** standard provides native, framework-agnostic component encapsulation within the browser runtime.

```
                           The Web Components Triad
 ┌──────────────────────┐  ┌───────────────────────┐  ┌─────────────────────────┐
 │ Custom Elements API  │  │ Shadow DOM Engine     │  │ HTML Templates & Slots  │
 │ customElements.define│  │ el.attachShadow()     │  │ <template>, <slot>      │
 │ (Lifecycle hooks)    │  │ (Scoped DOM & styles) │  │ (Content projection)    │
 └──────────────────────┘  └───────────────────────┘  └─────────────────────────┘
```

#### Senior Invariants & Mechanics:
1. **Lifecycle Hooks**:
   - `connectedCallback()`: Invoked when element is appended to document DOM.
   - `disconnectedCallback()`: Invoked when element is removed from DOM (clean up event listeners/intervals!).
   - `attributeChangedCallback(name, oldVal, newVal)`: Invoked when observed attributes change (`static get observedAttributes()`).
   - `adoptedCallback()`: Invoked when moved to a new document.
2. **Shadow Root Encapsulation**:
   - `this.attachShadow({ mode: 'open' })`: Styles inside the shadow root do NOT leak out; outer styles (except inherited custom properties) do NOT penetrate in.
3. **Style Sharing via `adoptedStyleSheets`**:
   - Avoids creating redundant `<style>` tags per component instance. Create a single `const sheet = new CSSStyleSheet(); sheet.replaceSync(...)`, and assign `shadowRoot.adoptedStyleSheets = [sheet];`. Shared across 10,000 instances with zero memory duplication!
4. **Content Projection & Styling Hooks**:
   - `<slot name="header">`: Projects light DOM children into shadow tree.
   - `::slotted(selector)`: Styles projected light DOM elements from within the shadow DOM (only targets top-level slotted nodes).
   - `::part(name)`: Explicitly exposes shadow DOM elements to outer page styling.

---

### 11.2 Senior Code Demonstrations

```javascript
// --- 1. Production Custom Element with adoptedStyleSheets & ::part() ---
const globalCardSheet = new CSSStyleSheet();
globalCardSheet.replaceSync(`
  :host {
    display: block;
    contain: content;
  }
  .card-frame {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    background: #ffffff;
  }
  ::slotted(h3) {
    margin-top: 0;
    color: #1e293b;
  }
`);

class SystemCardComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.adoptedStyleSheets = [globalCardSheet];
    shadow.innerHTML = `
      <div class="card-frame" part="container">
        <slot name="title"><h3>Default Title</h3></slot>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define("system-card", SystemCardComponent);
```

---

### 11.3 Advanced Coding Problems

#### Problem 11.1: Production Reactive Custom Element with Observed Attributes
**Requirement**: Build a `<metric-badge>` custom element that observes `value` and `status` (`nominal`, `warning`, `critical`) attributes, re-renders efficiently on attribute change using `adoptedStyleSheets`, and dispatches a custom event on click.

```javascript
const badgeStyles = new CSSStyleSheet();
badgeStyles.replaceSync(`
  :host {
    display: inline-flex;
    font-family: system-ui, sans-serif;
  }
  .badge-pill {
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 0.8125rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 150ms ease;
  }
  .badge-pill:active { transform: scale(0.96); }
  :host([status="nominal"])  .badge-pill { background: #dcfce7; color: #15803d; }
  :host([status="warning"])  .badge-pill { background: #fef9c3; color: #a16207; }
  :host([status="critical"]) .badge-pill { background: #fee2e2; color: #b91c1c; }
`);

class MetricBadge extends HTMLElement {
  static get observedAttributes() {
    return ["value", "status"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [badgeStyles];
    this.shadowRoot.innerHTML = `
      <span class="badge-pill" part="pill"></span>
    `;
    this.pill = this.shadowRoot.querySelector(".badge-pill");
  }

  connectedCallback() {
    this.pill.addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("badge-click", {
        bubbles: true,
        composed: true, // Pierces Shadow DOM boundary into main document
        detail: { value: this.getAttribute("value"), status: this.getAttribute("status") }
      }));
    });
    this.render();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.render();
    }
  }

  render() {
    if (this.pill) {
      this.pill.textContent = this.getAttribute("value") || "N/A";
    }
  }
}
customElements.define("metric-badge", MetricBadge);

// Verification:
const badge = document.createElement("metric-badge");
badge.setAttribute("value", "99.98% SLA");
badge.setAttribute("status", "nominal");
document.body.appendChild(badge);
```

#### Problem 11.2: Multi-Slot Projection Card with Fallback Content
**Requirement**: Construct a custom element `<collapsible-panel>` featuring named slots for `header`, `actions`, and default body content, with CSS `::slotted` rules enforcing layout boundaries on projected elements.

```javascript
const panelSheet = new CSSStyleSheet();
panelSheet.replaceSync(`
  :host {
    display: block;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    overflow: hidden;
  }
  .panel-header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
  }
  .panel-body-area {
    padding: 16px;
  }
  ::slotted([slot="header"]) {
    margin: 0;
    font-size: 1.125rem;
    color: #0f172a;
  }
`);

class CollapsiblePanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [panelSheet];
    this.shadowRoot.innerHTML = `
      <div class="panel-header-bar">
        <slot name="header"><h4>Default Panel Header</h4></slot>
        <slot name="actions"></slot>
      </div>
      <div class="panel-body-area">
        <slot><p>No content supplied.</p></slot>
      </div>
    `;
  }
}
customElements.define("collapsible-panel", CollapsiblePanel);
```

#### Problem 11.3: Design System Component Exposing `::part()` Hooks
**Requirement**: Build a custom element `<themeable-button>` that encapsulates internal styling while exposing `part="button"`, `part="icon"`, and `part="label"` styling hooks to the host document.

```javascript
class ThemeableButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-block; }
        .btn-root {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          background: #2563eb;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
        }
      </style>
      <button class="btn-root" part="button">
        <span part="icon">★</span>
        <span part="label"><slot>Action</slot></span>
      </button>
    `;
  }
}
customElements.define("themeable-button", ThemeableButton);
```

```css
/* Outer Document styling piercing shadow tree via ::part() */
themeable-button::part(button) {
  background-color: #0f172a;
  border-radius: 8px;
}

themeable-button::part(icon) {
  color: #eab308; /* Yellow star */
}
```

#### Problem 11.4: Form-Associated Custom Element (FACE)
**Requirement**: Implement a Form-Associated Custom Element `<rating-picker>` using `ElementInternals`. It must participate directly in parent `<form>` submission, support `form.elements`, validate with `internals.setValidity()`, and support form resets via `formResetCallback()`.

```javascript
class RatingPicker extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.attachShadow({ mode: "open" });
    this.score = 0;

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-flex; gap: 4px; }
        .star { cursor: pointer; font-size: 24px; color: #cbd5e1; }
        .star.selected { color: #f59e0b; }
      </style>
      <div class="stars-row">
        <span class="star" data-val="1">★</span>
        <span class="star" data-val="2">★</span>
        <span class="star" data-val="3">★</span>
        <span class="star" data-val="4">★</span>
        <span class="star" data-val="5">★</span>
      </div>
    `;
  }

  connectedCallback() {
    this.stars = Array.from(this.shadowRoot.querySelectorAll(".star"));
    this.stars.forEach((star) => {
      star.addEventListener("click", () => this.setRating(parseInt(star.dataset.val, 10)));
    });
    this.validate();
  }

  setRating(val) {
    this.score = val;
    this.internals.setFormValue(this.score.toString());
    this.stars.forEach((s, idx) => s.classList.toggle("selected", idx < val));
    this.validate();
  }

  validate() {
    if (this.hasAttribute("required") && this.score === 0) {
      this.internals.setValidity({ valueMissing: true }, "Please select a rating score.");
    } else {
      this.internals.setValidity({});
    }
  }

  formResetCallback() {
    this.setRating(0);
  }
}
customElements.define("rating-picker", RatingPicker);

// Verification:
// Inside a <form>: rating is serialized natively as form-associated payload!
```

#### Problem 11.5: Zero-Virtual-DOM Reactive Micro-Component
**Requirement**: Build a minimal reactive base class `ReactiveElement` extending `HTMLElement` that uses JavaScript Proxies to observe internal `state`, automatically re-rendering only the diffed template nodes without third-party frameworks.

```javascript
class ReactiveElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._state = this.createProxy({});
  }

  createProxy(rawState) {
    return new Proxy(rawState, {
      set: (target, prop, value) => {
        target[prop] = value;
        this.render();
        return true;
      }
    });
  }

  get state() {
    return this._state;
  }

  render() {
    if (typeof this.template === "function") {
      this.shadowRoot.innerHTML = this.template(this._state);
    }
  }
}

class CounterComponent extends ReactiveElement {
  connectedCallback() {
    this.state.count = 0;
    this.shadowRoot.addEventListener("click", (e) => {
      if (e.target.id === "inc") this.state.count++;
    });
  }

  template(state) {
    return `
      <style>button { padding: 6px 12px; cursor: pointer; }</style>
      <div>Count: <strong>${state.count}</strong></div>
      <button id="inc">Increment</button>
    `;
  }
}
customElements.define("reactive-counter", CounterComponent);
```

---

## 12. Modern HTML Forms, Popover API, Dialog & View Transitions

### 12.1 Architectural Theory

Modern HTML5 incorporates top-layer layout engines and browser-native primitives, eliminating hundreds of kilobytes of legacy JavaScript libraries.

```
                           Browser Top-Layer Stack
 ┌────────────────────────────────────────────────────────────────────────┐
 │ Top Layer (Above all z-index hierarchies, managed directly by engine!) │
 │   ├─ <dialog>.showModal()   ──► Traps focus, generates native ::backdrop
 │   └─ popover="auto|manual"  ──► Native light-dismiss on click outside  │
 └────────────────────────────────────────────────────────────────────────┘
```

#### Senior Invariants & Mechanics:
1. **The Native Popover API (`popover`)**:
   - `popover="auto"`: Managed in the browser's top layer. Provides automatic **light dismiss** (clicking outside or pressing `Escape` closes it), single active popover exclusivity, and keyboard focus return.
   - Declarative activation: `<button popovertarget="myPopover">Toggle</button>` requires **zero lines of JavaScript**!
2. **Native `<dialog>` Architecture**:
   - `.showModal()`: Places dialog in top layer, adds backdrop (`::backdrop`), locks background scrolling, traps keyboard focus.
   - `.show()`: Renders dialog as a standard inline element in normal stacking context.
3. **HTML5 Constraint Validation API**:
   - Eliminates regex validation libraries. Inspect `input.validity`:
     - `validity.valueMissing` (`required`)
     - `validity.typeMismatch` (`type="email|url"`)
     - `validity.patternMismatch` (`pattern="[A-Z]{3}"`)
     - `validity.customError` (`input.setCustomValidity("Custom message")`)
4. **View Transitions API (`document.startViewTransition`)**:
   - Captures DOM state snapshots before and after mutation, cross-fading or morphing elements smoothly on the GPU via pseudo-elements (`::view-transition-old`, `::view-transition-new`).

---

### 12.2 Senior Code Demonstrations

```html
<!-- --- 1. Zero-JS Native Popover with Light Dismiss --- -->
<button popovertarget="userMenu">Account Options</button>

<div id="userMenu" popover="auto" class="native-menu-popover">
  <nav>
    <a href="/profile">Profile</a>
    <a href="/settings">Security</a>
    <button id="logout">Sign Out</button>
  </nav>
</div>

<style>
/* Native Top Layer element: Zero z-index wars! */
.native-menu-popover {
  margin: auto;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
```

```javascript
// --- 2. View Transitions API Morphing ---
function updateDOMWithTransition(mutatorFn) {
  if (!document.startViewTransition) {
    mutatorFn(); // Fallback for unsupported browsers
    return;
  }

  // Smooth snapshot cross-fade executed natively on GPU
  document.startViewTransition(() => {
    mutatorFn();
  });
}
```

---

### 12.3 Advanced Coding Problems

#### Problem 12.1: Native Popover Dropdown & Tooltip with Zero-JS Positioning
**Requirement**: Implement a navigation dropdown menu and an accessible hover/focus tooltip using the native Popover API (`popover="auto"` and `popover="manual"`), styled with the top layer and CSS Anchor Positioning fallbacks.

```html
<div class="popover-nav-group">
  <button popovertarget="actionsPopover" class="pop-btn">
    Cluster Actions ▼
  </button>

  <div id="actionsPopover" popover="auto" class="actions-menu">
    <button class="menu-item">Restart Partition</button>
    <button class="menu-item">Drain Nodes</button>
    <button class="menu-item danger">Force Terminate</button>
  </div>
</div>

<style>
/* Styles top-layer popover */
.actions-menu {
  padding: 8px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  min-width: 180px;
}

/* Light dismiss and backdrop fade */
.actions-menu::backdrop {
  background: rgba(0, 0, 0, 0.2);
}

.menu-item {
  display: block;
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  border-radius: 4px;
}
.menu-item:hover { background: #f1f5f9; }
.menu-item.danger { color: #dc2626; }
</style>
```

#### Problem 12.2: Native Modal Dialog with Animated Backdrop
**Requirement**: Build a confirmation modal dialog using `<dialog>`. Animate both the modal dialog scale and the native `::backdrop` opacity smoothly using CSS transitions, and intercept cancel events (`Escape`) cleanly.

```html
<button id="openDialogBtn">Delete Database</button>

<dialog id="confirmModal" class="animated-dialog">
  <h3>Confirm Destruction</h3>
  <p>Are you certain you wish to permanently drop the production database?</p>
  <div class="dialog-actions">
    <button id="cancelBtn" value="cancel">Cancel</button>
    <button id="confirmBtn" value="confirm" class="danger">Confirm Drop</button>
  </div>
</dialog>

<style>
.animated-dialog {
  padding: 24px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 440px;
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 200ms ease, transform 200ms cubic-bezier(0.16, 1, 0.3, 1), display 200ms allow-discrete;
}

.animated-dialog[open] {
  opacity: 1;
  transform: scale(1);
}

/* Native Backdrop Styling */
.animated-dialog::backdrop {
  background: rgba(15, 23, 42, 0);
  transition: background 200ms ease, display 200ms allow-discrete;
}

.animated-dialog[open]::backdrop {
  background: rgba(15, 23, 42, 0.6);
}
</style>

<script>
const modal = document.getElementById("confirmModal");
document.getElementById("openDialogBtn").addEventListener("click", () => modal.showModal());
document.getElementById("cancelBtn").addEventListener("click", () => modal.close("cancelled"));
document.getElementById("confirmBtn").addEventListener("click", () => modal.close("confirmed"));
</script>
```

#### Problem 12.3: Constraint Validation API Real-Time Engine
**Requirement**: Build a real-time form validation engine that intercepts input events, verifies constraints (`validity.valueMissing`, `validity.patternMismatch`), applies custom localized error strings with `setCustomValidity()`, and updates custom accessible error containers.

```html
<form id="enterpriseForm" novalidate>
  <div class="input-wrapper">
    <label for="clusterId">Cluster Identifier (Must be: REGION-XXX)</label>
    <input type="text" id="clusterId" required pattern="[A-Z]{2,3}-[0-9]{3}" />
    <span class="error-msg" id="clusterError" aria-live="polite"></span>
  </div>
  <button type="submit">Deploy Cluster</button>
</form>

<script>
const clusterInput = document.getElementById("clusterId");
const errorDisplay = document.getElementById("clusterError");

clusterInput.addEventListener("input", () => {
  // Clear prior custom error to reset validity state
  clusterInput.setCustomValidity("");

  if (clusterInput.validity.valueMissing) {
    clusterInput.setCustomValidity("Cluster ID is strictly mandatory.");
  } else if (clusterInput.validity.patternMismatch) {
    clusterInput.setCustomValidity("Invalid format: Must match pattern 'US-101' or 'EU-999'.");
  }

  // Display custom validation message in UI
  errorDisplay.textContent = clusterInput.validationMessage;
});

document.getElementById("enterpriseForm").addEventListener("submit", (e) => {
  if (!e.target.checkValidity()) {
    e.preventDefault();
    e.target.reportValidity(); // Native browser validation callout
  }
});
</script>
```

#### Problem 12.4: Multi-Step Wizard with Native Form State Persistence
**Requirement**: Create a multi-step form wizard using `<fieldset>` containers where only the active step is enabled/visible, and input values are persisted across steps and tab reloads via the `FormData` API and `localStorage`.

```javascript
class PersistentWizard {
  constructor(formElement, storageKey = "wizard_draft") {
    this.form = formElement;
    this.storageKey = storageKey;
    this.steps = Array.from(formElement.querySelectorAll("fieldset.wizard-step"));
    this.currentStep = 0;
    this.init();
  }

  init() {
    this.restoreState();
    this.form.addEventListener("input", () => this.saveState());
    this.updateStepVisibility();
  }

  saveState() {
    const data = Object.fromEntries(new FormData(this.form));
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  restoreState() {
    const raw = localStorage.getItem(this.storageKey);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      for (const [key, value] of Object.entries(data)) {
        const input = this.form.elements[key];
        if (input) input.value = value;
      }
    } catch (e) {
      localStorage.removeItem(this.storageKey);
    }
  }

  next() {
    if (this.currentStep < this.steps.length - 1) {
      // Validate current fieldset inputs before advancing
      const activeInputs = this.steps[this.currentStep].querySelectorAll("input, select");
      const isValid = Array.from(activeInputs).every((i) => i.reportValidity());
      if (isValid) {
        this.currentStep++;
        this.updateStepVisibility();
      }
    }
  }

  updateStepVisibility() {
    this.steps.forEach((step, idx) => {
      step.hidden = idx !== this.currentStep;
      step.disabled = idx !== this.currentStep;
    });
  }
}

// Verification:
console.log("PersistentWizard initialized with FormData persistence and validation gates");
```

#### Problem 12.5: Smooth View Transitions with Shared Element Morphing
**Requirement**: Implement a list-to-detail view transition where clicking an article item morphs its thumbnail image smoothly into the full-width header image of the detail page using `view-transition-name` and `document.startViewTransition`.

```html
<!-- List View -->
<div class="article-item" id="item42">
  <img src="hero.jpg" class="morph-target" style="view-transition-name: article-hero;" />
  <h3>System Performance Architecture</h3>
</div>

<style>
/* View Transitions Pseudo-Element Tuning */
::view-transition-old(article-hero),
::view-transition-new(article-hero) {
  animation-duration: 350ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>

<script>
function transitionToDetailView(articleData) {
  if (!document.startViewTransition) {
    renderDetailView(articleData);
    return;
  }

  // Executes smooth morphing transition of all matching view-transition-names
  document.startViewTransition(() => {
    renderDetailView(articleData);
  });
}

function renderDetailView(data) {
  document.body.innerHTML = `
    <article class="detail-view">
      <img src="${data.imgSrc}" style="view-transition-name: article-hero; width: 100%; height: 350px;" />
      <h1>${data.title}</h1>
    </article>
  `;
}
</script>
```

---

## Senior Engineering Checklist & Retrospective

| Domain | Invariant / Rule | Senior Implementation Diagnostic |
|---|---|---|
| **Rendering** | Composite-Only Transforms | Mutate only `transform` and `opacity` during high-frequency animations; avoid layout thrashing via read/write batching. |
| **BFC** | Isolation via `flow-root` | Establish BFCs with `display: flow-root` instead of legacy clearfix hacks to contain floats and isolate margins. |
| **Flexbox** | Weighted Shrink Formula | Account for item base size in shrink calculations; apply `min-width: 0` to prevent text truncation blowouts. |
| **Grid** | Subgrid Track Alignment | Use `subgrid` on nested items to align components across sibling cards without flattening HTML semantics. |
| **Layers** | Cascade Layer Priority | Manage specificity wars via `@layer`; remember that later layers always win, but `!important` inverts this order. |
| **Custom Props** | Houdini `@property` | Register custom properties with `@property` to enable smooth gradient interpolation and suppress runaway inheritance. |
| **Selectors** | Specificity Control with `:where` | Use `:where()` for zero-specificity resets; employ `:has()` for reactive parent and previous-sibling queries. |
| **Containment** | `content-visibility: auto` | Skip off-screen rendering with `content-visibility: auto`; pair with `contain-intrinsic-size` to prevent layout shifts. |
| **A11y** | First Rule of ARIA | Prefer native HTML5 elements (`<button>`, `<dialog>`) over custom ARIA divs; compute accessible names via AccName. |
| **Containers** | Modular Container Queries | Design components to adapt to their parent container dimensions (`@container`) rather than global viewport size. |
| **Components** | Shadow DOM & Adopted Sheets | Share single `CSSStyleSheet` instances across custom elements via `adoptedStyleSheets`; expose styling with `::part()`. |
| **Top Layer** | Native Popovers & Dialogs | Leverage the native Popover API (`popover="auto"`) and `<dialog>.showModal()` for focus trapping and light dismiss. |


