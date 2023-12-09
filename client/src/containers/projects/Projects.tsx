import React from 'react';
import './projects.css';
import { Project } from '../../components'

const Projects: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="projectsTitle">
        <h2 className="gradientText">Project Updates.</h2>
        <h2 className="gradientText">Keep up to date with how I'm getting on.</h2>
      </div>
      <div className="projectsContent">
        <div className="mostRecentProject">
          <Project 
            title="Real Estate Supervisor" 
            date={new Date("2023-07-01")}
            text="A real estate management system which will cover the whole experience of a property manager, from contacting tenants about queries to calling out engineers for work." 
          />
        </div>
        <div className="otherProjects">
          <Project 
            title="Headache Decision Map" 
            text="This is a Java-React app that goes through a decision map on Java depending on the results of the questions stated about Primary headaches."
          />
          <Project 
            title="CMS System"
          />
          <Project 
            title="Global SCSS" 
          />
          <Project 
            title="Python Scripting"
          />
        </div>
      </div>
      
    </section>
  )
}

export default Projects;