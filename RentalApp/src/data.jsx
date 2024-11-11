import Sivukuva from './assets/Sivukuva.jpg';
import Sisakuva from './assets/Sisakuva.jpg';
import ulko from './assets/ulko.jpg';

export const products = [
  { 
    id: 'saunaTrailer', 
    name: 'Saunakärry', 
    description: 'Kuvaus Saunakärrystä', 
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

  },

  { 
    id: 'agrikaatti', 
    name: 'Agrikaatti', 
    description: 'Kuvaus Agrikaatista', 
    price: 75,
    
  }
];
