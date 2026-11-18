/** Resolve local /media paths against the deploy base (works on Netlify and in sub-path previews). */
export const asset = (src?: string) =>
  src && src.startsWith('/media/') ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src;

/** Absolute URL for Open Graph tags. */
export const absoluteAsset = (src: string, origin: string) => (src.startsWith('/') ? `${origin}${src}` : src);
