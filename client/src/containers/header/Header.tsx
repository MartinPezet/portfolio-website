import React from 'react';
import './header.css';

const Header: React.FC = () => {
  return (
    <section className="" id="home">
      <div className="hero">
        <h1 className="uppercase text-9xl font-semibold mb-6">Martin Pezet</h1>
        <p className="text-2xl mb-8">Full-stack Software Engineer</p>
        <a className="button scaleOnHover" href="#projects">Projects</a>
      </div>
    </section>
  )
}

export default Header;