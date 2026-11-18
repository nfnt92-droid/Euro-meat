import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import { Seo } from '../components/Seo';
import { Frame, Arrow } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Img } from '../components/Img';
import { NewsCard } from '../components/NewsCard';
import { articles, getArticle, formatDate } from '../lib/news';
import NotFound from './NotFound';
import { asset } from '../lib/asset';

export default function ArticlePage() {
  const { slug = '' } = useParams();
  const a = getArticle(slug);
  const html = useMemo(() => (a ? (marked.parse(a.body, { async: false }) as string) : ''), [a]);
  if (!a) return <NotFound />;
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <Seo title={a.title} description={a.excerpt} image={a.image} type="article" />
      <article className="pt-32 lg:pt-44">
        <Frame>
          <Reveal><Link to="/novosti" className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-mute hover:text-ink"><Arrow className="rotate-180" /> Novosti</Link></Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <Reveal as="p" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-mute">
                <span className="text-burgundy">{a.category}</span><span className="h-px w-6 bg-ink/20" /><time dateTime={a.date}>{formatDate(a.date)}</time>
              </Reveal>
              <Reveal as="h1" variant="mask" delay={60} className="mt-6 text-[clamp(2.25rem,5vw,4.75rem)] font-medium leading-[0.98] tracking-[-0.04em]">{a.title}</Reveal>
            </div>
          </div>
        </Frame>

        {a.image && (
          <Reveal variant="fade" className="mt-14">
            <Frame className="!px-0 sm:!px-8 lg:!px-12"><div className="aspect-[16/9] overflow-hidden bg-stone"><Img src={a.image} alt={a.title} priority className="h-full w-full object-cover" /></div></Frame>
          </Reveal>
        )}

        <Frame className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <aside className="lg:col-span-3">
            <p className="text-sm leading-relaxed text-mute">{a.excerpt}</p>
          </aside>
          <div className="lg:col-span-7">
            <div className="prose-em" dangerouslySetInnerHTML={{ __html: html }} />
            {a.sourceUrl && (
              <p className="mt-10 border-t border-ink/10 pt-6 text-sm text-mute">
                Izvorna objava i prateći dokumenti: <a href={a.sourceUrl} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">euro-meat.com</a>
              </p>
            )}
          </div>
        </Frame>

        {a.gallery && a.gallery.length > 0 && (
          <Frame className="pb-20">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {a.gallery.map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 70} className={`img-zoom overflow-hidden bg-stone ${i === 0 ? 'col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto' : 'aspect-square'}`}>
                  <a href={asset(src)} target="_blank" rel="noopener noreferrer" aria-label={`Otvori fotografiju ${i + 1}`}><Img src={src} alt={`${a.title} — fotografija ${i + 1}`} className="h-full w-full object-cover" /></a>
                </Reveal>
              ))}
            </div>
          </Frame>
        )}
      </article>

      <section className="border-t border-ink/10 bg-bone/50 py-20 lg:py-28">
        <Frame>
          <h2 className="text-h3 font-medium">Još novosti</h2>
          <div className="mt-10 grid gap-12 md:grid-cols-3">{more.map((m) => <NewsCard key={m.slug} a={m} />)}</div>
        </Frame>
      </section>
    </>
  );
}
