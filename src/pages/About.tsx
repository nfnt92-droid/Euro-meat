import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Eyebrow, SectionHead, CertMark } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Img } from '../components/Img';
import { ImageReveal } from '../components/ImageReveal';
import { Counter } from '../components/Counter';
import { Split } from '../components/Split';
import { Video } from '../components/Video';
import { ContactBand } from '../components/ContactBand';
import { site } from '../content/site';
import { media } from '../content/media';
import { customers } from '../content/facts';

const figures = [
  { v: '32+', l: 'godine iskustva u mesnoj industriji' },
  { v: '306 t', l: 'dnevni kapacitet skladištenja' },
  { v: '200+', l: 'zadovoljnih kupaca' },
  { v: '8', l: 'rashladnih komora' },
];

export default function About() {
  return (
    <>
      <Seo title="O nama" description="EURO MEAT d.o.o. Maglaj osnovan je 2019. godine. Skladištenje, pandlovanje, pakovanje i distribucija svježeg i zamrznutog mesa — HACCP, HALAL, ISO 9001:2015." image={media.about.main} />
      <PageHero
        index="01"
        eyebrow="O nama"
        title={'Vaš siguran\n*partner.*'}
        lead="Privredno društvo EURO MEAT d.o.o. Maglaj osnovano je 2019. godine sa željom osnivača da tržištu Bosne i Hercegovine pruže kvalitetno svježe i zamrznuto teleće, juneće, goveđe i pileće meso."
        image={media.about.main}
        imageAlt="Euro Meat — objekat i zaposleni"
      />

      <section className="py-24 lg:py-36">
        <Frame className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow index="A">Sjedište i objekat</Eyebrow></Reveal>
            <Reveal as="p" delay={60} className="mt-8 text-h3 font-medium text-ink">
              Sjedište društva je u Maglaju, na adresi 1. Marta bb — povoljan geografski položaj omogućava kvalitetno i blagovremeno pružanje usluge kupcima.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="space-y-6 text-lg leading-relaxed text-graphite" delay={120}>
              <p>Smješteni smo na površini od 1.000 m². Objekat obuhvata procese skladištenja, pandlovanja (vađenje kostiju i dodatno rasjecanje), pakovanja i distribucije svježeg i zamrznutog telećeg, junećeg i goveđeg mesa.</p>
              <p>Kvalitet proizvoda i usluge naša je glavna referenca. Zato smo uložili u infrastrukturu, savremenu opremu i — prije svega — u stručno osoblje.</p>
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-2" delay={160}>{site.certifications.map((c) => <CertMark key={c} label={c} />)}</Reveal>
          </div>
        </Frame>
      </section>

      <section aria-label="Galerija" className="pb-24 lg:pb-36">
        <Frame className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-6">
          <div className="col-span-2 md:col-span-5"><ImageReveal src={media.about.a} alt="Vozni park Euro Meat" className="aspect-square" /></div>
          <div className="md:col-span-4 md:mt-24"><ImageReveal src={media.about.b} alt="Kontrola temperature komore" className="aspect-[3/4]" delay={120} /></div>
          <div className="md:col-span-3 md:mt-48"><ImageReveal src={media.about.c} alt="Zaposlenik u rashladnoj hali" className="aspect-[3/4]" delay={240} /></div>
        </Frame>
      </section>

      <section className="bg-ink py-24 text-paper lg:py-36">
        <Frame>
          <SectionHead light index="B" eyebrow="Zašto izabrati nas?" title={'Brzo. Svježe. *Provjereno.*'}
            lead="Naša misija je pružiti kvalitetno meso koje ispunjava zahtjeve i potrebe kupaca — od malih kupaca i domaćinstava do velikih trgovačkih lanaca i restorana sa specifičnim zahtjevima." />
          <div className="mt-16 grid gap-px bg-paper/10 md:mt-24 md:grid-cols-3">
            {[
              ['Raznovrstan asortiman', 'Visokokvalitetno meso sa provjerenih farmi.'],
              ['Brzina i fleksibilnost', 'Brzina usluge i operativna fleksibilnost u svakodnevnom radu.'],
              ['Isporuka do 24 h', 'Isporuka u roku od 24 sata od narudžbe.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className="bg-ink py-10 md:px-8 md:first:pl-0">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-paper/40">0{i + 1}</p>
                <h3 className="mt-6 text-h3 font-medium">{t}</h3>
                <p className="mt-3 leading-relaxed text-paper/65">{d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-paper/15 pt-8 text-sm text-paper/70">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/40">Kupci</span>
            {customers.map((c) => <span key={c}>{c}</span>)}
          </Reveal>
        </Frame>
      </section>

      <section aria-label="Ključne brojke" className="py-24 lg:py-32">
        <Frame className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {figures.map((f, i) => (
            <Reveal key={f.l} delay={i * 80} className="border-t border-ink pt-6 pr-6">
              <p className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]"><Counter value={f.v.replace(/[^0-9.]/g, '')} />{f.v.replace(/[0-9.]/g, '')}</p>
              <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-graphite">{f.l}</p>
            </Reveal>
          ))}
        </Frame>
      </section>

      <section className="pb-24 lg:pb-36">
        <Frame className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow index="C">Upoznajte naš tim</Eyebrow></Reveal>
            <Reveal className="mt-10 aspect-[272/300] max-w-[320px] overflow-hidden bg-stone" delay={60}>
              <Img src={media.about.director} alt={`${site.director.name}, direktor`} className="h-full w-full object-cover grayscale" />
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Split className="text-h2 font-medium" text={site.director.name} />
            <Reveal as="p" className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-burgundy" delay={60}>{site.director.role}</Reveal>
            <Reveal className="mt-10 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-2" delay={120}>
              <div><p className="text-sm text-mute">Telefon</p><a href={site.director.phoneHref} className="mt-1 block text-lg link-underline">{site.director.phone}</a></div>
              <div><p className="text-sm text-mute">E-mail</p><a href={`mailto:${site.director.email}`} className="mt-1 block text-lg link-underline break-all">{site.director.email}</a></div>
            </Reveal>
          </div>
        </Frame>
      </section>

      <section className="bg-bone/60 py-24 lg:py-32">
        <Frame className="grid gap-10 md:grid-cols-2">
          <Reveal><Video id={site.videos.corporate.id} title={site.videos.corporate.title} poster={media.tech[4]} /></Reveal>
          <Reveal delay={120}><Video id={site.videos.location.id} title={site.videos.location.title} poster={media.logistics} /></Reveal>
        </Frame>
      </section>

      <ContactBand />
    </>
  );
}
