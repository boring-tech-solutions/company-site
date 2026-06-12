import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const appPath = path.join(repoRoot, "src", "App.tsx");
const aiLabPath = path.join(repoRoot, "src", "pages", "AILab.tsx");
const servicePagesDataPath = path.join(repoRoot, "src", "data", "servicePages.ts");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");
const robotsPath = path.join(repoRoot, "public", "robots.txt");

const servicePages = [
  {
    component: "AIWorkflowAutomation",
    dataKey: "aiWorkflowAutomation",
    label: "AI Workflow Automation",
    pagePath: path.join(repoRoot, "src", "pages", "AIWorkflowAutomation.tsx"),
    route: "/services/ai-workflow-automation",
    canonicalUrl: "https://www.boringtechsolutions.com/services/ai-workflow-automation",
  },
  {
    component: "ResponsibleAIConsulting",
    dataKey: "responsibleAIConsulting",
    label: "Responsible AI Consulting",
    pagePath: path.join(repoRoot, "src", "pages", "ResponsibleAIConsulting.tsx"),
    route: "/services/responsible-ai-consulting",
    canonicalUrl: "https://www.boringtechsolutions.com/services/responsible-ai-consulting",
  },
];

const readSource = (filePath) => readFileSync(filePath, "utf8");

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const extractStringValues = (source, propertyName) => {
  const pattern = new RegExp(`${propertyName}\\s*:\\s*["'\`]([^"'\`]+)["'\`]`, "g");
  return [...source.matchAll(pattern)].map((match) => match[1].trim());
};

test("App imports and routes both service pages", () => {
  const appSource = readSource(appPath);

  for (const page of servicePages) {
    assert.match(
      appSource,
      new RegExp(`import\\s+${page.component}\\s+from\\s+["']\\./pages/${page.component}["'];?`),
      `src/App.tsx should import ${page.component}`,
    );
    assert.match(
      appSource,
      new RegExp(
        `<Route\\s+path=["']${escapeRegex(page.route)}["']\\s+element=\\{<${page.component}\\s*/>\\}\\s*/>`,
      ),
      `src/App.tsx should route ${page.route} to ${page.component}`,
    );
  }
});

for (const page of servicePages) {
  test(`${page.component} page exists and default exports a component`, () => {
    assert.equal(existsSync(page.pagePath), true, `src/pages/${page.component}.tsx should exist`);

    const pageSource = readSource(page.pagePath);
    assert.match(
      pageSource,
      new RegExp(`(?:const|function)\\s+${page.component}\\b`),
      `src/pages/${page.component}.tsx should define ${page.component}`,
    );
    assert.match(
      pageSource,
      new RegExp(`export\\s+default\\s+(?:function\\s+)?${page.component}\\b|export\\s+default\\s+${page.component}\\s*;?`),
      `src/pages/${page.component}.tsx should default export ${page.component}`,
    );
  });
}

test("servicePages data defines unique metadata and CTA labels for both pages", () => {
  assert.equal(existsSync(servicePagesDataPath), true, "src/data/servicePages.ts should exist");

  const dataSource = readSource(servicePagesDataPath);
  const requiredProperties = ["title", "description", "canonicalUrl", "h1", "ctaLabel"];

  for (const page of servicePages) {
    assert.match(dataSource, new RegExp(`\\b${page.dataKey}\\b`), `servicePages.ts should define ${page.dataKey}`);
    assert.match(
      dataSource,
      new RegExp(`canonicalUrl\\s*:\\s*["']${escapeRegex(page.canonicalUrl)}["']`),
      `servicePages.ts should set canonicalUrl to ${page.canonicalUrl}`,
    );
  }

  for (const propertyName of requiredProperties) {
    const values = extractStringValues(dataSource, propertyName);
    assert.equal(values.length, 2, `servicePages.ts should define two ${propertyName} values`);
    assert.equal(new Set(values).size, 2, `servicePages.ts should define unique ${propertyName} values`);
    assert.ok(values.every(Boolean), `servicePages.ts should not define empty ${propertyName} values`);
  }
});

test("AI Lab visibly links to both service pages", () => {
  const aiLabSource = readSource(aiLabPath);

  for (const page of servicePages) {
    assert.match(aiLabSource, new RegExp(escapeRegex(page.route)), `src/pages/AILab.tsx should link to ${page.route}`);
    assert.match(aiLabSource, new RegExp(escapeRegex(page.label)), `src/pages/AILab.tsx should show ${page.label}`);
  }
});

test("sitemap includes both service page canonical URLs", () => {
  assert.equal(existsSync(sitemapPath), true, "public/sitemap.xml should exist");

  const sitemapSource = readSource(sitemapPath);
  for (const page of servicePages) {
    assert.match(
      sitemapSource,
      new RegExp(escapeRegex(page.canonicalUrl)),
      `public/sitemap.xml should include ${page.canonicalUrl}`,
    );
  }
});

test("robots.txt points crawlers to the sitemap", () => {
  const robotsSource = readSource(robotsPath);

  assert.match(
    robotsSource,
    /^Sitemap:\s*https:\/\/www\.boringtechsolutions\.com\/sitemap\.xml$/m,
    "public/robots.txt should include Sitemap: https://www.boringtechsolutions.com/sitemap.xml",
  );
});

test("service page copy avoids overpromising claims", () => {
  assert.equal(existsSync(servicePagesDataPath), true, "src/data/servicePages.ts should exist");

  const dataSource = readSource(servicePagesDataPath);
  assert.doesNotMatch(
    dataSource,
    /\bguaranteed\b|\breplace staff\b|\b90%|\brisk-free\b|\beliminate all\b|\bfully automated without oversight\b/i,
    "servicePages.ts copy should avoid overpromising claims",
  );
});
