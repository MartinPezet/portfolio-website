import React from 'react';
import procodeLogo from '../../assets/procode_small_logo.png';
import utilitaLogo from '../../assets/utilita_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faVuejs, faDocker, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '../../components/';

import './experience.css';
import {ExperienceCard} from '../../components';

const Experience: React.FC = () => {
    return (
        <section>
            <div className="flex justify-center mb-8">
                <h2 className="text-center card text-4xl uppercase font-semibold tracking-wide">Experience</h2>
            </div>
            <div className="flex justify-center mb-36">
                <ol className="experience-container max-w-7xl flex flex-row flex-wrap gap-x-10">
                    <ExperienceCard cardClass="procode"
                                    companyLogo={procodeLogo}
                                    companyName="Procode"
                                    companyLogoAlt="Procode Technology Logo"
                                    roleName="Software Engineer"
                                    leftRoleIn="Current"
                    >
                        <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
                        <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
                        <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
                        <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
                    </ExperienceCard>

                    <ExperienceCard cardClass="utilita"
                                    companyLogo={utilitaLogo}
                                    companyName="Utilita Energy"
                                    companyLogoAlt="Utilita Energy Logo"
                                    roleName="Associate Software Engineer"
                                    leftRoleIn={<><span className="text-slate-500">(TUPE to Procode)</span> April 2024</>}
                    >
                        <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
                        <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
                        <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
                        <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
                    </ExperienceCard>
                </ol>
            </div>
        </section>
    );
}

export default Experience;