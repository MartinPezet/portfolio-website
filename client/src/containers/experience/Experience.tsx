import React from 'react';
import procodeLogo from '../../assets/procode_small_logo.png';
import utilitaLogo from '../../assets/utilita_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faVuejs, faDocker, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '../../components/';

import './experience.css';

const Experience: React.FC = () => {
    return (
        <section>
            <div className="flex justify-center mb-8">
                <h2 className="text-center card text-4xl uppercase font-semibold tracking-wide">Experience</h2>
            </div>
            <div className="flex justify-center mb-36">
                <ul className="experience-container max-w-7xl flex flex-row flex-wrap gap-x-10">
                    <li className="procode card experience flex flex-col">
                        <div className="company-pane">
                            <img src={procodeLogo} alt="Procode Technology logo"/>
                        </div>
                    <h2>Procode</h2>
                    <p className="uppercase text-sm max-w-48 text-slate-400">Software Engineer</p>
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
            </div>
        </section>
    );
}

export default Experience;