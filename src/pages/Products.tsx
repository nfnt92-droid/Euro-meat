import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Button, Arrow } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Split } from '../components/Split';
import { Img } from '../components/Img';
import { ContactBand } from '../components/ContactBand';
import { categories, productsIntro, type Category } from '../content/catalogue';
import { site } from '../content/site';

function Gallery({ c }: { c: Category }) {
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + c.images.length) % c.images.length);
  return (
    <div>
      <div className="group relative aspect-[4/3] overflow-hidden bg-stone">
        {c.images.map((src, i) => (
          <Img key={src} src={src} alt={`${c.title} — fotografija ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1100ms] ease-expo ${i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`} />
        ))}
        {c.images.length > 1 && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-paper/95 text-ink">
            <button type="button" onClick={() => go(-1)} aria-label="Prethodna fotografija" className="grid h-10 w-10 place-items-center hover:bg-bone"><Arrow className="rotate-180" /></button>
            <span className="px-1 text-[11px] font-semibold tabular-nums tracking-[0.12em]">{String(active + 1).padStart(2, '0')} / {String(c.images.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => go(1)} aria-label="Sljedeća fotografija" className="grid h-10 w-10 place-items-center hover:bg-bone"><Arrow /></button>
          </div>
        )}
      </div>
      {c.images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label={`Fotografije: ${c.title}`}>
          {c.images.map((src, i) => (
            <button key={src} type="button" role="tab" aria-selected={i === active} aria-label={`Fotografija ${i + 1}`} onClick={() => setActive(i)}
              className={`relative h-14 w-[4.5rem] shrink-0 overflow-hidden bg-stone transition-opacity sm:h-16 sm:w-20 ${i === active ? 'opacity-100' : 'opacity-45 hover:opacity-100'}`}>
              <Img src={src} alt="" quiet className="h-full w-full object-cover" />
              {i === active && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-burgundy" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const short = (c: Category) => (c.id === 'teletina' ? 'Crveno meso' : c.id === 'gurman' ? 'GURMAN GOLD' : c.title);

export default function Products() {
  const active = useActiveSection(categories.map((c) => c.id));
  return (
    <>
      <Seo title="Proizvodi" description="B2B katalog: teletina, junetina, govedina i jagnjetina; procesna industrija; piletina; GURMAN GOLD linija. Svježe, rashlađeno ili zamrznuto, komadno ili MAP pakovanje." image={categories[0].images[0]} />
      <PageHero index="04" eyebrow="Proizvodi · B2B katalog" title={'Kupcima nudimo\n*veliki izbor.*'} lead={productsIntro.lead}
        aside={<p className="mt-4 text-sm leading-relaxed text-mute">{productsIntro.origin}</p>} />

      {/* Category overview strip */}
      <section className="mt-20 border-y border-ink/10 lg:mt-28">
        <Frame className="grid grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c.id} to={`/proizvodi#${c.id}`} className={`group flex flex-col justify-between gap-10 py-8 pr-4 transition-colors lg:py-10 ${i % 2 ? 'border-l border-ink/10 pl-5 sm:pl-8' : ''} ${i > 1 ? 'border-t border-ink/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-8' : ''}`}>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-burgundy">{c.index}</span>
              <span>
                <span className="block text-lg font-medium leading-tight tracking-[-0.01em] text-ink group-hover:text-burgundy sm:text-xl">{short(c)}</span>
                <span className="mt-2 block text-sm text-mute">{c.items.length} artikala</span>
              </span>
            </Link>
          ))}
        </Frame>
      </section>

      {/* Mobile sticky chips */}
      <nav aria-label="Kategorije proizvoda" className="sticky top-0 z-30 border-b border-ink/10 bg-paper/95 backdrop-blur-md lg:hidden">
        <div className="flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8">
          {categories.map((c) => (
            <Link key={c.id} to={`/proizvodi#${c.id}`} className={`shrink-0 border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${active === c.id ? 'border-ink bg-ink text-paper' : 'border-ink/15 text-graphite'}`}>{c.index} {short(c)}</Link>
          ))}
        </div>
      </nav>

      <Frame className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Desktop sticky index */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32 py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Katalog</p>
            <ul className="mt-6 border-t border-ink/10">
              {categories.map((c) => (
                <li key={c.id} className="border-b border-ink/10">
                  <Link to={`/proizvodi#${c.id}`} aria-current={active === c.id ? 'true' : undefined} className={`flex items-baseline gap-4 py-4 transition-colors ${active === c.id ? 'text-ink' : 'text-mute hover:text-ink'}`}>
                    <span className={`text-[11px] font-semibold tracking-[0.18em] ${active === c.id ? 'text-burgundy' : ''}`}>{c.index}</span>
                    <span className="text-[17px] font-medium leading-snug">{short(c)}</span>
                    <span className={`ml-auto h-px bg-burgundy transition-all duration-700 ease-expo ${active === c.id ? 'w-6' : 'w-0'}`} />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3">
              <Button href={site.orderUrl} className="w-full justify-between">Naruči online</Button>
              <Button to="/kontakt" variant="line" className="w-full justify-between">Upit za ponudu</Button>
            </div>
          </div>
        </aside>

        <div className="min-w-0 lg:col-span-9">
          {categories.map((c) => (
            <section key={c.id} id={c.id} className="scroll-mt-20 border-b border-ink/10 py-20 last:border-b-0 lg:scroll-mt-28 lg:py-28">
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">
                <span className="text-burgundy">{c.index} / 04</span><span className="h-px w-8 bg-ink/25" />{c.kicker}
              </div>
              <Split className="mt-6 max-w-3xl text-[clamp(2.25rem,4.4vw,4.25rem)] font-medium leading-[0.98] tracking-[-0.04em]" text={c.title} />
              <Reveal as="p" delay={150} className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">{c.lead}</Reveal>

              <Reveal className="mt-12" variant="fade"><Gallery c={c} /></Reveal>

              <div className="mt-14 grid gap-12 md:grid-cols-2">
                <Reveal>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Asortiman</h3>
                  <ul className="mt-4 border-t border-ink/12">
                    {c.items.map((it, i) => (
                      <li key={it} className="flex items-baseline gap-4 border-b border-ink/12 py-3.5 text-[17px] text-ink">
                        <span className="w-6 text-[11px] font-semibold tabular-nums text-mute">{String(i + 1).padStart(2, '0')}</span>{it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={120}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Specifikacija</h3>
                  <dl className="mt-4 border-t border-ink/12">
                    {c.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-5 gap-4 border-b border-ink/12 py-3.5 text-[15px]">
                        <dt className="col-span-2 text-mute">{s.label}</dt><dd className="col-span-3 text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  {c.note && <p className="mt-5 border-l-2 border-burgundy pl-4 text-sm leading-relaxed text-graphite">{c.note}</p>}
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      </Frame>

      <section className="bg-bone/70 py-20 lg:py-28">
        <Frame className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Dobavljači i standardi</p>
            <p className="mt-6 text-h3 font-medium text-ink">{productsIntro.suppliers}</p>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" delay={100}>
            <Button href={site.orderUrl}>Naruči online</Button>
            <Button to="/kontakt" variant="line">Upit za ponudu</Button>
          </Reveal>
        </Frame>
      </section>
      <ContactBand />
    </>
  );
}
