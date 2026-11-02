import React from 'react'
import "./technology.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faDocker, faVuejs, faAws } from '@fortawesome/free-brands-svg-icons';
import claude from '../../assets/logos/claude.svg';
import typescript from '../../assets/logos/typescript.svg';
import grafana from '../../assets/logos/grafana.svg';
import { AnimatedScroll } from '../../components';

const Technology = () => {
  return (
    <section id="technology" className="section-sapcing">
      <div className="title">
        <AnimatedScroll><h2>Technologies</h2></AnimatedScroll>
        <AnimatedScroll className="delay-200"><p>I'm an adaptive person and willing to pick up and learn any technologies but these are my favourites at present.</p></AnimatedScroll>
      </div>
      <div className="mx-auto max-section-size grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatedScroll className="claude technology-card">
          <img className="h-8" src={claude} alt="Claude Code logo"/>
          Claude Code
        </AnimatedScroll>
        <AnimatedScroll className="vue technology-card md:delay-100">
          <FontAwesomeIcon className="h-8 text-[#42B883]" icon={faVuejs}/>
          Vue
        </AnimatedScroll>
        <AnimatedScroll className="react technology-card md:delay-300">
          <FontAwesomeIcon className="h-8 text-[#61DBFB]" icon={faReact}/>
          React
        </AnimatedScroll>
        <AnimatedScroll className="laravel technology-card md:delay-500">
          <FontAwesomeIcon className="h-8 text-[#FF2D20]" icon={faLaravel}/>
          Laravel
        </AnimatedScroll>
        <AnimatedScroll className="docker technology-card">
          <FontAwesomeIcon className="h-8 text-[#1D63ED]" icon={faDocker}/>
          Docker
        </AnimatedScroll>
        <AnimatedScroll className="typescript technology-card md:delay-100">
          <img className="h-8 text-[#3178C6]" src={typescript} alt="Typescript logo"/>
          Typescript
        </AnimatedScroll>
        <AnimatedScroll className="aws technology-card md:delay-300">
          <FontAwesomeIcon className="h-8 text-[#FF9900]" icon={faAws}/>
          AWS
        </AnimatedScroll>
        <AnimatedScroll className="grafana technology-card md:delay-500">
          <img className="h-8" src={grafana} alt="Grafana logo"/>
          Grafana
        </AnimatedScroll>
      </div>
    </section>
  )
}

export default Technology