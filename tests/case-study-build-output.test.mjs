import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import vm from "node:vm";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const distPath = path.join(repoRoot, "dist");
const caseStudiesPath = path.join(repoRoot, "shared", "case-studies.js");
const previewPath = path.join(repoRoot, "src", "components", "home", "CaseStudyPreview.tsx");
const rewritePath = path.join(repoRoot, "deploy", "cloudfront", "rewrite-index.js");

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertSingleMatch(html, pattern, message) {
  const matches = html.match(new RegExp(pattern.source, `${pattern.flags}g`)) ?? [];
  assert.equal(matches.length, 1, message);
}

function rewriteUri(uri) {
  const source = `${readText(rewritePath)}; handler({ request: { uri: ${JSON.stringify(uri)} } }).uri;`;
  return vm.runInNewContext(source);
}

test("production build emits crawlable case study pages and internal links", async () => {
  const { caseStudies } = await import(pathToFileURL(caseStudiesPath).href);

  const builtRoutes = new Set();
  const titles = new Set();
  const descriptions = new Set();

  for (const study of caseStudies) {
    const htmlPath = path.join(distPath, "case-studies", study.slug, "index.html");
    assert.equal(existsSync(htmlPath), true, `dist should include ${study.path}/index.html`);

    const html = readText(htmlPath);
    assertSingleMatch(html, /<title>[\s\S]*?<\/title>/, `${study.slug} should have one title`);
    assertSingleMatch(
      html,
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `${study.slug} should have one meta description`,
    );
    assertSingleMatch(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `${study.slug} should have one canonical link`,
    );
    assertSingleMatch(
      html,
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `${study.slug} should have one og:url`,
    );
    assertSingleMatch(
      html,
      /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
      `${study.slug} should have one twitter:url`,
    );

    assert.match(html, new RegExp(`<title>${escapeRegExp(study.seoTitle)}</title>`));
    assert.match(
      html,
      new RegExp(`<meta name="description" content="${escapeRegExp(study.seoDescription)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<link rel="canonical" href="${escapeRegExp(study.canonicalUrl)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta property="og:title" content="${escapeRegExp(study.seoTitle)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta property="og:description" content="${escapeRegExp(study.seoDescription)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta property="og:url" content="${escapeRegExp(study.canonicalUrl)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta name="twitter:title" content="${escapeRegExp(study.seoTitle)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta name="twitter:description" content="${escapeRegExp(study.seoDescription)}"\\s*/?>`),
    );
    assert.match(
      html,
      new RegExp(`<meta name="twitter:url" content="${escapeRegExp(study.canonicalUrl)}"\\s*/?>`),
    );

    titles.add(study.seoTitle);
    descriptions.add(study.seoDescription);
    builtRoutes.add(study.path);
  }

  assert.equal(titles.size, caseStudies.length, "case study titles should be unique in generated HTML");
  assert.equal(
    descriptions.size,
    caseStudies.length,
    "case study descriptions should be unique in generated HTML",
  );

  const assetJs = readdirSync(path.join(distPath, "assets"))
    .filter((fileName) => fileName.endsWith(".js"))
    .map((fileName) => readText(path.join(distPath, "assets", fileName)))
    .join("\n");

  for (const route of builtRoutes) {
    assert.match(assetJs, new RegExp(escapeRegExp(route)), `built app should include internal link ${route}`);
  }
  const previewSource = readText(previewPath);
  assert.doesNotMatch(
    previewSource,
    /DialogContent/,
    "case study cards should not depend on dialog-only detail content",
  );
});

test("sitemaps, robots, and edge rewrites expose case study URLs", async () => {
  const { caseStudies } = await import(pathToFileURL(caseStudiesPath).href);
  const sitemap = readText(path.join(distPath, "sitemap.xml"));
  const robots = readText(path.join(distPath, "robots.txt"));

  for (const study of caseStudies) {
    assert.match(
      sitemap,
      new RegExp(`<loc>${escapeRegExp(study.canonicalUrl)}</loc>`),
      `root sitemap should include ${study.canonicalUrl}`,
    );
  }

  assert.match(robots, /Sitemap:\s*https:\/\/boringtechsolutions\.com\/sitemap\.xml/);
  assert.match(robots, /Sitemap:\s*https:\/\/boringtechsolutions\.com\/blog\/sitemap\.xml/);

  assert.equal(rewriteUri("/blog"), "/blog/index.html");
  assert.equal(rewriteUri("/blog/"), "/blog/index.html");
  assert.equal(rewriteUri("/blog/example-post"), "/blog/example-post/index.html");
  assert.equal(rewriteUri("/blog/rss.xml"), "/blog/rss.xml");
  assert.equal(rewriteUri("/case-studies/aify"), "/case-studies/aify/index.html");
  assert.equal(rewriteUri("/case-studies/govora/"), "/case-studies/govora/index.html");
  assert.equal(rewriteUri("/case-studies/quizapp/index.html"), "/case-studies/quizapp/index.html");
  assert.equal(rewriteUri("/about"), "/about");
});
