import React from 'react';

import { Footer, Header, SiteFeatures, Socials, Projects, AboutMe } from '../../containers';
import { Navbar } from '../../components';

const Home = () => {
  return (
    <section>
      <div className="gradientBG">
          <Navbar />
          <Header />
      </div>
      <Socials />
      <AboutMe />
      <SiteFeatures />
      <Projects />
      <Footer />
    </section>
  )
}

export default Home