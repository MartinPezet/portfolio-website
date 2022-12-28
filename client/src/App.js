import React from 'react'

import './App.css';

import { Footer, Header, SiteFeatures, Socials, Projects, AboutMe } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <section className='App'>
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

export default App