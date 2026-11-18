import { Frame, Button } from './ui';
import { Reveal } from './Reveal';
import { Split } from './Split';
import { site } from '../content/site';
import { useI18n } from '../i18n';

export function ContactBand() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-burgundy text-paper">
      <Frame className="grid gap-14 py-24 lg:grid-cols-12 lg:py-36">
        <div className="lg:col-span-7">
          <Reveal as="p" className="eyebrow text-paper/60"><span>Poslovna saradnja</span></Reveal>
          <Split className="mt-8 text-h1 font-medium" text={'Snabdijevanje\nbez *kompromisa.*'} />
        </div>
        <Reveal className="flex flex-col justify-end gap-10 lg:col-span-5" delay={200}>
          <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
            <div><dt className="text-paper/55">Telefon</dt><dd className="mt-1 text-lg"><a href={site.phoneHref} className="line-link">{site.phone}</a></dd></div>
            <div><dt className="text-paper/55">E-mail</dt><dd className="mt-1 text-lg"><a href={`mailto:${site.email}`} className="line-link">{site.email}</a></dd></div>
            <div><dt className="text-paper/55">Radno vrijeme</dt><dd className="mt-1 text-lg">{site.hours}</dd></div>
            <div><dt className="text-paper/55">Adresa</dt><dd className="mt-1 text-lg">{site.address.street}, {site.address.city}</dd></div>
          </dl>
          <div className="flex flex-wrap gap-3">
            <Button to="/kontakt" variant="light">{t.contactUs}</Button>
            <Button href={site.orderUrl} variant="line" className="!border-paper/40 !text-paper hover:!bg-paper hover:!text-ink">{t.order}</Button>
          </div>
        </Reveal>
      </Frame>
    </section>
  );
}
