import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const required = [
  'dist/index.html',
  'dist/blog/index.html',
  'dist/blog/sample-post/index.html',
];

let allFound = true;

console.log('Checking required files in production build...\n');
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
  console.error('\nERROR: One or more required files are missing.');
  console.error('Run "npm run build" to produce a complete production build first.');
  process.exit(1);
}

console.log('\nAll required files present. Starting preview server...');
console.log('\nVisit:  http://localhost:3000');
console.log('Blog:   http://localhost:3000/blog/\n');

const server = spawn('npx', ['serve', distDir], {
  stdio: 'inherit',
  shell: true,
});

server.on('error', (err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});

server.on('exit', (code) => {
  process.exit(code ?? 0);
});
