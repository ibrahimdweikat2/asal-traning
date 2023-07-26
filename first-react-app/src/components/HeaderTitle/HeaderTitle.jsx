import React from 'react'
import './HeaderTitle.css';
const HeaderTitle = ({title,description}) => {
  return (
    <div className='header-title'>
        <div className="mask-div">
            <div className='mask-info'></div>
            <h2>{title}</h2>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default HeaderTitle