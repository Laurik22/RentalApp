import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CloseButton, Container} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import '../App.css';
import talviulko from '../assets/talviulko.jpg';
import talviulko2 from '../assets/talviulko2.jpg';
import talviulko3 from '../assets/talviulko3.jpg';
import talviulko4 from '../assets/talviulko4.jpg';
import talvisisa from '../assets/talvisisa.jpg';

function MyGallery() {
  const [index, setIndex] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);


  const images = [
    { src: talviulko, caption: "Ulko" },
    { src: talviulko2, caption: "Ulko" },
    { src: talviulko3, caption: "Ulko" },
    { src: talviulko4, caption: "Ulko" },
    { src: talvisisa, caption: "Ulko" },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = () => {
    setShowFullscreen(true); 
  };

  const handleClose = () => {
    setShowFullscreen(false); 
  };

  return (
    <>
      <Container style={{width:'auto',margin: '0 auto' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false} 
         >
          {images.map((image, idx) => (
            <Carousel.Item key={idx}>
              <img 
                src={image.src}
                alt={image.caption} 
                className="w-100"
                onClick={handleImageClick} // Avaa fullscreen
              />
            </Carousel.Item>
          ))}
          
        </Carousel>
      </Container>

      {/* Fullscreen-modal */}
      <Modal 
        show={showFullscreen} 
        onHide={handleClose} 
        centered
        size="lg" 
        fullscreen={true} // Fullscreen-tila
      >
        <Modal.Body>
          <CloseButton
            variant='white'
            onClick={handleClose} 
            aria-label='Close'
            className='close-button'
            />
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false}>
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <img src={image.src} alt={image.caption} className="w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyGallery;
