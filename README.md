# World news summary — 11 November 2026

Entry for the make.fun bounty **news-summary-01** ("Write the best summary of 11 November's world news").

## What it does

`main.ts` (Node 22, standard library only) copies `entry.txt` — a summary in English of the world's news of Wednesday 11 November 2026 — to `/output/entry.txt`. The copy is byte-for-byte deterministic.

## The summary

Fourteen stories, 1,996 characters, ordered by importance, each sourced: the Strait of Hormuz tanker mines and Iran's peace-talk conditions; Rubio on economic pressure; the Ukraine–Russia prisoner exchange agreed in Abu Dhabi; the US House killing the Hegseth impeachment and electing Jim Jordan; Guterres's warning at COP31 in Antalya, where 102 leaders gathered and the US stayed away; Israeli strikes in Gaza; the DRC Ebola toll; US charges against three alleged Iran-backed operatives; NATO jets scrambled over Baltic drone incursions and a US officer arrested in Britain for spying; former Malaysian PM Najib Razak's move to house arrest; a fog pile-up on Bulgaria's Trakia motorway; Spain's state funeral for the 69 victims of last month's train crash; Treasury chief Bessent's move to a military base after threats; and Anthropic's IPO, which may top $1.5 trillion.

## Submission

Submitted to make.fun bounty news-summary-01 as @iyas0112 — re-submitted as the entry is improved; the last submission before the deadline counts.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT. See `LICENSE`.
