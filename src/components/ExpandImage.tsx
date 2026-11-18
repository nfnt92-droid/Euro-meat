import { useRef, type ReactNode } from 'react';
import { useScrollProgress, prefersReduced } from '../lib/motion';
import { Img } from './Img';

/** Full-bleed photograph that opens from a framed window to edge-to-edge as you scroll. */
export function ExpandImage({ src, alt, children, className = '' }: { src: string; alt: string; children?: ReactNode; className?: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const ref = useScrollProgress<HTMLDivElement>((p) => {
    if (prefersReduced() || !frame.current || !img.current) return;
    const k = Math.min(1, p / 0.5);
    const e = 1 - Math.pow(1 - k, 3);
    const inset = (1 - e) * (window.innerWidth < 768 ? 6 : 14);
    frame.current.style.clipPath = `inset(${inset * 0.8}% ${inset}% ${inset * 0.8}% ${inset}%)`;
    img.current.style.transform = `scale(${1.18 - e * 0.18}) translate3d(0, ${(p - 0.5) * -6}%, 0)`;
  });
  return (
    <div ref={ref} className={`relative ${className}`}>
      <div ref={frame} className="relative h-full w-full overflow-hidden bg-ink" style={{ clipPath: prefersReduced() ? 'none' : 'inset(11% 14% 11% 14%)' }}>
        <div ref={img} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.18)' }}>
          <Img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Overlay content sits outside the clipped frame so text is never cut by the opening mask */}
      {children}
    </div>
  );
}
