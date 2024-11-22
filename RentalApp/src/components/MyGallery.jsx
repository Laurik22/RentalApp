import ImageGallery from "react-image-gallery";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";

function MyGallery({images}){

const galleryRef = useRef(null);

const handleImageClick = () => {
  galleryRef.current.fullScreen();
};

  return(
  <Container>
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
  </Container>
  );
}
export default MyGallery;