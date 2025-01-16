import React from 'react';
import { useParams } from 'react-router-dom';
import {saunaInformation} from '../data';
import ContactForm from '../components/ContactForm';
import { Card, Container, Row, Col, CardBody, Image} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MyGallery from "../components/MyGallery";
import '../App.css'
import talviulko from '../assets/talviulko.jpg';
import Ulko from '../assets/ulko.jpg';
import Calendar2 from '../components/Calendar2';
import { GeoAltFill} from 'react-bootstrap-icons';

function sauna() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);

  
 
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
          <Col md={6} className='landingpage-content p-3'>
          <div >
            <h1><span style={{color:'#865001'}}>SAUNA</span> PERÄKÄRRYN VUOKRAUS</h1>
            <h5 className='text-secondary mb-3'>
              <GeoAltFill color='red'/>
              Korpilahti, Jyväskylä
              </h5>
            <p>
            Koe rentouttavan saunan lämpö missä ja milloin haluat! <br />
            </p>
          </div>
          </Col>
        </Col>
      </Row>
      
      <Container className=''>
      <Row>
        <Col >
        
        </Col>
      </Row>


      <Col className='divider'>
      <hr className='rounded' />
      </Col>
        
      <Row className="justify-content-center mb-5">
      <Col className='mb-5'>
         <MyGallery></MyGallery>
        </Col>
       <Col md={5} className='mb-5'>
        {saunaInformation.description}
        {saunaInformation.priceInformation}                
          </Col>
      </Row>

      <Row className='mb-5'>
      <Col  className='mb-5'>
      <div className='contact-section p-4'>
        {saunaInformation.contactText}
        </div>
      </Col>
      <Col>
      <Calendar2/>
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
