import React from 'react';
import { Link } from 'react-router-dom';

import './project.css';

import placeholder from '../../assets/projectsComingSoon.png';

interface ProjectProps {
  title: string;
  date?: Date;
  img?: string;
  imgAlt?: string;
  text?: string;
}

const Project: React.FC<ProjectProps> = ({ title, date, img, imgAlt, text }) => {

  if (img === undefined) {
    img = placeholder;
  }

  if (imgAlt === undefined) {
    if (img === undefined) {
      imgAlt = "This project is coming soon";
    } else {
      imgAlt = "No Image provided";
    }
  }

  if (text === undefined) {
    text = "More about this project coming soon...";
  }

  function printDate(d: Date) {
    const yyyy = d.getFullYear();
    let mm = d.getMonth() + 1; // Months start at 0!
    let dd = d.getDate();

    if (dd < 10) dd = 0 + dd;
    if (mm < 10) mm = 0 + mm;

    return dd + '/' + mm + '/' + yyyy;
  }

  return (
    <article className="project">
      <div className="projectContainer">
        <button className="projectImage">
          <Link to="blog/name">
            <img src={img} alt={imgAlt} />
          </Link>
        </button>
        <div className="projectContent">
          <div className="projectTitle">
            <div></div>
            <p className="title">{title}</p>
          </div>
          <p className="date">{date === undefined ? "Update imminent" : "Last Update: " + printDate(date)}</p>
          <p className="projectText">{text}</p>
        </div>
      </div>
      <button className="projectButton scaleOnHover">
        <Link to="/blog/name">
          Click me to read more
        </Link>
      </button>
    </article>
  );
};

export default Project;