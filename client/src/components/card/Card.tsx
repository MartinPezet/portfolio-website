import React from 'react';

import './card.css';

interface AboutProps {
  title: string;
  text: string;
};

const About: React.FC<AboutProps> = ({ title, text }: AboutProps) => {

  return (
    <div className="about">
      <div className="about-card">
        <div className="about-title text-center text-xl">
          <h3>{title}</h3>
        </div>
        <div className="about-text text-center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default About;