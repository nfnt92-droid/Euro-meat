/** Company master data — all values taken from the current euro-meat.com. */
export const site = {
  name: 'EURO MEAT d.o.o. Maglaj',
  short: 'Euro Meat',
  url: 'https://euro-meat.com',
  claim: 'Brzo. Svježe. Provjereno.',
  claimSub: 'Premium Quality',
  founded: 2019,
  experienceYears: '32+',
  address: { street: '1. Marta bb', zip: '74250', city: 'Maglaj', country: 'Bosna i Hercegovina' },
  locationHint: 'Kod semafora na magistralnom putu M17, nakon skretanja za Maglaj.',
  phone: '+387 (0) 32 605 605',
  phoneHref: 'tel:+38732605605',
  email: 'info@euro-meat.com',
  hours: 'Pon – Sub, 07:00 – 16:00',
  director: {
    name: 'Mirnes Mudrov',
    role: 'Direktor — prodaja i nabavka mesa',
    phone: '+387 (0) 61 891 179',
    phoneHref: 'tel:+38761891179',
    email: 'mirnes.mudrov@euro-meat.com',
  },
  /** Existing ordering page on the current site — preserved as-is (currently "Stranica je u izradi"). */
  orderUrl: 'https://euro-meat.com/online-narudzba/',
  social: {
    facebook: 'https://www.facebook.com/euromeat387',
    youtube: 'https://www.youtube.com/channel/UCEq4arrul1cm1eJbzQY8WEA',
  },
  videos: {
    corporate: { id: '2VkMMQ_aZSU', title: 'Korporativni video' },
    location: { id: '1oP7h1Gg6j0', title: 'Gdje se nalazimo?' },
  },
  documents: {
    qualityPolicy: {
      label: 'Politika kvaliteta i sigurnost hrane (PDF)',
      href: 'https://euro-meat.com/wp-content/uploads/2026/04/Politika-kvaliteta-i-sigurnost-hrane.pdf',
    },
    foodDefense: {
      label: 'Politika odbrane hrane i politika kvaliteta (PDF)',
      href: 'https://euro-meat.com/wp-content/uploads/2022/05/Untitled.pdf',
    },
    qualityPolicy2021: {
      label: 'Politika kvalitete i bezbjednosti hrane, 2021 (PDF)',
      href: 'https://euro-meat.com/wp-content/uploads/2021/09/Politika-kvalitete-i-bezbijednosti-hrane.pdf',
    },
  },
  realEstate: { label: 'Euro Meat nekretnine — najam skladišnog prostora', href: 'https://nekretnine.euro-meat.com/' },
  mapEmbed: 'https://maps.google.com/maps?q=%C5%A0kafa%20Maglaj&t=m&z=16&output=embed&iwloc=near',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Euro+Meat+d.o.o.+Maglaj',
  certifications: ['HACCP', 'HALAL', 'ISO 9001:2015'] as const,
};
