import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';
import './App.css'
import {Check2Circle} from 'react-bootstrap-icons';


export const saunaInformation = 
  { 
    id: 'sauna', 
    name: 'Saunakärryn Vuokraus',
    description: (
      <div className='sauna-text-container'>
        <h4>Tietoa Saunakärrystä</h4>
        <p />
        <p><Check2Circle size={25}/> Saunaan mahtuu 4-6 henkilöä</p>
        <p><Check2Circle size={25}/> Lämpiää kuivilla puilla noin 20 minuutissa</p>
        <p><Check2Circle size={25}/> Vesipata veden lämmitykseen</p>
        <p><Check2Circle size={25}/> Luovutetaan aina pestynä ja desinfioituna</p>
        <p><Check2Circle size={25}/> Saa vetää B-ajokortilla</p>
    
      </div>
    ),
    priceInformation: (
        <div className='sauna-text-container'>
          <h4>Hinnasto</h4>
          <p />
          <ul>
          <p><li> Vuorokausi <strong>140 €</strong> </li></p>
          <p><li>Viikonloppu pe-su/3vrk: 230 € </li></p>
          <p><li> Muut ajankohdat: sovitaan erikseen.</li></p>
          <p><li> Lisätietoja: <a href="">Ota yhteyttä</a> yhteydenotto lomakkeella tai soita  <strong>040-7143451.</strong></li>
          <br />(Hinnat sisältävät alv 25,5%)</p>
          </ul>
          
        </div>
    ),

    contactText:(
      <div>
        <h3>Kiinnostaako saunan vuokraus?</h3>
        <br />
        <p>
        Täytä yhteydenottolomake, 
        niin otamme sinuun yhteyttä mahdollisimman pian. 
        Tarjoamme saunan vuokrauspalvelua rentouttaviin 
        hetkiin luonnon helmassa.
        </p>
        <p>
        Olipa kyseessä sitten erityistapahtuma, viikonloppureissu tai 
        pidempi loma, saunamme tarjoaa erinomaiset puitteet rentoutumiseen.
        </p>
      </div>

    ),
    images: [
      Sivukuva,
      Sisakuva,
      ulko
     ]
    };

