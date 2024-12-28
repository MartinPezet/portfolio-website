import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject, faMinus, faUpRightAndDownLeftFromCenter, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Tooltip } from '../../components/';

import './project.css';

type ProjectProps = 
  | {
    title: string;
    text: string;
    children?: React.ReactNode;
    img?: undefined;
    imgAlt?: undefined;
    codeLink: string;
    link?: string;
  }
  | {
    title: string;
    text: string;
    children?: React.ReactNode;
    img: string;
    imgAlt: string;
    codeLink: string;
    link?: string;
  }

const Project: React.FC<ProjectProps> = ({ title, text, children, img, imgAlt, codeLink, link }) => {

  // Testing Only
  // if (!img) {
  //   img = placeholder;
  // }

  const image = () => {
    if (!img) {
      return (<div className="border-t border-2"></div>);
    }
    if(link){
      return (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="bg-slate-400 relative h-8 w-full">
            <span className="h-4 w-4 rounded-full bg-red-500"></span>
            <span className="bg-yellow-500"></span>
            <span className="bg-green-500"></span>
          </div>
          <img src={img} alt={imgAlt} />
        </a>
      );
    }
    return (
      <div className="window rounded-xl overflow-hidden">
        <div className="bg-gray-500 relative h-6 w-full">
          <span className="h-3 w-3 absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-red-500 flex justify-center items-center">
            <FontAwesomeIcon className="window-icon text-red-700 flex h-2.5" icon={faXmark} />
          </span>
          <span className="h-3 w-3 absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-yellow-500 flex justify-center items-center">
            <FontAwesomeIcon className="window-icon text-yellow-700 flex h-2.5" icon={faMinus} />
          </span>
          <span className="h-3 w-3 absolute left-10 top-1/2 -translate-y-1/2 rounded-full bg-green-500 flex justify-center items-center">
            <FontAwesomeIcon className="window-icon text-green-700 h-1.5" icon={faUpRightAndDownLeftFromCenter} />
          </span>
        </div>
        <img src={img} alt={imgAlt} />
      </div>
    );
  };

  return (
    <article className="project relative w-full bg-primary-950 rounded-2xl p-10 transition">
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row flex-wrap gap-2">
            {children ?? <FontAwesomeIcon className="h-6 project-icon transition" icon={faDiagramProject} />}
          </div>
          <Tooltip text="View code">
            <a href={codeLink} target="_blank" rel="noreferrer"> {/* TODO: Increase accessibility */}
              <FontAwesomeIcon className="h-6 tech-icon hover:scale-110 transition duration-300 project-code hover:text-[#4078C0]" icon={faGithub} />
            </a>
          </Tooltip>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        {image()}
        <p className="text-slate-400">{text}</p>
      </div>
    </article>
  );
};

export default Project;