import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const aboutPath = path.join(repoRoot, "src", "pages", "About.tsx");
const teamSectionPath = path.join(repoRoot, "src", "components", "about", "TeamSection.tsx");

const readSource = (filePath) => readFileSync(filePath, "utf8");

test("About leadership copy and team links surface both founder routes", () => {
  const aboutSource = readSource(aboutPath);
  const teamSectionSource = readSource(teamSectionPath);

  assert.match(aboutSource, /Leadership\s*\/\s*Founders/);
  assert.match(aboutSource, /\/about\/creig-phiri/);
  assert.match(aboutSource, /\/about\/shradha-maira/);
  assert.match(teamSectionSource, /profilePath:\s*"\/about\/creig-phiri"/);
  assert.match(teamSectionSource, /profilePath:\s*"\/about\/shradha-maira"/);
});
