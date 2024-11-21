import ImageGallery from "react-image-gallery";
import Sivukuva from '../assets/Sivukuva.jpg';
import Sisakuva from '../assets/Sisakuva.jpg';
import ulko from '../assets/ulko.jpg';
import React, { useRef } from "react";
import '../App.css'



function MyGallery(){
const images = [
  
  {
    original: Sivukuva,
    thumbnail: Sivukuva,
    
  },
  {
    original: Sisakuva,
    thumbnail: Sisakuva,
    
  },
  {
    original: ulko,
    thumbnail: ulko,
    
  },
];

const galleryRef = useRef(null);

const handleImageClick = () => {
  galleryRef.current.fullScreen();
};

  return(
  <div>
  <ImageGallery 
  showThumbnails={true}
  showFullscreenButton={true}
  showPlayButton={false}
  ref={galleryRef}
  onClick={handleImageClick}
  items={images}
  showBullets={true}
  useBrowserFullscreen={false}
   />
   </div>
  );
}
export default MyGallery;