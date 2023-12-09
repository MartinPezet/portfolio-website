import React from 'react';

import './about.css';

interface AboutProps {
  title: string;
  text: string;
};

const About: React.FC<AboutProps> = ({ title, text }: AboutProps) => {
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

export default About;