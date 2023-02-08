import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
export default function SideNav(props) {
  const naviagte=useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      naviagte("/")
    })
  }
  return (
    
    <div>
        <span onClick={()=>{props.change("Inbox")}}>
            <a href='#'>Inbox</a>
        </span>
        <span onClick={()=>{props.change("Next7Days")}}>
        <a href='#'>Next7Days</a>
        </span>
        <span onClick={()=>{props.change("Today")}}>
        <a href='#'>Today</a>
        </span>
        <button className='btn btn-secondary' onClick={handleSignOut}>SignOut</button>

    </div>
  )
}
