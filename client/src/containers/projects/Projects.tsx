import React from 'react';
import './projects.css';
import { Project, AnimatedScroll, Tooltip } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faJava, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

import headache from "../../assets/headache-decision-map.png";
import toDo from "../../assets/to-do-app.png";
import earthScope from "../../assets/earthscope.webp";
import claude from "../../assets/logos/claude.svg";
import typescript from "../../assets/logos/typescript.svg";
import nuxtJS from "../../assets/logos/nuxtjs.svg";
import adonisJS from "../../assets/logos/adonisjs.svg";
import postgresql from "../../assets/logos/postgresql.svg";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-sapcing">
      <div className="title mb-8">
        <AnimatedScroll>
          <span className="double-word">
            <h2>Personal Projects</h2>
          </span>
        </AnimatedScroll>
        <AnimatedScroll className="delay-200">
          <p>These are my passion projects, which I am working hard on, with plans to expand and add more in the future.</p>
        </AnimatedScroll>
      </div>
      {/* TODO: Order my projects and provide feedback */}

      <div className="mx-auto max-section-size grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedScroll className="md:delay-200">
          <Project
            title="EarthScope"
            text="Borehole logging software for SME geotechnical consultancies. Import, edit, share and export AGS files to produce final reports, without the gINT licence or enterprise contract."
            link="https://earth-scope.org"
            img={earthScope}
            imgAlt="Screenshot of the EarthScope homepage showing a borehole log"
          >
            <Tooltip text="NuxtJS"><img className="tech-icon" src={nuxtJS} alt="NuxtJS logo" /></Tooltip>
            <Tooltip text="AdonisJS"><img className="tech-icon" src={adonisJS} alt="AdonisJS logo" /></Tooltip>
            <Tooltip text="TypeScript"><img className="tech-icon" src={typescript} alt="TypeScript logo" /></Tooltip>
            <Tooltip text="AWS"><FontAwesomeIcon className="tech-icon text-[#FF9900]" icon={faAws} /></Tooltip>
            <Tooltip text="PostgreSQL"><img className="tech-icon" src={postgresql} alt="PostgreSQL logo" /></Tooltip>
          </Project>
        </AnimatedScroll>
        <AnimatedScroll className="md:delay-400">
          <Project
            title="PezBot"
            text="A self-hosted Docker service that works through a GitHub backlog unattended using Claude Code. It turns issues into proposals, implements them once approved, runs the gates and opens PRs for review. It never merges."
            codeLink="https://github.com/MartinPezet/pez-bot"
          >
            <Tooltip text="Claude Code"><img className="tech-icon" src={claude} alt="Claude Code logo" /></Tooltip>
            <Tooltip text="TypeScript"><img className="tech-icon" src={typescript} alt="TypeScript logo" /></Tooltip>
          </Project>
        </AnimatedScroll>
        <AnimatedScroll className="md:delay-400">
          <Project 
            title="Local First To Do List"
            text="Investigation of using a Local First architecture using Automerge library for conflict management. A simple to do app that can store locally and sync with the server."
            codeLink="https://github.com/MartinPezet/local-first-to-do"
            img={toDo}
            imgAlt="Screenshot of an example session in the Local First To Do App"
          >
            <Tooltip text="Vue.js"><FontAwesomeIcon className="tech-icon text-[#42b883]" icon={faVuejs} /></Tooltip>
            <Tooltip text="NodeJS"><FontAwesomeIcon className="tech-icon text-[#5CC24A]" icon={faNodeJs} /></Tooltip>
          </Project>
        </AnimatedScroll>
        <AnimatedScroll className="md:delay-200">
          <Project 
            title="Headache Decision Map"
            text="An app that can be first line of diagnostics towards primary headaches as it guides you through a series of questions to give you an estimate of your headache."
            codeLink="https://github.com/MartinPezet/headacheDecisionMap"
            img={headache}
            imgAlt="Screenshot of the start of Martin Pezet's headache decision map app"
          >
            <Tooltip text="React"><FontAwesomeIcon className="tech-icon text-[#61DBFB]" icon={faReact} /></Tooltip>
            <Tooltip text="Java"><FontAwesomeIcon className="tech-icon text-[#E76F00]" icon={faJava} /></Tooltip>
          </Project>
        </AnimatedScroll>
      </div>
    </section>
  )
}

export default Projects;