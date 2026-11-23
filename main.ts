// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt and nothing else:
// no words, no caption, no explanation.
//
// The emoji: 🤗 (hugging face) — a smiling face with open arms.
// Warm at first glance, friendly to any stranger, and chosen
// rather than the first default smiley that comes to mind.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Self-check: the file must hold exactly the one emoji we chose —
// a single character, 1 to 8 characters per the gate, never blank.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EMOJI || [...written].length !== 1) {
  throw new Error("entry.txt must contain exactly one emoji");
}
