# Blog Header Menu Parity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the blog header show the full marketing-site navigation on desktop and use a working full-screen mobile overlay menu on small screens.

**Architecture:** Keep the blog header Astro-native and continue using `shared/site-chrome.js` as the single source of nav/CTA content. Replace the current `details/summary` menu state mechanism with a header structure that renders desktop nav directly and uses a real mobile trigger plus a fixed overlay menu that behaves like the marketing pages.

**Tech Stack:** Astro 6, shared plain JS nav contract, shared plain CSS theme, Node built-in test runner for built HTML regression checks, local browser verification against the current marketing header behavior.

---

## Validated Problem Statement

From the screenshots and code inspection:

- The marketing header correctly shows `About Us`, `AI Lab`, `Our Projects`, `Data Compliance`, `Community`, `Blog`, `Contact`, and `Book a Coffee Chat`.
- The blog header is currently rendering only the logo in the desktop view.
- The blog mobile trigger is visually broken because the current bars lay out horizontally instead of as a stacked hamburger.
- The current blog menu expands inline inside the header instead of opening as a full-screen overlay above page content.
- Root cause: `blog/src/components/SiteHeader.astro` currently places the entire nav inside a closed `<details>` and hides the `<summary>` trigger on desktop, which can leave both the trigger and nav effectively unavailable.

## File Map

**Primary implementation target**
- Modify: `blog/src/components/SiteHeader.astro`
  - Render desktop nav/actions directly.
  - Render a distinct mobile trigger and a full-screen overlay panel.
  - Own the minimal client-side open/close behavior and scroll lock.

**Regression coverage**
- Modify: `tests/blog-shell.test.mjs`
  - Extend built-HTML assertions so the header regression cannot silently recur.

**Possible shell support**
- Modify only if needed: `blog/src/layouts/BlogShellLayout.astro`
  - Only for overlay stacking, body class hooks, or shell-level scroll-lock support.

**Reference only**
- Read: `src/components/layout/Header.tsx`
  - Use as the behavior reference for the marketing-page mobile overlay flow.

## Recommended Approach

Use one Astro header component with two rendering modes:

- **Desktop mode:** always-visible inline nav and CTA actions, no disclosure wrapper.
- **Mobile mode:** a real focusable trigger button and a fixed overlay menu that fills the viewport and overlays content.

Rejected alternatives:

- **Keep `details/summary` and patch the CSS:** too brittle; it already caused the missing desktop nav and broken hamburger presentation.
- **Mount the React marketing header directly in the blog:** unnecessary framework coupling for a narrow nav-state problem.

## Task 1: Lock the Regression in Tests First

**Files:**
- Modify: `tests/blog-shell.test.mjs`

- [ ] **Step 1: Add failing assertions for the header parity gap**

Add expectations that the built blog index and built blog post HTML include:

- full nav labels from `siteChrome.header.primaryNav`
- `Contact`
- `Book a Coffee Chat`
- a dedicated mobile trigger element
- a dedicated mobile overlay container

Also add expectations that the built output does **not** include the current `details/summary` menu structure.

Example assertion shape:

```js
assert.match(html, /data-menu-trigger/);
assert.match(html, /data-menu-overlay/);
assert.doesNotMatch(html, /<details[^>]*site-header__menu/);
assert.doesNotMatch(html, /<summary[^>]*site-header__menu-button/);
```

- [ ] **Step 2: Run the regression test and verify it fails**

Run:

```bash
./blog/node_modules/.bin/astro build --root blog
node --test tests/blog-shell.test.mjs
```

Expected:

- Astro build succeeds
- test fails because the current built HTML still contains the old header structure or is missing the new overlay-specific markers

- [ ] **Step 3: Keep the test dynamic about post selection**

Preserve the current dynamic lookup for a built post under `blog/dist/` so the regression test is not coupled to one hardcoded slug.

- [ ] **Step 4: Re-run the regression test to confirm the failure is about the header implementation, not the test harness**

Run:

```bash
node --test tests/blog-shell.test.mjs
```

Expected:

- still failing
- failure message points at missing new header structure or missing nav parity, not file lookup errors

## Task 2: Refactor the Blog Header for Desktop Parity

**Files:**
- Modify: `blog/src/components/SiteHeader.astro`

- [ ] **Step 1: Replace the `details/summary` structure with explicit desktop and mobile regions**

Render:

- logo
- desktop nav links
- desktop secondary CTA (`Contact`)
- desktop primary CTA (`Book a Coffee Chat`)
- separate mobile trigger button
- separate mobile overlay container

Target structure:

```astro
<header class="site-header">
  <div class="section-container site-header__inner">
    <a ... class="site-header__logo">...</a>
    <nav class="site-header__desktop-nav">...</nav>
    <div class="site-header__desktop-actions">...</div>
    <button type="button" class="site-header__mobile-trigger" data-menu-trigger ...>...</button>
  </div>
  <div class="site-header__mobile-overlay" data-menu-overlay hidden>...</div>
</header>
```

- [ ] **Step 2: Keep content sourced from `shared/site-chrome.js`**

Map over `header.primaryNav` for both desktop and mobile link sets. Do not re-hardcode labels or CTA text in the blog header.

- [ ] **Step 3: Make the desktop header always visible at wide breakpoints**

At desktop widths:

- nav must not depend on a collapsed state
- trigger must be hidden
- header height and density should visually track the marketing header more closely than the current stripped-down bar

- [ ] **Step 4: Rebuild and re-run the header regression**

Run:

```bash
./blog/node_modules/.bin/astro build --root blog
node --test tests/blog-shell.test.mjs
```

Expected:

- some or all nav parity assertions pass
- mobile overlay assertions may still fail until Task 3 is complete

## Task 3: Implement the Mobile Full-Screen Overlay Flow

**Files:**
- Modify: `blog/src/components/SiteHeader.astro`
- Modify only if needed: `blog/src/layouts/BlogShellLayout.astro`

- [ ] **Step 1: Replace the broken hamburger presentation with a proper stacked icon**

Use a real button and three vertically stacked bars. Do not rely on inline-flex row layout for the icon.

Example target:

```html
<button type="button" data-menu-trigger aria-expanded="false" aria-controls="blog-mobile-menu">
  <span></span>
  <span></span>
  <span></span>
</button>
```

CSS intent:

```css
.site-header__mobile-trigger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
}
```

- [ ] **Step 2: Add a minimal client-side open/close controller**

Use a tiny inline script in `SiteHeader.astro` to:

- open the overlay when the trigger is clicked
- close it when a close button, backdrop, or nav link is clicked
- keep `aria-expanded` in sync
- apply/remove a body scroll-lock class while the overlay is open

Keep this minimal and local to the header. Do not add React or a new framework integration just for menu state.

- [ ] **Step 3: Style the menu as a fixed full-screen overlay**

On small screens:

- overlay should be `position: fixed`
- overlay should cover the viewport with `inset: 0`
- overlay should sit above page content
- nav links should be vertically stacked and easy to tap
- CTA actions should appear inside the overlay, matching the marketing flow

On desktop:

- overlay should not render visually
- inline nav/actions should stay visible

- [ ] **Step 4: Verify that opening the menu does not push content down**

Run:

```bash
./blog/node_modules/.bin/astro build --root blog
node --test tests/blog-shell.test.mjs
```

Expected:

- test passes
- built HTML includes overlay markup and trigger markup
- old `details/summary` structure is gone

## Task 4: Visual Verification Against the Marketing Header

**Files:**
- Modify only if needed after verification: `blog/src/components/SiteHeader.astro`
- Modify only if needed after verification: `tests/blog-shell.test.mjs`

- [ ] **Step 1: Build the blog and assembled site shape**

Run:

```bash
./blog/node_modules/.bin/astro build --root blog
npm run build:main
node scripts/copy-blog.mjs
```

Expected:

- blog build passes
- main build passes
- `dist/blog/index.html` exists

- [ ] **Step 2: Verify desktop parity**

Check `/blog/` at desktop width against the marketing header screenshot.

Confirm:

- full nav item set is visible
- `Contact` is visible
- `Book a Coffee Chat` is visible
- header no longer looks like a reduced brand-only bar

- [ ] **Step 3: Verify mobile overlay behavior**

Check `/blog/` at a small-screen viewport.

Confirm:

- hamburger icon is three stacked bars, not horizontal dashes
- tapping the trigger opens a full-screen overlay
- overlay covers content instead of expanding inline
- nav links and CTA actions are accessible inside the overlay
- selecting a link closes the overlay

- [ ] **Step 4: Confirm one built post behaves the same way**

Check one generated blog post route and confirm:

- same mobile overlay behavior
- breadcrumb and “Back to Blog” affordances still render
- header and footer remain intact

## Verification Checklist

- [ ] `node --test tests/blog-shell.test.mjs` passes
- [ ] `./blog/node_modules/.bin/astro build --root blog` passes
- [ ] `npm run build:main` passes
- [ ] `node scripts/copy-blog.mjs` completes and produces `dist/blog/`
- [ ] `/blog/` desktop header matches the marketing header content set
- [ ] `/blog/` mobile menu opens as a full-screen overlay
- [ ] blog post route uses the same fixed-overlay menu behavior

## Out of Scope

- Changing footer structure or blog content cards
- Reworking `shared/site-chrome.js` content values
- Introducing React islands or Astro React integration for the menu
- Refactoring the marketing header itself

## Expected End State

- The blog header shows the full shared nav and CTA set on desktop.
- The blog mobile menu uses a proper hamburger trigger and fixed full-screen overlay.
- The blog menu behavior matches the marketing-page flow closely enough that the two screenshots no longer represent two different header systems.
