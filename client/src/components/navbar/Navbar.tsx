import React, { useCallback, useEffect } from 'react';

import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Mobile Nav Dependenciestrue,
import { useState } from 'react';
import { scrollToId } from '../../utils/pageHelpers';

const config = require("../../utils/global-constants.json");

const Navbar: React.FC = () => {

  const [toggleMobMenu, setToggleMobMenu] = useState<boolean>(false);

  const onInternalNavigationClick = (id: string): void => {
    setToggleMobMenu(false);
    scrollToId(id); // TODO: Fix id's not navigating on /sign-in page
  };

  const Menu: React.FC = () => (
    <>
      <button onClick={() => onInternalNavigationClick('technology')} className="nav-link">Tech</button>
      <button onClick={() => onInternalNavigationClick('experience')} className="nav-link">Experience</button>
      <button onClick={() => onInternalNavigationClick('projects')} className="nav-link">Projects</button>
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

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(
    () => setHasScrolled(window.scrollY > 0),
    [setHasScrolled]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`header sticky z-10 flex justify-center${hasScrolled ? " top-2" : " top-4"}`}>
      <nav className="navbar relative flex flex-row items-center justify-between w-full gap-4 sm:gap-12 mx-4 mb-4 max-w-7xl 3xl:max-w-8xl py-4 px-4 sm:px-8 rounded-xl bg-header" id="navbar">
        <div className="cursor-pointer flex items-center w-14 md:w-24" onClick={() => onInternalNavigationClick('home')}>
          <p className={`title-font logo fugaz${hasScrolled ? " fugaz-scrolled" : ""}`}>M</p>
        </div>
        <div className="flex flex-row text-xl font-semibold gap-8 sm:gap-12 max-md:hidden">
          <Menu />
        </div>
        <div className="flex flex-row items-center md:justify-end gap-8 max-xs:hidden md:w-24">
          <SocialsNav/>
        </div>
        <div className="md:hidden flex justify-end w-14">
          <button className={`hamburger ${toggleMobMenu ? "selected" : ""}`} onClick={() => setToggleMobMenu(!toggleMobMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`mobile-menu absolute flex flex-col items-center justify-center gap-4 w-11/12 bg-header p-8 top-full left-2/4 -z-10 translate-x-[-50%] rounded-b-xl transition-all duration-400 delay-200 origin-top ${toggleMobMenu ? "scale-y-100" : "scale-y-0"}`}>
            <Menu />
            <div className="flex flex-row align-center gap-8 xs:hidden">
              <SocialsNav/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;