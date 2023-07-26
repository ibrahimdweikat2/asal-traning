import React from 'react'
import './Organic.css';
const Organic = () => {
  return (
    <div className='organic-container'>
        <img className='cover' src="https://groca.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614918563" alt="images" />
        <div className="organic-info">
            <img src="https://groca.myshopify.com/cdn/shop/files/slider-icon.png?v=1614918596&width=80" alt="icon" />
            <h2>100% Healthy & Affordable</h2>
            <h1>Organic Vegetables</h1>
            <h2>Small Changes Big Difference</h2>
            <button>Shop Now</button>
        </div>
    </div>
  )
}

export default Organic