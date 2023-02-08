import React, { useState } from 'react'
import styles from '../Login/Login.module.css'
import InputForm from '../InputForm/InputForm'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
export default function Login() {
  const [values,setValues]=useState({
    email:"",
    pass:""
  })
  const navigate=useNavigate()
  const [errorMsg,seterrorMsg]=useState("")
  const [submitBtnDisabled,setSubmitBtnDisabled]=useState(false)
  const handleSubmission=()=>{
    if(!values.email || !values.pass){
      seterrorMsg("Fill Alll Feilds")
      return;
    }
    signInWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
      navigate("/Todo")
    }).catch((err)=>{
      setSubmitBtnDisabled(false)
      seterrorMsg(err.message)
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputForm label="Email" type="email" placeholder="Enter Your Email" onChange={(e)=>{setValues((prev)=>({...prev,email:e.target.value}))}}/>
        <InputForm label="Password" type="password" placeholder="Enter Your Password" onChange={(e)=>{setValues((prev)=>({...prev,pass:e.target.value}))}}/>
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitBtnDisabled}>Login</button>
          <p>Don't Have an Account?
          <span>
            <Link to='/SignUp'>SignUp</Link>
          </span>
          </p>
        </div>

      </div>

    </div>
  )
}
