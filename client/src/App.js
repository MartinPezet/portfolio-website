import React from 'react'

import './App.css';

import { Footer, Header, Blog, Socials } from './containers';
import { Navbar } from './components';

const App = () => {
  return (
    <section className='App'>
      <div className="gradientBG">
        <Navbar />
        <Header />
        <Socials />
        <Blog />
      </div>
      <Footer />
    </section>
  )
}

export default App