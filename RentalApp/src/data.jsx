import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';

export const products = [
  { 
    id: 'saunaTrailer', 
    name: 'Saunakärry', 
    description: (
      <div>
        <p><strong>Monitoimilauteet:</strong> Saunan lauteista muunneltavat punkat kahdelle aikuiselle</p>
        <p><strong>Aurinkopaneelit:</strong> 12 V ja 250 Ah akku takaavat sähköntarpeesi myös pimeinä iltoina</p>
        <p><strong>Webasto:</strong> Dieselkäyttöinen lämmitin pitää mökin lämpimänä kovillakin pakkasilla</p>
        <p><strong>Polttopuut:</strong> Kantotelineellinen polttopuita sisältyy vuokraan (saatavissa enemmän)</p>
        <p><strong>Matkajääkaappi:</strong> Tilavuus 25 litraa, lämpötila säädettävissä -20…+20°C</p>
      </div>
    ),
    price: 100,
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

  { 
    id: 'agrikaatti', 
    name: 'Agrikaatti', 
    description: 'Kuvaus Agrikaatista', 
    price: 75,
    images:[

    ]
    
  }
];
