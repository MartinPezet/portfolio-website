import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { Home, SignInPage } from './pages';
import './App.css';
import useUser from './hooks/useUser';
import axios, { AxiosRequestConfig } from 'axios';

// interface ApiResponse {
//   success: boolean;
//   user: {
//     displayName: string;
//     name: string;
//     email: string;
//     pictureLink: string;
//   };
//   message?: string;
// }

const App: React.FC = () => {

  const { user, setUser } = useUser();

  const config : AxiosRequestConfig = {
    method: "GET",
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true.toString()
    }
  };

  const GetUser = async () => {
    try {
      if (!process.env?.REACT_APP_SSO_API_BASE_URI) throw new Error("Env not loaded");

      axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/auth/login/success'), config).then(res => {
        if (res.status === 200) return res.data;
        else if (res.status === 401) return res.data;
      }).then(resObj => {
        if (resObj?.success) {
          // Filters out other received data from SSO server
          const newUser = {
            displayName: resObj.user.displayName,
            name: resObj.user.name,
            email: resObj.user.email,
            pictureLink: resObj.user.pictureLink
          }
          setUser(newUser);
        } else {
          if (resObj?.message) console.log(resObj.message);
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
          <Route path='/sign-in' element={<SignInPage />} />   
        </Routes>
      </section>
    </Router>
  )
}

export default App;