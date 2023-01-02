import React from 'react';

import './projects.css';
import { Project } from '../../components'

// Images
import img1 from '../../assets/GitHub.png';

const Projects = () => {
  return (
    <section>
      Projects
      <Project direction="right" title="Real Estate Supervisor" text="A real estate management system." image={img1} imgAlt="Github Logo" />

    </section>
  )
}

export default Projects