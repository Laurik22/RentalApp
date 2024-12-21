import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Fade } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import Sivukuva from '../assets/Sivukuva.jpg';
import Sisakuva from '../assets/Sisakuva.jpg';
import Ulko from '../assets/ulko.jpg';

function MyGallery({}){

  const [index, setIndex] = useState(0);
  const[showFullscreen, setShowFullscreen] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleImageClick = () => {
    setShowFullscreen(true); 
  };
  const handleClose = () => {
    setShowFullscreen(false); 
  };
  

  return(
    <>
    {/* Pieni carousel */}
    <Container style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Carousel  activeIndex={index} onSelect={handleSelect} interval={null} slide={false}>
        <Carousel.Item>
          <img 
            src={Sivukuva} 
            alt="Sivukuva" 
            className='d-block w-100'
            onClick={handleImageClick} // Avaa fullscreen
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={Ulko} 
            alt="Ulko" 
            className='d-block w-100'
            onClick={handleImageClick} // Avaa fullscreen
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            src={Sisakuva} 
            alt="Sisakuva" 
            className='d-block w-100'
            onClick={handleImageClick} // Avaa fullscreen
          />
        </Carousel.Item>
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
      <button 
            onClick={handleClose} 
            className="close-button"
          >
            &times;
          </button>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false} >
          <Carousel.Item>
            <img src={Sivukuva} alt="Sivukuva" className='d-block w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Ulko} alt="Ulko" className='d-block w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sisakuva} alt="Sisakuva" className='d-block w-100' />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
    </Modal>
  </>
  
  );

}
export default MyGallery;