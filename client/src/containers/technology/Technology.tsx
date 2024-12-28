import React from 'react'
import "./technology.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faDocker, faVuejs } from '@fortawesome/free-brands-svg-icons';
import nodeJS from '../../assets/logos/node-js-seeklogo.svg';
import nuxtJS from '../../assets/logos/nuxtjs.svg';
import typescript from '../../assets/logos/typescript.svg';
import mysql from '../../assets/logos/mysql.svg';

const Technology = () => {
  return (
    <section id="technology" className="mb-36 px-4 xs:px-8 sm:px-12 md:px-16">
      <div className="title">
        <h2>Technologies</h2>
        <p>I'm an adaptive person and willing to pick up and learn any technologies but these are my favourites at present.</p>
      </div>
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="!px-5 !py-4 technology-card nuxt">
          <img className="h-12" src={nuxtJS} alt="NuxtJS logo"/>
          Nuxt
        </div>
        <div className="vue technology-card">
          <FontAwesomeIcon className="h-8 text-[#42b883]" icon={faVuejs}/>
          Vue
        </div>
        <div className="react technology-card">
          <FontAwesomeIcon className="h-8 text-[#61DBFB]" icon={faReact}/>
          React
        </div>
        <div className="laravel technology-card">
          <FontAwesomeIcon className="h-8 text-[#FF2D20]" icon={faLaravel}/>
          Laravel
        </div>
        <div className="docker technology-card">
          <FontAwesomeIcon className="h-8 text-[#1D63ED]" icon={faDocker}/>
          Docker
        </div>
        <div className="typescript technology-card">
          <img className="h-8 text-[#3178C6]" src={typescript} alt="Typescript logo"/>
          Typescript
        </div>
        <div className="mysql technology-card">
          <img className="h-8 text-[#00758F]" src={mysql} alt="MySQL logo"/>
          MySQL
        </div>
        <div className="node technology-card">
          <img className="h-8 text-[#5CC24A]" src={nodeJS} alt="NodeJS logo"/>
          NodeJS
        </div>
      </div>
    </section>
  )
}

export default Technology