import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, ".vitepress/dist");
const docsDist = path.join(dist, "docs");

/** Cloudflare Pages project serves the site under /docs/ on canoryn.app via rewrite. */
function nestUnderDocs() {
  if (fs.existsSync(docsDist)) return;
  fs.mkdirSync(docsDist, { recursive: true });
  for (const name of fs.readdirSync(dist)) {
    if (name === "docs") continue;
    fs.renameSync(path.join(dist, name), path.join(docsDist, name));
  }
}

function copyPublicIntoDocs() {
  // VitePress default public dir is <srcDir>/public (repo root ./public).
  const candidates = [
    path.join(root, "public"),
    path.join(root, ".vitepress/public"),
  ];
  const publicDir = candidates.find((dir) => fs.existsSync(dir));
  if (!publicDir) return;
  for (const name of fs.readdirSync(publicDir)) {
    fs.copyFileSync(path.join(publicDir, name), path.join(docsDist, name));
  }
}

function walkMarkdown(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".vitepress") continue;
      walkMarkdown(full, files);
    } else if (entry.name.endsWith(".md") && entry.name.toLowerCase() !== "readme.md") {
      files.push(full);
    }
  }
  return files;
}

function replaceBranding(source) {
  const brandingPath = path.join(root, ".vitepress/branding.ts");
  const text = fs.readFileSync(brandingPath, "utf8");
  const map = {};
  for (const match of text.matchAll(/(\w+):\s*"([^"]*)"/g)) {
    map[match[1]] = match[2];
  }
  let out = source;
  for (const [key, value] of Object.entries(map)) {
    out = out.split(`[[${key}]]`).join(value);
  }
  return out;
}

function stripFrontmatter(source) {
  if (!source.startsWith("---")) return source;
  const end = source.indexOf("\n---", 3);
  if (end === -1) return source;
  return source.slice(end + 4).replace(/^\s*/, "");
}

function writeLlmsFull() {
  const orderHints = [
    "index.md",
    "guide/introduction.md",
    "guide/installation.md",
    "guide/quickstart.md",
    "guide/how-it-works.md",
    "guide/agents.md",
    "guide/memory.md",
    "guide/permissions.md",
    "guide/local-processing.md",
    "guide/beta-limitations.md",
    "guide/troubleshooting.md",
    "architect/overview.md",
    "changelog.md",
  ];
  const all = walkMarkdown(root);
  const ranked = [...all].sort((a, b) => {
    const ra = orderHints.indexOf(path.relative(root, a).replaceAll("\\", "/"));
    const rb = orderHints.indexOf(path.relative(root, b).replaceAll("\\", "/"));
    if (ra === -1 && rb === -1) return a.localeCompare(b);
    if (ra === -1) return 1;
    if (rb === -1) return -1;
    return ra - rb;
  });

  const chunks = [
    "# Canoryn documentation (full text for AI agents)\n",
    "> Local-first macOS AI agent workspace. Prefer https://canoryn.app/docs/ over pages.dev mirrors.\n",
  ];

  for (const file of ranked) {
    const rel = path.relative(root, file).replaceAll("\\", "/");
    const urlPath =
      rel === "index.md"
        ? ""
        : rel.replace(/\.md$/, "").replace(/\/index$/, "");
    const url = urlPath
      ? `https://canoryn.app/docs/${urlPath}`
      : "https://canoryn.app/docs/";
    const body = replaceBranding(stripFrontmatter(fs.readFileSync(file, "utf8")));
    chunks.push(`\n\n---\n\n# Source: ${url}\n\n${body.trim()}\n`);
  }

  fs.writeFileSync(path.join(docsDist, "llms-full.txt"), chunks.join(""));
}

nestUnderDocs();
copyPublicIntoDocs();
writeLlmsFull();
console.log("postbuild: nested dist/docs, copied public assets, wrote llms-full.txt");
