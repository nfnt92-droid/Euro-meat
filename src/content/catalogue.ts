import { products as img } from './media';

export type Category = {
  id: 'teletina' | 'industrija' | 'piletina' | 'gurman';
  index: string;
  title: string;
  kicker: string;
  lead: string;
  items: string[];
  specs: { label: string; value: string }[];
  images: readonly string[];
  note?: string;
};

/** Product catalogue — content mirrors euro-meat.com/proizvodi (anchors #teletina, #industrija, #piletina, #gurman). */
export const categories: Category[] = [
  {
    id: 'teletina',
    index: '01',
    title: 'Teletina, junetina, govedina i jagnjetina',
    kicker: 'Crveno meso',
    lead:
      'Veliki izbor telećeg, junećeg i goveđeg mesa — svježe, rashlađeno ili zamrznuto. Jagnjetinu i piletinu nudimo po narudžbi.',
    items: [
      'Cijele i polovične četvrti',
      'Biftek',
      'Ramstek',
      'Kugla',
      'Mišić',
      'Rasjeci buta',
      'Jagnjetina (po narudžbi)',
    ],
    specs: [
      { label: 'Stanje', value: 'Svježe · rashlađeno · zamrznuto' },
      { label: 'Forma', value: 'Komadno ili komercijalno pakovanje' },
      { label: 'Pakovanje', value: 'MAP — kontrolisana atmosfera, za markete i mesnice' },
      { label: 'Obrada', value: 'Prema specifikaciji kupca' },
      { label: 'Pasmine', value: 'Holstein i Charolaise' },
    ],
    images: img.red,
  },
  {
    id: 'industrija',
    index: '02',
    title: 'Procesna industrija',
    kicker: 'Sirovina za preradu',
    lead:
      'Proizvodi za procesnu industriju, od bijelog i crvenog mesa, iz kategorija s kojima radimo. Dobavljači su lideri u proizvodnji ovih kategorija.',
    items: [
      'Pileći MDM',
      'Pileći file i koža',
      'Goveđi obrezak',
      'Goveđi loj',
      'Obrazi',
      'Srca',
      'Goveđe meso glave',
    ],
    specs: [
      { label: 'Porijeklo', value: 'Bijelo i crveno meso' },
      { label: 'Standardi dobavljača', value: 'HACCP, HALAL, IFS i važeći EU zahtjevi' },
    ],
    images: img.industry,
  },
  {
    id: 'piletina',
    index: '03',
    title: 'Piletina',
    kicker: 'Bijelo meso',
    lead: 'Asortiman piletine u standardnom kartonskom pakovanju.',
    items: [
      'File',
      'Batak',
      'Batak sa karabatkom',
      'Iskošteni batak sa karabatkom',
      'Pileća jetrica sa srcem',
      'Pileći želudac',
    ],
    specs: [{ label: 'Pakovanje', value: 'Kartonska kutija 12/1' }],
    images: img.chicken,
  },
  {
    id: 'gurman',
    index: '04',
    title: 'GURMAN GOLD linija',
    kicker: 'Pileći program',
    lead:
      'Linija proizvoda od isključivo prvokategornog pilećeg mesa, pakovana u PVC posude sa MAP folijom koja čuva svježinu.',
    items: ['GURMAN GOLD ćevapčići — oblikovani, začinjeni', 'GURMAN GOLD pileće mljeveno meso'],
    specs: [
      { label: 'Sirovina', value: 'Prvokategorno pileće meso' },
      { label: 'Pakovanje', value: 'PVC posuda, MAP folija' },
      { label: 'Priprema', value: 'Termički obraditi do +82 °C u središtu proizvoda' },
    ],
    images: img.gurman,
    note: 'Proizvod je namijenjen konzumaciji isključivo nakon termičke obrade.',
  },
];

export const productsIntro = {
  lead:
    'Proizvode isporučujemo kao svježe, rashlađeno ili zamrznuto meso — komadno ili u komercijalnom MAP pakovanju namijenjenom marketima i mesnicama.',
  suppliers:
    'Naši dobavljači su lideri u proizvodnji navedenih kategorija i garantuju kvalitetno i sigurno meso, uz poštivanje HACCP sistema, HALAL i IFS standarda te drugih važećih EU zahtjeva.',
  origin: 'Dobavljači su veliki proizvođači iz Italije, Holandije i Austrije.',
};
