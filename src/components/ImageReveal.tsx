import { useInView } from '../lib/motion';
import { Parallax } from './Parallax';

type Props = { src: string; alt: string; className?: string; strength?: number; from?: 'bottom' | 'left' | 'right'; priority?: boolean; delay?: number };

/**
 * Image that unveils with a clip-path wipe while settling from a slight zoom, then drifts with parallax.
 * The observed element is the unclipped outer wrapper — Safari/WebKit treats a fully clipped
 * element as non-intersecting, which would keep the image hidden forever.
 */
export function ImageReveal({ src, alt, className = '', strength = 7, from = 'bottom', priority, delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>('0px 0px -8% 0px');
  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className={`img-reveal img-reveal-${from} ${inView ? 'is-in' : ''} absolute inset-0`} style={{ transitionDelay: `${delay}ms` }}>
        <Parallax src={src} alt={alt} strength={strength} priority={priority} className="h-full w-full" imgClassName="img-reveal-img" />
      </div>
    </div>
  );
}
