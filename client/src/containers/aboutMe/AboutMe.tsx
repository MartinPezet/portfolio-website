import React from 'react';

import headshot from '../../assets/TEMP_HEADSHOT.jpg';
import procodeLogo from '../../assets/procode_small_logo.png';
import utilitaLogo from '../../assets/utilita_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faVuejs, faDocker, faAtlassian } from '@fortawesome/free-brands-svg-icons';

import { Tooltip } from '../../components/';

import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-8" id="about-me">
      <div className="max-w-7xl w-full grid grid-cols-3 gap-8">
        <img src={headshot} className="about-me-img rounded-2xl" alt="Headshot of Martin Pezet"/>
        <div className="card col-span-2">
          <h2 className="text-4xl mb-4 hover:underline decoration-primary-600 decoration-wavy decoration-4">About Me</h2>
          <p>You'll learn how I'm really not good at posing for photos.</p>
          <p>Bento Grid with Education and Hobbies</p>
        </div>
      </div>
      <ul className="experience-container max-w-7xl flex flex-row flex-wrap gap-x-10">
        <li className="procode card experience flex flex-col">
          <div className="company-pane">
            <img src={procodeLogo} alt="Procode Technology logo"/>
          </div>
          <h2>Procode</h2>
          <p className="uppercase text-sm max-w-48 text-slate-400">Associate Software Engineer</p>
          <div className="icon-container">
            <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
            <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
            <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
            <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
          </div>
          <p className="text-end mt-auto">Current</p>
        </li>
        <li className="utilita card experience flex flex-col">
          <div className="company-pane">
            <img src={utilitaLogo} alt="Utilita Energy logo"/>
          </div>
          <h2>Utilita Energy</h2>
          <p className="uppercase text-sm max-w-48 text-slate-400">Associate Software Engineer</p>
          <div className="icon-container">
            <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
            <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
            <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
            <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
          </div>
          <p className="text-end mt-auto"><span className="text-slate-500">(TUPE to Procode)</span> April 2024</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutMe;