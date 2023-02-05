import React from 'react';
import axios from 'axios';

import './signIn.css';

const SignIn = () => {

  const GoogleOauth = () => {
    console.log("Test")

    // Actually redirect to nodejs server not ann axios call
  
    axios.get('http://localhost:3001/oauth/google').then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err);
      
    })
  };

  return (
    <section>
      <div className="signInTitle popupTitle">
            <h1 className="gradientText">Sign In</h1>
        </div>

        <button onClick={GoogleOauth()}>Google</button>
        
        <form className="signInForm">
            <div className="signInFormContent popupInput">
                <input type="email" placeholder="Email" autoComplete='email' />
                <input type="password" id="pwd" placeholder="Password" />
            </div>
            <div className="signInRegisterLink">
              <p>Don't have an account already? Register link</p>
            </div>
            <div className="signInFormSubmit popupSubmit">
                <button className="scaleOnHover">Sign In</button>
            </div>
          </form>
    </section>
  )
}

export default SignIn