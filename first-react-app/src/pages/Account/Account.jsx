import React from 'react'
import './Account.css';
import {HeaderPages} from '../../components'
import {BiSolidUser} from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
const Account = () => {
  const navigation=useNavigate();
  const dispatch=useDispatch();
  const userSignOut=()=>{
    dispatch({type:'sign-out'});
    navigation('/');
  }
  return (
    <div>
      <HeaderPages title={"Account"}/>
      <div className="account-details">
        <div className="account-header" onClick={userSignOut}>
          <h1>Account</h1>
          <p><BiSolidUser className='account-icon'/> <span>Log Out</span></p>
        </div>
        <div className="account-order">
          <div className="account-order-history">
            <h6>Order history</h6>
          </div>
          <div className="account-address-details">
            <h6>Account details</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account