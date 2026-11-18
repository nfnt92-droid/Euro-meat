import type { ReactNode } from 'react';
import { Frame, Eyebrow } from './ui';
import { Reveal } from './Reveal';
import { Split } from './Split';
import { ImageReveal } from './ImageReveal';

type Props = { index: string; eyebrow: string; title: string; lead?: ReactNode; image?: string; imageAlt?: string; aside?: ReactNode };

/** Inner-page opener: oversized split headline, then a wide photograph that wipes open. */
export function PageHero({ index, eyebrow, title, lead, image, imageAlt = '', aside }: Props) {
  return (
    <section className="pt-32 lg:pt-48">
      <Frame>
        <Reveal><Eyebrow index={index}>{eyebrow}</Eyebrow></Reveal>
        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:items-end">
          <Split as="h1" immediate delay={120} stagger={70} text={title} className="text-h1 font-medium text-ink lg:col-span-8" />
          {(lead || aside) && (
            <Reveal className="lg:col-span-4 lg:pb-2" delay={500}>
              {lead && <p className="text-lg leading-relaxed text-graphite">{lead}</p>}
              {aside}
            </Reveal>
          )}
        </div>
      </Frame>
      {image && (
        <Frame className="mt-14 !px-0 sm:!px-8 lg:mt-20 lg:!px-12">
          <ImageReveal src={image} alt={imageAlt} priority className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]" delay={250} />
        </Frame>
      )}
    </section>
  );
}
