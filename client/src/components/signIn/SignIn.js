import React from 'react';

import './signIn.css';

const SignIn = () => {

  const [userInfo, setUserInfo] = React.useState('');

  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true
    }
  };

  const google = () => {
    window.open('http://localhost:3001/oauth/google', '_self');
  };

  const GetUser = () => {
    fetch('http://localhost:3001/oauth/login/success', config).then(res => { // ++++++++++++++++++++++++ CHANGE TO AXIOS ++++++++++++++++++++++++
      if (res.status === 200) return res.json()
    }).then(resObj => {
      setUserInfo(resObj.user.name.givenName)
      console.log(resObj.user.name)
    }).catch(err => console.log(err)
    );
  };

  return (
    <section>
      <div className="signInTitle popupTitle">
        <h1 className="gradientText">Sign In</h1>
      </div>

      <button onClick={google}>Google</button>

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