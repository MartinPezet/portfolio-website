import React from 'react';

import { AboutMe, Experience, Footer, Header, Socials, Projects } from '../../containers';
import { Navbar } from '../../components';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home;