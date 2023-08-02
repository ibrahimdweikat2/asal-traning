import React,{useState,useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom';
import {BiSolidUser,BiSolidCart} from 'react-icons/bi';
import {AiOutlineSearch,AiFillHeart,AiOutlineMenu,AiOutlineTwitter,AiOutlineClose} from 'react-icons/ai';
import {BsFacebook,BsPinterest,BsInstagram} from 'react-icons/bs';
import {useSelector} from 'react-redux';
import './NavBar.css';
const NavBar = () => {
  const cartNum=useSelector(state=>state.Cart);
  let user=JSON.parse(localStorage.getItem('user'));
  useEffect(()=>{
    user=JSON.parse(localStorage.getItem('user'));
  },[user]);
  const [isMenuActive,setIsMenuActive]=useState(false);
  const [isCategoriesActive,setIsCategoriesActive]=useState(false);
  
  return (
    <div className="navbar-container">
      <div className='nav-bar'>
        <div className="left-nav-bar">
          <img src="https://groca.myshopify.com/cdn/shop/files/logo.png?v=1614918881&width=250" alt="icon" />
        </div>
        <div className={`center-nav-bar ${isMenuActive ? 'active':''}`}>
            <NavLink to='/' className='link nav-link'>Home</NavLink>
            <NavLink to='/shop' className='link nav-link'>Shop</NavLink>
            <NavLink to='/best-seller' className='link nav-link'>Best Seller</NavLink>
            <NavLink to='/deal' className='link nav-link'>Deal Of The Day</NavLink>
            <NavLink to='/pages' className='link nav-link'>Page</NavLink>
            <NavLink to='/contact' className='link nav-link'>Contact us</NavLink>
            {
              isMenuActive  && <div className='nav-auth'>
                <div className="nav-auth-top">
                  <BiSolidUser className='auth-top-icon'/>
                  <Link to='/login' className='auth-top-login'><span>{user ? 'Account':'log in'}</span></Link>
                </div>
                <div className="nav-auth-bottom">
                  <AiOutlineTwitter className='icon' />
                  <BsFacebook className='icon'/>
                  <BsPinterest className='icon' />
                  <BsInstagram className='icon' />
                </div>
              </div>
            }
        </div>
        <div className="right-nav-bar">
          {
            isMenuActive ? <AiOutlineClose className='menu' onClick={()=>setIsMenuActive(!isMenuActive)}/>:
            <AiOutlineMenu className='menu' onClick={()=>setIsMenuActive(!isMenuActive)}/>
          }
          
          <Link to={user  ? '/account':'/login'}><BiSolidUser className='nav-icon'/></Link>
          <div className="nav-cart">
            <span>{cartNum.length}</span>
            <Link to={user ? '/cart':'/login'}><BiSolidCart className='nav-icon'/></Link>
          </div>
          <Link to='/'><AiFillHeart className='nav-icon'/></Link>
        </div>
      </div>
      <div className="search-navbar">
        <div className="toggle-categories">
          <div className="toggle-button" onClick={()=>setIsCategoriesActive(!isCategoriesActive)}>
            All Categories
          </div>
          <div className={`categories-menu ${isCategoriesActive ? 'active':''}`}>
            <Link to='/' className='link'>Fruits</Link>
            <Link to='/' className='link'>Vegetables</Link>
            <Link to='/' className='link'>Flour</Link>
            <Link to='/' className='link'>Cookies</Link>
            <Link to='/' className='link'>Meat</Link>
          </div>
        </div>
        <div className="search-container">
          <input type="search" name="search" />
          <div className="search-button">
            <AiOutlineSearch  className='search-icon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar