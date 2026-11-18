import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useI18n } from './i18n';
import { SmoothScroll, scrollToTop, scrollToEl } from './components/SmoothScroll';
import { Curtain } from './components/Curtain';
import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));
const Quality = lazy(() => import('./pages/Quality'));
const Technology = lazy(() => import('./pages/Technology'));
const Products = lazy(() => import('./pages/Products'));
const News = lazy(() => import('./pages/News'));
const Article = lazy(() => import('./pages/Article'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const t = setTimeout(() => { const el = document.getElementById(id); if (el) scrollToEl(el); }, 120);
      return () => clearTimeout(t);
    }
    scrollToTop();
  }, [pathname, hash]);
  return null;
}

export function App() {
  const { pathname } = useLocation();
  const { t } = useI18n();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">{t.skip}</a>
      <SmoothScroll />
      <ScrollManager />
      <Curtain />
      <Header />
      <main id="main" key={pathname} className="page-enter">
        <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/kvalitet" element={<Quality />} />
          <Route path="/tehnologija" element={<Technology />} />
          <Route path="/proizvodi" element={<Products />} />
          <Route path="/novosti" element={<News />} />
          <Route path="/novosti/:slug" element={<Article />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
