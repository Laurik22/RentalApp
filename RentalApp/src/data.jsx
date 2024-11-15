import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';
import trailer1 from './assets/trailer1.jpg';
import trailer2 from './assets/trailer2.jpg';
export const products = [
  { 
    id: 'saunaTrailer', 
    name: 'Sauna', 
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
          <p>-Viikonloppu pe-su/3vrk: 230 € (sis. alv 25.5%)</p>
          <p>-Vuorokausi 140 eur (sis. alv 25.5%)</p>
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
