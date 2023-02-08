import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link className="link-success" to='/Login'>Login</Link><br/>
      <Link className="link-danger" to='/SignUp'>SignUp</Link><br/>
    </div>
  )
}
