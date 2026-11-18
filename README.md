# EURO MEAT d.o.o. Maglaj — website redesign

A complete multipage corporate website for EURO MEAT d.o.o. Maglaj, built with **React 18 + TypeScript + Tailwind CSS (Vite)** and ready to deploy on **Netlify**.

Pages: Početna · O nama · Kvalitet · Tehnologija · Proizvodi · Novosti (listing + articles) · Kontakt · 404.

---

## 1. Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 18+ (Netlify is pinned to Node 20 in `netlify.toml`).

## 2. Deploy to Netlify

1. Push this folder to a Git repository (GitHub / GitLab / Bitbucket).
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. The build settings are read from `netlify.toml` (`npm run build`, publish `dist`). Click **Deploy**.
4. Point the domain `euro-meat.com` to Netlify (Domain management → Add domain) and enable HTTPS.

`netlify.toml` already includes:
- the SPA fallback (`/* → /index.html 200`), so clean URLs like `/proizvodi` work on refresh;
- **301 redirects from the old WordPress URLs** (`/o-nama/`, `/blog/*`, `/kvalitet/`, old article slugs …) to the new routes, so existing links and search rankings carry over;
- long-term caching for hashed assets and basic security headers.

Drag-and-drop alternative: run `npm run build` and drop the `dist/` folder onto app.netlify.com/drop. (In that case the CMS won't work: it needs a Git-connected site.)

## 2b. Deploy to Cloudflare (Workers & Pages, free)

`wrangler.jsonc` is included. In the Cloudflare dashboard → Workers & Pages → Create application → **Import a repository** → pick this GitHub repo. The defaults work: Cloudflare runs `npx wrangler deploy`, which first runs `npm run build` (configured in `wrangler.jsonc`) and then publishes `dist/` with single-page-app routing. Every push to `main` redeploys automatically. The site is served at `euromeat.<your-subdomain>.workers.dev`.

## 3. News CMS (Decap CMS) — setup required

News articles are JSON files in `src/content/news/`. The pages read them at build time through `src/lib/news.ts`. Nothing in the components is tied to the storage format.

A **Decap CMS** admin panel is included at `/admin` (`public/admin/`). **It is not active until you finish these steps**:

1. On Netlify: **Site configuration → Identity → Enable Identity**.
2. Identity → Registration: set to **Invite only**, then invite the editors' e-mails.
3. Identity → Services → **Enable Git Gateway**.
4. Editors open `https://euro-meat.com/admin`, accept the invite, and can then create/edit articles (title, date, category, excerpt, cover image, Markdown body, gallery, source link).
   Each save commits a JSON file to the repo. Netlify rebuilds automatically (about 1 minute).

Switching to a headless CMS (Sanity, Contentful, Strapi…) only requires rewriting `src/lib/news.ts`.

## 4. Online ordering

The **"Naruči online"** buttons keep the **existing** ordering link: `https://euro-meat.com/online-narudzba/`.
⚠️ When audited (17.11.2026), that page showed only **"Stranica je u izradi"** (under construction). It has no form or backend. **No ordering functionality was invented.**
When the domain moves to this new site, that URL will no longer exist. Before go-live, set `site.orderUrl` in `src/content/site.ts` to the real ordering system, or point it to `/kontakt`.

## 5. Content architecture

| File | Contents |
|---|---|
| `src/content/site.ts` | Company master data: address, phones, e-mails, hours, director, videos, PDF documents, social links, order URL |
| `src/content/catalogue.ts` | The 4 product categories: items, specifications, image sets (anchors `#teletina`, `#industrija`, `#piletina`, `#gurman`) |
| `src/content/facts.ts` | Statistics, cold-storage data, process steps, quality policy points, FAQ |
| `src/content/media.ts` | **Central image registry** (every photo URL in one place) |
| `src/content/news/*.json` | News articles (CMS-managed) |

### Localisation (BS / EN / DE)
`src/i18n/` holds UI-chrome dictionaries for Bosnian (primary), English and German. The language switcher works and remembers the choice.
**Page content is currently Bosnian only.** EN/DE visitors see a clear notice saying content is in preparation. To add translated content, create parallel content modules (e.g. `catalogue.en.ts`) and select them with `useI18n().lang`. Per the brief, legal and technical documents (quality policy PDFs) are **not** translated.

## 6. Design system (v2)

- **Colours:** paper `#F5F3EF`, ink `#202222`, burgundy `#672B36` (+ deep/soft), bone/stone neutrals, steel grey. No orange, bright red or glassmorphism.
- **Type:** Manrope Variable for everything structural. **Instrument Serif italic** is used sparingly as an editorial accent: one phrase per headline, written as `*phrase*` in `Split` text. Both fonts are self-hosted with latin-ext, so č ć š ž đ render correctly.
- **Grid:** 12 columns, max width 1440px, intentional asymmetry. Full-bleed photographic moments alternate with narrow, highly legible text columns.
- **Motion system** (all of it is off under `prefers-reduced-motion`):
  - `SmoothScroll`: Lenis inertial scrolling on desktop pointers only. Touch devices keep native scrolling, and scrolling is never hijacked.
  - `Split`: word-by-word masked headline rise.
  - `ImageReveal`: clip-path wipe with zoom settle, then parallax.
  - `ExpandImage`: a framed photo opens to full bleed on scroll.
  - `ScrollText`: a statement whose words brighten as you read.
  - `Counter`: figures count up; the real value is always in the DOM.
  - `ProductRail`: pinned horizontal category rail built on native `position: sticky`. Mobile gets a swipe carousel with snap points.
  - `ProcessLine`: a line draws through the 5 process steps.
  - `HeroCinema`: slow cross-dissolving authentic photography with progress index, pause button and manual controls.
  - `Curtain`: page transition.
  - Full-screen menu with staggered links and a hover image preview, plus a header that hides on scroll down and returns on scroll up.
- **Data visualisation:** `ColdChainChart` shows the documented temperatures on a single °C axis and storage capacity on a separate tonnes axis. There is no dual axis: the tunnel's t/day rate is stated as text. It uses one hue with direct labels, hover/focus states and a screen-reader table.
- **Components:** `Reveal`, `Parallax`, `Img` (lazy, with an honest fallback), `Video` (click-to-load, local poster), `PageHero`, `SectionHead`, `Button`, `CertMark`, `NewsCard`, `ContactBand`, `Header`, `Footer`, `Seo`.

## 7. SEO and accessibility

- Per-page `<title>`, description, canonical, Open Graph and Twitter tags (`react-helmet-async`), plus Organization JSON-LD in `index.html`.
- `public/sitemap.xml` and `robots.txt` (admin excluded).
- Semantic landmarks, skip link, visible focus states, `aria-expanded`/`aria-pressed` on toggles, keyboard-closable mobile menu (Esc), alt text, sufficient contrast.
- Routes are code-split. Images are lazy-loaded with `decoding="async"`. YouTube only loads after a click.

## 8. Assets

**All photography is the original Euro Meat photography**, downloaded from euro-meat.com (61 files), converted to WebP (max 1920px, ~7 MB total) and stored in `public/media/`. Every path goes through `src/content/media.ts` and the news JSON files. Slot assignments were **reviewed visually**: hero = cold hall with carcasses, logistics = company trucks, technology = cold rooms and −35 °C control panel, director portrait on O nama. Quality-policy PDFs still link to the originals on euro-meat.com; copy them into `public/` before the old site is shut down.
`npm run media` can re-download from euro-meat.com if new photos are added there. If an image fails to load, a labelled placeholder appears instead of a broken icon.

Logo: the redesign uses a typographic wordmark (`src/components/Logo.tsx`). The original raster logo is at `/wp-content/uploads/2021/03/logo-1.png`. Request vector originals (SVG/AI) from the client if the official mark must be used.

## 9. Audit: information that could not be retrieved or needs confirmation

| Item | Status |
|---|---|
| Original page text, verbatim | The audit tools returned structured summaries, not raw HTML. Texts were **re-edited from the documented facts** (the brief allows this). No claims were added. Ask the client to proof-read. |
| News archive, pages 2–9 of `/blog/` | **Not retrieved.** 8 articles are included (2021–2026). A post "Posjeta načelnika općine Maglaj kompaniji Euro Meat" is known to exist, but its URL and text could not be fetched. |
| Full job-ad details (PDF "OGLAS MESAR" etc.) | Not retrieved. Each ad links to its original post. |
| Freezer chamber temperature | `/tehnologija` says **−30 °C**. The 2021 press release (KFBiH) says −35 °C. The site uses −30 °C for the chambers and −35 °C for the freezing tunnel. **Please confirm.** |
| Storage capacity | `/o-nama` states **306 t** daily storage capacity. Chamber totals (101 t + 168 t) add up to 269 t. Shown as stated, with its source. **Please confirm.** |
| Site area | Website: **1.000 m²** facility. The 2021 press release mentions a **7.500 m²** complex. Only the website figure is used. |
| "Pandleraj" (28 t/day) | Term as written on the original site. The press release calls it a palletizing line. Kept as on the site. |
| Vehicle types | The original says "10 specialised transport units". No types or models are given, so none are named. |
| Map embed | Kept identical to the original (query "Škafa Maglaj"). Replace with an exact pin if needed. |
| Online ordering | Original page is under construction (see §4). |
| English / German content | No official translations exist. Only the UI is translated (see §5). |
| Client logos, testimonials, additional certificates | None on the original site, so none were added. |
| Euro Meat nekretnine (nekretnine.euro-meat.com) | A separate site. Linked from the footer and not merged. |

## 10. Design references
The brief named woodeco.eu, corporate.arcelormittal.com and qindustrial.com. These sites **could not be opened from the build environment** (blocked by the network allowlist), so the design synthesises the principles described in the brief rather than any of their layouts. Nothing was copied from them.

## 11. Sources audited (17.11.2026)
`/`, `/o-nama/`, `/kvalitet`, `/tehnologija/`, `/proizvodi/`, `/blog/`, `/kontakt/`, `/online-narudzba/`, individual articles (`/potvrden-halal-certifikat/`, `/posjeta-ucenika-kompaniji-euro-meat/`, `/oglas-za-posao-mesar-vise-izvrsilaca/`, `/oglas-za-prijem-u-radni-odnos-mesar/`, `/oglas-za-posao-potrebni-mesari/`), quality-policy PDFs, YouTube videos `2VkMMQ_aZSU` (corporate) and `1oP7h1Gg6j0` (location), plus the 2021 company press release on kfbih.com, used only for cross-checking.
