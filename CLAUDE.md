# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
# Install dependencies
npm install

# Development — starts Vite on :8080 and Astro on :4321 concurrently
npm run dev

# Individual dev servers
npm run dev:main      # Vite/React only
npm run dev:blog      # Astro only (blog)

# Production build (blog → main → copy blog output into dist/)
npm run build

# Preview assembled prod-shape output (both apps merged under one root)
npm run preview:prod-shape

# Lint
npm run lint

# Tests (Node built-in test runner, no test framework needed)
node --test tests/site-chrome.test.mjs
node --test tests/service-pages.test.mjs
node --test tests/blog-shell.test.mjs
node --test tests/          # run all tests
```

## Architecture

This repo assembles **two independent sub-apps** into a single `dist/` output:

| Sub-app | Tech | Routes |
|---------|------|--------|
| Marketing site | Vite + React 18 + TypeScript | `/` and all non-blog routes |
| Blog | Astro (static) | `/blog/` and all blog article routes |

**Build order matters:** `build:blog` → `build:main` → `copy:blog` (copies `blog/dist/` into `dist/blog/`). The `copy-blog.mjs` script handles the merge step.

**Local dev proxy:** Vite proxies `/blog` requests to the Astro dev server on port 4321, so both apps appear under a single origin (`localhost:8080`).

## Key patterns

### Routing
React Router v6 (`src/App.tsx`) owns all marketing routes. Astro owns `/blog/`. Links to the blog must use plain `<a>` tags (or `linkType: "anchor"` in site-chrome), never `<Link>` from React Router — the blog is a separate static app and React Router cannot navigate to it.

### Site chrome contract (`shared/site-chrome.js`)
Navigation labels, hrefs, CTA text, footer copy, and brand metadata all live in `shared/site-chrome.js`. The Header and Footer components consume this module so the two sub-apps stay in sync. **Tests assert the exact shape of this object** — any nav or footer change must go through `shared/site-chrome.js` first.

Each link in `primaryNav` and footer `sections` requires a `linkType` field: `"router"` (React Router Link), `"anchor"` (plain `<a>`), or `"external"` (opens in new tab or full navigation).

### Service pages (`src/data/servicePages.ts`)
All copy, metadata, and structure for `/services/*` pages is data-driven from `src/data/servicePages.ts`. The `ServicePageData` interface defines the expected shape. Adding a new service page means:
1. Add a data object to `servicePages.ts` (unique `title`, `description`, `canonicalUrl`, `h1`, `ctaLabel`)
2. Create a page component in `src/pages/`
3. Register the route in `src/App.tsx`
4. Link from `src/pages/AILab.tsx`
5. Add the canonical URL to `public/sitemap.xml`

Tests in `tests/service-pages.test.mjs` enforce all five steps.

### Shared theme (`shared/site-theme.css`)
CSS custom properties and base layout classes (`:root`, `.section-container`, Playfair Display font) live in `shared/site-theme.css`. `src/index.css` imports it with a `@import`. Tests assert the import exists and that `shared/site-theme.css` contains these definitions — do not move them into app-specific CSS.

### Blog authoring (`blog/src/content/posts/`)
Posts are Markdown files validated by Astro Content Collections. Required frontmatter: `title`, `description`, `slug`, `author`, `datePublished`, `dateModified`, `category`, `tags`, `seoTitle`, `seoDescription`, `canonicalUrl`.

## Deployment

S3 + CloudFront via Ansible from `/deploy`. The CloudFront function at `deploy/cloudfront/rewrite-index.js` handles SPA-style routing for the React app.

```sh
# From the /deploy directory
ansible-playbook --vault-password-file ./keys/vault_password_file -i inventories/prod playbook.yml
```

`keys/vault_password_file` is not in the repo. Ansible vault files hold all secrets.

## Development

Rules:
1. Always work in new git worktree when fixing bug or implementing new feature.
2. If commit changes, also create PR
3. Always clean up worktree after PR created.
4. Never push to main/master
5. Aways use subagents for all work