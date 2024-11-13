import React from 'react';

import headshot from '../../assets/TEMP_HEADSHOT.jpg';

import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-8" id="about-me">
      <div className="max-w-7xl w-full grid grid-cols-3 gap-8">
        <img src={headshot} className="about-me-img rounded-2xl" alt="Headshot of Martin Pezet"/>
        <div className="card col-span-2">
          <h2 className="text-4xl mb-4 hover:underline decoration-primary-600 decoration-wavy decoration-4">About Me</h2>
          <p>You'll learn how I'm really not good at posing for photos.</p>
          <p>Bento Grid with Education and Hobbies</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;