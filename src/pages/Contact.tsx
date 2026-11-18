import { Seo } from '../components/Seo';
import { PageHero } from '../components/PageHero';
import { Frame, Eyebrow, Button } from '../components/ui';
import { Reveal } from '../components/Reveal';
import { Video } from '../components/Video';
import { Split } from '../components/Split';
import { site } from '../content/site';
import { media } from '../content/media';
import { faq } from '../content/facts';

export default function Contact() {
  const rows = [
    { k: 'Adresa', v: <>{site.address.street}<br />{site.address.zip} {site.address.city}</>, href: site.mapLink },
    { k: 'Telefon', v: site.phone, href: site.phoneHref },
    { k: 'E-mail', v: site.email, href: `mailto:${site.email}` },
    { k: 'Radno vrijeme', v: site.hours },
  ];
  return (
    <>
      <Seo title="Kontakt" description="EURO MEAT d.o.o. Maglaj — 1. Marta bb, 74250 Maglaj. Tel. +387 (0) 32 605 605, info@euro-meat.com. Pon–Sub 07:00–16:00." />
      <PageHero index="06" eyebrow="Kontakt" title={'Budite slobodni\ni *kontaktirajte nas.*'} />

      <section className="py-20 lg:py-28">
        <Frame className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <dl className="border-t border-ink">
              {rows.map((r, i) => (
                <Reveal key={r.k} delay={i * 70} className="grid grid-cols-3 gap-4 border-b border-ink/12 py-6 sm:py-8">
                  <dt className="pt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-mute">{r.k}</dt>
                  <dd className="col-span-2 text-xl leading-snug text-ink sm:text-2xl">
                    {r.href ? <a href={r.href} className="link-underline" {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{r.v}</a> : r.v}
                  </dd>
                </Reveal>
              ))}
            </dl>
            <Reveal className="mt-10 flex flex-wrap gap-3">
              <Button href={site.phoneHref}>Nazovite nas</Button>
              <Button href={`mailto:${site.email}`} variant="line">Pošaljite e-mail</Button>
              <Button href={site.orderUrl} variant="line">Naruči online</Button>
            </Reveal>

            <Reveal className="mt-16 bg-bone/70 p-6 sm:p-8">
              <Eyebrow>Prodaja i nabavka mesa</Eyebrow>
              <p className="mt-4 text-2xl font-medium">{site.director.name}</p>
              <p className="text-sm text-mute">Direktor</p>
              <p className="mt-4 space-y-1 text-[17px]">
                <a href={site.director.phoneHref} className="block link-underline">{site.director.phone}</a>
                <a href={`mailto:${site.director.email}`} className="block break-all link-underline">{site.director.email}</a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal variant="fade" className="aspect-[4/5] overflow-hidden bg-stone sm:aspect-[4/3] lg:aspect-[4/5]">
              <iframe title="Lokacija Euro Meat, Maglaj — Google karta" src={site.mapEmbed} className="h-full w-full grayscale-[85%] contrast-[1.05]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
            <Reveal as="p" className="mt-4 text-sm text-mute">{site.locationHint}</Reveal>
          </div>
        </Frame>
      </section>

      <section className="bg-ink py-24 text-paper lg:py-32">
        <Frame className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow light index="?">Gdje se nalazimo?</Eyebrow></Reveal>
            <Split className="mt-6 text-h2 font-medium" text="Pogledajte *video.*" />
          </div>
          <Reveal className="lg:col-span-8" delay={120}><Video id={site.videos.location.id} title={site.videos.location.title} poster={media.logistics} /></Reveal>
        </Frame>
      </section>

      <section className="py-24 lg:py-32">
        <Frame className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><Reveal><Eyebrow index="FAQ">Česta pitanja</Eyebrow></Reveal></div>
          <div className="lg:col-span-8">
            {faq.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group border-b border-ink/12 py-6 first:border-t">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="relative h-4 w-4 shrink-0" aria-hidden="true"><span className="absolute top-1/2 h-px w-4 bg-ink" /><span className="absolute top-1/2 h-px w-4 rotate-90 bg-ink transition-transform duration-500 group-open:rotate-0" /></span>
                  </summary>
                  <p className="mt-4 max-w-prose leading-relaxed text-graphite">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Frame>
      </section>
    </>
  );
}
