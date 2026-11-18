import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Eyebrow, SectionHead, Button, Arrow } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { ImageReveal } from '../components/ImageReveal';
import { Img } from '../components/Img';
import { ContactBand } from '../components/ContactBand';
import { site } from '../content/site';
import { media } from '../content/media';
import { qualityPoints, deliveryDocs, transportTemps } from '../content/facts';

export default function Quality() {
  const docs = [site.documents.qualityPolicy, site.documents.foodDefense, site.documents.qualityPolicy2021];
  return (
    <>
      <Seo title="Kvalitet" description="Politika kvaliteta i sigurnost hrane: HACCP, HALAL (BAS 1049:2023) i ISO 9001:2015. Veterinarska kontrola, hladni lanac od +4 °C do −35 °C." image={media.quality[0]} />
      <PageHero
        index="02"
        eyebrow="Kvalitet · Premium Quality"
        title={'Kvalitet koji se\ndokazuje *svakodnevno.*'}
        lead="Brzo, sigurno i provjereno. Poslujemo u skladu sa HACCP sistemom te HALAL i ISO 9001:2015 standardom."
        image={media.quality[0]}
        imageAlt="Kontrola kvaliteta mesa u Euro Meat"
      />

      <section className="py-24 lg:py-36">
        <Frame>
          <SectionHead index="A" eyebrow="Politika kvaliteta i sigurnost hrane" title="Od dobavljača do isporuke — *svaki korak je kontrolisan.*" />
          <ol className="mt-16 md:mt-24">
            {qualityPoints.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 60} className="grid gap-4 border-t border-ink/12 py-8 md:grid-cols-12 md:py-10">
                <span className="text-[11px] font-semibold tracking-[0.2em] text-burgundy md:col-span-3">0{i + 1}</span>
                <p className="text-xl leading-snug text-ink md:col-span-8 lg:text-2xl">{p}</p>
              </Reveal>
            ))}
          </ol>
        </Frame>
      </section>

      <section className="bg-ink text-paper">
        <Frame className="grid gap-16 py-24 lg:grid-cols-12 lg:py-36">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow light index="B">Hladni lanac</Eyebrow></Reveal>
            <Reveal as="p" variant="mask" delay={60} className="mt-10 text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-0.05em]">+4°<span className="text-paper/35"> / </span>−35°</Reveal>
            <Reveal as="p" delay={120} className="mt-8 max-w-md leading-relaxed text-paper/70">Komore za skladištenje rade u rasponu od +4 °C do −35 °C. Proizvodi se utovaraju na rampi koja čuva hladni lanac.</Reveal>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/45">Transport vlastitim vozilima</h3>
              <ul className="mt-6 space-y-4">
                {transportTemps.map((t) => (
                  <li key={t.label} className="flex items-baseline justify-between border-b border-paper/15 pb-4"><span className="text-paper/70">{t.label}</span><span className="text-3xl font-semibold tracking-[-0.03em]">{t.value}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/45">Uz svaku isporuku</h3>
              <ul className="mt-6 space-y-3">
                {deliveryDocs.map((d) => <li key={d} className="flex items-center gap-3 border-b border-paper/15 pb-3 text-lg"><span className="h-1.5 w-1.5 bg-burgundy-soft" />{d}</li>)}
              </ul>
            </Reveal>
          </div>
        </Frame>
      </section>

      <section className="py-24 lg:py-36">
        <Frame className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow index="C">Certifikati</Eyebrow></Reveal>
            <div className="mt-10 space-y-2">
              {site.certifications.map((c, i) => (
                <Reveal as="p" variant="mask" key={c} delay={i * 90} className="text-h2 font-medium tracking-[-0.04em]">{c}</Reveal>
              ))}
            </div>
            <Reveal as="p" delay={300} className="mt-8 max-w-md leading-relaxed text-graphite">
              Halal kvalitet potvrđen je recertifikacijskim auditom prema standardu BAS 1049:2023, provedenim 08.07.2026. godine.
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal><Eyebrow>Dokumenti</Eyebrow></Reveal>
            <ul className="mt-8 border-t border-ink/12">
              {docs.map((d, i) => (
                <Reveal as="li" key={d.href} delay={i * 80}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 border-b border-ink/12 py-6">
                    <span className="text-lg text-ink transition-colors group-hover:text-burgundy">{d.label}</span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper"><Arrow /></span>
                  </a>
                </Reveal>
              ))}
            </ul>
            <Reveal as="p" className="mt-6 text-sm leading-relaxed text-mute">Politika kvaliteta je javno dostupna i redovno se preispituje. Dokumenti su dostupni u originalnom obliku, na bosanskom jeziku.</Reveal>
            <Reveal className="mt-10"><Button to="/novosti/potvrden-halal-certifikat" variant="line">Novost: potvrđen HALAL certifikat</Button></Reveal>
          </div>
        </Frame>
      </section>

      <section aria-label="Galerija kvaliteta" className="pb-24 lg:pb-36">
        <Frame className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          <div className="col-span-2 row-span-2"><ImageReveal src={media.quality[1]} alt="Obrada mesa" className="aspect-square h-full" /></div>
          {media.quality.slice(2, 6).map((src, i) => (
            <Reveal key={src} delay={i * 80} className="img-zoom aspect-square overflow-hidden bg-stone"><Img src={src} alt="Kvalitet mesa — Euro Meat" className="h-full w-full object-cover" /></Reveal>
          ))}
        </Frame>
      </section>

      <ContactBand />
    </>
  );
}
