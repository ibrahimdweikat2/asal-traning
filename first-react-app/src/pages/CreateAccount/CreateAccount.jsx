import React,{useState} from 'react'
import {HeaderPages} from '../../components';
import {auth,db} from '../../utils/firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import CryptoJS from 'crypto-js';
import {useNavigate} from 'react-router-dom';

const CreateAccount = () => {
    const navigation=useNavigate();
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        firstName:'',
        lastName:'',
      });
      const [isLoading,setIsLoading]=useState(false);
      const [error,setError]=useState('');
    const changeHandler=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const submitHandler=async e=>{
        e.preventDefault();
        try {
            setIsLoading(true);
            if(formData?.email!=='' && formData?.password!==''&& formData?.firstName!=='' && formData?.lastName!==''){
                const res=await createUserWithEmailAndPassword(auth,formData?.email,formData?.password);
                const hashPass=CryptoJS.AES.encrypt(formData?.password,"base64");
                await setDoc(doc(db,'users',res?.user?.uid),{
                    username:`${formData?.firstName} ${formData?.lastName}`,
                    email:formData?.email,
                    password:hashPass.toString()
                });
            }
            setIsLoading(false);
            navigation('/login');
        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <>
        <HeaderPages title={'Create Account'}/>
        <div className="login">
            <div className="login-form">
                <form onSubmit={submitHandler}  className="form-login">
                    <h1>Create Account</h1>
                    <p>{error!=='' && error}</p>
                    <div className="form-email">
                        <input type="text" name="firstName" id="firstName" required value={formData?.firstName} onChange={changeHandler}/>
                        <label htmlFor="firstName">firstName</label>
                    </div>
                    <div className="form-email">
                        <input type="text" name="lastName" id="lastName" required value={formData?.lastName} onChange={changeHandler}/>
                        <label htmlFor="lastName">lastName</label>
                    </div>
                    <div className="form-email">
                        <input type="email" name="email" id="Email" required value={formData?.email} onChange={changeHandler}/>
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div className="form-password">
                        <input type="password" name="password" id="Password" required value={formData?.password} onChange={changeHandler}/>
                        <label htmlFor="Password">Password</label>
                    </div>
                    <div className="form-bottom">
                        <button type='submit' disabled={isLoading? true:false}>{isLoading ? (
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only"></span>
                            </div>
                        ):'Create'}</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default CreateAccount