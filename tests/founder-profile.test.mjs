import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const profilePagePath = path.join(repoRoot, "src", "pages", "CreigPhiri.tsx");
const profileDataPath = path.join(repoRoot, "src", "data", "founderProfiles.ts");
const profileTemplatePath = path.join(repoRoot, "src", "components", "about", "FounderProfileTemplate.tsx");
const teamSectionPath = path.join(repoRoot, "src", "components", "about", "TeamSection.tsx");
const routeSeoPath = path.join(repoRoot, "src", "lib", "routeSeo.ts");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");

const readSource = (filePath) => readFileSync(filePath, "utf8");
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const creigRoute = "/about/creig-phiri";
const creigTitle = "Creig Phiri | Founder at Boring Tech Solutions";
const creigDescription =
  "Meet Creig Phiri, founder at Boring Tech Solutions and systems architect focused on practical AI, cloud architecture, data governance, and community technology.";

test("Creig founder profile page exists and is routed", () => {
  assert.equal(existsSync(profilePagePath), true, "src/pages/CreigPhiri.tsx should exist");

  const appSource = readSource(appPath);
  assert.match(appSource, /import\s+CreigPhiri\s+from\s+["']\.\/pages\/CreigPhiri["'];?/);
  assert.match(
    appSource,
    new RegExp(`<Route\\s+path=["']${escapeRegex(creigRoute)}["']\\s+element=\\{<CreigPhiri\\s*/>\\}\\s*/>`),
    "App.tsx should route /about/creig-phiri to CreigPhiri",
  );
});

test("Creig profile data pins SEO, H1 source, copy, and required internal links", () => {
  const dataSource = readSource(profileDataPath);

  assert.match(dataSource, /name:\s*"Creig Phiri"/, "profile data should define the H1 name");
  assert.match(dataSource, new RegExp(`title:\\s*"${escapeRegex(creigTitle)}"`));
  assert.match(dataSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(creigDescription)}"`));

  for (const href of ["/", "/about", "/data-compliance", "/case-studies/quizapp", "/about/shradha-maira"]) {
    assert.match(dataSource, new RegExp(`href:\\s*"${escapeRegex(href)}"`), `profile data should link to ${href}`);
  }

  assert.doesNotMatch(
    dataSource,
    /\boffice\b|\bheadquarters\b|\bworld[- ]class\b|\bguarantee(?:d|s)?\b|\bbest\b/i,
    "profile copy should avoid office-address claims and exaggerated language",
  );
});

test("Creig profile template renders profile SEO, H1, links, and Person JSON-LD", () => {
  const pageSource = readSource(profilePagePath);
  const templateSource = readSource(profileTemplatePath);

  assert.match(pageSource, /FounderProfileTemplate/, "Creig page should use the shared founder profile template");
  assert.match(templateSource, /usePageSeo/, "founder template should set page SEO");
  assert.match(templateSource, /<h1[^>]*>[\s\S]*\{profile\.name\}/, "founder template should render profile.name as the H1");
  assert.match(templateSource, /application\/ld\+json/, "founder template should render JSON-LD");
  assert.match(templateSource, /"@type":\s*"Person"/, "founder template should include Person schema");
  assert.match(templateSource, /profile\.relatedLinks\.map/, "founder template should render internal links from data");
});

test("route SEO and sitemap expose the Creig founder profile", () => {
  const routeSeoSource = readSource(routeSeoPath);
  const sitemapSource = readSource(sitemapPath);

  assert.match(routeSeoSource, new RegExp(`"${escapeRegex(creigRoute)}"`));
  assert.match(routeSeoSource, new RegExp(`title:\\s*"${escapeRegex(creigTitle)}"`));
  assert.match(routeSeoSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(creigDescription)}"`));
  assert.match(
    sitemapSource,
    /https:\/\/www\.boringtechsolutions\.com\/about\/creig-phiri/,
    "sitemap should include the public Creig profile URL",
  );
});

test("About team area links to the Creig profile", () => {
  const teamSectionSource = readSource(teamSectionPath);

  assert.match(teamSectionSource, /profilePath:\s*"\/about\/creig-phiri"/);
  assert.match(teamSectionSource, /View \$\{member\.name\} profile/, "profile link should be accessible");
});
