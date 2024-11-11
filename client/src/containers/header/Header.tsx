import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView();
  };

  return (
    <section className="" id="home">
      <div className="hero">
        <h1 className="uppercase text-9xl font-semibold mb-5">Martin Pezet</h1>
        <p className="text-slate-300"><FontAwesomeIcon icon={faLocationDot}/> Hampshire, United Kingdom</p>
        <p className="text-2xl mb-8">Full-stack Software Engineer</p>
        <button className="button scaleOnHover" onClick={() => scrollTo('projects')}>Projects</button>
      </div>
    </section>
  )
}

export default Header;