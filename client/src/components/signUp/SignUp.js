import React from 'react';

import './signUp.css';

const SignUp = () => {
  return (
    <section className="signUp">

        <div className="signUpTitle popUpTitle">
            <h1 className="gradientText">Register</h1>
        </div>
        
        <form className="signUpForm">
            <div className="signUpFormContent popUpInput">
                <input type="email" placeholder="Email" autoComplete='email' />
                <input type="password" id="pwd" placeholder="Password" />
                <input type="password" id="confirmPwd" placeholder="Retype Password" />
            </div>
            <div className="signUpFormSubmit">
                <input type="submit" value="Submit" />
            </div>
        </form>

    </section>
  )
}

export default SignUp