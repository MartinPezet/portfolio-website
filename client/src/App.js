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
      </div>
      <Socials />
      <About />
      <SiteFeatures />
      <Projects />
      <Footer />
    </section>
  )
}

export default App