import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
const prefix = "/flood";
const attr = /((?:href|src|action)=["'])\/(?!flood\/)/g;

async function walk(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await walk(full)));
    else if (/\.(html|xml)$/.test(entry.name)) found.push(full);
  }
  return found;
}

for (const file of await walk(dist)) {
  const html = await readFile(file, "utf8");
  const next = html.replace(attr, `$1${prefix}/`);
  if (next !== html) await writeFile(file, next);
}
