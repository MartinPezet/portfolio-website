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
    <>
      <a href={config.personalLinks.github} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="tech-icon hover:text-[#4078c0]" icon={faGithub}/>
      </a>
      <a href={config.personalLinks.linkedIn} target="_blank" rel="noreferrer">
      <FontAwesomeIcon className="tech-icon hover:text-[#0077B5]" icon={faLinkedin}/>
      </a>
    </>
  )

  // TODO: When scrolled past the navbar the navbar will drop down like an apple notch bar

  return (
    <div className="sticky top-4 z-10 flex justify-center">
      <nav className="relative flex flex-row items-center justify-between w-full gap-4 sm:gap-12 mx-4 my-4 max-w-7xl py-4 px-4 sm:px-8 rounded-xl bg-primary-950 bg-opacity-50" id="navbar">
        {/* TODO Remove opacity and make logo smaller once scrolled */}
        <div className="cursor-pointer flex justify-center items-center" onClick={() => onInternalNavigationClick('home')}>
          <p className="title-font logo fugaz">M</p>
        </div>
        <div className="flex flex-row text-xl font-semibold gap-8 sm:gap-12 max-md:hidden">
          <Menu />
        </div>
        <div className="flex flex-row items-center gap-8 max-xs:hidden">
          <SocialsNav/>
        </div>
        <div className="md:hidden navBarMobMenu">
          {toggleMobMenu}
          {toggleMobMenu && (
            <div className="absolute flex flex-col justify-center w-11/12 bg-primary-950 p-8 top-full left-2/4 translate-x-[-50%] rounded-b-xl gap-4"> {/* Change scaleUpCenter to scroll from top animation */}
              <div className="flex flex-col text-right gap-4">
                <Menu />
                <div className="flex flex-col xs:hidden">
                  <SocialsNav/>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;