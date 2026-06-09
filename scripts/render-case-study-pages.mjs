import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { caseStudies } from "../shared/case-studies.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");
const sourceHtmlPath = join(distDir, "index.html");

if (!existsSync(sourceHtmlPath)) {
  console.error('ERROR: dist/index.html is missing.');
  console.error('Run "npm run build:main" before rendering case study pages.');
  process.exit(1);
}

const sourceHtml = readFileSync(sourceHtmlPath, "utf8");

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function countMatches(html, pattern) {
  const globalPattern = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`);
  return [...html.matchAll(globalPattern)].length;
}

function replaceUnique(html, pattern, replacement, label) {
  const matches = countMatches(html, pattern);
  if (matches !== 1) {
    throw new Error(`Expected exactly one ${label} tag, found ${matches}.`);
  }

  return html.replace(pattern, replacement);
}

function renderCaseStudyPage(study) {
  let html = sourceHtml;
  const seoTitle = escapeHtml(study.seoTitle);
  const seoDescription = escapeHtml(study.seoDescription);
  const canonicalUrl = escapeHtml(study.canonicalUrl);

  html = replaceUnique(html, /<title>[\s\S]*?<\/title>/, `<title>${seoTitle}</title>`, "title");
  html = replaceUnique(
    html,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${seoDescription}" />`,
    "meta description",
  );
  html = replaceUnique(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    "canonical link",
  );
  html = replaceUnique(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${seoTitle}" />`,
    "og:title",
  );
  html = replaceUnique(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${seoDescription}" />`,
    "og:description",
  );
  html = replaceUnique(
    html,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    "og:url",
  );
  html = replaceUnique(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${seoTitle}" />`,
    "twitter:title",
  );
  html = replaceUnique(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${seoDescription}" />`,
    "twitter:description",
  );
  html = replaceUnique(
    html,
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${canonicalUrl}" />`,
    "twitter:url",
  );

  return html;
}

for (const study of caseStudies) {
  const targetDir = join(distDir, "case-studies", study.slug);
  mkdirSync(targetDir, { recursive: true });
  const targetPath = join(targetDir, "index.html");
  writeFileSync(targetPath, renderCaseStudyPage(study));
  console.log(`Rendered ${study.path} -> ${targetPath}`);
}
