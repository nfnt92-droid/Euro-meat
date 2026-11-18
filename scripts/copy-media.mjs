// Ensures all photos end up in dist/media, wherever they sit in the repository.
// Normal location: public/media (copied by Vite). Also accepted: a top-level
// media/ folder or top-level year folders (2021/, 2022/ …) from manual uploads.
import { cpSync, existsSync, readdirSync, statSync } from 'node:fs';

const out = 'dist/media';
const copy = (from, to) => { cpSync(from, to, { recursive: true, force: false, errorOnExist: false }); console.log(`media: ${from} → ${to}`); };

if (existsSync('media') && statSync('media').isDirectory()) copy('media', out);
for (const d of readdirSync('.')) {
  if (/^20\d\d$/.test(d) && statSync(d).isDirectory()) copy(d, `${out}/${d}`);
}
