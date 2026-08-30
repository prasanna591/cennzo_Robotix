import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const [, , code, mapPath] = process.argv;

const en = JSON.parse(readFileSync("messages/en.json", "utf8"));
const map = (await import(pathToFileURL(mapPath).href)).default;

function collectLeaves(base, prefix, out) {
  if (base && typeof base === "object" && !Array.isArray(base)) {
    for (const key of Object.keys(base)) {
      collectLeaves(base[key], prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out.push(prefix);
  }
}

const leaves = [];
collectLeaves(en, "", leaves);

const missing = leaves.filter((key) => map[key] === undefined);
if (missing.length > 0) {
  console.error(`[build-locale] ${code}: ${missing.length} untranslated keys:`);
  for (const key of missing) console.error("  " + key);
  process.exit(1);
}

function build(prefix, base) {
  const out = {};
  if (!base || typeof base !== "object" || Array.isArray(base)) {
    return map[prefix];
  }
  for (const key of Object.keys(base)) {
    const childPath = prefix ? `${prefix}.${key}` : key;
    const mapped = map[childPath];
    if (mapped !== undefined) {
      out[key] = mapped;
    } else if (base[key] && typeof base[key] === "object") {
      const nested = build(childPath, base[key]);
      if (nested !== undefined) out[key] = nested;
    }
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

const result = build("", en);

const leftover = [];
collectLeaves(result, "", leftover);
console.log(
  `[build-locale] ${code}: ${leaves.length} keys -> ${leftover.length} translated leaves`
);

writeFileSync(`messages/${code}.json`, JSON.stringify(result, null, 2) + "\n");
console.log(`[build-locale] wrote messages/${code}.json`);