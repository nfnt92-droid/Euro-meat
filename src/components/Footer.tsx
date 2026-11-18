import { Link } from 'react-router-dom';
import { Frame } from './ui';
import { site } from '../content/site';
import { useI18n } from '../i18n';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <Frame className="pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[clamp(2rem,3.4vw,3.25rem)] font-medium leading-[1] tracking-[-0.035em]">Brzo. Svježe.<br /><span className="font-serif italic font-normal">Provjereno.</span></p>
            <div className="mt-8 flex flex-wrap gap-2">
              {site.certifications.map((c) => <span key={c} className="border border-paper/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/80">{c}</span>)}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="footer-h">Kompanija</h3>
              <ul className="footer-list">
                <li><Link to="/o-nama">{t.nav.about}</Link></li>
                <li><Link to="/kvalitet">{t.nav.quality}</Link></li>
                <li><Link to="/tehnologija">{t.nav.technology}</Link></li>
                <li><Link to="/novosti">{t.nav.news}</Link></li>
                <li><a href={site.realEstate.href} target="_blank" rel="noopener noreferrer">Nekretnine — najam</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-h">Proizvodi</h3>
              <ul className="footer-list">
                <li><Link to="/proizvodi#teletina">Teletina i govedina</Link></li>
                <li><Link to="/proizvodi#industrija">Procesna industrija</Link></li>
                <li><Link to="/proizvodi#piletina">Piletina</Link></li>
                <li><Link to="/proizvodi#gurman">GURMAN GOLD</Link></li>
                <li><a href={site.orderUrl}>{t.order}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-h">Kontakt</h3>
              <address className="footer-list not-italic">
                <span className="block">{site.address.street}</span>
                <span className="block">{site.address.zip} {site.address.city}</span>
                <a className="mt-3 block" href={site.phoneHref}>{site.phone}</a>
                <a className="block" href={`mailto:${site.email}`}>{site.email}</a>
                <span className="mt-3 block text-paper/50">{site.hours}</span>
              </address>
            </div>
          </div>
        </div>
      </Frame>

      <div className="mt-20 select-none px-3 lg:mt-28" aria-hidden="true">
        <p className="footer-mark whitespace-nowrap text-center font-extrabold leading-[0.78] tracking-[-0.06em] text-paper/[0.07]">EURO·MEAT</p>
      </div>

      <Frame className="relative border-t border-paper/10 py-8">
        <div className="flex flex-col gap-4 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. Sva prava zadržana.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href={site.documents.qualityPolicy.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Politika kvaliteta</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-paper">Facebook</a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-paper">YouTube</a>
          </div>
        </div>
      </Frame>
    </footer>
  );
}
