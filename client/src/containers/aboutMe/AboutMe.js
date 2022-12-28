import React from 'react'

import About from '../../components/about/About';
import './aboutMe.css';


const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMeHeader">
          <About title="About Me" text="I have been fascinated with Software Engineering from the age of 13 and have thoroughly enjoyed the journey through academia using a large array of languages and techniques for development. I am now embarking on my own Software Development journey and believe that, due to my ambition to learn, I would be of value to any team. I am a strong teamplayer who is focused on completing the task at hand and is able to take any role needed to make the team succeed. To see more about the person I am, feel free to download a CV below" />
      </div>
      <div className="aboutMeTitle">
        <h1 className="gradientText">Martin's Background</h1>
        <a className="gradientText" href="#downloadCV">Request CV</a>
      </div>
      <div className="aboutMeContent">
        <About title="Education" text="I have now studied Computer Science at GCSE, A-Level and degree level and have built many different applications throughout my journey which has inspired me to create a career in software engineering. In A-Levels I also enjoyed studying Mathematics and Business which has given me many core skills in life and helped me a large amount in my further studies. Having just graduated with a First Class degree in Computer Science I am excited to show off those skills in my career. To find out more then please request a download for my CV above." />
        <About title="Work Experience" text="I have consturcted a plethora of core skills during my time in the working world, dealing with stressed students at an IT Help Desk to calming down scared adults as a sailing insturctor, which have given me the people and communication skills to be able to thrive in the software development world. During my time as a senior sailing instructor I developed my analytical skills to breakdown the quality of my instructors sessions and helpe them become the best they can be. All experience available on CV." />
        <About title="Extracirricular" text="Having played football from the ages of 6 to 18 I know how to work best within the team and that has become a big part of my personality. I alos have developed my organisational skills with completing my Bronze and Silver DofE with Scouts and currently undergoing my Gold DofE. I also enjoy gaming, programming and sailing within my free time with the latter being a big part of my personal life in recent years." />
      </div>
    </section>
  )
}

export default AboutMe