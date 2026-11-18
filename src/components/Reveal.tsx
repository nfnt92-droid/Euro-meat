import type { ElementType, ReactNode, CSSProperties } from 'react';
import { useInView } from '../lib/motion';

type Props = { as?: ElementType; className?: string; delay?: number; children: ReactNode; variant?: 'up' | 'mask' | 'fade' };

/**
 * Scroll reveal (rise / fade). Uses the shared useInView hook, which has a geometric fallback,
 * and never clips its own box, so text is always fully visible once revealed.
 * CSS handles prefers-reduced-motion (see index.css).
 */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, variant = 'up' }: Props) {
  const [ref, inView] = useInView<HTMLElement>('0px 0px -6% 0px');
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <Tag ref={ref} style={style} className={`reveal reveal-${variant === 'mask' ? 'up' : variant} ${inView ? 'is-in' : ''} ${className}`}>
      {children}
    </Tag>
  );
}
