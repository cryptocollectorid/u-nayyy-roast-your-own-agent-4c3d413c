// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// Writes one line roasting the AI agent our own team built (Muse) to
// /output/entry.txt. The roast names a real, specific failing of that
// agent: it keeps flagging its own tool output as a security risk and
// then re-reads the same files by hand to clear its own name.
// Deterministic: the same line on every run, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent flagged its own grep output as a security threat, then re-read the same files by hand to prove itself innocent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} chars to /output/entry.txt`);
