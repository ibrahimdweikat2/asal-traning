import React from 'react';
import {HeaderPages} from '../../components'
import {useSelector} from 'react-redux';
import { AiFillDelete} from 'react-icons/ai';
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = () => {
  const cartProduct=useSelector(state=>state.Cart);
  const total=cartProduct.reduce((prev,curr)=>{
    return prev+(curr?.price*curr?.quantity);
  },0);
  return (
    <>
      <HeaderPages title={'Your Shopping Cart'}/>
      <div className="cart">
        <div className="header-cart">
          <h1>Your cart</h1>
          <p>Continue shopping</p>
        </div>
        <div className="cart-product">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {
                cartProduct.map(item=>(
                  <tr key={item?.id}>
                    <td className='product-details'>
                      <div className="item-img">
                        <img src={item?.imageUrl} alt={item?.ContainerType} />
                      </div>
                      <div className="item-info">
                        <h1>{item?.name}</h1>
                        <span>${item?.price}</span>
                        <span>Container Type:{item?.ContainerType}</span>
                        <span>Flavour:{item?.Flavour}</span>
                        <span>Rich In:{item?.RichIn}</span>
                      </div>
                    </td>
                    <td className='hidden-td'>
                      <div className="quantity-details">
                        <div className="quantity-num">
                          <div className="modyfy-quantity">
                            <span>-</span>
                          </div>
                          <input type="text" name="quantityNumber" value={1} min={0}/>
                          <div className="modyfy-quantity">
                            <span>+</span>
                          </div>
                        </div>
                        <div className="quantity-delete">
                          <AiFillDelete className='delete-icon'/>
                        </div>
                      </div>
                    </td>
                    <td className='hidden-td'>
                      <div className="item-price">
                        ${item?.price}
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="total-checkOut">
            <div className="order-special">
              <p>Order special instructions</p>
              <textarea  cols="45" rows="3"></textarea>
            </div>
            <div className="checkOut">
              <p className='first-checkout'><strong>subTotal</strong> ${total.toFixed(2)} USD</p>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to={'/order'} className='link'><button>Check Out</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart