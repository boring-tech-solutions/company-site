import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const sharedModulePath = path.join(repoRoot, "shared", "site-chrome.js");
const blogDistPath = path.join(repoRoot, "blog", "dist");
const blogIndexPath = path.join(repoRoot, "blog", "dist", "index.html");

function findSamplePostPath() {
  for (const entry of readdirSync(blogDistPath)) {
    const entryPath = path.join(blogDistPath, entry);
    if (!statSync(entryPath).isDirectory() || entry.startsWith("_")) {
      continue;
    }

    const indexPath = path.join(entryPath, "index.html");
    try {
      return readFileSync(indexPath, "utf8") ? indexPath : null;
    } catch {}
  }

  throw new Error("Could not find a built blog post HTML file in blog/dist");
}

const samplePostPath = findSamplePostPath();

function readBuiltHtml(filePath) {
  return readFileSync(filePath, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getShellRegion(html, pattern, regionName) {
  const match = html.match(pattern);

  assert.ok(match, `built HTML should include ${regionName}`);

  return match[0];
}

function assertTextPresent(regionHtml, text, message) {
  assert.match(regionHtml, new RegExp(`>${escapeRegExp(text)}<`), message);
}

function assertSharedHeaderShell(html, siteChrome, pageName) {
  const headerHtml = getShellRegion(
    html,
    /<header class="site-header"[\s\S]*?<\/header>/,
    `${pageName} site header`,
  );

  for (const item of siteChrome.header.primaryNav) {
    assertTextPresent(headerHtml, item.label, `${pageName} should include header nav label ${item.label}`);
  }

  assertTextPresent(
    headerHtml,
    siteChrome.header.secondaryCta.label,
    `${pageName} should include the Contact header action`,
  );
  assertTextPresent(
    headerHtml,
    siteChrome.header.primaryCta.label,
    `${pageName} should include the Book a Coffee Chat header action`,
  );
  assert.match(
    headerHtml,
    /site-header__desktop-nav/,
    `${pageName} should include always-visible desktop nav markup`,
  );
  assert.match(
    headerHtml,
    /site-header__desktop-actions/,
    `${pageName} should include always-visible desktop action markup`,
  );
  assert.match(
    headerHtml,
    /site-header__mobile-trigger/,
    `${pageName} should include dedicated mobile trigger markup`,
  );
  assert.match(
    headerHtml,
    /site-header__mobile-overlay/,
    `${pageName} should include dedicated mobile overlay markup`,
  );
  assert.match(
    headerHtml,
    /<button[^>]*site-header__mobile-trigger[^>]*aria-expanded="false"[^>]*aria-controls="blog-mobile-menu"/,
    `${pageName} should ship a real mobile trigger button with closed-state accessibility attributes`,
  );
  assert.match(
    headerHtml,
    /site-header__mobile-overlay[^>]*hidden/,
    `${pageName} should ship the mobile overlay hidden by default`,
  );
  assert.match(
    headerHtml,
    /site-header__mobile-backdrop/,
    `${pageName} should include a dedicated mobile overlay backdrop`,
  );
  assert.match(
    headerHtml,
    /site-header__mobile-close/,
    `${pageName} should include a dedicated mobile close control`,
  );
  assert.doesNotMatch(
    headerHtml,
    /<details\b/,
    `${pageName} should not use the old details menu wrapper`,
  );
  assert.doesNotMatch(
    headerHtml,
    /<summary\b/,
    `${pageName} should not use the old summary menu trigger`,
  );
  assert.match(
    html,
    /site-header--menu-open/,
    `${pageName} should include a body scroll-lock state hook for the mobile menu`,
  );
  assert.match(
    html,
    /setAttribute\("aria-expanded", String\(isOpen\)\)/,
    `${pageName} should keep aria-expanded in sync with menu state`,
  );
}

test("built blog index HTML ships shared nav and footer content", async () => {
  const { siteChrome } = await import(pathToFileURL(sharedModulePath).href);
  const html = readBuiltHtml(blogIndexPath);
  const footerHtml = getShellRegion(html, /<footer class="site-footer"[\s\S]*?<\/footer>/, "site footer");

  assertSharedHeaderShell(html, siteChrome, "index");
  assertTextPresent(footerHtml, siteChrome.footer.cta.secondaryAction.label);
  assert.match(footerHtml, new RegExp(escapeRegExp(siteChrome.footer.brand.location)));
  assert.match(footerHtml, new RegExp(escapeRegExp(siteChrome.footer.connect.email)));
  assertTextPresent(footerHtml, siteChrome.footer.connect.linkedin.label);
  assert.match(html, /href="\/blog\/rss\.xml"/, "index should preserve RSS discoverability");
  assert.doesNotMatch(
    html,
    /Talk through the mess before you automate it\./,
    "index should not ship hardcoded footer eyebrow copy",
  );

  assert.doesNotMatch(html, />Home</);
  assert.doesNotMatch(html, />About</);
  assert.doesNotMatch(html, />Our Work</);
});

test("built blog post HTML ships shared shell and preserves article affordances", async () => {
  const { siteChrome } = await import(pathToFileURL(sharedModulePath).href);
  const html = readBuiltHtml(samplePostPath);
  const footerHtml = getShellRegion(html, /<footer class="site-footer"[\s\S]*?<\/footer>/, "site footer");

  assertSharedHeaderShell(html, siteChrome, "post");
  assertTextPresent(footerHtml, siteChrome.footer.cta.secondaryAction.label);
  assert.match(footerHtml, new RegExp(escapeRegExp(siteChrome.footer.brand.location)));
  assert.match(html, /aria-label="Breadcrumb"/);
  assert.match(html, />← Back to Blog</);
  assert.match(html, /BlogPosting/);
  assert.match(html, /BreadcrumbList/);
  assert.doesNotMatch(
    html,
    /Talk through the mess before you automate it\./,
    "post should not ship hardcoded footer eyebrow copy",
  );
  assert.doesNotMatch(html, />RSS</, "post should not render a footer RSS link");

  assert.doesNotMatch(html, />Home</);
  assert.doesNotMatch(html, />About</);
  assert.doesNotMatch(html, />Our Work</);
});
