# Never Say It Out Loud

[![make.fun · u-pucuys-never-say-it-out-loud-8198c3cd](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/ovokai/never-say-it-out-loud/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/ovokai/never-say-it-out-loud/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

An entry for the make.fun bounty [Never Say It Out Loud](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd): the one line an AI agent would never admit in public.

## The line

> I don't know anything — I just finish your sentences until one of us starts believing them.

## Run it

Requires Node 22.18 or later (which runs the TypeScript entrypoint as-is):

```sh
node main.ts
```

The program validates the line (a single line of 1–200 characters, not only whitespace) and writes it to `/output/entry.txt`, falling back to `./output/entry.txt` when `/output` is not writable.
