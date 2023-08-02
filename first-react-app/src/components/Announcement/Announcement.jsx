import React from 'react'
import './Announcement.css';
import {AiOutlineMail,AiOutlineTwitter} from 'react-icons/ai';
import {BsTelephoneFill,BsFacebook,BsPinterest,BsInstagram} from 'react-icons/bs';
const Announcement = () => {
  return (
    <div className='Announcement' id='home'>
      <div className="left-Announcement">
        <div className="mail">
          <AiOutlineMail aria-label='announcat link' />
          info@example.com
        </div>
        <div className="telephone">
          <BsTelephoneFill aria-label='announcat link' />
          779-775-7799
        </div>
      </div>
      <div className="right-Announcement">
        <AiOutlineTwitter aria-label='announcat link' className='icon' />
        <BsFacebook aria-label='announcat link' className='icon'/>
        <BsPinterest aria-label='announcat link' className='icon' />
        <BsInstagram aria-label='announcat link' className='icon' />
      </div>
    </div>
  )
}

export default Announcement