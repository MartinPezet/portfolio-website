import React from 'react';

import './projects.css';
import { Project } from '../../components'

// Images
import placeholder from '../../assets/projectsComingSoon.png';


const Projects = () => {
  return (
    <section className="projects">
      <div className="projectsTitle">
        <p className="gradientText">Hosted Projects</p>
      </div>
      <div className="projectsContent">
      <Project direction='left' title="Real Estate Supervisor" text="A real estate management system which will cover the whole experience of a property manager, from contacting tenants about queries to calling out engineers for work." image={placeholder} imgAlt="This project is coming soon" />
      <Project direction='right' title="Headache Decision Map" text="This is a Java-React app that goes through a decision map on Java depending on the results of the questions stated about Primary headaches." image={placeholder} imgAlt="This project is coming soon" />
      </div>
      
    </section>
  )
}

export default Projects