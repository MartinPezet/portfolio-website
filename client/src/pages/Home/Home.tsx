import React from 'react';

import { AboutMe, Experience, Footer, Hero, Socials, Projects } from '../../containers';
import { Navbar } from '../../components';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home;