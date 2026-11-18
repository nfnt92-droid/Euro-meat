import { useState } from 'react';
import { useInView } from '../lib/motion';

/**
 * Cold-chain data visualisation — values from euro-meat.com/tehnologija & /kvalitet.
 * One axis per measure (temperature; capacity in tonnes). The freezing tunnel's
 * capacity is a daily rate (t/dan), so it is stated as text, not drawn on the tonnes axis.
 */
const points = [
  { t: 4, label: 'Rashladne komore', sub: '4 komore · do +4 °C', align: 'start' as const },
  { t: -18, label: 'Transport — zamrznuto', sub: 'vlastita vozila · −18 °C', align: 'middle' as const },
  { t: -30, label: 'Komore za zamrzavanje', sub: '3 komore · do −30 °C', align: 'end' as const },
  { t: -35, label: 'Tunel za zamrzavanje', sub: '1 tunel · do −35 °C', align: 'end' as const },
];
const bars = [
  { k: 'Rashladne komore (+4 °C)', v: 101 },
  { k: 'Komore za zamrzavanje (−30 °C)', v: 168 },
];
const T_MAX = 5, T_MIN = -35;
const x = (t: number) => ((T_MAX - t) / (T_MAX - T_MIN)) * 100;

export function ColdChainChart({ dark = false }: { dark?: boolean }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [hover, setHover] = useState<number | null>(null);
  const ink = dark ? 'text-paper' : 'text-ink';
  const muted = dark ? 'text-paper/55' : 'text-mute';
  const rule = dark ? 'bg-paper/20' : 'bg-ink/15';
  return (
    <figure ref={ref} className={`chart ${inView ? 'is-in' : ''}`}>
      <figcaption className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${muted}`}>Temperaturni profil hladnog lanca · °C</figcaption>

      {/* Temperature axis */}
      <div className="relative mt-16 h-40 sm:mt-20 sm:h-36" aria-hidden="true">
        <div className={`absolute left-0 right-0 top-1/2 h-px ${rule}`} />
        <div className="chart-track absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-steel to-burgundy" style={{ width: `${x(-35)}%` }} />
        {[5, 0, -5, -10, -15, -20, -25, -30, -35].map((t) => (
          <span key={t} className="absolute top-1/2" style={{ left: `${x(t)}%` }}>
            <span className={`absolute left-0 top-0 h-2 w-px ${rule}`} />
            <span className={`absolute left-0 top-4 -translate-x-1/2 text-[10px] tabular-nums sm:text-[11px] ${muted}`}>{t > 0 ? `+${t}` : t === 0 ? '0' : `−${Math.abs(t)}`}</span>
          </span>
        ))}
        {points.map((p, i) => {
          const above = i % 2 === 0;
          return (
            <button
              key={p.label}
              type="button"
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
              className="chart-pt group absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-3"
              style={{ left: `${x(p.t)}%`, transitionDelay: `${300 + i * 140}ms` }}
              aria-label={`${p.label}: ${p.sub}`}
              tabIndex={0}
            >
              <span className={`block h-3 w-3 rounded-full bg-burgundy ring-2 transition-transform duration-300 group-hover:scale-150 ${dark ? 'ring-ink' : 'ring-paper'}`} />
              <span
                className={`pointer-events-none absolute w-max max-w-[9.5rem] text-left sm:max-w-none ${above ? 'bottom-full mb-3' : 'top-full mt-8'} ${p.align === 'start' ? 'left-1' : p.align === 'end' ? 'right-1 text-right' : 'left-1/2 -translate-x-1/2 text-center'}`}
              >
                <span className={`block text-[clamp(1.1rem,2vw,1.75rem)] font-semibold leading-none tracking-[-0.03em] ${ink}`}>{p.t > 0 ? `+${p.t}` : `−${Math.abs(p.t)}`} °C</span>
                <span className={`mt-1 block text-[11px] leading-tight sm:text-xs ${hover === i ? ink : muted}`}>{p.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Capacity — one series, one hue, direct labels */}
      <div className="mt-24 sm:mt-28">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${muted}`}>Kapacitet skladištenja · tone</p>
        <div className="mt-6 space-y-5">
          {bars.map((b, i) => (
            <div key={b.k} className="grid grid-cols-12 items-center gap-3" onMouseEnter={() => setHover(10 + i)} onMouseLeave={() => setHover(null)}>
              <span className={`col-span-12 text-sm sm:col-span-4 ${hover === 10 + i ? ink : muted}`}>{b.k}</span>
              <div className="relative col-span-10 h-3 sm:col-span-7">
                <div className={`absolute inset-0 ${dark ? 'bg-paper/[0.06]' : 'bg-ink/[0.05]'}`} />
                <div className="chart-bar absolute inset-y-0 left-0 rounded-r-[4px] bg-burgundy" style={{ width: `${(b.v / 180) * 100}%`, transitionDelay: `${700 + i * 160}ms` }} />
              </div>
              <span className={`col-span-2 text-right text-lg font-semibold tabular-nums sm:col-span-1 ${ink}`}>{b.v} t</span>
            </div>
          ))}
        </div>
        <p className={`mt-6 text-sm ${muted}`}>Tunel za početno zamrzavanje: <span className={ink}>9 t / dan</span> · Pandleraj: <span className={ink}>28 t / dan</span></p>
      </div>

      <div className="sr-only"><table>
        <caption>Hladni lanac Euro Meat</caption>
        <thead><tr><th>Jedinica</th><th>Temperatura</th><th>Kapacitet</th></tr></thead>
        <tbody>
          <tr><td>4 rashladne komore</td><td>do +4 °C</td><td>101 t</td></tr>
          <tr><td>3 komore za zamrzavanje</td><td>do −30 °C</td><td>168 t</td></tr>
          <tr><td>Tunel za početno zamrzavanje</td><td>do −35 °C</td><td>9 t / dan</td></tr>
          <tr><td>Transport (zamrznuto / rashlađeno)</td><td>−18 °C / +4 °C</td><td>—</td></tr>
        </tbody>
      </table></div>
    </figure>
  );
}
