import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { bs, type Dict } from './bs';
import { en } from './en';
import { de } from './de';

export type Lang = 'bs' | 'en' | 'de';
const dicts: Record<Lang, Dict> = { bs, en, de };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18n = createContext<Ctx>({ lang: 'bs', setLang: () => {}, t: bs });

/**
 * UI-chrome translations only. Page content is authored in Bosnian; EN/DE
 * content files can be added per page later (see README → Localisation).
 * Legal & technical documents are intentionally NOT translated.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  // Language switching is disabled for launch: the site is Bosnian only.
  // EN/DE dictionaries stay in place so a switcher can be re-enabled later.
  const [lang, setLangState] = useState<Lang>('bs');
  const setLang = (l: Lang) => setLangState(l);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <I18n.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</I18n.Provider>;
}

export const useI18n = () => useContext(I18n);
