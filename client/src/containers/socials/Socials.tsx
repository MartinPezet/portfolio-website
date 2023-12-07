import React from 'react';

import './socials.css';
import { linkedin, github } from './imports';

const Socials: React.FC = () => {
  return (
    <section className="socials">
      <div className="socialsContainer">
        <a href="https://github.com/MartinPezet" className="socialItem scaleOnHover">
          <img src={github} alt="Github Logo" />
        </a>
        <a href="https://www.linkedin.com/in/martin-pezet-36306a181/" className="socialItem scaleOnHover">
          <img src={linkedin} alt="LinkedIn Logo" />
        </a>
      </div>
    </section>
  );
};

export default Socials;