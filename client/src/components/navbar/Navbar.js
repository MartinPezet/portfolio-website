import React from 'react'

import './navbar.css';
import logo from '../../assets/logo.svg';

// Mobile Nav Dependencies
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#whatGPT'>What is GPT?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState(false);

  return (
    <section className="navBar">
      <div className="navBarLinks">
        <div className="navBarLogo">
          <img src={logo} alt="Logo"/>
        </div>
        <div className="navBarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="navBarSignIn">
        <p>Sign In Coming Soon</p>
        { /*
        <p>Sign In</p>
        <button>Register</button>
        */ }
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
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Navbar