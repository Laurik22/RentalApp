import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Container, Row, Col, CardBody, Image } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    const p = products.find((p) => p.id === productId);
    if (p) {
      setProduct(p);
      setImages(p.images);
    }
  }, [productId]);

  if (!product || !images?.length) {
    return <div>Loading...</div>;
  }

  const isTrailer = product.id === 'perakarry';

  return (
    <Container>
      <Row>
        <Col className='mb-5'>
          <h1>{product.name}</h1>
          <Carousel slide={false} interval={null} variant='dark'>
            {images.map((img, index) => (
              <Carousel.Item key={index}>
                <Image
                  rounded
                  className=""
                  src={img}
                  style={{
                    marginTop: '2em',
                    maxHeight: '600px',
                    objectFit: 'contain',
                    width: '100%',
                    backgroundColor: '#d5d5d5'
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {isTrailer ? (
          <Col md={10} className="d-flex">
            <Card className='mb-5 w-100'>
              <CardBody style={{ textAlign: 'start' }}>
                <Card.Title>Ominaisuudet</Card.Title>
                {product.description}
                {product.priceInformation}
              </CardBody>
            </Card>
          </Col>
        ) : (
          <>
            <Col md={5} className='d-flex'>
              <Card className='mb-5 w-100'>
                <CardBody style={{ textAlign: 'start' }}>
                  <Card.Title>Ominaisuudet</Card.Title>
                  {product.description}
                </CardBody>
              </Card>
            </Col>
            <Col md={5} className='d-flex'>
              <Card className='mb-5'>
                <CardBody style={{ textAlign: 'start' }}>
                  <Card.Title>Hinnasto</Card.Title>
                  {product.priceInformation}
                </CardBody>
              </Card>
            </Col>
          </>
        )}
      </Row>

      <Row className='mb-5'>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
