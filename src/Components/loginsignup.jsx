import React from 'react'
import './loginSignup.css'
import { useState } from 'react'
import user_id from  '../Assests/user.png'
import mail_id from  '../Assests/email.png'
import pwd  from  '../Assests/lock.png'


export default function Loginsignup() {
  const[action,setAction]=useState("Login");
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
                <div className="underline"></div>
        </div>
        <div className="inputs">
          {(action==="Login"?<div></div>:<div className="input">
            <img src={user_id} alt="" height="20px" width="20px"/>
            <input type="text" name="text" placeholder='Name'/>
           </div>)}
           <div className="input">
            <img src={mail_id} alt="" height="20px" width="20px"/>
            <input type="email" name="email" placeholder='Email Id'/>
           </div>
           <div className="input">
            <img src={pwd} alt="" height="20px" width="20px"/>
            <input type="password" name="password" placeholder='Password'/>
           </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
        <div className="submit-container">
          <div className={action==="Login"?"submit active":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit active":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}