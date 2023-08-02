import {useState} from 'react';
import {HeaderPages} from '../../components';
import './Login.css';
import { Link } from 'react-router-dom';
import {auth} from '../../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import axios from 'axios';
const Login = () => {
  const dispatch=useDispatch();
  const navigation=useNavigate();
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState('');
  const [formData,setFormData]=useState({
    email:'',
    password:'',
  });
  const changeHandler=e=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const submitHandller=async e=>{
    e.preventDefault();
    try {
      setIsLoading(true);
      if(formData?.email!=='' && formData?.password!==''){
        await signInWithEmailAndPassword(auth,formData?.email,formData?.password).then(async res=>{
          await axios.get('https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/users.json').then(async userData=>{
            const users=Object.values(userData.data);
            const exisitingUser=users.filter(user=>user.userId===res.user.uid);
            if(exisitingUser){
                localStorage.setItem('user',JSON.stringify({username:exisitingUser[0].username,
                                                        email:exisitingUser[0].email,
                                                      token:res?.user?.accessToken,
                                                      userId:res.user.uid
                                                    }));
                                                    dispatch({type:'set-user'});
                                                    navigation('/');
            }
          })
        }).catch(error=>{
          setError(error.message);
        })
      }
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <HeaderPages title={'Account'}/>
      <div className='login'>
        <div className="login-form">
          <form onSubmit={submitHandller} className='form-login'>
            <h1>Login</h1>
            <p>{error !== '' && error.length <39 ?error.split(':')[1].split(" ")[2].split("/")[1].slice(0,-2):error}</p>
            <div className="form-email">
              <input type="email" name="email" id="Email" required value={formData?.email} onChange={changeHandler}/>
              {formData?.email === '' && <label htmlFor="Email">Email</label>}
            </div>
            <div className="form-password">
            <input type="password" name="password" id="Password" required value={formData?.password} onChange={changeHandler}/>
              {formData?.password === '' && <label htmlFor="Password">Password</label>}
            </div>
            <div className="form-bottom">
              <button type='submit'>{isLoading ? (
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only"></span>
                </div>
              ):"Sign In"}</button>
            </div>
            <div className="password-change">
              <Link aria-label='Gg' to={'/resetpasswords'} className='link'>
                <span>Forgot Your Password?</span>
              </Link>
              <Link aria-label='Gg' to={'/account/register'} className='link'>
                <span>Create Account</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login