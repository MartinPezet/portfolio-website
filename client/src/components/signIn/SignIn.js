import React from 'react';
import axios from 'axios';

import './signIn.css';

const SignIn = () => {

  const [userInfo, setUserInfo] = React.useState('');

  const GetUser = () => {
    console.log("Test")
  
    axios.get('http://localhost:3001/get-session-user').then(res => {
      console.log(res);
      setUserInfo(res);
    }).catch(err => {
      console.log(err);
    })
  };

  return (
    <section>
      <div className="signInTitle popupTitle">
            <h1 className="gradientText">Sign In</h1>
        </div>

        <a href="http://localhost:3001/oauth/google">Google</a>
        
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


          <button onClick={GetUser}>Get User Info</button>
          <p>{userInfo}</p>
          
    </section>
  )
}

export default SignIn