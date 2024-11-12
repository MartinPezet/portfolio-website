import React from 'react';
import './projects.css';
import { Project } from '../../components'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-12">
      <div className="max-w-7xl bg-primary-950 rounded-2xl py-6 px-8 text-center">
        <h2 className="text-4xl uppercase font-semibold tracking-wide">
          Personal Projects
        </h2>
      </div>
      {/* Order my projects and provide feedback */}

      <div className="max-w-7xl grid grid-cols-3 gap-8">
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