import React from 'react';
// import { Popup, SignUp, SignIn } from '../';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import './navbar.css';
import { ReactComponent as Logo } from '../../assets/logo-full-white.svg'

// Mobile Nav Dependencies
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import {scrollToId} from '../../utils/pageHelpers';

const Navbar: React.FC = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState<boolean>(false);

  const { user } = useUser();

  const Logout = () => {
    // setUser({});
    try {
      if (!process.env?.REACT_APP_SSO_API_BASE_URI) throw new Error("Env not loaded")
      window.open((process.env.REACT_APP_SSO_API_BASE_URI + '/auth/logout'), '_self');
    } catch (err) {
      console.error(err);
    }
  }

  const onInternalNavigationClick = (id: string): void => {
    setToggleMobMenu(false);
    scrollToId(id); // TODO: Fix id's not navigating on /sign-in page
  };

  const Menu: React.FC = () => (
    <>
      <p className="scaleOnHover"><button onClick={() => onInternalNavigationClick('about-me')}>About Me</button></p> 
      <p className="scaleOnHover"><button onClick={() => onInternalNavigationClick('experience')}>Experience</button></p> 
      <p className="scaleOnHover"><button onClick={() => onInternalNavigationClick('projects')}>Projects</button></p>
    </>
  )

  const isAuth = () => {
    return Object.keys(user)?.length === 0;
  }

  const SignInNav = () => (
    <>
      {isAuth() ? 
      <button className="scaleOnHover">
        <Link to='/sign-in'>
          Sign In
        </Link>
      </button> 
      :
      <div className="navbarSignedIn">
        <p>Hi {user.displayName}</p>
        <button className="scaleOnHover" onClick={Logout}>
          Logout
        </button>
      </div>}
    </>
  )

  return (
    <section className="navBar" id="navbar">

      <div className="navBarLinks">
        <div className="navBarLogo cursor-pointer" onClick={() => onInternalNavigationClick('home')}>
          <Logo></Logo>
        </div>
        <div className="navBarLinksContainer">
        {/* Add scaleUpCenter where needed */}
          <Menu />
        </div>
      </div>
      <div className="navBarSignIn">
        <SignInNav />
      </div>
      <div className="navBarMobMenu">
        {toggleMobMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMobMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMobMenu(true)} />
        }
        {toggleMobMenu && (
           <div className='navBarMobMenuContainer scaleUpCenter'> {/* Change scaleUpCenter to scroll from top animation */}
            <div className='navBarMobMenuContainerLinks'>
              <Menu />
              <div className='navBarMobMenuContainerLinksSignIn'>
                <SignInNav />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Navbar;