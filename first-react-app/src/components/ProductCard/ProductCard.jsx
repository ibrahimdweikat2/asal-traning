import React,{useEffect} from 'react'
import './ProductCard.css';
import {addToCart,updateIncementCartItem} from '../../action/index';
import {useDispatch,useSelector} from 'react-redux'
import {ShowNotification} from '../../components';
const ProductCard = ({name,imageUrl,price,className=''}) => {
  const dispatch=useDispatch();
  let user=JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    user=JSON.parse(localStorage.getItem('user'));
  },[user]);
  const cartProduct=useSelector(state=>state.Cart);
  const addCart=()=>{
    const product={name,imageUrl,price}
    const foundCard=cartProduct.filter(cardItem=>cardItem?.name===product?.name);
    if(foundCard.length > 0){
      dispatch(updateIncementCartItem(foundCard[0]));
      ShowNotification("Added product");
    }else{
      dispatch(addToCart(product,user.userId));
      ShowNotification("Added product");
    }
  }
  return (
    <div className={`product-list ${className}`}>
        <div className={`product-image`} id={className}>
            <img src={imageUrl} alt={name} />
        </div>
        <div className={`product-info ${className}`}>
          <h2>{name}</h2>
          <div className="product-star"></div>
          <p className={`block-p ${className}`}>${price}</p>
          <button onClick={user&& addCart} className={className}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductCard