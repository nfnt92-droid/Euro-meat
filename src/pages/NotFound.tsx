import { Seo } from '../components/Seo';
import { Frame, Button } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <Seo title="Stranica nije pronađena" description="Tražena stranica ne postoji." />
      <section className="flex min-h-[80vh] items-end pb-24 pt-40">
        <Frame>
          <p className="text-stat font-semibold text-ink">404</p>
          <p className="mt-6 max-w-md text-lg text-graphite">Tražena stranica ne postoji ili je premještena.</p>
          <div className="mt-10"><Button to="/">Početna</Button></div>
        </Frame>
      </section>
    </>
  );
}
