import React from 'react'

import './navbar.css';

// Mobile Nav Dependencies
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about-me'>About Me</a></p> 
    <p><a href='#features'>Website Features</a></p> {/* Features of my website */}
    <p><a href='#projects'>Projects</a></p>
  </>
)

const SignIn = () => (
  <>
    <p>Sign In Coming Soon</p>
    {/* <p>Sign In</p>
    <button>Register</button> */}
  </>
)

const Navbar = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState(false);

  return (
    <section className="navBar">
      <div className="navBarLinks">
        <div className="navBarLogo">
          <svg viewBox="0 0 225 45" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
              <text dx="0" dy="0" fill="#fff" fontSize="36px" transform="translate(0 37.422621)">
                  <tspan y="0" fontWeight="700" strokeWidth="0">Martin Pezet</tspan>
              </text>
          </svg>
          {/* <img src={logo} alt="Logo"/> */}
        </div>
        <div className="navBarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="navBarSignIn">
        <SignIn />
      </div>
      <div className="navBarMobMenu">
        {toggleMobMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMobMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMobMenu(true)} />
        }
        {toggleMobMenu && (
          <div className='navBarMobMenuContainer scale-up-center'>
            <div className='navBarMobMenuContainerLinks'>
              <Menu />
              <div className='navBarMobMenuContainerLinksSignIn'>
                <SignIn />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Navbar