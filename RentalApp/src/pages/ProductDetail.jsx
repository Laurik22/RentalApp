import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ContactForm from '../components/ContactForm';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <p>Tuotetta ei löydy.</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Hinta: {product.price}€</p>
      <ContactForm/>
    </div>
  );
}

export default ProductDetail;
