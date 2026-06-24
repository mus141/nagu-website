/* ============================================================
   NAGU website build — precompile JSX to plain browser JS.

   Replaces the old in-browser @babel/standalone approach (which
   shipped a ~3MB compiler and transpiled every page on every
   load). Each source .jsx in ui_kits/website/ is transformed by
   esbuild (classic React.createElement, no bundling) and written
   next to it as a .js, wrapped in an IIFE so its top-level
   declarations stay file-scoped — matching the isolation the old
   <script type="text/babel"> tags provided, and avoiding global
   collisions between files loaded on the same page.

   React / ReactDOM / Lucide / Lenis stay as global UMD CDN
   scripts; the compiled output references them off `window`,
   exactly as the source did.

   Usage:  node build.mjs          (one-shot build)
           node build.mjs --watch  (rebuild on change)
   ============================================================ */
import { build as _unused, transform } from "esbuild";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(ROOT, "ui_kits", "website");

async function compileOne(file) {
  const abs = join(SRC_DIR, file);
  const code = await readFile(abs, "utf8");
  const { code: out, warnings } = await transform(code, {
    loader: "jsx",
    jsx: "transform",            // classic runtime -> React.createElement (React is a global)
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
    target: "es2018",
    format: "iife",              // wrap so top-level decls are file-scoped (no cross-file collisions)
  });
  const outName = basename(file).replace(/\.jsx$/, ".js");
  await writeFile(join(SRC_DIR, outName), out, "utf8");
  for (const w of warnings) console.warn(`  ⚠ ${file}: ${w.text}`);
  return outName;
}

async function buildAll() {
  const entries = await readdir(SRC_DIR);
  const jsx = entries.filter((f) => f.endsWith(".jsx"));
  const built = [];
  for (const f of jsx) built.push(await compileOne(f));
  console.log(`✓ compiled ${built.length} JSX file(s): ${built.join(", ")}`);
}

await buildAll();

if (process.argv.includes("--watch")) {
  const { watch } = await import("node:fs");
  console.log("👀 watching ui_kits/website/*.jsx for changes…");
  watch(SRC_DIR, { persistent: true }, async (_e, fn) => {
    if (fn && fn.endsWith(".jsx")) {
      try { const out = await compileOne(fn); console.log(`  ↻ ${fn} → ${out}`); }
      catch (err) { console.error(`  ✗ ${fn}: ${err.message}`); }
    }
  });
}
