import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const caseStudiesPath = path.join(repoRoot, "shared", "case-studies.js");

const expectedSlugs = ["aify", "govora", "quizapp", "yaco"];
const unsupportedClaimPatterns = [
  /\b70%\b/i,
  /\b45%\b/i,
  /\b24\/7 automated customer support\b/i,
  /\b100% compliance\b/i,
  /\b80% reduction\b/i,
  /\bguarantee(?:d|s)? compliance\b/i,
  /\b300% increase\b/i,
  /\b15\+ community chapters\b/i,
  /\bexact impact measurement\b/i,
];

function assertNonEmptyString(value, message) {
  assert.equal(typeof value, "string", message);
  assert.ok(value.trim().length > 0, message);
}

test("case study shared data exposes the four canonical project stories", async () => {
  assert.equal(existsSync(caseStudiesPath), true, "shared/case-studies.js should exist");

  const { caseStudies } = await import(pathToFileURL(caseStudiesPath).href);

  assert.ok(Array.isArray(caseStudies), "caseStudies should be an array");
  assert.deepEqual(
    caseStudies.map((study) => study.slug),
    expectedSlugs,
    "case studies should keep the required slug order",
  );

  const titles = new Set();
  const descriptions = new Set();
  const allText = [];

  for (const study of caseStudies) {
    assert.equal(study.path, `/case-studies/${study.slug}`);
    assert.equal(
      study.canonicalUrl,
      `https://www.boringtechsolutions.com/case-studies/${study.slug}`,
    );

    for (const field of [
      "client",
      "category",
      "hero",
      "problem",
      "approach",
      "outcome",
      "industryContext",
      "ctaLabel",
      "seoTitle",
      "seoDescription",
    ]) {
      assertNonEmptyString(study[field], `${study.slug} should define ${field}`);
      allText.push(study[field]);
    }

    assert.ok(Array.isArray(study.techStack), `${study.slug} should define techStack`);
    assert.ok(study.techStack.length >= 3, `${study.slug} should list several technologies`);
    for (const tech of study.techStack) {
      assertNonEmptyString(tech, `${study.slug} should not include blank tech names`);
      allText.push(tech);
    }

    assert.equal(titles.has(study.seoTitle), false, `${study.slug} should have a unique SEO title`);
    assert.equal(
      descriptions.has(study.seoDescription),
      false,
      `${study.slug} should have a unique SEO description`,
    );
    titles.add(study.seoTitle);
    descriptions.add(study.seoDescription);
  }

  const combinedText = allText.join("\n");
  for (const pattern of unsupportedClaimPatterns) {
    assert.doesNotMatch(combinedText, pattern, `shared content should not contain unsupported claim ${pattern}`);
  }
});
