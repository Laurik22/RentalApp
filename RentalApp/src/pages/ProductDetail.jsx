import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import Carousel from 'react-bootstrap/Carousel';
import {Card, Container, Row, Col, CardBody } from 'react-bootstrap';


function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  return (
    <Container>
        <Col className='mb-5' >
          <h1>{product.name}</h1>
          <Carousel slide={false} interval={null}>
            {product.images.map((img, index) => (
              <Carousel.Item key={index} >
                <img
                  className="d-block w-100"
                  src={img}
                  style={{ marginTop:'20px', maxHeight: '600px', objectFit: 'cover',maxWidth: '100%' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Row className="justify-content-center">
        <Col md='5'className='d-flex' >
        <Card className='mb-5 h-80 '>
            <CardBody style={{textAlign:'start'}}>
              <Card.Title>Ominaisuudet</Card.Title>
              {product.description}
            </CardBody>
        </Card>
        </Col>
        <Col md='5' className='d-flex'>
        <Card className='mb-5 h-80'>
            <CardBody style={{textAlign:'start' }}>
              <Card.Title>Hinnasto</Card.Title>
              {product.priceInformation}
            </CardBody>
        </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
