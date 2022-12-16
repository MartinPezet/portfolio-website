import React from 'react'

import './App.css';

import { Footer, Header, SiteFeatures, Socials, Projects } from './containers';
import { Navbar, About } from './components';

const App = () => {
  return (
    <section className='App'>
      <div className="gradientBG">
        <Navbar />
        <Header />
        <Socials />
        <About />
        <SiteFeatures />
        <Projects />

      </div>
      <Footer />
    </section>
  )
}

export default App