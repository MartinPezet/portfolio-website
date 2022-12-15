import React from 'react'

import { Footer, Header, Blog, Features, Possibility, WhatGPT } from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <section className='App'>
      <div className="gradientBG">
        <Navbar />
        <Header />

      </div>

      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </section>
  )
}

export default App