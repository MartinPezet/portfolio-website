import React, { useState } from 'react';

import { Popup } from '../';
import useUser from '../../hooks/useUser';

import axios, { AxiosRequestConfig } from 'axios';

interface NewsletterConfirmProps {
    popupState: boolean;
    setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsletterConfirm: React.FC<NewsletterConfirmProps> = ({ popupState, setPopupState }) => {

    // Popup Functionality

    const closePopup = () => {
        setPopupState(false);
    }

    // Config declaration

    const config : AxiosRequestConfig = {
        method: "POST",
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": true.toString()
        }
    };

    // Form functionality

    const [email, setEmail] = useState<string>("");
    const [usePicture, setUsePicture] = useState<boolean>(false);

    const {user} = useUser();

    // Type this
    const submitNewsletterSignUp = (event) => {
        event.preventDefault();
        // Compile body/config
        let params = {
            email: email,
            pictureLink: user.picture ?? "",
            acceptedPictureUse: usePicture
        };

        axios.post((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter'), params, config)
        .then((res) => {
            console.log(res.data);
            // return res;
            // Set to success modal
        }).catch(err => console.error(err));
    }

    // TODO: Fix dialog issues !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return (
        <Popup popupState={popupState} setPopupState={closePopup}>
            {/* If user is logged in prepopulate the newsletter email */}
            <h2>Sign up to the Newsletter</h2>
            <form>
                <label htmlFor="newsletter_email">Email: </label>
                <input id="newsletter_email" type="email" placeholder="martin@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="newsletter_use_image">Can we use your Google image: </label>
                <input id="newsletter_use_image" type="checkbox" checked={usePicture} onChange={(e) => setUsePicture(e.target.checked)}/>
                <input type="submit" onClick={(e) => submitNewsletterSignUp(e)}/>
            </form>
        </Popup>
    );
};

export default NewsletterConfirm