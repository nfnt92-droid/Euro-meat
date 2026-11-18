import { createElement, Fragment, useEffect, useState, type ElementType } from 'react';
import { useInView } from '../lib/motion';

type Props = { text: string; as?: ElementType; className?: string; delay?: number; stagger?: number; immediate?: boolean };

/**
 * Editorial heading with word-by-word masked rise.
 * Markup:  *word*  → italic serif accent,  \n → line break.
 * Screen readers get the plain sentence via aria-label.
 */
export function Split({ text, as = 'h2', className = '', delay = 0, stagger = 45, immediate = false }: Props) {
  const [ref, inView] = useInView<HTMLElement>('0px 0px -6% 0px');
  const show = immediate || inView;
  const [done, setDone] = useState(false);
  const words = text.replace(/\*/g, '').split(/\s+/).length;
  useEffect(() => {
    if (!show) return;
    // Once the rise has finished, release the mask so italic overhangs and descenders are never clipped.
    const t = setTimeout(() => setDone(true), delay + words * stagger + 1300);
    return () => clearTimeout(t);
  }, [show, delay, words, stagger]);
  let i = 0;
  const lines = text.split('\n');
  const plain = text.replace(/\*/g, '').replace(/\n/g, ' ');
  const content = lines.map((line, li) => {
    const parts = line.split(/(\*[^*]+\*)/g).filter(Boolean);
    return (
      <span key={li} className="block">
        {parts.map((part, pi) => {
          const accent = part.startsWith('*');
          const words = (accent ? part.slice(1, -1) : part).split(/(\s+)/);
          return (
            <Fragment key={pi}>
              {words.map((w, wi) => {
                if (/^\s+$/.test(w) || !w) return w ? ' ' : null;
                const d = delay + i++ * stagger;
                return (
                  <span key={wi} className="split-w" aria-hidden="true">
                    <span className={`split-i ${accent ? 'font-serif italic font-normal tracking-[-0.01em]' : ''}`} style={{ transitionDelay: `${d}ms` }}>{w}</span>
                  </span>
                );
              })}
            </Fragment>
          );
        })}
      </span>
    );
  });
  return createElement(as, { ref, className: `split ${show ? 'is-in' : ''} ${done ? 'is-done' : ''} ${className}`, 'aria-label': plain }, content);
}
