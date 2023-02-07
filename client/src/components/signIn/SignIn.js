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

        <a href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth%2Fgoogle%2Fcallback&client_id=72317049297-sjq8gu9391e7t2qevnu88fds73q76d0f.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email">Google</a>
        
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