import React from 'react'
import './Announcement.css';
import {AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai';
import {BsTelephoneFill,BsFacebook,BsPinterest,BsInstagram} from 'react-icons/bs';
const Announcement = () => {
  return (
    <div className='Announcement' id='home'>
      <div className="left-Announcement">
        <div className="mail">
          <AiOutlineMail />
          info@example.com
        </div>
        <div className="telephone">
          <BsTelephoneFill />
          779-775-7799
        </div>
      </div>
      <div className="right-Announcement">
        <AiOutlineTwitter className='icon' />
        <BsFacebook className='icon'/>
        <BsPinterest className='icon' />
        <BsInstagram className='icon' />
      </div>
    </div>
  )
}

export default Announcement