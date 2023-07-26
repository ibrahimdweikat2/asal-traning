import React from 'react'
import './ProductCard.css';
const ProductCard = ({name,imageUrl,price,className=''}) => {
  return (
    <div className={`product-list ${className}`}>
        <div className={`product-image`} id={className}>
            <img src={imageUrl} alt={name} />
        </div>
        <div className={`product-info ${className}`}>
          <h2>{name}</h2>
          <div className="product-star"></div>
          <p className={`block-p ${className}`}>${price}</p>
          <button className={className}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard