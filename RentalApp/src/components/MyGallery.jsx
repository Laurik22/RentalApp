import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Sivukuva from '../assets/Sivukuva.jpg';
import Sisakuva from '../assets/Sisakuva.jpg';
import ulko from '../assets/ulko.jpg';

function MyGallery(){

const images = [
  
  {
    original: Sivukuva,
    thumbnail: Sivukuva,
    originalHeight: '600px'
    
  },
  {
    original: ulko,
    thumbnail: ulko,
    originalHeight: '600px'
  },
  {
    original: Sisakuva,
    thumbnail: Sisakuva,
    originalHeight: '600px'
  
  },
];
  return(
  <ImageGallery 
  items={
    images
    
  }
   />
  );
}
export default MyGallery;