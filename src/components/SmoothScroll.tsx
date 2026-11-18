import { useEffect } from 'react';
import Lenis from 'lenis';
import { prefersReduced } from '../lib/motion';

declare global { interface Window { __lenis?: Lenis } }

/** Natural inertial scrolling on desktop pointers. Native scrolling on touch and with reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReduced() || window.matchMedia('(pointer: coarse)').matches) return;
    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), wheelMultiplier: 0.95 });
    window.__lenis = lenis;
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); delete window.__lenis; };
  }, []);
  return null;
}

export function scrollToTop() {
  if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
  else window.scrollTo(0, 0);
}
export function scrollToEl(el: HTMLElement) {
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -96 });
  else el.scrollIntoView({ behavior: prefersReduced() ? 'auto' : 'smooth', block: 'start' });
}
