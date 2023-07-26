import React from 'react'
import './Grocery.css';
const Grocery = () => {
  return (
    <div className='Grocery-container'>
        <img className='cover' src="https://groca.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614918563" alt="images" />
        <div className="Grocery-info">
            <p>Natural Health Care Ingredients</p>
            <h1>Grocery Shopping</h1>
            <p>Save upto 30% off</p>
            <button>shop now</button>
        </div>
    </div>
  )
}

export default Grocery