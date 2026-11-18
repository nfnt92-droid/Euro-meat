import { useRef } from 'react';
import { processSteps } from '../content/facts';
import { useScrollProgress, prefersReduced } from '../lib/motion';

/** Five-step process with a line that draws as the section scrolls; steps light up as the line reaches them. */
export function ProcessLine({ dark = false }: { dark?: boolean }) {
  const line = useRef<HTMLSpanElement>(null);
  const items = useRef<HTMLLIElement[]>([]);
  const ref = useScrollProgress<HTMLOListElement>((p) => {
    const k = prefersReduced() ? 1 : Math.min(1, Math.max(0, (p - 0.2) / 0.45));
    if (line.current) line.current.style.transform = window.innerWidth >= 768 ? `scaleX(${k})` : `scaleY(${k})`;
    items.current.forEach((el, i) => el?.classList.toggle('is-lit', k >= i / (processSteps.length - 1) - 0.02));
  });
  return (
    <ol ref={ref} className="process relative grid gap-10 pl-8 md:grid-cols-5 md:gap-6 md:pl-0 md:pt-14">
      <span className={`absolute left-[5px] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[5px] md:bottom-auto md:h-px md:w-auto ${dark ? 'bg-paper/15' : 'bg-ink/12'}`} aria-hidden="true" />
      <span ref={line} className="absolute left-[5px] top-2 bottom-2 w-px origin-top scale-y-0 bg-burgundy md:left-0 md:right-0 md:top-[5px] md:bottom-auto md:h-px md:w-auto md:origin-left md:scale-x-0 md:scale-y-100" aria-hidden="true" />
      {processSteps.map((s, i) => (
        <li key={s.n} ref={(el) => { if (el) items.current[i] = el; }} className="process-step relative">
          <span className={`process-dot absolute -left-8 top-1 h-[11px] w-[11px] rounded-full border md:-top-14 md:left-0 ${dark ? 'border-paper/40 bg-ink' : 'border-ink/30 bg-paper'}`} aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-burgundy-soft">{s.n}</span>
          <h3 className={`mt-3 text-2xl font-medium tracking-[-0.02em] ${dark ? 'text-paper' : 'text-ink'}`}>{s.title}</h3>
          <p className={`mt-3 text-[15px] leading-relaxed ${dark ? 'text-paper/60' : 'text-graphite'}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
