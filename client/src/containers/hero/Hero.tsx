import React from 'react';
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {scrollToId} from '../../utils/pageHelpers';

import headshot from '../../assets/headshot-2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero text-center py-24 sm:h-[80vh] px-8 md:px-16">
      <h1 className="uppercase text-5xl xs:text-7xl md:text-9xl font-semibold mb-2">Martin Pezet</h1>
      <div className="flex flex-col sm:flex-row max-sm:flex-col-reverse items-center gap-4 md:gap-8 mb-4 md:mb-6">
        <img src={headshot} alt="A headshot of Martin Pezet" className="rounded-full h-20 lg:h-24"/>
        <div className="sm:text-left flex flex-col justify-center">
          <p className="xs:text-lg sm:text-xl mb-1">Full-stack Software Engineer</p>
          <p className="text-slate-400"><FontAwesomeIcon icon={faLocationDot}/> Hampshire, United Kingdom</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        <button className="button scaleOnHover" onClick={() => scrollToId('projects')}>Projects</button>
        <a href="https://1drv.ms/b/s!AuEj0j16cbmolIooGOUOOO0a4yilCA?embed=1&em=2"
           target="_blank"
           rel="noreferrer"
           className="transition basic-link tracking-wider font-semibold text-xl"
        >
          CV <FontAwesomeIcon icon={faArrowRight}/>
        </a>
      </div>
    </section>
  )
}

export default Hero;