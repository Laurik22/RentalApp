import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import Carousel from 'react-bootstrap/Carousel';
import {Card, Container, Row, Col, CardBody } from 'react-bootstrap';
import '../App.css';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <Container fluid className="mb-5" >
      <Row className="justify-content-center">
        <Col className='mb-5' md={10}>
          <h1>{product.name}</h1>
          <Carousel slide={false} interval={null} style={{
          }}>
            {product.images.map((img, index) => (
              <Carousel.Item key={index} >
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`${product.name} image ${index + 1}`}
                  style={{ maxWidth:'600px', maxHeight: '500px', objectFit: 'cover',maxWidth: '100%' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Row className="justifSy-content-center">
        <Col>
        <Card>
            <CardBody style={{display:'inline', textAlign:'start'}}>
              <Card.Title>Ominaisuudet</Card.Title>
              {product.description}

            </CardBody>
        </Card>
        </Col>
        </Row>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
    
  );
}

export default ProductDetail;
