import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './project.css';

import placeholder from '../../assets/projectsComingSoon.png';

type ProjectProps = 
  | {
    title: string;
    text: string;
    img?: undefined;
    imgAlt?: undefined;
    link?: string;
  }
  | {
    title: string;
    text: string;
    img: string;
    imgAlt: string;
    link?: string;
  }

const Project: React.FC<ProjectProps> = ({ title, text, img, imgAlt, link }) => {

  // Testing Only
  // if (!img) {
  //   img = placeholder;
  // }

  const image = () => {
    if (!img) {
      return (<div className="border-t"></div>);
    }
    if(link){
      return (
        <a href={link} target="_blank" rel="noreferrer">
          <img className="rounded-xl" src={img} alt={imgAlt} />
        </a>
      );
    }
    return (<img className="rounded-xl" src={img} alt={imgAlt} />);
  };

  return (
    <article className="relative w-full bg-primary-950 rounded-2xl p-10">
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-row justify-between">
          <FontAwesomeIcon className="h-6" icon={faDiagramProject} />
          <FontAwesomeIcon className="h-6 tech-icon hover:scale-110 transition project-code" icon={faGithub} /> {/* TODO Link to github (prop) */}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        {image()}
        <p className="">{text}</p>
        {/* TODO: Slot for what tech was used (could replace the faDiagramProject) */}
        {/* TODO: Add some styling for hover and some colour variantion (maybe more gradients, or a border with a glow, or a glowing divider) */}
      </div>
    </article>
  );
};

export default Project;