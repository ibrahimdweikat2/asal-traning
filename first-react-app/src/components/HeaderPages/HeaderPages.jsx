import React from 'react'
import './HeaderPages.css';
const HeaderPages = ({title}) => {
  return (
    <div className='header-page'>
        <div className="header-details">
            <div className="header-title">{title}</div>
            <div className="header-path">
                <span>Home</span>/{title}
            </div>
        </div>
    </div>
  )
}

export default HeaderPages