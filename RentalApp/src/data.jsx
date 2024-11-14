import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';

export const products = [
  { 
    id: 'saunaTrailer', 
    name: 'Sauna peräkärry ', 
    description: (
      <div>
        <p>-Saunaan mahtuu 4-6 henkilöä</p>
        <p>-Lämpiää kuivilla puilla noin 20 minuutissa</p>
        <p>-Vesipata veden lämmitykseen</p>
        <p>-Luovutetaan aina pestynä ja desinfioituna</p>
        <p>-Saa vetää B-ajokortilla</p>

      </div>
    ),
    priceInformation: (
        <div>
          <p>-Viikonloppu pe-su/3vrk: 230 € (sis. alv 24%)</p>
          <p>-Vuorokausi 140 eur (sis. alv 24%)</p>
          <p>-Muut ajankohdat: sovitaan erikseen.</p>
          <p>-Lisätietoja: Ota yhteyttä yhteydenotto lomakkeella tai soita  040-7143451</p>
        </div>
    ),
    images: [
      Sivukuva,
      Sisakuva,
      ulko
     ]
  },
  { 
    id: 'perakarry', 
    name: 'Peräkärry', 
    description: 'Kuvaus Peräkärrystä', 
    price: 50,
    images:[

    ]

  },
];
