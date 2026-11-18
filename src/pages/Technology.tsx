import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Eyebrow, SectionHead, CertMark } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Parallax } from '../components/Parallax';
import { ExpandImage } from '../components/ExpandImage';
import { ColdChainChart } from '../components/ColdChainChart';
import { ProcessLine } from '../components/ProcessLine';
import { Split } from '../components/Split';
import { ContactBand } from '../components/ContactBand';
import { site } from '../content/site';
import { media } from '../content/media';
import { coldChain, techFacts } from '../content/facts';

export default function Technology() {
  return (
    <>
      <Seo title="Tehnologija" description="4 rashladne komore (101 t), 3 komore za zamrzavanje (168 t), tunel za početno zamrzavanje −35 °C (9 t/dan), pandleraj 28 t/dan i 10 transportnih jedinica." image={media.og} />
      <PageHero
        index="03"
        eyebrow="Tehnologija"
        title={'Preciznost na\nsvakoj *temperaturi.*'}
        lead="Novi objekat od 1.000 m², izgrađen po visokim standardima i opremljen savremenom opremom za skladištenje, pandlovanje, pakovanje i distribuciju."
        image={media.tech[0]}
        imageAlt="Tehnološka infrastruktura Euro Meat"
      />

      <section className="py-24 lg:py-36">
        <Frame>
          <SectionHead index="A" eyebrow="Naša tehnološka izvrsnost" title="Skladišni kapaciteti i zamrzavanje." />
          <div className="mt-16 md:mt-24">
            <div className="hidden grid-cols-12 border-b border-ink pb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-mute md:grid">
              <span className="col-span-1">Kol.</span><span className="col-span-5">Jedinica</span><span className="col-span-3">Temperatura</span><span className="col-span-3 text-right">Kapacitet</span>
            </div>
            {coldChain.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="grid grid-cols-2 gap-y-3 border-b border-ink/12 py-8 md:grid-cols-12 md:items-baseline md:py-10">
                <span className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.05em] text-burgundy md:col-span-1">{c.count}</span>
                <span className="self-center text-right text-xl text-ink md:col-span-5 md:text-left md:text-2xl">{c.title}</span>
                <span className="text-[clamp(1.75rem,3vw,3rem)] font-semibold tracking-[-0.04em] md:col-span-3">{c.temp}</span>
                <span className="text-right text-[clamp(1.75rem,3vw,3rem)] font-semibold tracking-[-0.04em] text-graphite md:col-span-3">{c.capacity}</span>
              </Reveal>
            ))}
          </div>
        </Frame>
      </section>

      <section className="pb-24 lg:pb-36">
        <Frame className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><Reveal as="p" className="text-xl leading-snug text-ink">Raspon temperatura i skladišni kapaciteti na jednoj osi — od rashladnih komora do tunela za početno zamrzavanje.</Reveal></div>
          <div className="lg:col-span-8"><ColdChainChart /></div>
        </Frame>
      </section>

      <section className="relative bg-ink">
        <ExpandImage src={media.tech[3]} alt="Rashladna hala sa kolosijekom za meso" className="h-[70vh] min-h-[420px] lg:h-[100vh]" />
      </section>

      <section className="bg-ink text-paper">
        <Frame className="grid grid-cols-2 lg:grid-cols-4">
          {techFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80} className={`border-paper/12 py-14 lg:py-20 ${i % 2 ? 'border-l pl-6 lg:pl-8' : 'pr-6'} ${i > 1 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l lg:pl-8' : ''}`}>
              <p className="whitespace-nowrap text-[clamp(2rem,4.2vw,4.25rem)] font-semibold leading-none tracking-[-0.05em]">{f.value}</p>
              <p className="mt-5 max-w-[14rem] text-sm leading-relaxed text-paper/60">{f.label}</p>
            </Reveal>
          ))}
        </Frame>
      </section>

      <section className="py-24 lg:py-36">
        <Frame>
          <SectionHead index="B" eyebrow="Naša tehnička izvrsnost" title="Proces — *od prijema do kupca.*" />
          <div className="mt-16 md:mt-24"><ProcessLine /></div>
        </Frame>
      </section>

      <section className="pb-24 lg:pb-36">
        <Frame className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7"><Parallax src={media.logistics} alt="Vozne jedinice Euro Meat" className="aspect-[4/3]" /></Reveal>
          <div className="flex flex-col justify-between gap-10 md:col-span-5 md:pl-6">
            <div>
              <Reveal><Eyebrow index="C">Vozne jedinice</Eyebrow></Reveal>
              <Split className="mt-6 text-h2 font-medium" text="Brza *isporuka.*" />
              <Reveal as="p" delay={120} className="mt-6 leading-relaxed text-graphite">
                10 specijaliziranih transportnih jedinica isporučuje rashlađeno (+4 °C) i zamrznuto (−18 °C) meso — komadno ili u kontrolisanoj atmosferi (MAP) — na adresu kupca u roku od 24 h od narudžbe.
              </Reveal>
            </div>
            <Reveal><Parallax src={media.coldDisplay} alt="Kontrolni panel komore na −35 °C" className="aspect-[3/2]" /></Reveal>
          </div>
        </Frame>
      </section>

      <section className="border-t border-ink/10 py-16">
        <Frame className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal as="p" className="text-h3 font-medium">Certificirani. <span className="text-mute">Garantujemo kvalitet.</span></Reveal>
          <Reveal className="flex flex-wrap gap-2">{site.certifications.map((c) => <CertMark key={c} label={c} />)}</Reveal>
        </Frame>
      </section>

      <ContactBand />
    </>
  );
}
