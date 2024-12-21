import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';
import './App.css'



export const products = [
  { 
    id: 'sauna', 
    name: 'Saunakärryn Vuokraus',
    description: (
      <div>
        <h4>Tietoa Saunakärrystä</h4>
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
          <p><li>Vuorokausi <strong>140 €</strong> (sis. alv 25.5%)</li></p>
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
  
];
