import React from 'react';
import './signIn.css';

const SignIn: React.FC = () => {

  const google = () => {
    try {
      if (!process.env?.REACT_APP_SSO_API_BASE_URI) throw new Error("Env not loaded")
      window.open((process.env.REACT_APP_SSO_API_BASE_URI + '/auth/google'), '_self');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="signInContainer">
      <div>
        <div className="signInTitle">
          <h1 className="gradientText">Sign In</h1>
          <p>Sign in with any of your favourite OAuth providers.</p>
        </div>

        <div className="signInButtonContainer">
          <button className="google signInButton scaleOnHover" onClick={google}>
            <img className='googleImg' alt="Google Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
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
      </div>
    </section>
  )
}

export default SignIn