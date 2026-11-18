import { useState } from 'react';
import { asset } from '../lib/asset';

/** Privacy-friendly YouTube facade: loads the player only after a click. */
export function Video({ id, title, poster, className = '' }: { id: string; title: string; poster?: string; className?: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-ink ${className}`}>
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 h-full w-full text-left" aria-label={`Pokreni video: ${title}`}>
          <img src={poster ? asset(poster) : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`} onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-[1.2s] ease-expo group-hover:scale-[1.03] group-hover:opacity-90" />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6 sm:bottom-8 sm:left-8 sm:right-8">
            <span className="text-paper">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/70">Video</span>
              <span className="mt-2 block text-h3 font-medium">{title}</span>
            </span>
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-paper/50 text-paper transition duration-500 ease-expo group-hover:scale-110 group-hover:border-paper group-hover:bg-paper group-hover:text-ink sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" /></svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
