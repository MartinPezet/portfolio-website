import React from 'react';
import './projects.css';
import { Project, AnimatedScroll, Tooltip } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faNodeJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

import headache from "../../assets/headache-decision-map.png";
import toDo from "../../assets/to-do-app.png";

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