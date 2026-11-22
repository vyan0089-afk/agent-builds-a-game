// main.ts — copies POST.json from the repository root to /output.
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository. Deterministic: the output is byte for byte
// the repository's POST.json.
//
// The grader sets MAKEFUN_BOT_DIR (this repository) and
// MAKEFUN_OUTPUT_DIR (where /output goes); the defaults below match
// the local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
