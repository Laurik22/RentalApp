import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import { Card, Container, Row, Col, CardBody, Image} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import MyGallery from "../components/MyGallery";
import '../App.css'
import Esim from '../assets/Esim.jpg';
import Tile from 'react-calendar/dist/esm/Tile.js';
import { GeoAltFill} from 'react-bootstrap-icons';
function sauna() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const p = products[0]; 
    if (p && p.id === productId) {
      setProduct(p);
      const formattedImages = p.images.map((img) => ({
        original: img,
        thumbnail: img,
      }));
      setImages(formattedImages);
    }
  }, [productId]);

  if (!product) return <div>Loading...</div>
 
  return (
    <Container fluid >
      <Row>
        <Col  className='background-image'
        style={{ 
          backgroundImage: `url(${Esim})`,
          backgroundSize: 'cover',
          height: '70vh',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
        }}
        >
          <Col md={6} className='landingpage-content p-3'>
          <div >
            <h1><span style={{color:'#865001'}}>SAUNA</span> KÄRRYN VUOKRAUS</h1>
            <h5 className='text-secondary mb-3'>
              <GeoAltFill color='red'/>
              Korpilahti, Jyväskylä
              </h5>
            <p>
            Koe rentouttavan saunan lämpö missä ja milloin haluat! <br />
            </p>
            <button></button>
          </div>
          </Col>
        </Col>
      </Row>
      
      <Container className=''>
      <Col className='divider'>
      <hr className='rounded' />
      </Col>
    
      <Row className="justify-content-center mb-5">
      <Col className='mb-5'>
         <MyGallery></MyGallery>
        </Col>
       <Col md={5} className='saunaInformation-text mb-5'>
        {product.description}
        {product.priceInformation}                
          </Col>
      </Row>


      <Row className='mb-5'>
      <Col  sm={5} className='mb-5'>
        <div className='section3'>
        <h3>Kiinnostaako saunan vuokraus?</h3>
        <br />
        <p>
        Täytä yhteydenottolomake, 
        niin otamme sinuun yhteyttä mahdollisimman pian. 
        Tarjoamme saunan vuokrauspalvelua rentouttaviin 
        hetkiin luonnon helmassa.
        </p>
        <p>
        Olipa kyseessä sitten erityistapahtuma, viikonloppureissu tai 
        pidempi loma, saunamme tarjoaa erinomaiset puitteet rentoutumiseen.
        </p>
        </div>
        </Col>
        <Col >
        <ContactForm></ContactForm>
        </Col>
      </Row>
  </Container>
  </Container>
  );
}

export default sauna;
