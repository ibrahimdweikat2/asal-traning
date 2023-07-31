import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './Shipping.css';
const TAX=0.04;
const Shipping = () => {
    const cardProduct=useSelector(state=>state.Cart);
    const total=cardProduct.reduce((prev,curr)=>{
      return prev+(curr?.price*curr?.quantity);
    },0);
    const totalWithTAX=total+((total*TAX));
  return (
    <div className='order-container'>
      <div className="order-left">
        <div className="order-header">
          <div className="header-info">
            <div className="images-header-cover">
              <img src="https://groca.myshopify.com/cdn/shop/files/logo.png?v=1614918881&width=250" alt="*" />
            </div>
            <div className="mobile-cart-info">
              <span>total</span>
              <span>{totalWithTAX.toFixed(2)}</span>
            </div>
            <div className="headers-details">
              <span><Link to='/cart' className='link'>Cart</Link></span>
              <span><Link to={'/order'} className='link'>Information</Link></span>
              <span>Shipping</span>
              <span>Payment</span>
            </div>
          </div>
        </div>
        <div className="order-info-show form-control">
            <div className="show-contact">
                <span>Contact</span>
                <span>ibrahim@gmail.com</span>
                <span><Link to={'/order'} className='link'>change</Link></span>
            </div>
            <div className="show-address">
                <span>Skip to</span>
                <span>palestine, palestine, 400 Nablus, Palestinian Territories</span>
                <span><Link to={'/order'} className='link'>change</Link></span>
            </div>
        </div>
        <div className="shipping-method">
            <h6>shipping method</h6>
            <div className="method-show form-control">
                <span>Stander</span>
                <span>.{(total*TAX).toFixed(2)}</span>
            </div>
        </div>
        <div className="top-button">
            <span><Link to={'/order'} className='link'>return to information</Link></span>
            <Link to={'/payment'} className='link'>
                <button>Continue To Payment</button>
            </Link>
            </div>
      </div>
      <div className="order-right">
        <div className="order-right-top">
          {
            cardProduct.map(item=>(
              <div key={item?.id} className="item-show">
                <div className="item-show-left">
                  <div className="item-show-img">
                    <div className="item-show-quantity">
                      <span>{item?.quantity}</span>
                    </div>
                    <img src={item?.imageUrl} alt="*" />
                  </div>
                  <div className="show-info">
                    <h4>{item?.name}</h4>
                    <span>1kg/{item?.Flavour}/{item?.RichIn}</span>
                  </div>
                </div>
                <div className="item-show-right">${(item?.price*item?.quantity).toFixed(2)}</div>
              </div>
            ))
          }
        </div>
        <div className="order-right-bottom">
          <div className="order-subtotal">
            <p>subtotal</p>
            <strong>${total}</strong>
          </div>
          <div className="order-shipping">
            <p>shipping</p>
            <p>${(total*TAX).toFixed(2)}</p>
          </div>
          <div className="order-total">
            <h1>Total</h1>
            <p><span>USD</span><strong>{totalWithTAX.toFixed(2)}</strong></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shipping