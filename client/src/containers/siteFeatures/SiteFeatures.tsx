import React from 'react'

import './siteFeatures.css'
import About from '../../components/about/About';

interface Feature {
  title: string;
  text: string;
}

const SiteFeatures: React.FC = () => {
  const featuresData: Feature[] = [
    {
      title: "Single Sign On",
      text: "Sign In only once on martinpezet.net as all projects are linked with one account and you can access all of your information."
    },
    {
      title: "Central Projects",
      text: "All of my projects under one roof. Just explore and this landing page will always be here for some more cool projects to explore."
    },
    {
      title: "Learn About Me",
      text: "This website is the perfect place to get to know what I am like both as a programmer and a person."
    },
    {
      title: "Dockerised Hosting",
      text: "This website is being hosted in dockerised as microservices so they will be able to be hosted efficently and using any OS or system."
    }, 
    {
      title: "Automated Building",
      text: "This website's aim is not just to show you about me, it is also to experience proper software development practices. This repo uses GitHub actions to build when committed to main (you can check this out on my GitHub)."
    }
  ]

  return (
    <section className="features" id="website-features">
      <div className="featuresTitle">
        <h1 className="gradientText">Website Features</h1>
        <p>These are the features on this website.</p>
      </div>
      <div className="featuresContent">
        {featuresData.map((item, index) => (
          <About title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </section>
  )
}

export default SiteFeatures