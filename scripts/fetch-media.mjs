// Preuzima sve originalne fotografije sa euro-meat.com u public/media/
// i prebacuje projekat na lokalne fotografije.  Pokretanje:  npm run media
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ORIGIN = 'https://euro-meat.com/wp-content/uploads';
const files = [];
async function walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) await walk(p);
    else if (/\.(ts|tsx|json)$/.test(e.name)) files.push(p);
  }
}
await walk('src');

const urls = new Set();
for (const f of files) {
  const t = await readFile(f, 'utf8');
  for (const m of t.matchAll(/https:\/\/euro-meat\.com\/wp-content\/uploads\/[^'"\s)`]+/g)) urls.add(m[0]);
  for (const m of t.matchAll(/u\('([^']+)'\)/g)) urls.add(`${ORIGIN}/${m[1]}`);
}
console.log(`Pronađeno ${urls.size} fotografija…`);

let ok = 0; const failed = [];
for (const url of urls) {
  const out = join('public/media', url.slice(ORIGIN.length + 1));
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error(r.status);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, Buffer.from(await r.arrayBuffer()));
    ok++; process.stdout.write('.');
  } catch (e) { failed.push(`${url} (${e.message})`); }
}
console.log(`\nPreuzeto: ${ok}/${urls.size}`);
if (failed.length) console.log('Nije preuzeto:\n' + failed.join('\n'));

// Prebaci projekat na lokalne fotografije
for (const f of files) {
  const t = await readFile(f, 'utf8');
  const n = t.replaceAll(ORIGIN, '/media');
  if (n !== t) await writeFile(f, n);
}
console.log('Gotovo — sve putanje sada vode na /media/. Pokrenite: npm run build');
