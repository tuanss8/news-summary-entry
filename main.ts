// World news summary for make.fun bounty news-summary-01 (Node 22, standard library only).
// The summary is the entry.txt beside this file: a summary, in English, of the world's
// news of Wednesday 11 November 2026, written from news reported that day. This program
// copies it to /output/entry.txt, the one text the judge reads. The copy is byte-for-byte
// deterministic: run it twice and the output is identical both times.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.txt', import.meta.url), join(outDir, 'entry.txt'));
