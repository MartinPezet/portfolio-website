import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import mainIMG from '../../assets/ai.png';

const Header = () => {
  return (
    <section className="header sectionPadding" id="home">
      <div className="headerContent">
        <h1 className="gradientText">Software Engineering - Building something special</h1>
        <p>This website is to exhibit Martin's personal portfolio and be able to be able to build tools that are easy to use and well designed</p>

        <div className="headerContentInput">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="headerContentPeople">
          <img src={people} alt="people" />
          <p>Number of users with martinpezet.net (Coming soon)</p>
        </div>

        {/*<div className="headerImage">
          <img src={mainIMG} alt="Portfolio Filler" />
  </div>*/}

      </div>
    </section>
  )
}

export default Header