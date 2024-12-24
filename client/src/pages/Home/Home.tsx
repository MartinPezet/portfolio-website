import React from 'react';

import { Experience, Footer, Hero, Projects } from '../../containers';
import { Navbar } from '../../components';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      Technologies
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;