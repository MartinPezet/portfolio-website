import React from 'react';
import { Navbar, SignIn } from '../../components';
import './SignInPage.css';

const SignInPage: React.FC = () => {
  return (
    <section className='gradientBG fillPage'>
        <Navbar />
        <div>
          <SignIn />
        </div>
    </section>
  )
}

export default SignInPage