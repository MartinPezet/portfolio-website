import React from 'react';
import './projects.css';
import { Project, AnimatedScroll } from '../../components'

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-8 xs:px-12 md:px-16 mb-36">
      <div className="title mb-8">
        <AnimatedScroll>
            <h2 className="">Personal Projects</h2>
            <p>These are my passion projects, which I am working hard on, with plans to expand and add more in the future.</p>
        </AnimatedScroll>
      </div>
      {/* TODO: Order my projects and provide feedback */}

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedScroll className="md:delay-400">
          <Project 
            title="Local First To Do"
            text="Investigation of using a Local First architecture using Automerge library for conflict management."
            codeLink="https://github.com/MartinPezet/local-first-to-do"
          />
        </AnimatedScroll>
        <AnimatedScroll className="md:delay-200">
          <Project 
            title="Headache Decision Map"
            text="An app that can be first line of diagnostics towards primary headaches as it guides you through a series of questions to give you an estimate of your headache."
            codeLink="https://github.com/MartinPezet/headacheDecisionMap"
          />
        </AnimatedScroll>
      </div>
    </section>
  )
}

export default Projects;