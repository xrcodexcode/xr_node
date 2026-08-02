# NexusDB

A production-minded editorial front end for an AI newsletter, built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber, React Hook Form-ready forms, Zustand, and React Router.

## Run locally

```bash
npm install
npm run dev
```

Build the static production bundle with `npm run build`, then preview it using `npm run preview`.

## Architecture

`src/components` contains reusable layout, UI, and WebGL components. `src/pages` owns route-level composition, and `src/data` keeps editorial sample content independent of the presentation layer. The particle scene is intentionally small, uses an adaptive DPR cap, and disables expensive antialiasing.

## Deployment

Deploy the generated `dist/` directory to Vercel, Netlify, Cloudflare Pages, or any static host. Configure SPA rewrites so unknown paths return `index.html`. Before launch, set the production canonical domain, wire the form to your email provider, and replace the placeholder social URLs.

## Optimization notes

- The WebGL field uses 1,100 points, no textures, and a 1.5 DPR cap.
- All motion uses GPU-friendly opacity and transforms and respects user agents that reduce animation through Framer Motion defaults.
- The layout uses semantic landmarks, visible keyboard focus states, accessible dialogs, labels, and responsive typography.
- Route code splitting is the natural next enhancement as content grows; editorial media should be served as responsive AVIF/WebP.

## Next steps

Connect a CMS (Sanity, Contentlayer, or MDX), add a newsletter API endpoint, configure analytics and a consent flow, generate production sitemap/canonical URLs, and add visual regression + accessibility checks in CI.
