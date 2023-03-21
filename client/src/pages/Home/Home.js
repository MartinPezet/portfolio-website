import React from 'react';
import useUser from '../../hooks/useUser';

import { Footer, Header, SiteFeatures, Socials, Projects, AboutMe } from '../../containers';
import { Navbar } from '../../components';

const Home = () => {

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
        console.error(resObj.message);
      }
    }).catch(err => console.log(err));
  };

  const log = () => {
    console.log(JSON.stringify(user));
  }

  return (
    <section>
      <button onClick={GetUser}>Get User Info</button>
      <button onClick={log}>Log</button>
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

export default Home