import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { scrollToId } from '../../utils/pageHelpers';
import useFont from '../../hooks/useFont';

const Footer: React.FC = () => {
  
  const {currentFont, setFont, fonts} = useFont();

  const changeFont = () => {
    let indexOfCurrentFont = fonts.indexOf(currentFont) + 1;
    if(indexOfCurrentFont >= fonts.length) {
      indexOfCurrentFont = 0;
    }
    setFont(fonts[indexOfCurrentFont]);
    scrollToId('home');
  }

  return (
    <footer className="flex flex-col gap-4 items-center mb-16">
      <div className="flex flex-col gap-2 md:gap-4 items-center">
        <h2 className="uppercase text-center text-lg">Message Me</h2>
        <div className="flex gap-6 items-center">
          <a href="mailto:martinpezet@ntlworld.com">
            <FontAwesomeIcon icon={faEnvelope} className="tech-icon h-8 hover:text-[#1A73E8]" aria-label="Envelope to make email"/>
            </a>
          <a href="https://wa.me/07806519657" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="tech-icon h-8 hover:text-[#25D366]" aria-label="Whatsapp logo"/>
          </a>
          <a href="https://www.linkedin.com/messaging/thread/new/?recipients=martin-pezet-36306a181" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="tech-icon h-8 hover:text-[#0077B5]"/>
          </a>
        </div>
      </div>
      
      <p><button onClick={changeFont}>&copy;</button> {(new Date().getFullYear())} - Martin Pezet</p>
    </footer>
  )
}

export default Footer;