import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const creigProfilePagePath = path.join(repoRoot, "src", "pages", "CreigPhiri.tsx");
const shradhaProfilePagePath = path.join(repoRoot, "src", "pages", "ShradhaMaira.tsx");
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
const shradhaTitle = "Shradha Maira | Founding Team at Boring Tech Solutions";
const shradhaDescription =
  "Meet Shradha Maira, founding team member at Boring Tech Solutions focused on strategy, brand architecture, partnerships, and product direction for practical technology.";

const founderPages = [
  {
    name: "Creig Phiri",
    componentName: "CreigPhiri",
    pagePath: creigProfilePagePath,
    route: creigRoute,
    title: creigTitle,
    description: creigDescription,
    reciprocalLink: shradhaRoute,
  },
  {
    name: "Shradha Maira",
    componentName: "ShradhaMaira",
    pagePath: shradhaProfilePagePath,
    route: shradhaRoute,
    title: shradhaTitle,
    description: shradhaDescription,
    reciprocalLink: creigRoute,
  },
];

test("founder profile pages exist and are routed", () => {
  const appSource = readSource(appPath);

  for (const page of founderPages) {
    assert.equal(existsSync(page.pagePath), true, `${path.relative(repoRoot, page.pagePath)} should exist`);
    assert.match(
      appSource,
      new RegExp(`import\\s+${page.componentName}\\s+from\\s+["']\\.\\/pages\\/${page.componentName}["'];?`),
    );
    assert.match(
      appSource,
      new RegExp(`<Route\\s+path=["']${escapeRegex(page.route)}["']\\s+element=\\{<${page.componentName}\\s*/>\\}\\s*/>`),
      `App.tsx should route ${page.route} to ${page.componentName}`,
    );
  }
});

test("founder profile data pins SEO, H1 source, copy, and required internal links", () => {
  const dataSource = readSource(profileDataPath);

  for (const page of founderPages) {
    assert.match(dataSource, new RegExp(`name:\\s*"${escapeRegex(page.name)}"`), "profile data should define the H1 name");
    assert.match(dataSource, new RegExp(`title:\\s*"${escapeRegex(page.title)}"`));
    assert.match(dataSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(page.description)}"`));

    if (page.name === "Shradha Maira") {
      assert.match(
        dataSource,
        /Northern Landing/,
        "Shradha profile data should mention Northern Landing as a connected initiative",
      );
    }

    for (const href of ["/", "/about", "/data-compliance", "/case-studies/quizapp", page.reciprocalLink]) {
      assert.match(dataSource, new RegExp(`href:\\s*"${escapeRegex(href)}"`), `profile data should link to ${href}`);
    }
  }

  assert.doesNotMatch(
    dataSource,
    /\boffice\b|\bheadquarters\b|\bworld[- ]class\b|\bguarantee(?:d|s)?\b|\bbest\b/i,
    "profile copy should avoid office-address claims and exaggerated language",
  );
});

test("founder profile pages share the same template and render profile SEO, H1, links, and Person JSON-LD", () => {
  const templateSource = readSource(profileTemplatePath);

  for (const page of founderPages) {
    const pageSource = readSource(page.pagePath);
    assert.match(pageSource, /FounderProfileTemplate/, `${page.name} page should use the shared founder profile template`);
    assert.doesNotMatch(pageSource, /className=/, `${page.name} page should not fork template styling`);
  }

  assert.match(templateSource, /usePageSeo/, "founder template should set page SEO");
  assert.match(templateSource, /<h1[^>]*>[\s\S]*\{profile\.name\}/, "founder template should render profile.name as the H1");
  assert.match(templateSource, /application\/ld\+json/, "founder template should render JSON-LD");
  assert.match(templateSource, /"@type":\s*"Person"/, "founder template should include Person schema");
  assert.match(templateSource, /profile\.relatedLinks\.map/, "founder template should render internal links from data");
});

test("route SEO and sitemap expose founder profiles", () => {
  const routeSeoSource = readSource(routeSeoPath);
  const sitemapSource = readSource(sitemapPath);

  for (const page of founderPages) {
    assert.match(routeSeoSource, new RegExp(`"${escapeRegex(page.route)}"`));
    assert.match(routeSeoSource, new RegExp(`title:\\s*"${escapeRegex(page.title)}"`));
    assert.match(routeSeoSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(page.description)}"`));
    assert.match(
      sitemapSource,
      new RegExp(`https:\\/\\/www\\.boringtechsolutions\\.com${escapeRegex(page.route)}`),
      `sitemap should include the public ${page.name} profile URL`,
    );
  }
});

test("About team area links to founder profiles", () => {
  const teamSectionSource = readSource(teamSectionPath);

  assert.match(teamSectionSource, /profilePath:\s*"\/about\/creig-phiri"/);
  assert.match(teamSectionSource, /profilePath:\s*"\/about\/shradha-maira"/);
  assert.match(teamSectionSource, /View \$\{member\.name\} profile/, "profile link should be accessible");
});
