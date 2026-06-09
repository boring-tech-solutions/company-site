import { existsSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { spawn } from "node:child_process";
import { caseStudies } from "../shared/case-studies.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

function findBuiltBlogPostPath() {
  const blogRoot = join(distDir, "blog");

  if (!existsSync(blogRoot)) {
    return null;
  }

  for (const entry of readdirSync(blogRoot, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) {
      continue;
    }

    const indexPath = join(blogRoot, entry.name, "index.html");
    if (existsSync(indexPath)) {
      return indexPath;
    }
  }

  return null;
}

const required = [
  "dist/index.html",
  "dist/blog/index.html",
  ...caseStudies.map((study) => `dist/case-studies/${study.slug}/index.html`),
];

let allFound = true;

console.log("Checking required files in production build...\n");
for (const relPath of required) {
  const absPath = join(root, relPath);
  if (existsSync(absPath)) {
    console.log(`  FOUND    ${relPath}`);
  } else {
    console.error(`  MISSING  ${relPath}`);
    allFound = false;
  }
}

if (!allFound) {
  console.error("\nERROR: One or more required files are missing.");
  console.error('Run "npm run build" to produce a complete production build first.');
  process.exit(1);
}

const samplePostPath = findBuiltBlogPostPath();

if (!samplePostPath) {
  console.error("\nERROR: Could not find a built blog post HTML file in blog/dist.");
  process.exit(1);
}

console.log("\nAll required files present. Starting preview server...");
console.log("\nVisit:  http://localhost:3000");
console.log(`Blog:   http://localhost:3000/blog/ (sample post: ${relative(root, samplePostPath)})\n`);

const server = spawn("npx", ["serve", distDir], {
  stdio: "inherit",
  shell: true,
});

server.on("error", (err) => {
  console.error("Failed to start server:", err.message);
  process.exit(1);
});

server.on("exit", (code) => {
  process.exit(code ?? 0);
});
