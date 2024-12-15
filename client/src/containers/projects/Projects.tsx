import React from 'react';
import './projects.css';
import { Project } from '../../components'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-12 px-8 xs:px-12 md:px-16 mb-36">
      <h2 className="card title-card text-4xl uppercase font-semibold tracking-wide">
        Personal Projects
      </h2>
      {/* TODO: Order my projects and provide feedback */}

      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Project 
          title="Local First To Do"
          text="Investigation of using a Local First architecture using Automerge library for conflict management."
          codeLink="https://github.com/MartinPezet/local-first-to-do"
        />
        <Project 
          title="Headache Decision Map"
          text="An app that can be first line of diagnostics towards primary headaches as it guides you through a series of questions to give you an estimate of your headache."
          codeLink="https://github.com/MartinPezet/headacheDecisionMap"
        />
      </div>
      
    </section>
  )
}

export default Projects;