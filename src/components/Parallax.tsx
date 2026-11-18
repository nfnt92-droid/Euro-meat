import { useEffect, useRef } from 'react';
import { Img } from './Img';

type Props = { src: string; alt: string; className?: string; strength?: number; priority?: boolean; imgClassName?: string };

/** Subtle image parallax inside a masked frame. Disabled for reduced motion. */
export function Parallax({ src, alt, className = '', strength = 8, priority, imgClassName = '' }: Props) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const f = frame.current, i = inner.current;
      if (!f || !i) return;
      const r = f.getBoundingClientRect();
      const vh = window.innerHeight;
      if (r.bottom < 0 || r.top > vh) return;
      const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1..1
      i.style.transform = `translate3d(0, ${(-p * strength).toFixed(2)}%, 0) scale(1.14)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [strength]);
  return (
    <div ref={frame} className={`relative overflow-hidden bg-stone ${className}`}>
      <div ref={inner} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.14)' }}>
        <Img src={src} alt={alt} priority={priority} className={`h-full w-full object-cover ${imgClassName}`} />
      </div>
    </div>
  );
}
