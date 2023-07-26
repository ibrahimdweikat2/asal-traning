import React from 'react'
import './ProductCategories.css';
const ProductCategories = ({name,iconUrl,className,setCategorie}) => {
  return (
    <div className='product-title' onClick={()=>setCategorie(name)}>
      <div className="product-link">
        <div className={`product-mask ${className}`}></div>
        <img src={iconUrl} alt={name} />
        <h2>{name}</h2>
      </div>
    </div>
  )
}

export default ProductCategories