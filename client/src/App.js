import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, SignInPage } from './pages';

import './App.css';

const App = () => {
  return (
    <Router>
      <section className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route exact path='/sign-in' element={<SignInPage />} />   
        </Routes>
      </section>
    </Router>
  )
}

export default App;