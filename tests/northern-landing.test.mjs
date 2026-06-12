import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const communitySectionPath = path.join(repoRoot, "src", "components", "home", "CommunitySection.tsx");
const caseStudiesPath = path.join(repoRoot, "shared", "case-studies.js");

const readSource = (filePath) => readFileSync(filePath, "utf8");

test("Northern Landing is removed from community and surfaced through the case-study route", () => {
  const appSource = readSource(appPath);
  const communitySectionSource = readSource(communitySectionPath);
  const caseStudiesSource = readSource(caseStudiesPath);

  assert.match(appSource, /import\s+\{[^}]*Navigate[^}]*\}\s+from\s+["']react-router-dom["'];?/);
  assert.match(
    appSource,
    /<Route\s+path=["']\/community["']\s+element=\{<Community\s*\/>\}\s*\/>/,
  );
  assert.match(
    appSource,
    /<Route\s+path=["']\/community\/northern-landing["']\s+element=\{\s*<Navigate\s+replace\s+to=["']\/case-studies\/northern-landing["']\s*\/>\s*\}\s*\/>/,
  );
  assert.match(
    appSource,
    /<Route\s+path=["']\/case-studies\/:slug["']\s+element=\{<CaseStudyDetail\s*\/>\}\s*\/>/,
  );

  assert.match(communitySectionSource, /QuizApp\.ca/);
  assert.match(communitySectionSource, /Tech Youth Mentorship/);
  assert.doesNotMatch(communitySectionSource, /Northern Landing/);
  assert.doesNotMatch(communitySectionSource, /\/community\/northern-landing/);
  assert.doesNotMatch(communitySectionSource, /href:\s*"\/community\/northern-landing"/);

  assert.match(caseStudiesSource, /slug:\s*"northern-landing"/);
  assert.match(caseStudiesSource, /path:\s*"\/case-studies\/northern-landing"/);
  assert.match(caseStudiesSource, /client:\s*"Northern Landing"/);
});
