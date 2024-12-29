import React from 'react';

import { Experience, Footer, Hero, Projects, Technology } from '../../containers';
import { Navbar } from '../../components';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technology />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;