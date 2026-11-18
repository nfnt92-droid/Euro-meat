import { useEffect, useState } from 'react';
import { useInView, prefersReduced } from '../lib/motion';

/** Counts up to a figure once visible. Keeps thousand separators ("1.000"). Final value is always in the DOM for SEO/AT. */
export function Counter({ value, className = '', duration = 1600 }: { value: string; className?: string; duration?: number }) {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const target = Number(value.replace(/\./g, '').replace(',', '.'));
  const numeric = !Number.isNaN(target);
  const [n, setN] = useState(numeric ? 0 : target);
  useEffect(() => {
    if (!inView || !numeric) return;
    if (prefersReduced()) { setN(target); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, target, duration]);
  const fmt = (x: number) => (value.includes('.') ? x.toLocaleString('de-DE') : String(x));
  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      <span aria-hidden="true">{numeric ? fmt(n) : value}</span>
    </span>
  );
}
