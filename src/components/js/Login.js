import React from 'react'
import "../css/login.css"

const Login = () => {

    const loginwithgoogle = ()=>{
        window.open("http://localhost:1997/auth/google/callback","_self")
    }

    return (
        <div className="login-page">
          <h3 className="login-heading">Sign in to SocialScribe</h3>
          <div className="form">
            <button className='login-with-google-btn' onClick={loginwithgoogle}>
              Sign In With Google
            </button>
          </div>
          <a className="return-homepage" href="/">Return to Homepage</a>
        </div>
      );
}

export default Login