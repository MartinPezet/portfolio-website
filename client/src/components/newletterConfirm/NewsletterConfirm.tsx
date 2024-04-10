import React, { useState, useEffect } from 'react';

import "./newsletterConfirm.css";

import useUser from '../../hooks/useUser';

import axios, { AxiosRequestConfig } from 'axios';

interface NewsletterConfirmProps {
    popupState: boolean;
};

const NewsletterConfirm: React.FC<NewsletterConfirmProps> = ({ popupState }) => {

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
    const [waiting, setWaiting] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [emailValidationError, setEmailValidationError] = useState<boolean>(false);
    const [apiResponse, setApiResponse] = useState<number>();

    const {user} = useUser();

    // Type this
    const submitNewsletterSignUp = (event) => {
        event.preventDefault();
        setWaiting(true);

        // Compile body/config
        let params = {
            email: email,
            acceptedPictureUse: usePicture
        };

        // Form client side validation
        if(email === undefined || email === "") {
            setEmailValidationError(true);
            setWaiting(false);
            return;
        } else {
            setEmailValidationError(false);
        }

        axios.post((process.env.REACT_APP_SSO_API_BASE_URI + '/newsletter'), params, config)
        .then((res) => {
            console.log(res.data);
            // Set to success Response
            if(res.data.success) {
                setApiResponse(res.status);
            } else {
                setErrorMessage(res.data.message);
            }
        }).catch(err => {
            setErrorMessage(err.message)
        });
        setWaiting(false);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    useEffect(() => {
        // Add email init when logged in to user object
        if(user?.email) {
            setEmail(user.email);
        }
    }, [user, setEmail])

    useEffect(() => {
        if (!popupState) {
            // Remove popup state
            setEmailValidationError(false);
            setApiResponse(null);
            setErrorMessage("");
            setUsePicture(false);
            if(!user){
                setEmail("");
            }
        }
    }, [popupState, user]);

    return (
        <div className="newsletter-container">
            <h2 className="newsletter-title gradientText">Sign up to the Newsletter</h2>
            <form className="newsletter-form">
                <div className="newsletter-question">
                    <label htmlFor="newsletter_email">Email: </label>
                    <input id="email" className="email" type="email" placeholder="martin@gmail.com" value={email} onChange={handleEmailChange} disabled={apiResponse === 200 || waiting}/>
                </div>
                {emailValidationError ? <p className="error">This field is required</p> : null}
                <div className="newsletter-question">
                    <label htmlFor="newsletter_use_image">Can we use your Google image: </label>
                    <input id="newsletter_use_image" className="googleImage" type="checkbox" checked={usePicture} onChange={(e) => setUsePicture(e.target.checked)} disabled={apiResponse === 200 || waiting}/>
                </div>
                <input className="newsletter-submit" type="submit" onClick={(e) => submitNewsletterSignUp(e)} disabled={apiResponse === 200 || waiting}/>
            </form>
            <div className="newsletter-response-container">
                {
                    errorMessage !== "" ?
                    <div className="newsletter-error">
                        <p className="error">{errorMessage}</p>
                    </div>
                    :
                    null
                }
                {
                    (errorMessage === "" && apiResponse === 200) ?
                    <p className="newsletter-success">
                        Thanks for signing up to my Newsletter!
                    </p>
                    :
                    null
                }
            </div>
        </div>
    );
};

export default NewsletterConfirm