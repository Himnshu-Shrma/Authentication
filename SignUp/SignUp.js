import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import InputForm from '../InputForm/InputForm'
import './SignUp.css'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default function SignUp() {
  const [submitBtnDisabled,setSubmitBtnDisabled]=useState(false)
  const [values,setValues]=useState({
    name:"",
    email:"",
    pass:""
  })
  const [errorMsg,seterrorMsg]=useState()
  const HandleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
        seterrorMsg("Fill Alll Feildser")
        return;
    }
    seterrorMsg("LoggedIn Succesfully, Go to Login Page")
    setSubmitBtnDisabled(true)
    createUserWithEmailAndPassword(auth,values.email,values.pass).then((user)=>{
      updateProfile(user,{
        displayName:values.name
      })
      Navigate("/Login")
    })
}

  return (
    <div className="container">
      <div className="innerBox">
        <h1 className="heading">SignUp</h1>
        <InputForm label="Name" type="text" placeholder="Enter Your Name" onChange={(e)=>{setValues((prev)=>({...prev,name:e.target.value}))}}/>
        <InputForm label="Email" type="email" placeholder="Enter Your Email" onChange={(e)=>{setValues((prev)=>({...prev,email:e.target.value}))}}/>
        <InputForm label="Password" type="password" placeholder="Enter Your Password" onChange={(e)=>{setValues((prev)=>({...prev,pass:e.target.value}))}}/>
        <div className="footer">
          <b className="error">{errorMsg}</b>
          <button onClick={HandleSubmission} disabled={submitBtnDisabled}>SignUp</button>
          <p>Already Have an Account?
          <span>
            <Link to='/Login'>Login</Link>
          </span>
          </p>
        </div>

      </div>

    </div>
  )
}
