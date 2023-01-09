import React from 'react';

import './signIn.css';

const SignIn = () => {
  return (
    <section>
      <div className="signInTitle popupTitle">
            <h1 className="gradientText">Sign In</h1>
        </div>
        
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