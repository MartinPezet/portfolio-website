import React from 'react';

import { Footer, Header, SiteFeatures, Socials, Projects, AboutMe } from '../../containers';
import { Navbar } from '../../components';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';

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