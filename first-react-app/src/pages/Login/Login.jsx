import {useState} from 'react';
import {HeaderPages} from '../../components';
import './Login.css';
import { Link } from 'react-router-dom';
import {auth,db} from '../../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
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
          const docRef=doc(db,"users",res?.user?.uid);
          const docSnap=await getDoc(docRef);
          if(docSnap.exists()){
            localStorage.setItem('user',JSON.stringify({username:docSnap.data()?.username,
                                                        email:docSnap.data()?.email,
                                                      token:res?.user?.accessToken
                                                    }));
                                                    dispatch({type:'set-user'});
                                                    navigation('/');
          }
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
            <p>{error!== ''&& error.split(':')[1].split(" ")[2].split("/")[1].slice(0,-2)}</p>
            <div className="form-email">
              <input type="email" name="email" id="Email" required value={formData?.email} onChange={changeHandler}/>
              <label htmlFor="Email">Email</label>
            </div>
            <div className="form-password">
            <input type="password" name="password" id="Password" required value={formData?.password} onChange={changeHandler}/>
              <label htmlFor="Password">Password</label>
            </div>
            <div className="form-bottom">
              <button type='submit'>{isLoading ? (
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only"></span>
                </div>
              ):"Sign In"}</button>
            </div>
            <div className="password-change">
              <Link to={'/resetpasswords'} className='link'>
                <span>Forgot Your Password?</span>
              </Link>
              <Link to={'/account/register'} className='link'>
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