import React from 'react'
import './Groca.css';
const Groca = () => {
  return (
    <div className='groca-container'>
        <img className='groca-cover' src="https://groca.myshopify.com/cdn/shop/files/slider-2.jpg?v=1614918563" alt="images" />
        <div className="groca-info">
            <h2>groca</h2>
            <h1>vegetable 100%<br /> organic</h1>
            <p>Natural Health Care Ingredients <br /><span>50% OFF</span></p>
            <div className="groca-button">
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Groca