# Blog Shared Navigation Footer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Astro blog use the same navigation menu and footer content and visual language as the main marketing app without coupling the blog to the React router runtime.

**Architecture:** Keep rendering framework-specific. Extract shared site-chrome data and a small framework-agnostic theme layer, then render Astro-native header/footer components for the blog and continue rendering React-native header/footer components for the main app. Unify the blog shell first, then swap both the blog index and post layout onto that shell.

**Tech Stack:** Astro 6 static site, React 18 + Vite main app, Tailwind-backed React app, plain CSS in Astro, shared TypeScript content config, shared plain CSS tokens.

---

## Recommended Approach

Do **not** try to mount `src/components/layout/Header.tsx` or `src/components/layout/Footer.tsx` directly inside Astro first.

Reasons:
- `src/components/layout/Header.tsx` depends on `react-router-dom`, `useLocation`, React state, and scroll/mobile-menu behavior.
- `src/components/layout/Footer.tsx` depends on `react-router-dom` and shadcn `Button`.
- The blog package does not currently have React integration or Tailwind integration configured.
- The blog currently uses duplicated inline CSS and full-document Astro pages, so the clean first move is to establish one Astro shell and feed it shared content.

## Current State

Main-app shell:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/index.css`

Blog shell:
- `blog/src/pages/index.astro`
- `blog/src/layouts/BlogPostLayout.astro`
- `blog/src/pages/[slug].astro`

Structural observations:
- The blog has duplicated nav/footer markup in both `blog/src/pages/index.astro` and `blog/src/layouts/BlogPostLayout.astro`.
- The blog does not yet have a shared site-shell layout.
- The blog styling is inline and independent from the main app design-token layer.

## Task 1: Define the Shared Site-Chrome Contract

**Files:**
- Create: `shared/site-chrome.ts`
- Create: `shared/site-theme.css`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] Move the navigation link list, blog link, primary CTA, footer company links, footer service links, contact links, and brand copy into one framework-agnostic data module.
- [ ] Keep the contract content-only: labels, hrefs, CTA text, location text, and footer section groupings. Do not put React elements or framework helpers into it.
- [ ] Extract the small subset of visual tokens the blog needs into a plain CSS file: fonts, root color variables, `section-container`, and the background/text tokens used by the shell.
- [ ] Update the React header/footer to read from the shared content contract so the main app remains the source of truth for content, not hardcoded arrays in multiple places.
- [ ] Keep React-only behavior local to the React components: current-route highlighting, scroll state, mobile-menu open state, and button/icon rendering stay in React.

**Notes:**
- Prefer `shared/` at repo root so both apps can import from the same place without pretending one app owns the other’s shell content.
- If Astro cannot import from the chosen shared path cleanly, add the minimal alias or Vite/Astro config needed in a later task instead of duplicating the data.

## Task 2: Establish One Astro Blog Shell

**Files:**
- Create: `blog/src/components/SiteHeader.astro`
- Create: `blog/src/components/SiteFooter.astro`
- Create: `blog/src/layouts/BlogShellLayout.astro`
- Modify: `blog/astro.config.mjs` only if shared-import aliasing is required

- [ ] Build Astro-native header and footer components that consume the shared content contract.
- [ ] Match the main app’s structure and content, but keep the implementation Astro-native and CSS-driven.
- [ ] Implement the mobile menu in a way that stays static-friendly. A CSS checkbox toggle is acceptable if it matches the desired interaction closely enough.
- [ ] Support footer CTA parity with the main app. Default to showing the CTA section on blog pages unless product direction explicitly says otherwise.
- [ ] Centralize shell-level CSS in the new Astro shell layout or a blog-local stylesheet imported there. Do not leave shell CSS duplicated across page files.

**Decision guardrails:**
- Do not add `@astrojs/react` just to reuse the React shell.
- Do not add Tailwind to the blog just to render the existing React class strings.
- Do not move blog post body styles into the global shell if they are specific to article content.

## Task 3: Move the Blog Index onto the Shared Shell

**Files:**
- Modify: `blog/src/pages/index.astro`
- Reuse: `blog/src/layouts/BlogShellLayout.astro`

- [ ] Strip the inline nav/footer markup out of `blog/src/pages/index.astro`.
- [ ] Remove shell-level inline CSS from the page and keep only index-specific content styling there, or move that styling into a shell-adjacent stylesheet if reuse is likely.
- [ ] Render the page body inside the new shared blog shell layout.
- [ ] Preserve current SEO behavior, canonical URL, published-post sorting, and empty-state handling.
- [ ] Preserve `/blog/` links and RSS link behavior.

## Task 4: Move Blog Posts onto the Shared Shell

**Files:**
- Modify: `blog/src/layouts/BlogPostLayout.astro`
- Modify: `blog/src/pages/[slug].astro` only if layout props or composition change
- Reuse: `blog/src/layouts/BlogShellLayout.astro`

- [ ] Strip the inline nav/footer markup out of `blog/src/layouts/BlogPostLayout.astro`.
- [ ] Move only article-specific styles and structure into the post layout.
- [ ] Render the post layout inside the shared blog shell so post pages and the blog index share identical site chrome.
- [ ] Preserve structured data, breadcrumb metadata, canonical URLs, and article content rendering.
- [ ] Keep the breadcrumb and “Back to Blog” affordance inside the article layout rather than the global shell.

## Task 5: Visual Parity Review and Drift Prevention

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `blog/src/components/SiteHeader.astro`
- Modify: `blog/src/components/SiteFooter.astro`
- Modify: `shared/site-chrome.ts`
- Modify: `shared/site-theme.css`

- [ ] Compare the Astro header/footer against the React header/footer on desktop and mobile.
- [ ] Resolve deliberate differences explicitly: active-link highlighting on the main app can remain React-only, while the blog can use simple path-based highlighting or no active state for the first pass.
- [ ] Ensure brand logo usage, nav ordering, CTA text, footer section headings, location text, and contact links come from shared data so content drift cannot recur silently.
- [ ] Keep any remaining framework-specific differences small and documented in the plan implementation notes or PR summary.

## Verification Plan

- [ ] `npm run build` succeeds from repo root after the shared shell changes.
- [ ] `npm run preview:prod-shape` serves both the main app and the blog from the assembled output.
- [ ] Check `/blog/` and one sample `/blog/<slug>/` page for:
  - matching nav labels/order versus the main app
  - matching footer sections/content versus the main app
  - working logo, internal links, and CTA links
  - acceptable mobile menu behavior
- [ ] Check one main-app route such as `/about` to ensure the React shell still renders correctly after switching to shared content data.

## Risks and Fallbacks

- **Risk:** Astro shared imports from repo root may need a small config adjustment.
  - Fallback: keep `shared/` at repo root and add the minimum Astro alias/config needed.

- **Risk:** Tailwind-based React styling cannot be reused directly in the blog.
  - Fallback: keep Astro markup CSS-native and share only plain CSS tokens, fonts, and content data.

- **Risk:** Pixel-perfect parity may be slower than content/structure parity.
  - Fallback: land shared content + unified shell first, then do a second pass on visual refinement.

## Out of Scope

- Adding React islands to the blog solely for shell reuse
- Converting the entire blog to Tailwind or shadcn
- Reworking article typography beyond what is necessary to coexist with the new shell
- Changing deployment, routing, or blog content model behavior

## Expected End State

- The main app and the Astro blog read navigation/footer content from one shared source.
- The blog has one reusable shell layout instead of duplicated full-document wrappers.
- Blog index and blog post pages present the same menu and footer as the main app, with framework-specific rendering kept separate.

