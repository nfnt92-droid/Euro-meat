import { Link } from 'react-router-dom';
import type { Article } from '../lib/news';
import { formatDate, hasPhoto } from '../lib/news';
import { Img } from './Img';
import { Arrow } from './ui';

export function NewsCard({ a, large = false }: { a: Article; large?: boolean }) {
  return (
    <Link to={`/novosti/${a.slug}`} className="group block">
      <div className={`img-zoom overflow-hidden bg-stone ${large ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
        {hasPhoto(a) ? (
          <Img src={a.image} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-ink p-6 text-paper">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/50">{a.category}</span>
            <span className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] italic leading-none text-paper/90">Zapošljavamo</span>
          </div>
        )}
      </div>
      <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
        <span className="text-burgundy">{a.category}</span><span className="h-px w-5 bg-ink/20" /><time dateTime={a.date}>{formatDate(a.date)}</time>
      </div>
      <h3 className={`mt-3 font-medium tracking-[-0.02em] text-ink transition-colors group-hover:text-burgundy ${large ? 'text-h3' : 'text-xl leading-snug'}`}>{a.title}</h3>
      {large && <p className="mt-3 max-w-prose leading-relaxed text-graphite">{a.excerpt}</p>}
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">Pročitajte <Arrow className="transition-transform duration-500 ease-expo group-hover:translate-x-1" /></span>
    </Link>
  );
}
