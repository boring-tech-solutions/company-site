import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const sharedModulePath = path.join(repoRoot, "shared", "site-chrome.js");
const sharedThemePath = path.join(repoRoot, "shared", "site-theme.css");
const headerPath = path.join(repoRoot, "src", "components", "layout", "Header.tsx");
const footerPath = path.join(repoRoot, "src", "components", "layout", "Footer.tsx");
const indexCssPath = path.join(repoRoot, "src", "index.css");

test("site chrome content contract and theme foundation are shared", async () => {
  assert.equal(existsSync(sharedModulePath), true, "shared/site-chrome.js should exist");
  assert.equal(existsSync(sharedThemePath), true, "shared/site-theme.css should exist");

  const { siteChrome } = await import(pathToFileURL(sharedModulePath).href);
  const headerSource = readFileSync(headerPath, "utf8");
  const footerSource = readFileSync(footerPath, "utf8");
  const indexCssSource = readFileSync(indexCssPath, "utf8");
  const sharedThemeSource = readFileSync(sharedThemePath, "utf8");

  assert.deepEqual(
    siteChrome.header.primaryNav.map((item) => item.label),
    ["About Us", "AI Lab", "Our Projects", "Data Compliance", "Community", "Blog"],
  );
  assert.ok(siteChrome.header.primaryNav.every((item) => item.linkType), "header links should declare linkType");
  assert.equal(siteChrome.header.primaryCta.label, "Book a Coffee Chat");
  assert.equal(siteChrome.header.secondaryCta.href, "/contact");
  assert.equal(siteChrome.footer.brand.location, "Edmonton, Alberta");
  assert.equal(siteChrome.footer.connect.email, "hello@boringtechsolutions.com");
  assert.equal(siteChrome.footer.connect.linkedin.label, "LinkedIn");
  assert.deepEqual(
    siteChrome.footer.sections.map((section) => section.heading),
    ["Services", "Company"],
  );
  assert.ok(
    siteChrome.footer.sections.flatMap((section) => section.links).every((item) => item.linkType),
    "footer links should declare linkType",
  );
  assert.deepEqual(siteChrome.footer.legal, [], "footer should not ship fake legal links");

  assert.doesNotMatch(headerSource, /===\s*"\/blog\/"/);
  assert.doesNotMatch(footerSource, /startsWith\(\s*"\/blog\/"\s*\)/);
  assert.doesNotMatch(footerSource, /href:\s*"#"/);
  assert.match(indexCssSource, /site-theme\.css/);
  assert.match(sharedThemeSource, /:root\s*\{/);
  assert.match(sharedThemeSource, /\.section-container\s*\{/);
  assert.match(sharedThemeSource, /font-family:\s*"Playfair Display",\s*serif;/);
  assert.doesNotMatch(sharedThemeSource, /font-family:\s*"play-fair",\s*serif;/i);
});
