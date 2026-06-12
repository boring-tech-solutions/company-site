import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const creigPagePath = path.join(repoRoot, "src", "pages", "CreigPhiri.tsx");
const shradhaPagePath = path.join(repoRoot, "src", "pages", "ShradhaMaira.tsx");
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
const shradhaRoute = "/about/shradha-maira";
const shradhaTitle = "Shradha Maira | Co-Founder at Boring Tech Solutions";
const shradhaDescription =
  "Meet Shradha Maira, co-founder at Boring Tech Solutions and strategy director focused on brand clarity, partnerships, product direction, and practical AI adoption.";

test("Creig founder profile page exists and is routed", () => {
  assert.equal(existsSync(creigPagePath), true, "src/pages/CreigPhiri.tsx should exist");

  const appSource = readSource(appPath);
  assert.match(appSource, /import\s+CreigPhiri\s+from\s+["']\.\/pages\/CreigPhiri["'];?/);
  assert.match(
    appSource,
    new RegExp(`<Route\\s+path=["']${escapeRegex(creigRoute)}["']\\s+element=\\{<CreigPhiri\\s*/>\\}\\s*/>`),
    "App.tsx should route /about/creig-phiri to CreigPhiri",
  );
});

test("Shradha founder profile page exists and is routed", () => {
  assert.equal(existsSync(shradhaPagePath), true, "src/pages/ShradhaMaira.tsx should exist");

  const appSource = readSource(appPath);
  assert.match(appSource, /import\s+ShradhaMaira\s+from\s+["']\.\/pages\/ShradhaMaira["'];?/);
  assert.match(
    appSource,
    new RegExp(`<Route\\s+path=["']${escapeRegex(shradhaRoute)}["']\\s+element=\\{<ShradhaMaira\\s*/>\\}\\s*/>`),
    "App.tsx should route /about/shradha-maira to ShradhaMaira",
  );
});

test("profile data defines both founder records, personal sites, and schema ids", () => {
  const dataSource = readSource(profileDataPath);

  assert.match(dataSource, /name:\s*"Creig Phiri"/);
  assert.match(dataSource, /name:\s*"Shradha Maira"/);
  assert.match(dataSource, new RegExp(`title:\\s*"${escapeRegex(creigTitle)}"`));
  assert.match(dataSource, new RegExp(`title:\\s*"${escapeRegex(shradhaTitle)}"`));
  assert.match(dataSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(creigDescription)}"`));
  assert.match(dataSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(shradhaDescription)}"`));
  assert.match(dataSource, /publicLinks:\s*\[\s*\{\s*label:\s*"creigphiri\.ca"/s);
  assert.match(dataSource, /publicLinks:\s*\[\s*\{\s*label:\s*"shradhamaira\.ca"/s);
  assert.match(
    dataSource,
    /personId:\s*"https:\/\/boringtechsolutions\.com\/about\/creig-phiri#person"/,
    "Creig profile should define a stable Person @id",
  );
  assert.match(
    dataSource,
    /personId:\s*"https:\/\/boringtechsolutions\.com\/about\/shradha-maira#person"/,
    "Shradha profile should define a stable Person @id",
  );
  assert.match(
    dataSource,
    /const organizationId = `\$\{siteUrl\}\/#organization`;/,
    "founder data should define a shared stable Organization @id constant",
  );
  assert.match(
    dataSource,
    /personSameAs:\s*\[\s*"https:\/\/linkedin\.com\/in\/creigphiri",\s*"https:\/\/creigphiri\.ca"\s*\]/,
    "Creig profile should include the approved sameAs links",
  );
  assert.match(
    dataSource,
    /personSameAs:\s*\[\s*"https:\/\/linkedin\.com\/in\/shradhamaira",\s*"https:\/\/shradhamaira\.ca"\s*\]/,
    "Shradha profile should include the approved sameAs links",
  );
  assert.match(
    dataSource,
    /https:\/\/linkedin\.com\/company\/boring-tech-solutions/,
    "Organization schema should include the LinkedIn company profile",
  );
  assert.match(
    dataSource,
    /https:\/\/github\.com\/boring-tech-solutions/,
    "Organization schema should include the GitHub organization profile",
  );
});

test("founder profile template renders graph JSON-LD and the public links section", () => {
  const templateSource = readSource(profileTemplatePath);

  assert.match(templateSource, /"@graph":\s*\[/, "founder template should emit a JSON-LD graph");
  assert.match(templateSource, /"@type":\s*"Person"/, "founder template should include Person schema");
  assert.match(templateSource, /"@type":\s*"Organization"/, "founder template should include Organization schema");
  assert.match(templateSource, /profile\.schema\.personSameAs/, "template should use explicit person sameAs links");
  assert.match(
    templateSource,
    /profile\.schema\.organizationSameAs/,
    "template should use explicit organization sameAs links",
  );
  assert.match(templateSource, /profile\.schema\.founderIds/, "template should include founder references");
  assert.match(templateSource, /profile\.publicLinks\.length > 0/, "template should render public links");
  assert.match(templateSource, /Personal sites/, "template should label the public-links section");
});

test("route SEO and sitemap expose both founder profiles", () => {
  const routeSeoSource = readSource(routeSeoPath);
  const sitemapSource = readSource(sitemapPath);

  assert.match(routeSeoSource, new RegExp(`"${escapeRegex(creigRoute)}"`));
  assert.match(routeSeoSource, new RegExp(`title:\\s*"${escapeRegex(creigTitle)}"`));
  assert.match(routeSeoSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(creigDescription)}"`));
  assert.match(routeSeoSource, new RegExp(`"${escapeRegex(shradhaRoute)}"`));
  assert.match(routeSeoSource, new RegExp(`title:\\s*"${escapeRegex(shradhaTitle)}"`));
  assert.match(routeSeoSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(shradhaDescription)}"`));
  assert.match(
    sitemapSource,
    /https:\/\/www\.boringtechsolutions\.com\/about\/creig-phiri/,
    "sitemap should include the public Creig profile URL",
  );
  assert.match(
    sitemapSource,
    /https:\/\/www\.boringtechsolutions\.com\/about\/shradha-maira/,
    "sitemap should include the public Shradha profile URL",
  );
});

test("About team area links to both founder profiles", () => {
  const teamSectionSource = readSource(teamSectionPath);
  const aboutSource = readSource(path.join(repoRoot, "src", "pages", "About.tsx"));

  assert.match(teamSectionSource, /profilePath:\s*"\/about\/creig-phiri"/);
  assert.match(teamSectionSource, /profilePath:\s*"\/about\/shradha-maira"/);
  assert.match(aboutSource, /Leadership\s*\/\s*Founders/);
  assert.match(aboutSource, /\/about\/creig-phiri/);
  assert.match(aboutSource, /\/about\/shradha-maira/);
});
