# Issue 4 Sitemap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a static XML sitemap for the current public indexable routes and reference it from `robots.txt`.

**Architecture:** This React/Vite app serves files from `public/` as root-level static assets, so `public/sitemap.xml` will deploy as `/sitemap.xml` and `public/robots.txt` will deploy as `/robots.txt`. Keep the change static and explicit; do not add sitemap generators, route discovery code, SEO frameworks, CI changes, or new abstractions for this issue.

**Tech Stack:** React 18, Vite 7, TypeScript, static assets in `public/`, shell verification with `npm run build` and `grep`/`test`.

---

## Exact Files

- Create: `public/sitemap.xml`
  - Responsibility: Static XML sitemap containing only the issue-approved absolute canonical URLs.
- Modify: `public/robots.txt`
  - Responsibility: Existing crawler allow rules plus one final `Sitemap:` directive.
- Do not modify: `src/App.tsx`, route components, package scripts, CI config, lint config, generated `dist/` files, or any unrelated `blog/` directory.

## Current Route Scope

`src/App.tsx` includes these relevant routes:

- Include in sitemap:
  - `https://www.boringtechsolutions.com/`
  - `https://www.boringtechsolutions.com/about`
  - `https://www.boringtechsolutions.com/ai-lab`
  - `https://www.boringtechsolutions.com/our-past-work`
  - `https://www.boringtechsolutions.com/data-compliance`
  - `https://www.boringtechsolutions.com/community`
  - `https://www.boringtechsolutions.com/contact`
- Exclude unless the issue scope changes:
  - `https://www.boringtechsolutions.com/contact/success`
  - `https://www.boringtechsolutions.com/govora-sales`

## Implementation Tasks

### Task 1: Add Static Sitemap

**Files:**
- Create: `public/sitemap.xml`

- [ ] **Step 1: Create `public/sitemap.xml` with the exact static XML**

Write this complete file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.boringtechsolutions.com/</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/about</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/ai-lab</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/our-past-work</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/data-compliance</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/community</loc>
  </url>
  <url>
    <loc>https://www.boringtechsolutions.com/contact</loc>
  </url>
</urlset>
```

- [ ] **Step 2: Verify the source sitemap contains exactly seven canonical URLs**

Run:

```bash
grep -c '<loc>https://www.boringtechsolutions.com' public/sitemap.xml
```

Expected:

```text
7
```

- [ ] **Step 3: Verify excluded routes are absent from the source sitemap**

Run:

```bash
! grep -E 'contact/success|govora-sales' public/sitemap.xml
```

Expected: command exits with status `0` and prints nothing.

### Task 2: Add Robots Sitemap Directive

**Files:**
- Modify: `public/robots.txt`

- [ ] **Step 1: Append the sitemap directive to the bottom of `public/robots.txt`**

Keep the existing allow rules unchanged and add one blank line plus this final line:

```text
Sitemap: https://www.boringtechsolutions.com/sitemap.xml
```

The complete file should be:

```text
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://www.boringtechsolutions.com/sitemap.xml
```

- [ ] **Step 2: Verify the directive exists exactly once in source**

Run:

```bash
grep -c '^Sitemap: https://www.boringtechsolutions.com/sitemap.xml$' public/robots.txt
```

Expected:

```text
1
```

- [ ] **Step 3: Verify the directive is the final non-empty line**

Run:

```bash
awk 'NF { line=$0 } END { print line }' public/robots.txt
```

Expected:

```text
Sitemap: https://www.boringtechsolutions.com/sitemap.xml
```

### Task 3: Build and Static Output Verification

**Files:**
- Verify: `dist/sitemap.xml`
- Verify: `dist/robots.txt`

- [ ] **Step 1: Build the Vite app**

Run:

```bash
npm run build
```

Expected: build exits with status `0`. Vite copies `public/sitemap.xml` and `public/robots.txt` into `dist/`.

- [ ] **Step 2: Verify the built sitemap exists**

Run:

```bash
test -f dist/sitemap.xml
```

Expected: command exits with status `0`.

- [ ] **Step 3: Verify the built sitemap contains all exact URLs**

Run:

```bash
grep -F '<loc>https://www.boringtechsolutions.com/</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/about</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/ai-lab</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/our-past-work</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/data-compliance</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/community</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/contact</loc>' dist/sitemap.xml
```

Expected: each command prints the matching line and exits with status `0`.

- [ ] **Step 4: Verify the built sitemap has no excluded routes**

Run:

```bash
! grep -E 'contact/success|govora-sales' dist/sitemap.xml
```

Expected: command exits with status `0` and prints nothing.

- [ ] **Step 5: Verify every sitemap URL is an absolute canonical URL**

Run:

```bash
grep -E '<loc>/(about|ai-lab|our-past-work|data-compliance|community|contact)?</loc>' dist/sitemap.xml
```

Expected: command exits with status `1` and prints nothing.

- [ ] **Step 6: Verify the built robots file includes the final sitemap directive**

Run:

```bash
grep -c '^Sitemap: https://www.boringtechsolutions.com/sitemap.xml$' dist/robots.txt
awk 'NF { line=$0 } END { print line }' dist/robots.txt
```

Expected:

```text
1
Sitemap: https://www.boringtechsolutions.com/sitemap.xml
```

## Implementation Subagent Success Criteria

Implementation is successful only when all of the following are true:

- Only `public/sitemap.xml` and `public/robots.txt` are edited for the site change.
- `public/sitemap.xml` exists and contains exactly these seven `<loc>` values:
  - `https://www.boringtechsolutions.com/`
  - `https://www.boringtechsolutions.com/about`
  - `https://www.boringtechsolutions.com/ai-lab`
  - `https://www.boringtechsolutions.com/our-past-work`
  - `https://www.boringtechsolutions.com/data-compliance`
  - `https://www.boringtechsolutions.com/community`
  - `https://www.boringtechsolutions.com/contact`
- Every sitemap URL is absolute and canonical, using the `https://www.boringtechsolutions.com` host.
- `public/sitemap.xml` does not list `/contact/success`, `/govora-sales`, non-public routes, conversion confirmation pages, or thank-you pages unless the issue scope changes.
- `public/robots.txt` preserves the existing user-agent allow rules and ends with `Sitemap: https://www.boringtechsolutions.com/sitemap.xml` as the final non-empty line.
- `npm run build` exits successfully.
- `dist/sitemap.xml` exists after build and contains the exact seven sitemap URLs.
- `dist/robots.txt` includes the sitemap directive exactly once.
- Do not treat `npm run lint` as a required success gate for this issue because the baseline lint failure is pre-existing in `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`, and `tailwind.config.ts`.

## Review Subagent Success Criteria

Review is successful only when the reviewer independently verifies:

- The diff is narrow: no implementation edits outside `public/sitemap.xml` and `public/robots.txt`.
- The sitemap uses valid XML shape with a `urlset` root and the sitemap protocol namespace `http://www.sitemaps.org/schemas/sitemap/0.9`.
- The sitemap contains exactly seven `<url>` entries and exactly seven `<loc>` entries.
- The sitemap contains every issue-approved absolute canonical URL and no other URL.
- `/contact/success` and `/govora-sales` are absent unless the issue was explicitly amended.
- `robots.txt` has one `Sitemap: https://www.boringtechsolutions.com/sitemap.xml` directive and that directive is at the bottom of the file.
- `npm run build` passes and the built output contains `dist/sitemap.xml` and `dist/robots.txt`.
- Shell assertions against `dist/sitemap.xml` and `dist/robots.txt` pass, including URL count, exact URL presence, excluded route absence, and final robots directive placement.
- Any observed `npm run lint` failure is checked against the known baseline files and is not attributed to issue #4 unless new lint errors appear in `public/` handling or changed files.

## Verification Commands

Run these commands after implementation:

```bash
npm run build
test -f dist/sitemap.xml
grep -c '<loc>https://www.boringtechsolutions.com' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/about</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/ai-lab</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/our-past-work</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/data-compliance</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/community</loc>' dist/sitemap.xml
grep -F '<loc>https://www.boringtechsolutions.com/contact</loc>' dist/sitemap.xml
! grep -E 'contact/success|govora-sales' dist/sitemap.xml
grep -E '<loc>/(about|ai-lab|our-past-work|data-compliance|community|contact)?</loc>' dist/sitemap.xml
grep -c '^Sitemap: https://www.boringtechsolutions.com/sitemap.xml$' dist/robots.txt
awk 'NF { line=$0 } END { print line }' dist/robots.txt
```

Expected results:

- `npm run build` exits `0`.
- `test -f dist/sitemap.xml` exits `0`.
- The sitemap URL count command prints `7`.
- Each exact `grep -F` URL check prints one matching `<loc>` line.
- The excluded route command exits `0` and prints nothing.
- The relative URL check exits `1` and prints nothing.
- The robots directive count prints `1`.
- The final `awk` command prints `Sitemap: https://www.boringtechsolutions.com/sitemap.xml`.
