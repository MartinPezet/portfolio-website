import React, { useEffect, useState } from 'react';

import { NewsletterConfirm, Popup } from '../../components';

import axios, { AxiosRequestConfig } from 'axios';

const NewsletterSignUp: React.FC = () => {

  const [ count, setCount ] = useState<Number>(undefined);

  const [ newsletterPictures, setNewsletterPictures ] = useState<string[]>(undefined);

  useEffect(() => {
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

    // Number of Newsletter sign ups Functionality
    const getNewsletterUsers = async () => {
      return axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter'), config)
      .then((res) => {
        setCount(res.data.count);
      }).catch(err => console.error(err));
    };
    getNewsletterUsers();

    //Newsletter Pictures Functionality
    const getNewsletterPictures = async () => {
      return axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter/pictures'), config)
      .then((res) => {
        setNewsletterPictures(res.data.pictures);
      }).catch(err => console.error(err));
    };
    getNewsletterPictures();
  }, []);

  // Popup functionality

  const [ popupState, updatePopupState ] = useState<boolean>(false);

  return (
    <div>
        <div className="headerContentInput">
          <input type="email" className="headerInput" placeholder="Your Email Address"></input>
          <button type="button" className="scaleOnHover headerButton" onClick={() => updatePopupState(true)}>Get Started</button>
          <Popup popupState={popupState} updatePopupState={updatePopupState}>
            <NewsletterConfirm popupState={popupState}/>
          </Popup>
          
        </div>

        <div className="headerContentPeople">
          {
            newsletterPictures === undefined 
            ? 
            "" 
            : 
            newsletterPictures.map((picture, index) => (<img src={picture} key={index} alt="people"/>))
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
  )
}

export default NewsletterSignUp;