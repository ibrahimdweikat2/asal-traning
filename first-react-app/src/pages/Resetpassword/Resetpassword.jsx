import React,{useState} from 'react'
import {HeaderPages} from '../../components';
import { Link } from 'react-router-dom';
const Resetpassword = () => {
    const [formData,setFormData]=useState({
        email:'',
        password:'',
      });
      const changeHandler=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
      }
  return (
    <>
      <HeaderPages title={'Account'}/>
      <div className='login'>
        <div className="login-form">
          <form className='form-login'>
            <h1>Reset your password</h1>
            <p>We will send you an email to reset your password</p>
            <div className="form-email">
              <input type="email" name="email" id="Email" required value={formData?.email} onChange={changeHandler}/>
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form-bottom">
              <button>Submit</button>
            </div>
            <div className="cancel-bottom">
                <Link aria-label='sgG login' to='/login' className='link'>
                    <button>Cancel</button>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Resetpassword