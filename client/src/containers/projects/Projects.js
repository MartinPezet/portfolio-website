import React from 'react';

import './projects.css';
import { Project } from '../../components'

// Images
import img1 from '../../assets/GitHub.png';
import img2 from '../../assets/LinkedIn.png';

const Projects = () => {
  return (
    <section>
      <p>Projects</p>
      <Project direction='right' title="Real Estate Supervisor" text="A real estate management system." image={img1} imgAlt="Github Logo" />
      <Project direction='left' title="Placeholder" text="OOOOOOOOOOOOOooooooooooooooo" image={img2} imgAlt="LinkedIn Logo" />

    </section>
  )
}

export default Projects