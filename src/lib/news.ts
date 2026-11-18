/**
 * News repository. Articles live as JSON files in src/content/news/ and are
 * edited through Decap CMS (/admin) — every publish commits a file to the repo
 * and Netlify rebuilds the site. Swap this module for a headless-CMS fetch
 * (Sanity, Contentful, Strapi…) without touching any page component.
 */
export type Article = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  category: string;
  excerpt: string;
  image?: string;
  body: string; // Markdown
  gallery?: string[];
  sourceUrl?: string;
};

const files = import.meta.glob<Article>('../content/news/*.json', { eager: true, import: 'default' });

export const articles: Article[] = Object.values(files).sort((a, b) => b.date.localeCompare(a.date));

/** Job ads reuse one generic graphic; those get a typographic treatment instead of a photo. */
export const hasPhoto = (a: Article) => !!a.image && !a.image.includes('euromeat-copy');
export const isCareer = (a: Article) => a.category === 'Karijere';

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

const months = ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'];
export function formatDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}. ${months[m - 1]} ${y}.`;
}
