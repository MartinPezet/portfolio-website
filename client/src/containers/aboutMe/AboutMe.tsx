import React from 'react';

import headshot from '../../assets/TEMP_HEADSHOT.jpg';

import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-8 mb-36" id="about-me">
      <div className="max-w-6xl w-full grid grid-cols-6 grid-rows-4 gap-6">
        <img src={headshot} className="about-me-img rounded-2xl col-span-2 row-span-2" alt="Headshot of Martin Pezet"/>
        <div className="card col-span-2 row-span-1 flex justify-center items-center">
          <h2 className="text-4xl uppercase font-semibold tracking-wide">About Me</h2>
        </div>
        <div className="card col-span-2 row-span-2">
          <p>Hobbies & Interests</p>
        </div>
        <div className="card col-span-2 row-span-2">
          Hover over/focus/click card to flip and reveal the topic of the card
        </div>
        <div className="card col-span-2 row-span-1">
          <p>Hobbies & Interests</p>
        </div>
        <div className="card col-span-2 row-span-3">
          Image
        </div>
        <div className="card col-span-3 row-span-2">
          Values (Not repeating the same mistake, )
        </div>
        <div className="card col-span-1 row-span-2">
          CV Download?
        </div>
      </div>
    </section>
  )
}

export default AboutMe;