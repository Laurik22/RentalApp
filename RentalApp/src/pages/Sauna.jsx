import React from 'react';
import {saunaInformation} from '../data';
import ContactForm from '../components/ContactForm';
import { Button, Container, Row, Col} from 'react-bootstrap';
import {useRef} from 'react';
import MyGallery from "../components/MyGallery";
import '../App.css';
import { GeoAltFill, ArrowRight} from 'react-bootstrap-icons';
import Calendar from '../components/Calendar';

function sauna() {
  const reservationRef = useRef(null);

  const handleScroll = () => {
    const yOffset = -80; 
    const yPosition =
      reservationRef.current.getBoundingClientRect().top +
      window.scrollY + 
      yOffset;
  
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  
 
  return (
    <Container fluid className=''>
      <Row>
        <div className='background-image-landing'>
          <Col lg={8} md={10} className='landingpage-content p-4'>
          <div >
            <h1 className='display-5 fw-bolder' ><span className='text-primary'>SAUNA</span> PERÄKÄRRYN VUOKRAUS</h1>
            <h5 className='mb-2'>
              <GeoAltFill color='red'/>
              Korpilahti, Jyväskylä
              </h5>
            <p>
            Koe rentouttavan saunan lämpö missä ja milloin haluat! <br />
            </p>
            <Button variant = 'secondary' size='lg' className='mt-2 w-50' onClick={handleScroll}            
            >
              Varaa < ArrowRight></ArrowRight>
            </Button>
          </div>
          </Col>
          </div>
      </Row>

      <Col className='divider'></Col>

      <Container className='mt-5'>
      <Row className="mb-5 gx-5">
      <Col className='mb-5'>
         <MyGallery></MyGallery>
        </Col>
       <Col lg={5}>
       <div>
        {saunaInformation.description}
        </div>

        <div>
        {saunaInformation.priceInformation}  
        </div>              
          </Col>
      </Row>

      <Row>
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
