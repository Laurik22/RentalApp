import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import { Card, Container, Row, Col, CardBody} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import MyGallery from "../components/MyGallery";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [images, setImages] = useState();
  

  useEffect(() => {
    const p = products.find((p) => p.id === productId);
    if (p) {
      setProduct(p);

      const formattedImages = p.images.map((img) => ({
        original: img,
        thumbnail: img,
      }));
      setImages(formattedImages);
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
          <MyGallery images={images}/>
        </Col>
      </Row>
      <Row className="justify-content-center">
       <Col md={5} className='d-flex'>
         <Card className='mb-5 text-center shadow'border='light'>
                <CardBody style={{ textAlign: 'start' }}>
                {product.description}
                </CardBody>
              </Card>
            </Col>
            <Col md={5} className='d-flex'>
              <Card className='mb-5 text-center shadow'border='light'>
                <CardBody style={{ textAlign: 'start' }}>
                  {product.priceInformation}
                </CardBody>
              </Card>     
            </Col>     
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
