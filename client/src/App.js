import React, { useEffect } from 'react'

import useUser from './hooks/useUser';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, SignInPage } from './pages';

import './App.css';

const App = () => {

  const { user, setUser } = useUser();

  const config = {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true
    }
  };

  const GetUser = () => {
    try {
      fetch('http://localhost:3001/auth/login/success', config).then(res => { // ++++++++++++++++++++++++ CHANGE TO AXIOS ++++++++++++++++++++++++
        if (res.status === 200) return res.json()
      }).then(resObj => {
        if (resObj.success) {
          const newUser = {
            displayName: resObj.user.displayName,
            name: resObj.user.name,
            email: resObj.user.email,
            pictureLink: resObj.user.pictureLink
          }
          setUser(newUser)
        } else {
          console.log(resObj.message);
        }
    }).catch(err => {throw err});
    } catch (e) {
      console.log(e);
    }
    
  };

  useEffect(() => {
    if (Object.keys(user)?.length === 0) {
      GetUser();
    }
  })

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