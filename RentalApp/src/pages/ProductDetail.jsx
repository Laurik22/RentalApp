import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  return (
    <div className='content'>
      <h1>{product.name}</h1>
      <Carousel className="product-carousel">
        {product.images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100" // Make the image responsive
              src={img}
              alt={`${product.name} image ${index + 1}`}
              style={{ maxHeight: '500px', objectFit: 'cover' }} // Adjust height for better viewing
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <ContactForm/>
    </div>
  );
}

export default ProductDetail;
