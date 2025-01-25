import React from 'react';
import { useParams } from 'react-router-dom';
import {saunaInformation} from '../data';
import ContactForm from '../components/ContactForm';
import { Button, Container, Row, Col, CardBody, Image} from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import MyGallery from "../components/MyGallery";
import '../App.css'
import talviulko from '../assets/talviulko.jpg';
import Ulko from '../assets/ulko.jpg';
import { GeoAltFill, ArrowRight} from 'react-bootstrap-icons';
import Calendar from '../components/Calendar';




function sauna() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);

  const reservationRef = useRef(null);

  const handleScroll = () => {
    const yOffset = -80; // Skrollaa 80 pikseliä vähemmän (navigointipalkin korkeus)
    const yPosition =
      reservationRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
  
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  
 
  return (
    <Container fluid >
      <Row>
        <Col  className='background-image'
        style={{ 
          backgroundImage: `url(${talviulko})`,
          backgroundSize: 'cover',
          height: '70vh',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
        }}
        >
          <Col lg={8} md={10} className='landingpage-content p-4'>
          <div >
            <h1><span className='text-primary'>SAUNA</span> PERÄKÄRRYN VUOKRAUS</h1>
            <h5 className='mb-2'>
              <GeoAltFill color='red'/>
              Korpilahti, Jyväskylä
              </h5>
            <p>
            Koe rentouttavan saunan lämpö missä ja milloin haluat! <br />
            </p>
            <Button variant='secondary' size='lg' className='mt-2 w-50' onClick={handleScroll}            
            >
              Varaa < ArrowRight></ArrowRight>
            </Button>
          </div>
          </Col>
        </Col>
      </Row>
      
      <Container className='mt-5'>
  
      <Col className='divider'>
      
      </Col>
        
      <Row className="mb-5">
      <Col md={7} className='mb-5'>
         <MyGallery></MyGallery>
        </Col>
       <Col md={4} className=''>
        {saunaInformation.description}
        {saunaInformation.priceInformation}                
          </Col>
      </Row>

      <Row >
      <Col md={6} className='mb-5'>
      <div ref={reservationRef} className='contact-section'>
        {saunaInformation.contactText}
        </div>
      </Col>
      <Col md={6} className='mb-5'>
      <Calendar/>
      </Col>
      </Row>
      
      <Row>
      <Col className='mb-5' md={6}>
        <ContactForm></ContactForm>
        </Col>
      </Row>
  </Container>
  </Container>
  );
}

export default sauna;
