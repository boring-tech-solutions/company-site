import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

function readSource(relativePath) {
  const absolutePath = path.join(repoRoot, relativePath);
  assert.ok(fs.existsSync(absolutePath), `${relativePath} should exist`);
  return fs.readFileSync(absolutePath, "utf8");
}

test("schema library defines BTS entity graph without address or inflated claims", () => {
  const source = readSource("src/lib/schema.ts");

  assert.match(source, /ORGANIZATION_ID\s*=\s*`\$\{SITE_URL\}\/#organization`/);
  assert.match(source, /CREIG_PERSON_ID\s*=\s*`\$\{SITE_URL\}\/about\/creig-phiri#person`/);
  assert.match(source, /SHRADHA_PERSON_ID\s*=\s*`\$\{SITE_URL\}\/about\/shradha-maira#person`/);
  assert.match(source, /"@type":\s*"Organization"/);
  assert.match(source, /description:\s*"Boring Tech Solutions is an Edmonton-based software development and AI consulting company/);
  assert.match(source, /foundingDate:\s*"2024"/);
  assert.match(source, /areaServed:\s*\[\s*"Edmonton",\s*"Alberta",\s*"Canada"\s*\]/);
  assert.match(source, /knowsAbout:\s*\[/);
  assert.match(source, /"Workflow automation"/);
  assert.match(source, /logo:\s*"https:\/\/images\.boringtechsolutions\.com\/logo\.webp"/);
  assert.match(source, /founder:\s*\[\s*\{\s*"@id":\s*CREIG_PERSON_ID\s*\}/);
  assert.match(source, /"@id":\s*SHRADHA_PERSON_ID/);
  assert.match(source, /"https:\/\/www\.linkedin\.com\/company\/boring-tech-solutions"/);
  assert.doesNotMatch(source, /"https:\/\/linkedin\.com\//);
  assert.match(source, /"https:\/\/github\.com\/boring-tech-solutions"/);
  assert.doesNotMatch(source, /\b(address|streetAddress|postalCode|addressLocality)\b/i);
  assert.doesNotMatch(source, /\b(best|top-rated|leading)\b/i);
});

test("home page injects Organization JSON-LD", () => {
  const source = readSource("src/pages/Index.tsx");

  assert.match(source, /useJsonLd\("organization-schema",\s*organizationSchema\)/);
});

test("founder schema uses shared Person and Organization identifiers", () => {
  const dataSource = readSource("src/data/founderProfiles.ts");
  const templateSource = readSource("src/components/about/FounderProfileTemplate.tsx");

  assert.match(dataSource, /CREIG_PERSON_ID/);
  assert.match(dataSource, /SHRADHA_PERSON_ID/);
  assert.match(dataSource, /ORGANIZATION_ID/);
  assert.match(templateSource, /useJsonLd\(`founder-schema-\$\{profile\.slug\}`,\s*personSchema\)/);
  assert.doesNotMatch(templateSource, /<script type="application\/ld\+json">/);
});

test("Govora page injects SoftwareApplication schema on the existing canonical route", () => {
  const source = readSource("src/pages/Govora.tsx");

  assert.match(source, /useJsonLd\("govora-software-schema",\s*govoraSoftwareApplicationSchema\)/);
  assert.match(source, /"@type":\s*"SoftwareApplication"/);
  assert.match(source, /"@id":\s*`\$\{SITE_URL\}\/data-compliance#softwareapplication`/);
  assert.match(source, /url:\s*`\$\{SITE_URL\}\/data-compliance`/);
  assert.match(source, /publisher:\s*\{\s*"@id":\s*ORGANIZATION_ID\s*\}/);
  assert.match(source, /applicationCategory:\s*"BusinessApplication"/);
  assert.match(source, /operatingSystem:\s*"Web"/);
  assert.match(source, /priceCurrency:\s*"CAD"/);
  assert.doesNotMatch(source, /\bprice:\s*["']/);
});

test("QuizApp case study injects SoftwareApplication schema without inventing a product URL", () => {
  const detailSource = readSource("src/pages/CaseStudyDetail.tsx");
  const caseStudySource = readSource("shared/case-studies.js");

  assert.match(detailSource, /useJsonLd\(`case-study-schema-\$\{study\?\.slug/);
  assert.match(caseStudySource, /slug:\s*"quizapp"[\s\S]*schema:\s*\{/);
  assert.match(caseStudySource, /"@type":\s*"SoftwareApplication"/);
  assert.match(caseStudySource, /"@id":\s*`\$\{siteUrl\}\/case-studies\/quizapp#softwareapplication`/);
  assert.match(caseStudySource, /url:\s*`\$\{siteUrl\}\/case-studies\/quizapp`/);
  assert.match(caseStudySource, /applicationCategory:\s*"EducationalApplication"/);
  assert.doesNotMatch(caseStudySource, /\/products\/quizapp/);
});
