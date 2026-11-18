import { useState, type ImgHTMLAttributes } from 'react';
import { asset } from '../lib/asset';

type Props = ImgHTMLAttributes<HTMLImageElement> & { alt: string; label?: string; priority?: boolean; quiet?: boolean };

/**
 * Image with lazy loading and an honest fallback: if a file can't be loaded,
 * a clearly labelled placeholder is shown instead of a broken image.
 */
export function Img({ src, alt, className = '', label, priority, quiet, ...rest }: Props) {
  const [failed, setFailed] = useState(!src);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`placeholder-photo ${className}`}>
        {!quiet && <span>Privremeni prikaz · fotografija u pripremi{label ? ` — ${label}` : ''}</span>}
      </div>
    );
  }
  return (
    <img
      src={asset(src)}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // @ts-expect-error fetchpriority is valid HTML, not yet in React 18 types
      fetchpriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
