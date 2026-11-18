import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Eyebrow } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { NewsCard } from '../components/NewsCard';
import { NewsRow } from '../components/NewsRow';
import { articles, isCareer } from '../lib/news';
import { site } from '../content/site';

export default function News() {
  const stories = articles.filter((a) => !isCareer(a));
  const careers = articles.filter(isCareer);
  const [lead, ...rest] = stories;
  return (
    <>
      <Seo title="Novosti" description="Novosti, certifikati, događaji i oglasi za posao kompanije EURO MEAT d.o.o. Maglaj." />
      <PageHero index="05" eyebrow="Novosti" title={'Iz *kompanije.*'} lead="Certifikati, događaji, posjete i otvorene pozicije." />

      {lead && (
        <section className="pt-16 lg:pt-24">
          <Frame className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7"><NewsCard a={lead} large /></Reveal>
            <div className="grid content-start gap-12 lg:col-span-5">
              {rest.map((a, i) => <Reveal key={a.slug} delay={(i + 1) * 100}><NewsCard a={a} /></Reveal>)}
            </div>
          </Frame>
        </section>
      )}

      {careers.length > 0 && (
        <section className="pb-24 pt-24 lg:pb-36 lg:pt-36">
          <Frame className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Reveal><Eyebrow index={String(careers.length).padStart(2, '0')}>Karijere</Eyebrow></Reveal>
              <Reveal as="p" delay={80} className="mt-6 max-w-xs leading-relaxed text-graphite">Oglasi za posao i otvorene pozicije. Detalji i prijava dostupni su u svakoj objavi.</Reveal>
            </div>
            <Reveal className="lg:col-span-9" delay={100}>
              <div className="border-t border-ink">{careers.map((a) => <NewsRow key={a.slug} a={a} />)}</div>
            </Reveal>
          </Frame>
          <Frame>
            <p className="mt-16 text-sm text-mute">
              Starije objave arhivirane su na prethodnoj verziji stranice. <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="line-link text-ink">Pratite nas na Facebooku</a>.
            </p>
          </Frame>
        </section>
      )}
    </>
  );
}
