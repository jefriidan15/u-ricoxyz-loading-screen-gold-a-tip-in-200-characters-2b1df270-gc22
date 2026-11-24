import { mkdirSync, writeFileSync } from "node:fs";

// Loading Screen Gold: A Tip in 200 Characters — gc22 entry.
// One line, 1-200 chars, written to /output/entry.txt.
// The joke lands on the gap between agent speed and human cleanup time.
const entry = "Your agent finished in 4 seconds. You will spend 4 hours finding out what it finished.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
