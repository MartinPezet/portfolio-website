import React from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {scrollToId} from '../../utils/pageHelpers';

const Hero: React.FC = () => {
  return (
    <section className="hero text-center py-24 sm:h-[75vh] px-8 md:px-16">
      <h1 className="uppercase text-5xl xs:text-7xl md:text-9xl font-semibold mb-5">Martin Pezet</h1>
      <p className="text-slate-300 sm:mb-2"><FontAwesomeIcon icon={faLocationDot}/> Hampshire, United Kingdom</p>
      <p className="xs:text-lg sm:text-2xl mb-4 md:mb-8">Full-stack Software Engineer</p>
      <button className="button scaleOnHover" onClick={() => scrollToId('projects')}>Projects</button>
    </section>
  )
}

export default Hero;