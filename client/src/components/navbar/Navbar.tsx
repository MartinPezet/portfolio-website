import React from 'react';

import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import config from "../../utils/global-constants.json";

// Mobile Nav Dependenciestrue,
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import {scrollToId} from '../../utils/pageHelpers';

const Navbar: React.FC = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState<boolean>(false);

  const onInternalNavigationClick = (id: string): void => {
    setToggleMobMenu(false);
    scrollToId(id); // TODO: Fix id's not navigating on /sign-in page
  };

  const Menu: React.FC = () => (
    <>
      <button onClick={() => onInternalNavigationClick('about-me')} className="hover:font-bold">About Me</button>
      <button onClick={() => onInternalNavigationClick('experience')} className="hover:font-bold">Experience</button>
      <button onClick={() => onInternalNavigationClick('projects')} className="hover:font-bold">Projects</button>
    </>
  )

  const SocialsNav: React.FC = () => (
    <div className="flex flex-row items-center gap-8">
      <a href={config.personalLinks.github} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="tech-icon hover:text-[#4078c0]" icon={faGithub}/>
      </a>
      <a href={config.personalLinks.linkedIn} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="tech-icon hover:text-[#0077B5]" icon={faLinkedin}/>
      </a>
    </div>
  )

  // TODO: When scrolled past the navbar the navbar will drop down like an apple notch bar

  return (
    <nav className="sticky top-4 z-10 flex flex-row items-center justify-between max-w-7xl w-100 gap-12 mx-auto py-4 px-8 my-4 rounded-xl bg-primary-950 bg-opacity-50" id="navbar">
      {/* TODO Remove opacity and make logo smaller once scrolled */}
      <div className="cursor-pointer flex justify-center items-center" onClick={() => onInternalNavigationClick('home')}>
        <p className="title-font logo fugaz">M</p>
      </div>
      <div className="flex flex-row text-xl font-semibold sm:gap-8 md:gap-12">
        <Menu />
      </div>
      <div className="navbar-socials">
        <SocialsNav/>
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
                <SocialsNav/>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;