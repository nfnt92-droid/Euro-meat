import { Link } from 'react-router-dom';
import type { Article } from '../lib/news';
import { formatDate } from '../lib/news';
import { Arrow } from './ui';

/** Tidy list row for news & job ads: date · category · title · arrow on one baseline. */
export function NewsRow({ a, dark = false }: { a: Article; dark?: boolean }) {
  return (
    <Link to={`/novosti/${a.slug}`} className={`group grid grid-cols-12 items-baseline gap-x-4 gap-y-2 border-b py-6 transition-colors ${dark ? 'border-paper/12' : 'border-ink/12'}`}>
      <time dateTime={a.date} className={`col-span-6 whitespace-nowrap text-[12px] tabular-nums sm:col-span-3 lg:col-span-2 xl:col-span-2 ${dark ? 'text-paper/50' : 'text-mute'}`}>{formatDate(a.date)}</time>
      <span className="col-span-6 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-burgundy sm:col-span-2 sm:text-left">{a.category}</span>
      <span className={`col-span-11 text-lg font-medium leading-snug tracking-[-0.01em] transition-colors group-hover:text-burgundy sm:col-span-6 lg:col-span-7 sm:text-xl ${dark ? 'text-paper' : 'text-ink'}`}>{a.title}</span>
      <span className={`col-span-1 flex justify-end transition-transform duration-500 ease-expo group-hover:translate-x-1 ${dark ? 'text-paper' : 'text-ink'}`}><Arrow /></span>
    </Link>
  );
}
