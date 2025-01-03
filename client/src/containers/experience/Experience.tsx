import React from 'react';
import procodeLogo from '../../assets/procode_small_logo.png';
import utilitaLogo from '../../assets/utilita_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faVuejs, faDocker, faAtlassian } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '../../components/';

import './experience.css';
import { ExperienceCard, AnimatedScroll } from '../../components';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-sapcing">
            <div className="title mb-8">
                <AnimatedScroll>
                    <h2 className="">Experience</h2>
                </AnimatedScroll>
                <AnimatedScroll className="delay-200">
                    <p>I'm excited to get more experience, but this is what I bring to the table for now.</p>
                </AnimatedScroll>
            </div>

            <ol className="experience-container grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-5 gap-8 max-w-7xl w-fit m-auto">
                <AnimatedScroll>
                    <ExperienceCard cardClass="procode"
                                    companyLogo={procodeLogo}
                                    companyName="Procode"
                                    companyLogoAlt="Procode Technology Logo"
                                    roleName="Software Engineer"
                                    timeInRole={
                                        <span className="flex flex-col">
                                            <span className="text-slate-500 text-sm">(TUPE from Utilita)</span>
                                            <span>
                                                <span className="text-slate-400">April 2024 <FontAwesomeIcon className="text-sm" icon={faArrowRight}/></span>
                                                <span className="font-semibold"> Current</span>
                                            </span>
                                        </span>
                                    }
                    >
                        <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
                        <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
                        <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
                        <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
                    </ExperienceCard>
                </AnimatedScroll>

                <AnimatedScroll>
                    <ExperienceCard cardClass="utilita"
                                    companyLogo={utilitaLogo}
                                    companyName="Utilita Energy"
                                    companyLogoAlt="Utilita Energy Logo"
                                    roleName="Associate Software Engineer"
                                    timeInRole={
                                        <>
                                            <span className="text-slate-400">Feb 2023 <FontAwesomeIcon className="text-sm" icon={faArrowRight}/></span>
                                            <span className="font-semibold"> April 2024</span>
                                        </>
                                    }
                    >
                        <Tooltip text="Laravel"><FontAwesomeIcon className="tech-icon hover:text-[#ff2d20]" icon={faLaravel} /></Tooltip>
                        <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon hover:text-[#42b883]" icon={faVuejs} /></Tooltip>
                        <Tooltip text="Docker"><FontAwesomeIcon className="tech-icon hover:text-[#1D63ED]" icon={faDocker} /></Tooltip>
                        <Tooltip text="Atlassian Suite"><FontAwesomeIcon className="tech-icon hover:text-[#0052CC]" icon={faAtlassian} /></Tooltip>
                    </ExperienceCard>
                </AnimatedScroll>
            </ol>
        </section>
    );
}

export default Experience;