import React from 'react';

import headshot from '../../assets/TEMP_HEADSHOT.jpg';

import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-8 mb-36" id="about-me">
      <div className="max-w-6xl w-full grid grid-cols-6 lg-custom-rows gap-6">
        <img src={headshot} className="about-me-img rounded-2xl col-span-2 row-span-3" alt="Headshot of Martin Pezet"/>
        <div className="card col-span-2 row-span-1 flex justify-center items-center">
          <h2 className="text-4xl uppercase font-semibold tracking-wide">About Me</h2>
        </div>
        <div className="card col-span-2 row-span-3">
          <p>Hobbies & Interests</p>
        </div>
        <div className="card col-span-2 row-span-3">
          Hover over/focus/click card to flip and reveal the topic of the card
        </div>
        <div className="card col-span-2 row-span-1">
          <p></p>
        </div>
        <div className="card col-span-2 row-span-2">
          Image within <a href="https://uiverse.io/mobinkakei/heavy-bulldog-78" target="_blank">Phone card</a>
        </div>
        <div className="card col-span-3 row-span-2">
          Values (Not repeating the same mistake, )
          Cool idea for this <a href="https://uiverse.io/dylanharriscameron/stupid-mole-90" target="_blank">card</a>
        </div>
        <div className="card col-span-1 row-span-2">
          CV Download?
        </div>
        <div className="card col-span-2 row-span-1">
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe;