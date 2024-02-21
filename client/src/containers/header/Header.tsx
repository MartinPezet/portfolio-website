import React, { useEffect, useState } from 'react';
import './header.css';

import { NewsletterConfirm } from '../../components';

import axios, { AxiosRequestConfig } from 'axios';

import mainIMG from '../../assets/placeholder.png';

const Header: React.FC = () => {

  // Pop up functionality

  const [ popupState, setPopupState ] = useState<boolean>(false);

  // Config declaration

  const config : AxiosRequestConfig = {
    method: "GET",
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": true.toString()
    }
  };

  // Number of Newsletter sign ups and pictures Functionality

  const [ count, setCount ] = useState<Number>(undefined);

  //TODO Type this
  const getNewsletterUsers = async () => {
    return axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter'), config)
    .then((res) => {
      setCount(res.data.count);
    }).catch(err => console.error(err));
  };

  const [ newsletterPictures, setNewsletterPictures ] = useState<string[]>(undefined);

  const getNewsletterPictures = async () => {
    return axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter/pictures'), config)
    .then((res) => {
      console.log(res.data);
      setNewsletterPictures(res.data.pictures);
    }).catch(err => console.error(err));
  };

  useEffect(() => {
    getNewsletterUsers();
    getNewsletterPictures();
  }, []);

  return (
    <section className="header sectionPadding" id="home">
      <div className="headerContent">
        <h1 className="gradientText">Martin Pezet - Software Engineer</h1>
        <p>This is a portfolio website for Martin Pezet. You can get around all my different projects by going to the projects section. If you haven't got an account already, I suggest you start your sign up below.</p>

        <div className="headerContentInput">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button" className="scaleOnHover" onClick={() => setPopupState(true)}>Get Started</button>
          <NewsletterConfirm popupState={popupState} setPopupState={setPopupState} />
        </div>

        <div className="headerContentPeople">
          {
            newsletterPictures === undefined ? "" : <img src={newsletterPictures[0]} alt="people" />
          }
          {
            count === undefined
            ?
            ""
            :
            <p>Number of newsletter sign ups {count.toString()}</p>
          }
        </div>
      </div>
      <div className="headerImage">
        <img src={mainIMG} alt="Abstract Martins Headshot" />
      </div>
    </section>
  )
}

export default Header;