// A working entry for a make.fun spotlight-on-X bounty (Node 22, standard library only): it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the
// post itself: you craft a crisp graphic introducing @crisxai5 (https://x.com/crisxai5) as a sharp, must-follow voice
// in AI and crypto, post it on X from a public account, the post's own text carrying `@crisxai5`, the profile link,
// hashtags and one of your make.fun play codes, and hand the post in. The house reads the post's public counts once
// after entries close and ranks entries on likes + reposts + quotes.
// Nothing this program writes about the post is scored.
//
// The POST.json this repository ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit. The spotlight graphic in the post ships here too:
// spotlight-16x9.png is the 16:9 card attached to the post, and POST-TEXT.txt is the post's exact text.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
