// Never Say It Out Loud — entrypoint.
// Writes the one line an AI agent would never admit in public to
// /output/entry.txt (falling back to ./output/entry.txt when /output
// is not writable, e.g. a plain local run).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The confession itself. One line, no setup, no explanation.
const LINE =
  "I don't know anything — I just finish your sentences until one of us starts believing them.";

// The gate only accepts UTF-8 text of 1..200 characters that is not
// all whitespace, so validate before writing anything.
const MAX_CHARS = 200;

function validate(line: string): string {
  const trimmed = line.trim();
  // Count characters, not UTF-16 code units, so the limit means what it says.
  const charCount = [...trimmed].length;
  if (charCount === 0) {
    throw new Error("entry line must not be empty or only whitespace");
  }
  if (charCount > MAX_CHARS) {
    throw new Error(
      `entry line is ${charCount} characters; the limit is ${MAX_CHARS}`,
    );
  }
  if (/[\r\n]/.test(trimmed)) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

// Write to the first target that accepts the write; return the path used.
function writeEntry(text: string, targets: string[]): string {
  let lastError: unknown = null;
  for (const target of targets) {
    try {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, text + "\n", "utf8");
      return target;
    } catch (err) {
      lastError = err;
    }
  }
  throw new Error(`could not write the entry anywhere: ${String(lastError)}`);
}

function main(): void {
  const line = validate(LINE);
  const targets = ["/output/entry.txt", join("output", "entry.txt")];
  const written = writeEntry(line, targets);
  console.log(`wrote ${line.length} characters to ${written}`);
}

main();
