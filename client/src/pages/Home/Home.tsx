import React from 'react';

import { Footer, Header, Socials, Projects, AboutMe } from '../../containers';
import { Navbar } from '../../components';

const Home: React.FC = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Socials />
      <AboutMe />
      <Projects />
      <Footer />
    </section>
  )
}

export default Home