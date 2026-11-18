import { useEffect, useState } from 'react';
import { Img } from './Img';
import { Split } from './Split';
import { Button, CertMark } from './ui';
import { Reveal } from './Reveal';
import { media } from '../content/media';
import { site } from '../content/site';
import { useI18n } from '../i18n';
import { prefersReduced } from '../lib/motion';

const slides = [
  { src: media.hero, caption: 'Rashladna hala', alt: 'Rashladna hala sa polovicama goveđeg mesa u pogonu Euro Meat' },
  { src: media.tech[1], caption: 'Rashladne komore', alt: 'Rashladna komora u objektu Euro Meat u Maglaju' },
  { src: media.quality[0], caption: 'Hladni lanac', alt: 'Hodnik rashladnih komora sa mesom na kolosijeku' },
  { src: media.tech[3], caption: 'Objekat · 1.000 m²', alt: 'Unutrašnjost objekta Euro Meat sa kolosijecima i komorama' },
];
const DURATION = 6500;

/** Cinematic hero: slow cross-dissolving authentic photography with a progress index. */
export function HeroCinema() {
  const { t } = useI18n();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (prefersReduced() || paused) return;
    const id = setTimeout(() => setI((n) => (n + 1) % slides.length), DURATION);
    return () => clearTimeout(id);
  }, [i, paused]);

  return (
    <section className="hero relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-paper" aria-roledescription="carousel" aria-label="Euro Meat u slikama">
      <div className="absolute inset-0">
        {slides.map((s, n) => (
          <div key={s.src} className={`hero-slide absolute inset-0 ${n === i ? 'is-active' : ''}`} aria-hidden={n !== i}>
            <Img src={s.src} alt={s.alt} priority={n === 0} className="h-full w-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-ink/35 sm:bg-ink/20" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,34,34,.6)_0%,rgba(32,34,34,.1)_30%,rgba(32,34,34,.45)_58%,rgba(32,34,34,.95)_100%)]" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(32,34,34,.7)_0%,rgba(32,34,34,0)_60%)] sm:block" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-frame flex-1 flex-col justify-end px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-10">
        <Reveal delay={200} className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper [text-shadow:0_1px_12px_rgba(32,34,34,.6)]">
          <span className="whitespace-nowrap text-paper">Est. 2019</span><span className="h-px w-8 bg-paper/40" /><span className="whitespace-nowrap">Maglaj<span className="hidden sm:inline"> · Bosna i Hercegovina</span><span className="sm:hidden"> · BiH</span></span>
        </Reveal>

        <Split as="h1" immediate delay={250} stagger={90} className="text-display font-semibold" text={'Brzo. Svježe.\n*Provjereno.*'} />

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <Reveal delay={700} className="lg:col-span-5">
            <p className="max-w-md text-[17px] leading-relaxed text-paper/80">
              Veleprodaja, obrada i distribucija svježeg i zamrznutog telećeg, junećeg i goveđeg mesa — uz piletinu i jagnjetinu po narudžbi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/proizvodi" variant="light">{t.explore}</Button>
              <Button to="/kontakt" variant="line" className="!border-paper/35 !text-paper hover:!bg-paper hover:!text-ink">{t.contactUs}</Button>
            </div>
          </Reveal>

          <Reveal delay={850} className="lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-3 border-t border-paper/20 pt-5 text-paper">
              <div><p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold leading-none tracking-[-0.04em]">24 h</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-paper/55">Isporuka</p></div>
              <div><p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold leading-none tracking-[-0.04em]">−35 °C</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-paper/55">Hladni lanac</p></div>
              <div><p className="text-[clamp(1.5rem,2.6vw,2.4rem)] font-semibold leading-none tracking-[-0.04em]">32+</p><p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-paper/55">God. iskustva</p></div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-paper/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="hidden flex-wrap gap-2 sm:flex">{site.certifications.map((c) => <CertMark key={c} label={c} light />)}</div>
          <div className="flex items-center gap-5">
            <p className="min-w-[9rem] text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/80" aria-live="polite">
              <span className="tabular-nums text-paper">0{i + 1}</span><span className="text-paper/40"> / 0{slides.length}</span> · {slides[i].caption}
            </p>
            <div className="flex gap-1.5">
              {slides.map((s, n) => (
                <button key={s.src} type="button" onClick={() => setI(n)} aria-label={`Prikaži: ${s.caption}`} aria-current={n === i}
                  className="group relative h-6 w-10 sm:w-14">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-paper/25" />
                  <span key={`${n}-${i}`} className={`absolute left-0 top-1/2 h-px bg-paper ${n === i && !paused ? 'hero-progress' : n < i ? 'w-full' : 'w-0'}`} style={{ animationDuration: `${DURATION}ms` }} />
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setPaused((p) => !p)} className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/60 hover:text-paper" aria-label={paused ? 'Nastavi prikaz' : 'Pauziraj prikaz'}>
              {paused ? '▶' : 'II'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
