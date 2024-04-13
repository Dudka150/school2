import React from 'react';
import './App.css';

function ProductCard({ imageUrl, name }) {
  return (
    <div className="product-card">
      <div className="product-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="product-details">
        <div className="product-name">{name}</div>
      </div>
    </div>
  );
}

export default ProductCard;