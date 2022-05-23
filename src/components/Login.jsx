import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

    const [email,setEmail]  = useState("")
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault()
        
    }
    const register = () => {
        
    }
  return (
      <div className='login'>
          <Link to='/'>
          {/* <img className='logonLogo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" /> */}
          <img className='logonLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="Logo" />
          </Link>

          <div className="loginContainer">
              <h1>Sign-in</h1>
              <form >
                  <input type="text" placeholder='E-mail' value={email} onChange = { e => setEmail( e.target.value)} />
                  <input type="password" placeholder='Password' value={password} onChange = { e => setPassword(e.target.value)} />
                  <button onClick={signIn}>Sign-In</button>
              </form>

            <p>
                By signing-in you agree to the AMAZON FAKE
                CLONE Conditions of Use & Sale.Please
                see our Privacy Notice,our Cookies Notice
                and our Interest-Based Ads Notice.
              </p>
              
              <button onClick={register} className='loginRegisterBtn'>Create your Amazon account</button>

          </div>
    </div>
  )
}

export default Login