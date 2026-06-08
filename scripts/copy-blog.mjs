import { existsSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const src = join(root, 'blog', 'dist');
const dest = join(root, 'dist', 'blog');

// Verify blog/dist exists
if (!existsSync(src)) {
  console.error(`ERROR: ${src} does not exist.`);
  console.error('Run "npm run build:blog" first to build the Astro blog.');
  process.exit(1);
}

let filesCopied = 0;

/**
 * Recursively copy all files from srcDir into destDir.
 * destDir is created if it does not exist.
 */
function copyDir(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });

  for (const entry of readdirSync(srcDir)) {
    const srcPath = join(srcDir, entry);
    const destPath = join(destDir, entry);
    const stat = statSync(srcPath);

    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      filesCopied++;
      console.log(`  ${relative(root, srcPath)} → ${relative(root, destPath)}`);
    }
  }
}

console.log(`Copying blog output: ${relative(root, src)} → ${relative(root, dest)}`);
copyDir(src, dest);
console.log(`\nDone. ${filesCopied} file(s) copied to dist/blog/.`);
