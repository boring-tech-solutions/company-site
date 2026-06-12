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
const aboutPath = path.join(repoRoot, "src", "pages", "About.tsx");
const routeSeoPath = path.join(repoRoot, "src", "lib", "routeSeo.ts");
const schemaPath = path.join(repoRoot, "src", "lib", "schema.ts");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");

const readSource = (filePath) => readFileSync(filePath, "utf8");
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const founderPages = [
  {
    name: "Creig Phiri",
    componentName: "CreigPhiri",
    pagePath: creigPagePath,
    route: "/about/creig-phiri",
    title: "Creig Phiri | Founder at Boring Tech Solutions",
    description:
      "Meet Creig Phiri, founder at Boring Tech Solutions and systems architect focused on practical AI, cloud architecture, data governance, and community technology.",
    reciprocalLink: "/about/shradha-maira",
  },
  {
    name: "Shradha Maira",
    componentName: "ShradhaMaira",
    pagePath: shradhaPagePath,
    route: "/about/shradha-maira",
    title: "Shradha Maira | Founding Team at Boring Tech Solutions",
    description:
      "Meet Shradha Maira, founding team member at Boring Tech Solutions focused on strategy, brand architecture, partnerships, and product direction for practical technology.",
    reciprocalLink: "/about/creig-phiri",
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

test("founder profile data pins SEO, links, and schema ids", () => {
  const dataSource = readSource(profileDataPath);
  const schemaSource = readSource(schemaPath);

  for (const page of founderPages) {
    assert.match(dataSource, new RegExp(`name:\\s*"${escapeRegex(page.name)}"`), "profile data should define the H1 name");
    assert.match(dataSource, new RegExp(`title:\\s*"${escapeRegex(page.title)}"`));
    assert.match(dataSource, new RegExp(`description:\\s*\\n\\s*"${escapeRegex(page.description)}"`));
    for (const href of ["/", "/about", "/govora", "/case-studies/quizapp", page.reciprocalLink]) {
      assert.match(dataSource, new RegExp(`href:\\s*"${escapeRegex(href)}"`), `profile data should link to ${href}`);
    }
  }

  assert.match(dataSource, /publicLinks:\s*\[\s*\{\s*label:\s*"creigphiri\.ca"/s);
  assert.match(dataSource, /publicLinks:\s*\[\s*\{\s*label:\s*"shradhamaira\.ca"/s);
  assert.match(
    schemaSource,
    /CREIG_PERSON_ID\s*=\s*`\$\{SITE_URL\}\/about\/creig-phiri#person`/,
    "Creig profile should define a stable Person @id",
  );
  assert.match(dataSource, /personId:\s*CREIG_PERSON_ID/);
  assert.match(
    schemaSource,
    /SHRADHA_PERSON_ID\s*=\s*`\$\{SITE_URL\}\/about\/shradha-maira#person`/,
    "Shradha profile should define a stable Person @id",
  );
  assert.match(dataSource, /personId:\s*SHRADHA_PERSON_ID/);
  assert.match(
    schemaSource,
    /ORGANIZATION_ID\s*=\s*`\$\{SITE_URL\}\/#organization`/,
    "founder data should define a shared stable Organization @id constant",
  );
  assert.match(dataSource, /const organizationId = ORGANIZATION_ID;/);
  assert.match(
    dataSource,
    /personSameAs:\s*\[\s*"https:\/\/www\.linkedin\.com\/in\/creigphiri",\s*"https:\/\/creigphiri\.ca"\s*\]/,
    "Creig profile should include the approved sameAs links",
  );
  assert.match(
    dataSource,
    /personSameAs:\s*\[\s*"https:\/\/www\.linkedin\.com\/in\/shradhamaira",\s*"https:\/\/shradhamaira\.ca"\s*\]/,
    "Shradha profile should include the approved sameAs links",
  );
  assert.match(
    schemaSource,
    /https:\/\/www\.linkedin\.com\/company\/boring-tech-solutions/,
    "Organization schema should include the LinkedIn company profile",
  );
  assert.match(
    schemaSource,
    /https:\/\/github\.com\/boring-tech-solutions/,
    "Organization schema should include the GitHub organization profile",
  );
  assert.match(dataSource, /Northern Landing/, "Shradha profile should mention Northern Landing");
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

test("About team area links to both founder profiles", () => {
  const teamSectionSource = readSource(teamSectionPath);
  const aboutSource = readSource(aboutPath);

  assert.match(teamSectionSource, /profilePath:\s*"\/about\/creig-phiri"/);
  assert.match(teamSectionSource, /profilePath:\s*"\/about\/shradha-maira"/);
  assert.match(teamSectionSource, /View \$\{member\.name\} profile/, "profile link should be accessible");
  assert.match(aboutSource, /Leadership\s*\/\s*Founders/);
  assert.match(aboutSource, /\/about\/creig-phiri/);
  assert.match(aboutSource, /\/about\/shradha-maira/);
});
