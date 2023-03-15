import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Callback, Home, SignInPage } from './pages';

import './App.css';

const App = () => {
  return (
    <Router>
      <section className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/oauth/google' element={<SignInPage />} />
          <Route path='/oauth/google/callback' element={<Callback />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App;