import React from 'react'
import './footer.css';

import { RiArrowUpLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerContent">
        <div className="footerContentContainer1">
          <div className="footerContentTitle">
            <h1>Martin Pezet</h1>
            <h2>Portfolio Website</h2>
          </div>
          <div className="footerContentMore">
            <h2>More to do</h2>
            <a href='#projects'>Visit my projects</a>
            <a href='#downloadCV'>Request a CV</a>
          </div>
        </div>
        <div className="footerContentContainer2">
          <div className="footerContentContact">
            <h2>Contact Me</h2>
            <a href='#email-me'>Email (coming soon)</a>
          </div>
          <div className="footerContentBackToTop">
            <h2>Back to top</h2>
            <a href='#navbar'>{<RiArrowUpLine />}</a>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p>Copyright &copy; {(new Date().getFullYear())} Martin Pezet</p>
      </div>
    </section>
  )
}

export default Footer