import React from 'react';

import './project.css'

const Project = ({direction, title, image, imgAlt, text}) => {

  let classes = 'project';

  if (direction.normalize() === 'left'.normalize()) {
    classes += ' left leftBackground';
  } else if (direction.normalize() === 'right'.normalize()) {
    classes += ' right rightBackground';
  }

  return (
    <section className={classes}>
      <div className="projectTitle">
        <p>{title}</p>
      </div>
      <div className="projectImage">
        <img src={image} alt={imgAlt}/>
      </div>
      <div className="projectText">
        <p>{text}</p>
      </div>
    </section>
  )
}

export default Project