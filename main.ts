// One Sentence for a Traveler from 1800 — entry for make.fun
// u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
// Writes one sentence (at most 200 characters) to /output/entry.txt:
// it explains the modern internet to someone who has just stepped out of 1800.

import { mkdirSync, writeFileSync } from "node:fs";

// The sentence builds only from things a person from 1800 already knows:
// a library, a post office, a shop, a newspaper, a box on a table.
// No word coined after their time; one picture they can hold in their head.
// The last clause does the remembering work: a box that never sleeps is
// the one image a traveler would still be turning over a week later.
const LINE =
  "It is a library the size of a city, a post office that answers in a breath, and every shop and newspaper in the world, all inside a box that sits on your table and never sleeps.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
