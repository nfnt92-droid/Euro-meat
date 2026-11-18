import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { Split } from './Split';

export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

type BtnProps = { to?: string; href?: string; children: ReactNode; variant?: 'solid' | 'line' | 'light'; className?: string; external?: boolean };
export function Button({ to, href, children, variant = 'solid', className = '', external }: BtnProps) {
  const base = 'btn group';
  const v = { solid: 'btn-solid', line: 'btn-line', light: 'btn-light' }[variant];
  const inner = (<><span>{children}</span><Arrow className="transition-transform duration-500 ease-expo group-hover:translate-x-1" /></>);
  if (to) return <Link to={to} className={`${base} ${v} ${className}`}>{inner}</Link>;
  return (
    <a href={href} className={`${base} ${v} ${className}`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  );
}

export function Eyebrow({ index, children, light }: { index?: string; children: ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? 'text-paper/70' : 'text-mute'}`}>
      {index && <span className={light ? 'text-paper' : 'text-burgundy'}>{index}</span>}
      {index && <span className={`h-px w-8 ${light ? 'bg-paper/40' : 'bg-ink/25'}`} />}
      <span>{children}</span>
    </p>
  );
}

export function SectionHead({ index, eyebrow, title, lead, className = '', light }: { index?: string; eyebrow: string; title: string; lead?: ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={`grid gap-8 md:grid-cols-12 ${className}`}>
      <Reveal className="md:col-span-3 md:pt-3"><Eyebrow index={index} light={light}>{eyebrow}</Eyebrow></Reveal>
      <div className="md:col-span-9">
        <Split text={title} className={`text-h2 font-medium ${light ? 'text-paper' : 'text-ink'}`} />
        {lead && <Reveal as="p" className={`mt-6 max-w-prose text-lg leading-relaxed ${light ? 'text-paper/70' : 'text-graphite'}`} delay={200}>{lead}</Reveal>}
      </div>
    </div>
  );
}

export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-frame px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function CertMark({ label, light }: { label: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${light ? 'border-paper/30 text-paper' : 'border-ink/20 text-ink'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-burgundy" aria-hidden="true" />{label}
    </span>
  );
}
