import { useEffect, useRef, useState } from 'react';

export const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fires once when the element enters the viewport. */
export function useInView<T extends Element>(margin = '0px 0px -10% 0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { rootMargin: margin, threshold: 0 });
    io.observe(el);
    // Fallback: geometric check on scroll, in case an engine never reports the intersection.
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) { setInView(true); cleanup(); }
    };
    const cleanup = () => { io.disconnect(); window.removeEventListener('scroll', check); };
    window.addEventListener('scroll', check, { passive: true });
    const t = setTimeout(check, 600);
    return () => { cleanup(); clearTimeout(t); };
  }, [margin]);
  return [ref, inView] as const;
}

/** Scroll progress (0→1) of an element travelling through the viewport. */
export function useScrollProgress<T extends HTMLElement>(onProgress: (p: number, el: T) => void, mode: 'through' | 'sticky' = 'through') {
  const ref = useRef<T | null>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = mode === 'sticky'
        ? -r.top / Math.max(1, r.height - vh)
        : (vh - r.top) / (vh + r.height);
      cb.current(Math.min(1, Math.max(0, p)), el);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [mode]);
  return ref;
}
