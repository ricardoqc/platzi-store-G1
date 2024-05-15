// ProductCard.jsx
import React from 'react';

const ProductCard = ({ imageUrl, price, name, iconUrl }) => {
    return (
      <div className="product-card">
        <img src={imageUrl} alt={name} />
        <div className="product-info">
          <div>
            <p>{price}</p>
            <p>{name}</p>
          </div>
          <figure>
            <img src={iconUrl} alt="Add to cart" />
          </figure>
        </div>
      </div>
  );
};

export default ProductCard;
