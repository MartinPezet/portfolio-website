import React from 'react';

import './about.css';

const About = ({ title, text }) => {
  return (
    <div className="about">
      <div className="aboutTitle">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="aboutText">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default About