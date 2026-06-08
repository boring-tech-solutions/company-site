# Deploy: Serve Astro Blog in Production

**Date:** 2026-06-03
**Branch:** feature+astro-static-blog
**Scope:** Wire the Astro static blog output into the existing S3 + CloudFront deploy pipeline

---

## Goal

Deploy the Astro-generated static blog so that `/blog/` and all post URLs serve correctly in production with proper caching behaviour and no stale files left behind after content changes.

---

## Architecture

The site runs on S3 static website hosting behind CloudFront. S3 website endpoints handle directory indexes natively: a request for `/blog/` resolves to `dist/blog/index.html` without any CloudFront behaviour rules or Lambda@Edge. S3 also automatically redirects bare `/blog` to `/blog/`. Because Astro outputs fully-qualified static files into `dist/blog/`, the blog routes take priority over the React SPA's error-document fallback — no routing conflicts.

This means the existing deploy pipeline (s3_sync → CloudFront invalidation) works for the blog without structural changes. The gaps identified below are operational improvements only.

---

## Tasks

### 1. Pre-upload verification

- [ ] Add an Ansible task in `deploy/roles/publish_changes/tasks/main.yml` that asserts `dist/blog/index.html` exists before any s3_sync runs
- [ ] Fail the playbook with a clear message if the file is absent (prevents a silent partial deploy where the blog build was skipped)

### 2. Two-pass s3_sync with Cache-Control headers

The current single-pass sync uploads all files with no `Cache-Control` header. CloudFront will apply its default TTL (often 24 h+), meaning new blog posts won't appear until the cache naturally expires after a `/*` invalidation — or won't appear at all if the invalidation fires before the upload finishes.

- [ ] Split the `public` prefix sync into two passes:
  - [ ] **Pass A — hashed assets** (`_astro/`, images, fonts): sync with `cache_control: "public, max-age=31536000, immutable"` — these filenames include content hashes so long caching is safe
  - [ ] **Pass B — HTML, XML, txt** (`*.html`, `*.xml`, `*.txt`): sync with `cache_control: "no-cache, no-store, must-revalidate"` — ensures browsers and CloudFront always revalidate
- [ ] Verify that the existing React SPA HTML files (`index.html`, any root-level HTML) are covered by Pass B

### 3. Add `delete: true` to the public prefix sync

- [ ] Add `delete: true` to the `public` prefix s3_sync task (Pass B, or both passes)
- [ ] Confirm `delete: true` is NOT applied to the timestamp-prefixed sync — that prefix is an archive and should retain all uploaded files

### 4. CloudFront invalidation — no change required

- [ ] Confirm the existing `cloudfront_invalidation` task targeting `['/*']` on distribution `E1CFFLR6DXININ` is left unchanged
- [ ] Note: `/*` covers all blog paths including `/blog/`, `/blog/<slug>/index.html`, and `/blog/rss.xml`. It is sufficient for this use case. A targeted `/blog/*` invalidation can be explored as a future optimisation if invalidation costs become a concern.

---

## Out of Scope

The following were considered and intentionally deferred — they are not required for the blog to function correctly:

- **Separate CloudFront behaviour for `/blog*`** — not needed; S3 website endpoint handles directory indexes natively
- **Lambda@Edge for 404 handling** — nonexistent blog paths will fall through to the SPA error-document, which is acceptable for now
- **CloudFront Function for trailing-slash normalisation** — S3 already redirects `/blog` → `/blog/`; edge normalisation is a future polish item

---

## Verification

After deploying, confirm the following:

- [ ] `curl -I https://boringtechsolutions.com/blog/` returns `200` with `Content-Type: text/html`
- [ ] `curl -IL https://boringtechsolutions.com/blog` follows a redirect to `/blog/` and returns `200`
- [ ] A sample post URL (e.g. `/blog/some-post/`) returns `200`
- [ ] `/blog/rss.xml` (if generated) returns `200` with `Content-Type: application/rss+xml` or `application/xml`
- [ ] Response headers for an HTML file include `Cache-Control: no-cache` (or equivalent)
- [ ] Response headers for a hashed asset (e.g. `/_astro/index.XXXXXXXX.js`) include `Cache-Control: max-age=31536000`
- [ ] S3 bucket does not retain HTML files for posts that were removed/renamed (verify via AWS console or `aws s3 ls` after a content removal)

---

## Update (2026-06-06): Fix `/blog/` AccessDenied — CloudFront Function

### Problem

CloudFront distribution `E1CFFLR6DXININ` uses an **S3 REST origin** (not the S3 website endpoint) with Origin Path `/public` and a Default Root Object of `index.html`. The Default Root Object resolves only the distribution root `/` → `public/index.html`. Subdirectory indexes are NOT resolved, so a request for `/blog/` becomes an S3 GET for the prefix `public/blog/` (not an object) and S3 returns `403 AccessDenied`. The blog files upload correctly; this is purely an edge index-resolution gap.

### Fix: viewer-request CloudFront Function

`deploy/cloudfront/rewrite-index.js` rewrites directory-style URIs to their `index.html` object:
- `/blog/` → `/blog/index.html`
- `/blog/<slug>/` → `/blog/<slug>/index.html`
- last path segment containing a `.` (e.g. `/blog/rss.xml`, hashed assets) is left untouched.

The `publish_changes` Ansible role creates-or-updates the function and publishes it to LIVE on every deploy (idempotent; it does NOT modify the distribution, so it is safe to rerun).

### One-time distribution association (manual)

Associating the function with the distribution's default cache behavior is a one-time operator step (kept out of the playbook because a bad `update-distribution` can break the whole site):

```bash
# 1. Get the published function ARN
aws cloudfront describe-function --name bts-rewrite-index --stage LIVE \
  --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text

# 2. Fetch current distribution config + ETag
aws cloudfront get-distribution-config --id E1CFFLR6DXININ > dist-config.json
# note the top-level "ETag" value

# 3. In dist-config.json, under .DistributionConfig.DefaultCacheBehavior, set:
#   "FunctionAssociations": {
#     "Quantity": 1,
#     "Items": [
#       { "EventType": "viewer-request", "FunctionARN": "<ARN from step 1>" }
#     ]
#   }
# Save just the DistributionConfig object to dist-config-only.json

# 4. Apply
aws cloudfront update-distribution \
  --id E1CFFLR6DXININ \
  --if-match <ETag from step 2> \
  --distribution-config file://dist-config-only.json

# 5. Wait until Status=Deployed, then verify
curl -I https://boringtechsolutions.com/blog/
```

### Rollback

Set `DefaultCacheBehavior.FunctionAssociations.Quantity` back to `0` (and empty `Items`) and re-run `update-distribution` with the current ETag.

### Verification

- `curl -I https://boringtechsolutions.com/blog/` → `200`, `Content-Type: text/html`
- `curl -IL https://boringtechsolutions.com/blog` → resolves to `/blog/`, `200`
- `curl -I https://boringtechsolutions.com/blog/voice-agents-human-in-the-loop/` → `200`
- `curl -I https://boringtechsolutions.com/blog/rss.xml` → `200`, XML content type
- `curl -I https://boringtechsolutions.com/` → still `200` (no regression)
