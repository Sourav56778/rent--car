import React from 'react'
import "./Login.css"
import { useState } from 'react'
import axios from "axios"
function Login({setshowlogin,token,settoken}) {
 const[currstate,setcurrstate]=useState("Login")
 const[data,setdata]=useState({
  name:"",
  email:"",
  password:"" 
})
const onchnagehandeler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setdata(data=>({...data,[name]:value}))
}

const url="http://localhost:4000"


const onlogin = async (e) => {
  e.preventDefault()
  let newurl = url;
  if (currstate === "Login") {
    newurl += "/api/user/login";
  } else {
    newurl += "/api/user/register";
  }

  try {
    const response = await axios.post(newurl, data);
    console.log("Response data:", response.data); // Debugging line
    
    if (response.data.success) {
      settoken(response.data.token); // Update token state
      localStorage.setItem("token", response.data.token); // Store token
      setshowlogin(false); // Hide the login modal
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Login/Register error:", error);
  }
};



  return (
    <div>
     <div className='login-popup'>
     <form onSubmit={onlogin} className='login-container'>
      <div className='login-popup-display'>
       <h2>{currstate}</h2>
       <i onClick={()=>setshowlogin(false)} class="fa-solid fa-x"></i>
      </div>
      <div className='loginpopup-input'>
      {currstate==="Login"?<></>:<input name='name' onChange={onchnagehandeler} value={data.name} type='text' placeholder='Your name' required />}
       
       <input name='email' onChange={onchnagehandeler} value={data.email} type='email' placeholder='Your email' required/>
       <input name='password' onChange={onchnagehandeler} value={data.password} type='password' placeholder='Your password' required/>

      </div>
      <button type='submit'>{currstate==="Signup"?"Create account":"Login"}</button>
      <div className='login-popup-condition'>
       <input type='checkbox' required/>
       <p>By continuing , i agree to the terms of use & privacy policy</p>
      </div>
      {currstate==="Signup"?<p>Already have a account?<span onClick={()=>setcurrstate("Login")}>Login here</span></p>:<p>Create a new account?<span onClick={()=>setcurrstate("Signup")}>Click here</span></p>}
      
      
     </form>
    </div> 
    </div>
  )
}

export default Login