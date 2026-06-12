import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const routeSeoSource = readFileSync(path.join(repoRoot, "src", "lib", "routeSeo.ts"), "utf8");
const appSource = readFileSync(path.join(repoRoot, "src", "App.tsx"), "utf8");
const indexHtml = readFileSync(path.join(repoRoot, "index.html"), "utf8");

const REQUIRED_ROUTES = [
  "/",
  "/ai-lab",
  "/data-compliance",
  "/our-past-work",
  "/contact",
  "/about/creig-phiri",
  "/about/shradha-maira",
];
const SITE_URL = "https://boringtechsolutions.com";

test("routeSeo.ts contains the required route keys", () => {
  for (const route of REQUIRED_ROUTES) {
    assert.ok(
      routeSeoSource.includes(`"${route}"`),
      `routeSeo.ts should contain route key "${route}"`,
    );
  }
});

test("routeSeo.ts exports SITE_URL, DEFAULT_SEO, routeSeo, and getRouteSeo", () => {
  assert.match(routeSeoSource, /export const SITE_URL/);
  assert.match(routeSeoSource, /export const DEFAULT_SEO/);
  assert.match(routeSeoSource, /export const routeSeo/);
  assert.match(routeSeoSource, /export function getRouteSeo/);
});

test("each route entry has title, description, and url fields", () => {
  for (const route of REQUIRED_ROUTES) {
    const routeIdx = routeSeoSource.indexOf(`"${route}"`);
    assert.ok(routeIdx !== -1, `route "${route}" should exist`);
    const segment = routeSeoSource.slice(routeIdx, routeIdx + 600);
    assert.match(segment, /title:/, `route "${route}" should have a title field`);
    assert.match(segment, /description:/, `route "${route}" should have a description field`);
    assert.match(segment, /url:/, `route "${route}" should have a url field`);
  }
});

test("routeSeo.ts SITE_URL is the correct absolute base URL", () => {
  assert.ok(
    routeSeoSource.includes(`"${SITE_URL}"`),
    `routeSeo.ts should define SITE_URL as "${SITE_URL}"`,
  );
  assert.doesNotMatch(
    routeSeoSource,
    /SITE_URL\s*=\s*["']https?:\/\/(?!boringtechsolutions\.com)/,
    "SITE_URL should point to boringtechsolutions.com",
  );
});

test("App.tsx imports and mounts RouteSeo inside BrowserRouter before Routes", () => {
  assert.match(appSource, /import RouteSeo/, "App.tsx should import RouteSeo");
  const browserRouterIdx = appSource.indexOf("<BrowserRouter>");
  const routeSeoIdx = appSource.indexOf("<RouteSeo");
  const routesIdx = appSource.indexOf("<Routes>");
  assert.ok(browserRouterIdx !== -1, "App.tsx should have <BrowserRouter>");
  assert.ok(routeSeoIdx !== -1, "App.tsx should mount <RouteSeo />");
  assert.ok(routesIdx !== -1, "App.tsx should have <Routes>");
  assert.ok(
    browserRouterIdx < routeSeoIdx && routeSeoIdx < routesIdx,
    "<RouteSeo /> should appear after <BrowserRouter> and before <Routes>",
  );
});

test("index.html does not contain the typo boringtechsoltions.com", () => {
  assert.doesNotMatch(indexHtml, /boringtechsoltions\.com/, "index.html should not contain typo");
});

test("routeSeo.ts does not contain the typo boringtechsoltions.com", () => {
  assert.doesNotMatch(routeSeoSource, /boringtechsoltions\.com/, "routeSeo.ts should not contain typo");
});

test("App.tsx does not contain the typo boringtechsoltions.com", () => {
  assert.doesNotMatch(appSource, /boringtechsoltions\.com/, "App.tsx should not contain typo");
});
