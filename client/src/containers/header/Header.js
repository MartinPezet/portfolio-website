import React from 'react';
import './header.css';

import people from '../../assets/people.png';
import mainIMG from '../../assets/placeholder.png';

const Header = () => {
  return (
    <section className="header sectionPadding" id="home">
      <div className="headerContent">
        <h1 className="gradientText">Martin Pezet - Software Engineer</h1>
        <p>This is a portfolio website for Martin Pezet. You can get around all my different projects by going to the projects section. If you haven't got an account already, I suggest you start your sign up below.</p>

        <div className="headerContentInput">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button" className="scaleOnHover">Get Started</button>
        </div>

        <div className="headerContentPeople">
          <img src={people} alt="people" />
          <p>Number of users with martinpezet.net (Coming soon)</p>
        </div>
      </div>
      <div className="headerImage">
        <img src={mainIMG} alt="Portfolio Filler" />
      </div>
    </section>
  )
}

export default Header