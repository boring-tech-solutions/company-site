# BTS Company Site

Company website for [Boring Tech Solutions](https://boringtechsolutions.com). Built as two co-deployed sub-apps that assemble into a single `dist/` output:

- **Vite + React + TypeScript** — main marketing site
- **Astro** — static blog at `/blog/`

## Stack

- React 18 + TypeScript (marketing site)
- Astro (blog)
- Tailwind CSS + shadcn-ui (Radix primitives)
- React Router DOM v6
- TanStack React Query v5

## Repository layout

```
company-site/
  src/           # React/Vite marketing app
  blog/          # Astro static blog sub-app
  scripts/       # Build helper scripts (copy-blog.mjs, preview-prod-shape.mjs)
  deploy/        # Ansible deployment playbook
  dist/          # Generated production output (gitignored)
```

## Commands

```sh
# Install dependencies
npm install

# Development (starts Vite on :8080 and Astro on :4321 concurrently)
npm run dev

# Individual dev servers
npm run dev:main      # Vite only
npm run dev:blog      # Astro only

# Production build (blog → main → copy blog output into dist/)
npm run build

# Build components individually
npm run build:blog
npm run build:main

# Preview production build
npm run preview

# Preview assembled prod-shape output (both apps merged)
npm run preview:prod-shape

# Lint
npm run lint
```

## Architecture

**Routing ownership:**
- React Router owns `/` and all marketing routes (`/about`, `/ai-lab`, `/contact`, `/community`, `/our-past-work`, `/govora`, `/govora-sales`)
- Astro owns `/blog/` and all blog article routes

**Local dev proxy:** Vite proxies `/blog` requests to the Astro dev server on port 4321 so both apps are served from a single origin during development.

**Production build:** `npm run build` runs `build:blog` then `build:main` then `copy:blog`, which copies the Astro output into `dist/blog/` so the final `dist/` directory contains both apps under one root.

## Blog authoring

Posts live in `blog/src/content/posts/` as Markdown files with Astro Content Collections frontmatter validation.

Required frontmatter fields:

```yaml
---
title: ""
description: ""
slug: ""
author: ""
datePublished: ""
dateModified: ""
category: ""
tags: []
seoTitle: ""
seoDescription: ""
canonicalUrl: ""
---
```

## Deployment

Deployment uses Ansible from the `/deploy` directory. `npm run build` is the build entrypoint; output is uploaded to S3/CloudFront.

```sh
# Deploy to production (run from /deploy directory)
ansible-playbook --vault-password-file ./keys/vault_password_file -i inventories/prod playbook.yml

# Ansible vault commands (run from /deploy directory)
ansible-vault view --vault-password-file ./keys/vault_password_file <file>
ansible-vault edit --vault-password-file ./keys/vault_password_file <file>
ansible-vault decrypt --vault-password-file ./keys/vault_password_file <file>
```

Secrets and configuration are stored in encrypted Ansible vault files; `keys/vault_password_file` is required and is not checked into the repository.
