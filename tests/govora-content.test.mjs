import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const source = readFileSync(path.join(repoRoot, "src", "pages", "Govora.tsx"), "utf8");

test("Govora page leads with automated reporting", () => {
  assert.match(source, /Tailored automated reporting for Executive Directors/);
  assert.match(source, /Most nonprofits report to multiple funders, grants, boards, and stakeholders/);
  assert.match(source, /Govora helps organize participant, program, consent, and outcome data/);
});

test("Govora page presents the core feature set as reporting-focused", () => {
  assert.match(source, /Key Govora Features/);
  assert.match(source, /Tailored Automated Reporting/);
  assert.match(source, /Participant Data Management/);
  assert.match(source, /Auditor \/ Reviewer Access/);
});

test("Govora page explains board, funder, and reviewer benefits", () => {
  assert.match(source, /Clearer reporting for[\s\S]*boards and funders/);
  assert.match(source, /Govora helps leadership teams provide clearer, more consistent reporting/);
  assert.match(source, /Tailored reports for funders, boards, and reviewers/);
});

test("Govora page keeps compliance claims careful", () => {
  assert.match(source, /Does Govora guarantee compliance\?/);
  assert.match(source, /does not replace legal advice or guarantee compliance/);
});

test("Govora page links to Govora.ca with a clear CTA", () => {
  assert.match(source, /Visit Govora\.ca/);
});
