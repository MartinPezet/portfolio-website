import React from 'react';
// import { Popup, SignUp, SignIn } from '../';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

import './navbar.css';

// Mobile Nav Dependencies
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

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

  const Menu: React.FC = () => (
    <>
      <p className="scaleOnHover"><a href='/#home' onClick={() => setToggleMobMenu(false)}>Home</a></p>
      <p className="scaleOnHover"><a href='/#about-me' onClick={() => setToggleMobMenu(false)}>About Me</a></p> 
      <p className="scaleOnHover"><a href='/#website-features' onClick={() => setToggleMobMenu(false)}>Website Features</a></p> {/* Features of my website */}
      <p className="scaleOnHover"><a href='/#projects' onClick={() => setToggleMobMenu(false)}>Projects</a></p>
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
        <div className="navBarLogo">
          <svg viewBox="0 0 225 45" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
              <text dx="0" dy="0" fill="#fff" fontSize="36px" transform="translate(0 37.422621)">
                  <tspan y="0" fontWeight="700" strokeWidth="0">Martin Pezet</tspan>
              </text>
          </svg>
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