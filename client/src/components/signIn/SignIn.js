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
    window.open('http://localhost:3001/auth/google', '_self');
  };

  const GetUser = () => {
    fetch('http://localhost:3001/auth/login/success', config).then(res => { // ++++++++++++++++++++++++ CHANGE TO AXIOS ++++++++++++++++++++++++
      if (res.status === 200) return res.json()
    }).then(resObj => {
      setUserInfo(resObj.user.name)
      console.log(resObj)
    }).catch(err => console.log(err));
  };

  return (
    <section className="signInContainer">
      <div>
        <div className="signInTitle">
          <h1 className="gradientText">Sign In</h1>
          <p>Sign in with any of your favourite OAuth providers.</p>
        </div>

        <div className="signInButtonContainer">
          <button className="google signInButton scaleOnHover" onClick={google}>
            <img className='googleImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
            oogle
          </button>
          <button className="signInButton scaleOnHover">MORE COMING ...</button>
        </div>
        

        {/*  FOR POSSIBLE FUTURE SIGNIN
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
        </form> */}

        <button onClick={GetUser}>Get User Info</button>
        <p>{userInfo}</p>
      </div>
    </section>
  )
}

export default SignIn