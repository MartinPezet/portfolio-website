import React from 'react'
import headshot from '../../assets/TEMP_HEADSHOT.jpg';
import './aboutMe.css';


const AboutMe: React.FC = () => {
  return (
    <section className="about-me gap-8" id="about-me">
      <div className="grid grid-cols-3 gap-8">
        <img src={headshot} className="about-me-img rounded-2xl" alt="Headshot of Martin Pezet"/>
        <div className="card col-span-2">
          <h2 className="text-4xl mb-4 hover:underline decoration-primary-600 decoration-wavy decoration-4">About Me</h2>
          <p>You'll learn how I'm really not good at posing for photos.</p>
          <p>Bento Grid with Education and Hobbies</p>
        </div>
      </div>
      {/* TODO: Fix this Rocky like experience shower. */}
      <div className=" max-w-3xl grid grid-cols-2 grid-rows-5 gap-8">
        <div className="card row-span-3">
          <h2>Education</h2>
          <p>Test</p>
        </div>
        <div className="card row-start-2 row-span-3">
          <h2>Work Experience</h2>
          <p>Test</p>
        </div>
        <div className="card row-start-4 row-span-3">
          <h2>Hobbies</h2>
          <p>Test</p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;