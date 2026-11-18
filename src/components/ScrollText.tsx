import { useRef } from 'react';
import { useScrollProgress, prefersReduced } from '../lib/motion';

/** Statement whose words brighten one by one as it scrolls through the viewport. */
export function ScrollText({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ');
  const spans = useRef<HTMLSpanElement[]>([]);
  const ref = useScrollProgress<HTMLParagraphElement>((p) => {
    if (prefersReduced()) return;
    const lit = (p - 0.18) / 0.45 * words.length;
    spans.current.forEach((s, i) => { if (s) s.style.opacity = String(Math.min(1, Math.max(0.16, lit - i + 1))); });
  });
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} ref={(el) => { if (el) spans.current[i] = el; }} className="transition-opacity duration-300" style={{ opacity: prefersReduced() ? 1 : 0.16 }}>{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </p>
  );
}
