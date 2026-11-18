import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '../content/site';
import { media } from '../content/media';
import { absoluteAsset } from '../lib/asset';

type Props = { title?: string; description: string; image?: string; type?: 'website' | 'article' };

export function Seo({ title, description, image = media.og, type = 'website' }: Props) {
  const { pathname } = useLocation();
  const full = title ? `${title} — ${site.short} d.o.o. Maglaj` : `${site.short} d.o.o. Maglaj — ${site.claim}`;
  const url = `${site.url}${pathname}`;
  const img = absoluteAsset(image, site.url);
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="bs_BA" />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
