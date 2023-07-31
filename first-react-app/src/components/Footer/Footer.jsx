import React from 'react'
import './Footer.css';
import {FaPhoneAlt,FaFacebookSquare
        ,FaTwitter,FaPinterest,FaInstagram
      , FaCcMastercard,FaCcPaypal,FaCcDiscover} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md';
import {ImLocation} from "react-icons/im";
import {RiVisaFill} from 'react-icons/ri';
import {LiaCcAmex} from 'react-icons/lia';
const Footer = () => {
  return (
    <div className='footer'>
        {/* <img className='footer-cover' src="https://groca.myshopify.com/cdn/shop/files/footer.jpg?v=1614918967&width=1500" alt="Footer" /> */}
        <div className="footer-content">
          <div className="footer-block-wrapper">
            <div className="footer-block-temp">
              <img src="https://groca.myshopify.com/cdn/shop/files/logo-footer.png?v=1614918638" alt="shop" />
              <div className="block-temp-info">
                <div className="address">
                  <ImLocation className='footer-icon'/>
                  <p>No: 58 A, East Madison <br />Street, Baltimore, MD,<br /> USA 4508</p>
                </div>
                <div className="footer-phone">
                  <FaPhoneAlt className='footer-icon'/>
                  <p>423-845-6570</p>
                </div>
                <div className="footer-mail">
                  <MdEmail className='footer-icon'/>
                  <p>random@email.com</p>
                </div>
              </div>
              <div className="block-temp-social">
                <FaTwitter className='social-icon'/>
                <FaFacebookSquare className='social-icon'/>
                <FaPinterest className='social-icon'/>
                <FaInstagram className='social-icon'/>
              </div>
            </div>
            <div className="footer-block">
              <h1>Help</h1>
              <span>Search</span>
              <span>Help</span>
              <span>Information</span>
              <span>Privacy Policy</span>
              <span>Shipping Information</span>
            </div>
            <div className="footer-block">
              <h1>Support</h1>
              <span>Contact</span>
              <span>About Us</span>
              <span>Carrers</span>
              <span>Refund & Returns</span>
              <span>Deliveries</span>
            </div>
            <div className="footer-block">
              <h1>Information</h1>
              <span>Search Terms</span>
              <span>Advanced Search</span>
              <span>Helps & Faqs</span>
              <span>Store Location</span>
              <span>Orders & Returns</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-details">© 2023, Groca Powered by Shopify</div>
          <div className="footer-payment">
            <RiVisaFill />
            <FaCcMastercard />
            <LiaCcAmex />
            <FaCcPaypal />
            <FaCcDiscover />
          </div>
        </div>
    </div>
  )
}

export default Footer