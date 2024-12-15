import React from 'react';

import headshot from '../../assets/TEMP_HEADSHOT.jpg';

import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-8 mb-36 px-8 xs:px-12 md:px-16" id="about-me">
      <div className="max-w-xl md:max-w-6xl w-full grid md:grid-cols-6 lg-custom-rows gap-6">
        <img src={headshot} 
             className="about-me-img h-full sm:w-full rounded-2xl md:col-span-2 row-span-2 sm:row-span-3" 
             alt="Headshot of Martin Pezet"
        />
        <div className="card title-card max-md:mx-auto max-md:order-first max-md:w-max max-md:col-span-full md:col-span-2 row-span-1 flex justify-center items-center text-center">
          <h2 className="text-4xl uppercase font-semibold tracking-wide">About Me</h2>
        </div>
        <div className="card md:col-span-2 md:row-span-3">
          <p>Hobbies & Interests</p>
        </div>
        <div className="card md:col-span-2 md:row-span-3">
          Hover over/focus/click card to flip and reveal the topic of the card
        </div>
        <div className="card md:col-span-2 md:row-span-1">
          <p></p>
        </div>
        <div className="card md:col-span-2 md:row-span-2">
          Image within <a href="https://uiverse.io/mobinkakei/heavy-bulldog-78" target="_blank">Phone card</a>
        </div>
        <div className="card md:col-span-3 md:row-span-2">
          Values (Not repeating the same mistake, )
          Cool idea for this <a href="https://uiverse.io/dylanharriscameron/stupid-mole-90" target="_blank">card</a>
        </div>
        <div className="card md:col-span-1 md:row-span-2">
          <a href="https://1drv.ms/b/s!AuEj0j16cbmolIooGOUOOO0a4yilCA?embed=1&em=2" target="_blank" rel="noreferrer">Take a look at my CV</a>
        </div>
        <div className="card md:col-span-2 md:row-span-1">
          
        </div>
      </div>
    </section>
  )
}

export default AboutMe;