/**
 * Central image registry.
 * All photography is the ORIGINAL Euro Meat photography from euro-meat.com,
 * stored locally in /public/media (optimised WebP, max 1920px).
 * Slot assignments were reviewed visually.
 */
const ORIGIN = '/media';
const u = (p: string) => `${ORIGIN}/${p}`;

export const media = {
  hero: u('2021/04/kvaliteteuromeat-scaled.webp'),
  logistics: u('2021/03/aboutus2-1024x1024.webp'),
  truckRoad: u('2022/07/euromeat-kamion-cesta.webp'),
  worker: u('2021/03/8-kvalitet-scaled.webp'),
  inspection: u('2024/11/kontrola-u-objektu.webp'),
  coldDisplay: u('2021/03/aboutus4-1024x1024.webp'),
  og: u('2021/03/Tehnologija-2-1024x683.webp'),
  homeImage: u('2021/03/homeimage.webp'),

  tech: [
    u('2021/03/Tehnologija-1-scaled.webp'),
    u('2021/03/Tehnologija-2-scaled.webp'),
    u('2021/03/Tehnologija-3-scaled.webp'),
    u('2021/03/Tehnologija-4-scaled.webp'),
    u('2021/03/Tehnologija-5-scaled.webp'),
    u('2021/03/Tehnologija-6-scaled.webp'),
  ],

  about: {
    main: u('2021/04/aboutsuseuromeat-1024x1024.webp'),
    a: u('2021/03/aboutus2-1024x1024.webp'),
    b: u('2021/03/aboutus4-1024x1024.webp'),
    c: u('2021/03/aboutus6-1024x1024.webp'),
    d: u('2021/04/1500-1024x1024.webp'),
    e: u('2021/04/Untitled-5-copy.webp'),
    director: u('2021/03/mirnesmudrovweb-272x300.webp'),
  },

  quality: [
    u('2021/04/kvaliteteuromeat-1.webp'),
    u('2021/03/2-kvalitet-scaled.webp'),
    u('2021/03/3-kvalitet-scaled.webp'),
    u('2021/03/7-kvalitet-scaled.webp'),
    u('2021/04/kvaliteteuromeat2.webp'),
    u('2021/04/kvaliteteuromeat3.webp'),
    u('2021/04/75209108_m.webp'),
    u('2021/04/21205725_m.webp'),
    u('2021/04/18559185_m.webp'),
  ],

  newsFallback: u('2022/09/euromeat-copy.webp'),
} as const;

export const products = {
  red: [
    u('2021/04/454.webp'),
    u('2021/04/4.webp'),
    u('2021/04/1.webp'),
    u('2021/04/2.webp'),
    u('2021/04/kvaliteteuromeat-scaled.webp'),
    u('2025/12/IMG_5672-scaled.webp'),
    u('2025/12/IMG_5675-scaled.webp'),
    u('2025/12/IMG_5676-scaled.webp'),
    u('2022/11/MAP-1.webp'),
    u('2022/11/MAP-2.webp'),
    u('2022/11/MAP-4.webp'),
    u('2026/01/em-burger.webp'),
  ],
  industry: [u('2021/04/3.webp'), u('2021/04/2-10.webp')],
  chicken: [
    u('2021/04/6433.webp'),
    u('2021/04/Pileci_batak.webp'),
    u('2021/04/Pileca_krila.webp'),
    u('2021/04/Pileci_batak_sa_karabatakom.webp'),
    u('2021/04/Iskosteni_batak_sa_karabatakom.webp'),
    u('2021/04/Pileci_karabatak.webp'),
    u('2021/04/6430.webp'),
    u('2021/04/6440.webp'),
  ],
  gurman: [
    u('2026/01/gurman-gold-cevapcici.webp'),
    u('2026/01/gurman-gold-cevapcici-1.webp'),
    u('2026/06/gurman-pilecemeso-1.webp'),
  ],
} as const;
