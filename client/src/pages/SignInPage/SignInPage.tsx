import React, {useEffect} from 'react';
import { Navbar, SignIn } from '../../components';
import './SignInPage.css';

const SignInPage: React.FC = () => {

  useEffect(() => {
    document.title = 'Sign In | Martin Pezet';
  }, []);

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