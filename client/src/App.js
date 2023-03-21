import React from 'react'

import UserProvider from './context/UserProvider'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, SignInPage } from './pages';

import './App.css';

const App = () => {

  return (
    <UserProvider>
      <Router>
        <section className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/sign-in' element={<SignInPage />} />   
          </Routes>
        </section>
      </Router>
    </UserProvider>
  )
}

export default App;