import React from 'react'

import './navbar.css';

// Mobile Nav Dependencies
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState(false);

  const Menu = () => (
    <>
      <p><a href='#home' onClick={() => setToggleMobMenu(false)}>Home</a></p>
      <p><a href='#about-me' onClick={() => setToggleMobMenu(false)}>About Me</a></p> 
      <p><a href='#website-features' onClick={() => setToggleMobMenu(false)}>Website Features</a></p> {/* Features of my website */}
      <p><a href='#projects' onClick={() => setToggleMobMenu(false)}>Projects</a></p>
    </>
  )

  const SignIn = () => (
    <>
      <p>Sign In Coming Soon</p>
      {/* <p>Sign In</p>
      <button>Register</button> */}
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
        <SignIn />
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