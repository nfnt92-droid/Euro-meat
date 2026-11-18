import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { useI18n } from '../i18n';
import { site } from '../content/site';
import { media } from '../content/media';
import { asset } from '../lib/asset';

const routes = [
  { k: 'about', to: '/o-nama', img: media.about.main },
  { k: 'products', to: '/proizvodi', img: media.hero },
  { k: 'quality', to: '/kvalitet', img: media.quality[0] },
  { k: 'technology', to: '/tehnologija', img: media.tech[1] },
  { k: 'news', to: '/novosti', img: media.about.e },
  { k: 'contact', to: '/kontakt', img: media.logistics },
] as const;

export function Header() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(0);
  const darkHero = pathname === '/';
  const light = (darkHero && !scrolled) || open;

  useEffect(() => {
    let last = window.scrollY;
    // simple hide-on-scroll-down / show-on-scroll-up
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 400 && y > last + 6) setHidden(true);
      else if (y < last - 6 || y < 400) setHidden(false);
      last = y;
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow] duration-700 ease-expo ${hidden && !open ? '-translate-y-full' : ''} ${open ? 'bg-transparent' : light ? 'bg-ink/80 shadow-[0_1px_0_rgba(245,243,239,0.08)] backdrop-blur-md' : 'bg-paper/92 shadow-[0_1px_0_rgba(32,34,34,0.08)] backdrop-blur-md'}`}>
        <div className="mx-auto flex h-16 max-w-frame items-center justify-between gap-6 px-5 sm:px-8 lg:h-[84px] lg:px-12">
          <Link to="/" aria-label="Euro Meat — početna" className="relative z-10"><Logo light={light} /></Link>

          <nav aria-label="Glavna navigacija" className={`hidden transition-opacity duration-500 xl:block ${open ? 'pointer-events-none opacity-0' : ''}`}>
            <ul className="flex items-center gap-9">
              {routes.map((r) => (
                <li key={r.to}>
                  <NavLink to={r.to} className={({ isActive }) => `navlink ${light ? 'text-paper/80 hover:text-paper' : 'text-graphite hover:text-ink'} ${isActive ? 'is-active' : ''}`}>{t.nav[r.k]}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-3 sm:gap-5">
            <a href={site.orderUrl} className={`hidden px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 sm:inline-block ${light ? 'border border-paper/35 text-paper hover:bg-paper hover:text-ink' : 'bg-ink text-paper hover:bg-burgundy'}`}>{t.order}</a>
            <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="site-menu"
              className={`group -mr-2 flex h-11 items-center gap-3 px-2 text-[12px] font-semibold uppercase tracking-[0.16em] xl:-mr-0 ${light ? 'text-paper' : 'text-ink'}`}>
              <span className="grid h-4 overflow-hidden text-right leading-4">
                <span className={`[grid-area:1/1] block transition-transform duration-500 ease-expo ${open ? '-translate-y-full' : ''}`}>{t.menu}</span>
                <span className={`[grid-area:1/1] block translate-y-full transition-transform duration-500 ease-expo ${open ? '!translate-y-0' : ''}`}>{t.close}</span>
              </span>
              <span className="relative block h-3 w-7" aria-hidden="true">
                <span className={`absolute right-0 h-px bg-current transition-all duration-500 ease-expo ${open ? 'top-1.5 w-7 rotate-45' : 'top-0 w-7'}`} />
                <span className={`absolute right-0 h-px bg-current transition-all duration-500 ease-expo ${open ? 'top-1.5 w-7 -rotate-45' : 'top-3 w-4 group-hover:w-7'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div id="site-menu" ref={(el) => { if (el) { if (open) el.removeAttribute('inert'); else el.setAttribute('inert', ''); } }} className={`menu fixed inset-0 z-40 ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="menu-bg absolute inset-0 bg-ink" />
        <div className="relative mx-auto flex h-full max-w-frame flex-col px-5 pb-8 pt-24 sm:px-8 lg:px-12 lg:pb-10 lg:pt-32">
          <div className="grid flex-1 gap-10 overflow-y-auto lg:grid-cols-12 lg:overflow-visible">
            <nav aria-label="Meni" className="lg:col-span-7">
              <ul>
                {[{ k: 'home' as const, to: '/', img: media.hero }, ...routes].map((r, i) => (
                  <li key={r.to} className="menu-item overflow-hidden border-b border-paper/10" style={{ transitionDelay: open ? `${180 + i * 55}ms` : '0ms' }}>
                    <NavLink to={r.to} end onMouseEnter={() => setPreview(i)} onFocus={() => setPreview(i)}
                      className={({ isActive }) => `menu-link group flex items-baseline gap-5 py-3 sm:py-4 ${isActive ? 'text-paper' : 'text-paper/55 hover:text-paper'}`}>
                      <span className="w-6 text-[11px] font-semibold tracking-[0.18em] text-paper/35">0{i}</span>
                      <span className="text-[clamp(2rem,5.2vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] transition-transform duration-700 ease-expo group-hover:translate-x-3">
                        {t.nav[r.k]}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:col-span-4 lg:col-start-9 lg:block">
              <div className="menu-preview relative aspect-[4/5] overflow-hidden bg-graphite">
                {[media.hero, ...routes.map((r) => r.img)].map((src, i) => (
                  <img key={i} src={asset(src)} alt="" loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ease-expo ${preview === i ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="menu-foot mt-8 flex flex-col gap-6 border-t border-paper/10 pt-6 text-sm text-paper/60 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-8">
              <a href={site.phoneHref} className="text-paper hover:text-paper/80">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a>
              <span>{site.hours}</span>
            </div>
            <div className="flex items-center justify-between gap-6">
              <a href={site.orderUrl} className="btn btn-light !py-3">{t.order}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
