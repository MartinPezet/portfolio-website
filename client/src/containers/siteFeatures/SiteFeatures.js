import React from 'react'

import './siteFeatures.css'
import About from '../../components/about/About';

const SiteFeatures = () => {

  const featuresData = [
    {
      title:"Single Sign On",
      text:"Sign In only once on martinpezet.net as all projects are linked with one account and you can access all of your information."
    },
    {
      title:"Central Projects",
      text:"All of my projects under one roof. Just explore and this landing page will always be here for some more cool projects to explore."
    }
  ]

  return (
    <section className="features" id="website-features">
      <div className="featuresTitle">
        <h1 className="gradientText">Website Features</h1>
        <p>Features on martinpezet.net</p>
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