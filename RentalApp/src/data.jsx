import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';
import trailer1 from './assets/trailer1.jpg';
import trailer2 from './assets/trailer2.jpg';
import './App.css'
import { CardTitle } from 'react-bootstrap';


export const products = [
  { 
    id: 'saunaTrailer', 
    name: 'Saunakärry',
    description: (
      <div>
        <h4>Ominaisuudet</h4>
        <p></p>
        <p><li>Saunaan mahtuu 4-6 henkilöä</li></p>
        <p><li>Lämpiää kuivilla puilla noin 20 minuutissa</li></p>
        <p><li>Vesipata veden lämmitykseen</li></p>
        <p><li>Luovutetaan aina pestynä ja desinfioituna </li></p>
        <p><li>Saa vetää B-ajokortilla</li></p>
      </div>
    ),
    priceInformation: (
        <div>
          <h4>Hinnasto</h4>
          <p></p>
          <p><li>Viikonloppu pe-su/3vrk: 230 € (sis. alv 25.5%)</li></p>
          <p><li>Vuorokausi 140 € (sis. alv 25.5%)</li></p>
          <p><li>Muut ajankohdat: sovitaan erikseen.</li></p>
          <p><li>Lisätietoja: Ota yhteyttä yhteydenotto lomakkeella tai soita  040-7143451.</li></p>
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
    description: (
      <div>
        -avattavat ja helposti irrotettavat etu- ja takalaita <br />
        -etu ja takalaidassa hitsattu runkorakenne <br />
        -nokkapyörä
        <p>-metalliset step-on-lokasuojat</p>
        <p>-astinlaudat molemmin puolin lokasuojia</p>
        <p>-laminoitu vesitiivis vanerilattia</p>
        <p>-kippi</p>
        <p>-LED etu- ja äärivalot</p>
      </div>
    ), 
    priceInformation:(
      <div>
        <p><strong>Hinnasto</strong></p>
        <p>-20€ / Vrk</p>
        <p>-35€ / 2 Vrk </p>
      </div>
    ),
    images:[
        trailer1,
        trailer2
    ]
  },
];
