import './App.css'
import {CheckCircleFill} from 'react-bootstrap-icons';


export const saunaInformation = 
  { 
    id: 'sauna', 
    name: 'Saunakärryn Vuokraus',
    description: (
      <div className='sauna-text-container'>
        <h4>Tietoa Saunakärrystä</h4>
        <p />
        <p><CheckCircleFill size={25}/> Saunaan mahtuu 4-6 henkilöä</p>
        <p><CheckCircleFill size={25}/> Lämpiää kuivilla puilla noin 20 minuutissa</p>
        <p><CheckCircleFill size={25}/> Vesipata veden lämmitykseen</p>
        <p><CheckCircleFill size={25}/> Luovutetaan aina pestynä ja desinfioituna</p>
        <p><CheckCircleFill size={25}/> Saa vetää B-ajokortilla</p>
    
      </div>
    ),
    priceInformation: (
        <div className='sauna-text-container'>
          <h4>Hinnasto</h4>
          <p />
          <ul>
          <p><li> Vuorokausi <strong>140 €</strong> </li></p>
          <p><li>Viikonloppu pe-su/3vrk: <strong>230 € </strong></li></p>
          <p><li> Muut ajankohdat: sovitaan erikseen.</li></p>
          <p><li> Lisätietoja: <a style={{color:'#d4a373'}} href="" >Ota yhteyttä</a> yhteydenotto lomakkeella tai soita  <strong>040-7143451.</strong></li>
          <br />(Hinnat sisältävät alv 25,5%)</p>
          </ul>
          
        </div>
    ),

    contactText:(
      <div>
      <h3>Kiinnostaako saunan vuokraus?</h3>
      <br />
      <p>
    Nauti saunan lämmöstä juuri siellä, missä haluat! Vuokrattava saunamme 
    peräkärryllä tarjoaa täydellisen mahdollisuuden rentoutua luonnon helmassa 
    tai juhlien keskellä.
    </p>
    <p>
      Saunamme on helposti kuljetettavissa ja soveltuu niin viikonloppureissuihin, 
      erityistilaisuuksiin kuin pidemmille lomillekin.  
    </p>
      <p>
      Tarkista vapaat ajat kätevästi <strong>varauskalenteristamme</strong> ja ota yhteyttä <strong>yhteydenottolomakkeella </strong>
      tai soittamalla <strong>040-7143451.</strong>
    </p>
  </div>
    ),
    };

