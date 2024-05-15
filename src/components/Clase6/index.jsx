import React from 'react';
import './Clase6.css';
import ProductCard from './ProductCard';

export const Clase6 = () => {
  const products = [
    {
      imageUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      price: '$120,00',
      name: 'Bike',
      iconUrl: './icons/bt_add_to_cart.svg'
    },
  ];

  return (
    <>
      <section className="main-container">
        <div className="cards-container">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              price={product.price}
              name={product.name}
              iconUrl={product.iconUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
};