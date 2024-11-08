import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';
import Image from 'react-bootstrap/Image';
import '../App.css'

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  return (
    <div className='content'>
      <h1>{product.name}</h1>
      <Image src={product.img} alt={product.name} fluid/>
      <ContactForm/>
    </div>
  );
}

export default ProductDetail;
