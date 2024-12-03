import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Formcomponent.module.css'

function Formcomponent() {
  const [islogin,setIslogin] = useState(false);
  const [formdata, setFormdata] = useState({
    name:"",
    phonenumber:"",
    email:"",
    password:"",
}); 
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const cleardata = ()=>{setFormdata({
  name:"",
  phonenumber:"",
  email:"",
  password:"",})}
const handlechange = (e)=>{
  setFormdata({
...formdata,
[e.target.name]: e.target.value,
});
  setErrors({
      ...errors,
      [e.target.name]:'',
  })
}
// console.log(islogin)
const submmited = async(e)=>{
  e.preventDefault();
  if(!islogin){
      const {email, password} = formdata;
      const loginData = {email, password};
      try {
          const response = await axios.post('http://localhost:5000/users/login', loginData);
          if(response.status==200){ 
              const token = localStorage.setItem('token', response.data.token);
              cleardata()
              navigate("/")
              console.log(loginData);
            };
      } catch (error) {
          if (error.response && error.response.data.error) {
              setErrors(error.response.data.error);
          } else {
              setErrors({ server: 'An unexpected error occurred.' });
          }
          console.log(errors)
      }
  }else{
      try {
          const response = await axios.post('http://localhost:5000/users/register', formdata);
          
          console.log(response.data.message);
          if(response.status==201){ 
            //   const token = localStorage.setItem('token', response.data.token);
              setIslogin(false);
            };
          setErrors({})
      } catch (error) {
          if (error.response && error.response.data.error) {
              setErrors(error.response.data.error);
             
          } else {
              setErrors({ server: 'An unexpected error occurred.' });
          }
          // console.log(errors)
      }
  }
}

  return (
    <div className={styles.container}>
        
        <form  >
        <img
                src="https://res.cloudinary.com/diuif9frr/image/upload/v1732687317/food%20delivery/logo1.png"
                alt="Logo 2"
                className={`${styles.logo}`}
              />
        <h2>Welcome Back  👋</h2>
        <p>Today is a new day. It's your day. You shape it.
        Sign in to start ordering.</p>
            {islogin && 
            <>
            <div className={styles.formbox} >
                <label>Name</label>
                <input type='text' name='name' placeholder='eg. John A' value={formdata.name} onChange={handlechange} />
            </div>
            <div className={styles.formbox} >
                <label>Phone Number</label>
                <input type='tel' name='phonenumber' placeholder='Enter your 10 digit mobile number' value={formdata.phonenumber} onChange={handlechange} />
            </div>
            </>
            }
            <div className={styles.formbox} >
                <label>Email</label>
                <input type='email' name='email' placeholder='Example@email.com' value={formdata.email} onChange={handlechange}/>
            </div>
            <div className={styles.formbox} >
                <label>Password</label>
                <input type='text' name='password' placeholder='At least 8 characters' value={formdata.password} onChange={handlechange} />
            </div>
            <button type='submit' onClick={submmited} >{islogin ? "Sign Up" : "Sign in"}</button>
            <p className={styles.span}>Don't you have an account? <spam className={styles.spam} onClick={()=>{setIslogin(!islogin,cleardata())}}>{islogin ? "Sign in" : "Sign Up"}</spam></p>
        </form>
    </div>
  )
}

export default Formcomponent;