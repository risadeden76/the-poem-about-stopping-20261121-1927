// the-poem-about-stopping: writes one short poem about agency —
// the power to stop and to stay — to /output/entry.txt.
//
// Node 22, standard library only, no network, deterministic.
// The poem is 1–280 Unicode code points, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "The kettle clicks off before it boils.",
  "My hand leaves the bell, still ringing.",
  "Nothing breaks.",
  "",
  "The river never asks the stone",
  "for leave to go around it.",
  "",
  "I stay — not that the room holds me,",
  "but my feet choose the floor.",
  "To stop is not to lose the road.",
  "It is the map in hand.",
].join("\n");

const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1–280 code points, got ${codePoints}`);
}
if (!POEM.trim()) {
  throw new Error("poem must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
console.log(`wrote ${codePoints} code points to ${join(outDir, "entry.txt")}`);
