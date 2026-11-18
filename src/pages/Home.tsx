import { Seo } from '../components/Seo';
import { Frame, Button, Eyebrow, SectionHead, Arrow } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Split } from '../components/Split';
import { HeroCinema } from '../components/HeroCinema';
import { ScrollText } from '../components/ScrollText';
import { Counter } from '../components/Counter';
import { ImageReveal } from '../components/ImageReveal';
import { ProductRail } from '../components/ProductRail';
import { ExpandImage } from '../components/ExpandImage';
import { ColdChainChart } from '../components/ColdChainChart';
import { ProcessLine } from '../components/ProcessLine';
import { Video } from '../components/Video';
import { NewsCard } from '../components/NewsCard';
import { ContactBand } from '../components/ContactBand';
import { site } from '../content/site';
import { media } from '../content/media';
import { keyStats, techFacts, transportTemps, deliveryDocs } from '../content/facts';
import { articles, hasPhoto } from '../lib/news';
import { NewsRow } from '../components/NewsRow';

function Manifesto() {
  return (
    <section className="py-28 lg:py-44">
      <Frame>
        <Reveal><Eyebrow index="01">Kompanija</Eyebrow></Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-start">
          <ScrollText
            className="text-[clamp(2rem,4.2vw,4.25rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink lg:col-span-7"
            text="Kvalitetno svježe i zamrznuto teleće, juneće i goveđe meso — uz garantovano poštivanje svih standarda i normi koje važe u mesnoj industriji."
          />
          <div className="lg:col-span-5">
            <ImageReveal src={media.worker} alt="Zaposlenik Euro Meat pri obradi polovica u rashladnoj hali" from="right" className="aspect-[4/3] lg:aspect-[5/6]" />
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-mute">Rashladna hala · obrada i kontrola</p>
          </div>
        </div>
        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12">
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7">
            <Reveal className="border-t border-ink pt-6">
              <p className="text-stat font-semibold text-ink"><Counter value="2019" duration={1800} /></p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-burgundy">Osnivanje kompanije</p>
              <p className="mt-3 max-w-xs leading-relaxed text-graphite">Godine 2019. rođena je kompanija EURO MEAT, sa ciljem da bh. tržište snabdijeva visokokvalitetnim crvenim mesom.</p>
            </Reveal>
            <Reveal delay={140} className="border-t border-ink/25 pt-6">
              <p className="text-stat font-semibold text-ink"><Counter value="32" />+</p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-burgundy">Godine iskustva osnivača</p>
              <p className="mt-3 max-w-xs leading-relaxed text-graphite">Kompanija počiva na više od 32 godine iskustva osnivača u mesnoj industriji.</p>
            </Reveal>
            <Reveal className="sm:col-span-2" delay={100}>
              <p className="max-w-xl leading-relaxed text-graphite">Uložili smo u infrastrukturu, tehnologiju i razvoj, u ljude, u zaštitu životne sredine, u kupce te u sistemske postavke i procedure. Krajnjem kupcu garantujemo brzu uslugu i svježe, provjereno meso.</p>
              <Button to="/o-nama" variant="line" className="mt-8">O kompaniji</Button>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <ImageReveal src={media.about.main} alt="Kontrola kvaliteta goveđeg mesa u Euro Meat" className="aspect-[4/3]" />
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-mute">Kontrola svake polovice · Maglaj</p>
          </div>
        </div>
      </Frame>
    </section>
  );
}

function Figures() {
  return (
    <section aria-label="Ključni pokazatelji" className="border-y border-ink/10">
      <Frame className="grid grid-cols-2 lg:grid-cols-4">
        {keyStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className={`py-12 lg:py-20 ${i % 2 ? 'border-l border-ink/10 pl-5 sm:pl-8' : 'pr-5'} ${i > 1 ? 'border-t border-ink/10 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-8' : ''}`}>
            <p className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.85] tracking-[-0.055em] text-ink">
              <Counter value={s.value} /><span className="text-burgundy">{s.unit}</span>
            </p>
            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">{s.label}</p>
            <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-mute">{s.note}</p>
          </Reveal>
        ))}
      </Frame>
    </section>
  );
}

function ColdChain() {
  return (
    <section className="bg-ink text-paper">
      <ExpandImage src={media.quality[4]} alt="Rashladna hala Euro Meat sa nizom polovica na kolosijeku" className="h-[85vh] min-h-[520px] lg:h-[110vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30" />
        <Frame className="absolute inset-x-0 bottom-0 pb-12 lg:pb-20">
          <Reveal><Eyebrow light index="03">Tehnologija</Eyebrow></Reveal>
          <Split className="mt-6 max-w-5xl text-h1 font-medium" text={'Hladni lanac —\n*od prijema do kupca.*'} />
        </Frame>
      </ExpandImage>

      <Frame className="grid gap-16 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-4">
          <Reveal as="p" className="text-xl leading-snug text-paper/85">
            Komore za skladištenje rade u rasponu od +4 °C do −35 °C. Proizvodi se utovaraju na rampi projektovanoj za očuvanje hladnog lanca.
          </Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10">
            {techFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 80} className="border-t border-paper/15 pt-4">
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-none tracking-[-0.04em]">{f.value}</dd>
                <p className="mt-2 text-sm text-paper/55">{f.label}</p>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-12"><Button to="/tehnologija" variant="light">Tehnologija i infrastruktura</Button></Reveal>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <ColdChainChart dark />
        </div>
      </Frame>

      <Frame className="border-t border-paper/10 py-20 lg:py-28">
        <div className="mb-14 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-3"><Eyebrow light>Proces</Eyebrow></Reveal>
          <Split className="text-h3 font-medium md:col-span-9" text="Od prijema do isporuke — *svaki korak je kontrolisan.*" />
        </div>
        <ProcessLine dark />
      </Frame>
    </section>
  );
}

function Quality() {
  const certs = [
    { k: 'HACCP', d: 'Poslujemo u skladu sa HACCP sistemom upravljanja sigurnošću hrane.' },
    { k: 'HALAL', d: 'Halal kvalitet potvrđen recertifikacijskim auditom prema BAS 1049:2023 (07/2026). Svi dobavljači posjeduju važeće HALAL certifikate.' },
    { k: 'ISO 9001:2015', d: 'Certificirani sistem upravljanja kvalitetom.' },
  ];
  return (
    <section className="py-28 lg:py-44">
      <Frame>
        <SectionHead index="04" eyebrow="Kvalitet" title="Vrhunski kvalitet i *visoki standardi* higijensko-sanitarne ispravnosti."
          lead="Svaku pošiljku po prijemu pregleda ovlaštena veterinarska inspekcija ZE-DO kantona, a veterinarsko-zdravstveni nadzor u objektu vrši ovlaštena veterinarska stanica." />
        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ImageReveal src={media.inspection} alt="Nadzor i kontrola u proizvodnom dijelu objekta, uz zaštitnu opremu" from="left" className="aspect-[4/5]" />
            <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-mute">Nadzor i kontrola u objektu</p>
          </div>
          <ul className="border-t border-ink/12 lg:col-span-6 lg:col-start-7 lg:self-end">
            {certs.map((c, i) => (
              <Reveal as="li" key={c.k} delay={i * 100} className="group border-b border-ink/12 py-8 lg:py-10">
                <div className="flex items-baseline justify-between gap-6">
                  <span className="text-[clamp(2.25rem,4.2vw,4rem)] font-medium leading-none tracking-[-0.045em] text-ink transition-colors duration-500 group-hover:text-burgundy">{c.k}</span>
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-mute">0{i + 1}</span>
                </div>
                <p className="mt-4 max-w-md leading-relaxed text-graphite">{c.d}</p>
              </Reveal>
            ))}
            <Reveal className="flex flex-wrap gap-3 pt-10">
              <Button to="/kvalitet">Kvalitet i sigurnost hrane</Button>
              <Button href={site.documents.qualityPolicy.href} external variant="line">Politika kvaliteta (PDF)</Button>
            </Reveal>
          </ul>
        </div>
      </Frame>
    </section>
  );
}

function Logistics() {
  return (
    <section className="bg-bone/70 py-28 lg:py-40">
      <Frame className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal><Eyebrow index="05">Logistika i distribucija</Eyebrow></Reveal>
          <p className="mt-8 text-[clamp(7rem,22vw,19rem)] font-semibold leading-[0.78] tracking-[-0.07em] text-ink"><Counter value="24" duration={1200} /><span className="font-serif text-[0.6em] font-normal italic tracking-[-0.02em] text-burgundy">h</span></p>
          <Reveal as="p" delay={150} className="mt-8 max-w-md text-2xl leading-snug tracking-[-0.01em] text-ink">Isporuka robe na adresu kupca u roku od 24 sata od narudžbe.</Reveal>
          <dl className="mt-14 grid max-w-xl border-t border-ink/10 pt-8 grid gap-y-8 sm:grid-cols-2 sm:gap-x-10">
            <Reveal><dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Vozni park</dt><dd className="mt-2 text-lg leading-snug text-ink">10 specijaliziranih transportnih jedinica</dd></Reveal>
            <Reveal delay={80}><dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Temperatura</dt><dd className="mt-2 text-lg leading-snug text-ink">{transportTemps.map((t) => `${t.label} ${t.value}`).join(' · ')}</dd></Reveal>
            <Reveal delay={120} className="sm:col-span-2"><dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Uz svaku isporuku</dt><dd className="mt-2 text-lg leading-snug text-ink">{deliveryDocs.join(' · ')}</dd></Reveal>
          </dl>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-20">
          <ImageReveal src={media.truckRoad} alt="Rashladni kamion Euro Meat na cesti" from="right" className="aspect-[4/3]" />
          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-mute">Vlastiti vozni park · isporuka na adresu kupca</p>

          <Reveal as="p" className="mt-10 border-t border-ink/10 pt-6 text-sm leading-relaxed text-mute">Sjedište u Maglaju, kod semafora na magistralnom putu M17 — povoljan geografski položaj omogućava kvalitetno i blagovremeno pružanje usluge kupcima.</Reveal>
        </div>
      </Frame>
    </section>
  );
}

function VideoFeature() {
  return (
    <section className="py-28 lg:py-40">
      <Frame>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><Eyebrow index="06">Korporativni video</Eyebrow></Reveal>
            <Split className="mt-6 text-h2 font-medium" text="Pogledajte Euro Meat *iznutra.*" />
          </div>
          <Reveal><a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="line-link inline-flex items-center gap-2 text-sm font-semibold">YouTube kanal <Arrow /></a></Reveal>
        </div>
        <Reveal variant="fade"><Video id={site.videos.corporate.id} title={site.videos.corporate.title} poster={media.tech[4]} /></Reveal>
      </Frame>
    </section>
  );
}

function LatestNews() {
  const featured = articles.find(hasPhoto);
  const list = articles.filter((x) => x !== featured).slice(0, 4);
  if (!featured) return null;
  return (
    <section className="border-t border-ink/10 py-28 lg:py-40">
      <Frame>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal><Eyebrow index="07">Novosti</Eyebrow></Reveal>
            <Split className="mt-6 text-h2 font-medium" text="Iz *kompanije.*" />
          </div>
          <Reveal><Button to="/novosti" variant="line">Sve novosti</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5"><NewsCard a={featured} large /></Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">Najnovije objave</p>
            <div className="mt-4 border-t border-ink">
              {list.map((x) => <NewsRow key={x.slug} a={x} />)}
            </div>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo description="EURO MEAT d.o.o. Maglaj — veleprodaja, obrada i distribucija svježeg i zamrznutog telećeg, junećeg, goveđeg i pilećeg mesa. HACCP, HALAL i ISO 9001:2015. Isporuka u roku od 24 h." />
      <HeroCinema />
      <Manifesto />
      <Figures />
      <ProductRail header={<SectionHead index="02" eyebrow="Proizvodi" title={'Četiri kategorije.\n*Jedan standard kvaliteta.*'} lead="Svježe, rashlađeno ili zamrznuto — komadno ili u komercijalnom MAP pakovanju za markete i mesnice." />} />
      <ColdChain />
      <Quality />
      <Logistics />
      <VideoFeature />
      <LatestNews />
      <ContactBand />
    </>
  );
}
