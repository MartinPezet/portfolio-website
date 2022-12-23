import React from 'react'

import About from '../../components/about/About';
import './aboutMe.css';


const AboutMe = () => {
  return (
    <section className="aboutMe">
        <div className="aboutMeHeader">
            <About title="About Me" text="I have been fascinated with Software Engineering from the age of 13 and have thoroughly enjoyed the journey through academia using a large array of languages and techniques for development. I am now embarking on my own Software Development journey and believe that, due to my ambition to learn, I would be of value to any team." />
        </div>

        <div className="aboutMeContent">
          <About title="Education" text="" />
          <About title="Work Experience" text="" />
          <About title="Previous Projects" text="" />
        </div>
    </section>
  )
}

export default AboutMe