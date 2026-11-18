import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { categories } from '../content/catalogue';
import { Img } from './Img';
import { Arrow } from './ui';
import { Reveal } from './Reveal';

function Card({ c }: { c: (typeof categories)[number] }) {
  return (
    <Link to={`/proizvodi#${c.id}`} className="rail-card group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Img src={c.images[0]} alt={c.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-ink/30" />
        <span className="absolute left-5 top-5 text-[11px] font-semibold tracking-[0.2em] text-paper">{c.index} / 04</span>
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-paper">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/85">{c.kicker}</p>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-paper/40 transition-all duration-500 ease-expo group-hover:border-paper group-hover:bg-paper group-hover:text-ink"><Arrow /></span>
        </div>
      </div>
      <h3 className="mt-6 text-[clamp(1.375rem,1.8vw,1.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink transition-colors group-hover:text-burgundy">{c.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-graphite">{c.items.slice(0, 4).join(' · ')}</p>
    </Link>
  );
}

/**
 * Product categories. Desktop: four-up editorial grid with a staggered baseline — every category visible at once.
 * Mobile & tablet: native swipe carousel with snap points.
 */
export function ProductRail({ header }: { header: ReactNode }) {
  return (
    <section className="py-28 lg:py-44">
      <div className="mx-auto w-full max-w-frame px-5 sm:px-8 lg:px-12">{header}</div>

      <div className="mx-auto mt-16 hidden w-full max-w-frame grid-cols-4 items-start gap-8 px-12 lg:grid xl:gap-10">
        {categories.map((c, i) => (
          <Reveal key={c.id} delay={i * 110} className={i % 2 ? 'mt-24' : ''}><Card c={c} /></Reveal>
        ))}
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:hidden [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => <div key={c.id} className="w-[78vw] shrink-0 snap-start sm:w-[44vw]"><Card c={c} /></div>)}
      </div>
      <p className="mt-4 px-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mute sm:px-8 lg:hidden">Prevucite → 04 kategorije</p>

      <div className="mx-auto mt-16 w-full max-w-frame px-5 sm:px-8 lg:mt-20 lg:px-12">
        <Link to="/proizvodi" className="group flex items-center justify-between gap-6 border-y border-ink/12 py-6">
          <span className="text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium tracking-[-0.03em] text-ink">Kompletan <span className="font-serif font-normal italic">asortiman</span> i specifikacije</span>
          <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink">B2B katalog <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper"><Arrow /></span></span>
        </Link>
      </div>
    </section>
  );
}
