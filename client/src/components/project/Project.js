import React, { useEffect } from 'react';

import './project.css'

const Project = ({direction, title, image, imgAlt, text}) => {

  const projectSide = {color: "blue"}

  useEffect(() => {
      if (direction == "left") {
        // Set css for left
        let alignment = "left";
      } else if (direction == "right"){
        projectSide = {color: "red"}
      }
  }, (direction));

  return (
    <section className="project">
      <div style={projectSide}>
        {title}
      </div>
      <div>
        <img src={image} alt={imgAlt}/>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default Project