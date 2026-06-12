import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const routeSeoPath = path.join(repoRoot, "src", "lib", "routeSeo.ts");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");
const communitySectionPath = path.join(repoRoot, "src", "components", "home", "CommunitySection.tsx");
const pagePath = path.join(repoRoot, "src", "pages", "NorthernLanding.tsx");

const readSource = (filePath) => readFileSync(filePath, "utf8");

test("Northern Landing route, page, SEO, sitemap, and community surface are wired up", () => {
  assert.equal(existsSync(pagePath), true, "src/pages/NorthernLanding.tsx should exist");

  const appSource = readSource(appPath);
  const routeSeoSource = readSource(routeSeoPath);
  const sitemapSource = readSource(sitemapPath);
  const communitySectionSource = readSource(communitySectionPath);
  const pageSource = readSource(pagePath);

  assert.match(appSource, /import\s+NorthernLanding\s+from\s+["']\.\/pages\/NorthernLanding["'];?/);
  assert.match(
    appSource,
    /<Route\s+path=["']\/community\/northern-landing["']\s+element=\{<NorthernLanding\s*\/>\}\s*\/>/,
  );
  assert.match(routeSeoSource, /"\/community\/northern-landing"/);
  assert.match(routeSeoSource, /Northern Landing \| BTS Community Project/);
  assert.match(
    routeSeoSource,
    /A BTS community project shaped by Creig and Shradha's lived experience arriving in Canada, focused on trusted newcomer information, learning tools, civic participation, and navigation support\./,
  );
  assert.match(sitemapSource, /https:\/\/www\.boringtechsolutions\.com\/community\/northern-landing/);
  assert.match(communitySectionSource, /newcomer learning, trusted information, and practical help/);
  assert.match(communitySectionSource, /\/community\/northern-landing/);
  assert.match(pageSource, /Creig and Shradha's lived\s+experience arriving in Canada as new immigrants/);
  assert.match(pageSource, /helping\s+people\s+find\s+trusted information/i);
  assert.match(pageSource, /access\s+learning\s+tools/i);
  assert.match(pageSource, /prepare\s+for\s+civic\s+participation/i);
  assert.match(pageSource, /navigate\s+newcomer\s+systems/i);
  assert.match(pageSource, /practical, accessible, and community-focused/);
  assert.match(pageSource, /not to turn it into a product pitch/);
  assert.match(pageSource, /https:\/\/northernlanding\.org/);
  assert.match(pageSource, /\/case-studies\/quizapp/);
  assert.match(pageSource, /\/about\/creig-phiri/);
  assert.match(pageSource, /\/about\/shradha-maira/);
  assert.match(pageSource, /community project shaped by Creig and Shradha's lived\s+experience arriving in Canada as new immigrants/i);
});
