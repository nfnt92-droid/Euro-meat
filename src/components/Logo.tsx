/**
 * Typographic wordmark for the redesign. The original logo files are
 * available at euro-meat.com/wp-content/uploads/2021/03/logo-1.png and can be
 * swapped in here once vector originals are supplied by the client.
 */
export function Logo({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-baseline gap-2 leading-none ${light ? 'text-paper' : 'text-ink'} ${className}`}>
      <span className="text-[19px] font-extrabold tracking-[-0.04em]">EURO<span className="text-burgundy-soft">·</span>MEAT</span>
      <span className={`hidden text-[10px] font-semibold uppercase tracking-[0.22em] sm:inline ${light ? 'text-paper/60' : 'text-mute'}`}>Maglaj</span>
    </span>
  );
}
