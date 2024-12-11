import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, SignInPage, PageNotFound } from './pages';
import { MouseGradient, BackgroundGradient } from './components';
import './App.css';
import useUser from './hooks/useUser';
import axios, { AxiosRequestConfig } from 'axios';

// interface ApiResponse {
//   success: boolean;
//   user: {
//     displayName: string;
//     name: string;
//     email: string;
//     pictureLink: string;
//   };
//   message?: string;
// }

const App: React.FC = () => {

  // const { user, setUser } = useUser();

  // const config : AxiosRequestConfig = {
  //   method: "GET",
  //   withCredentials: true,
  //   headers: {
  //     Accept: 'application/json',
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": true.toString()
  //   }
  // };

  // const GetUser = async () => {
  //   try {
  //     if (!process.env?.REACT_APP_SSO_API_BASE_URI) throw new Error("Env not loaded");

  //     axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/auth/login/success'), config).then(res => {
  //       if (res.status === 200) return res.data;
  //     }).then(resObj => {
  //       if (resObj?.success) {
  //         // Filters out other received data from SSO server
  //         const newUser = {
  //           displayName: resObj.user.displayName,
  //           name: resObj.user.name,
  //           email: resObj.user.email,
  //           pictureLink: resObj.user.pictureLink
  //         }
  //         setUser(newUser);
  //       }
  //     }).catch(err => {console.error(err)});
  //   } catch (e) {
  //     console.log(e);
  //   }
    
  // };

  const fonts = [
    // 'Slackey',
    'Fugaz One'
  ];

  const [currentFont] = useState(fonts[0]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createFavicon = useCallback(async () => {
    // Check if canvas exists
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, 32, 32);

    // Set background with rounded rect
    ctx.fillStyle = '#009fff';
    const cornerRadius = 6;
    ctx.beginPath();
    ctx.moveTo(cornerRadius, 0);
    ctx.lineTo(32 - cornerRadius, 0);
    ctx.quadraticCurveTo(32, 0, 32, cornerRadius);
    ctx.lineTo(32, 32 - cornerRadius);
    ctx.quadraticCurveTo(32, 32, 32 - cornerRadius, 32);
    ctx.lineTo(cornerRadius, 32);
    ctx.quadraticCurveTo(0, 32, 0, 32 - cornerRadius);
    ctx.lineTo(0, cornerRadius);
    ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
    ctx.closePath();
    ctx.fill();

    // Explicitly load font before drawing
    await document.fonts.load(`26px "${currentFont}"`);

    // Draw text
    ctx.fillStyle = 'white';
    ctx.font = `26px "${currentFont}"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('M', 16, 6);

    // Create favicon
    const faviconURL = canvas.toDataURL();
    let link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    (link as HTMLLinkElement).type = 'image/x-icon';
    (link as HTMLLinkElement).rel = 'icon';
    (link as HTMLLinkElement).href = faviconURL;
    document.getElementsByTagName('head')[0].appendChild(link);

    link = document.querySelector("link[rel~='mask-icon']") || document.createElement('link');
    (link as HTMLLinkElement).type = 'image/x-icon';
    (link as HTMLLinkElement).rel = 'mask-icon';
    (link as HTMLLinkElement).href = faviconURL;
    document.getElementsByTagName('head')[0].appendChild(link);

    link = document.querySelector("link[rel~='apple-touch-icon']") || document.createElement('link');
    (link as HTMLLinkElement).type = 'image/x-icon';
    (link as HTMLLinkElement).rel = 'apple-touch-icon';
    (link as HTMLLinkElement).href = faviconURL;
    document.getElementsByTagName('head')[0].appendChild(link);


    const response = await fetch('/manifest.json');
    if (!response.ok) {
      console.error('Failed to fetch manifest.json');
      return;
    }
    const manifest = await response.json();
    // Add favicon to manifest
    let newManifest = manifest;
    newManifest.icons[0].src = faviconURL;
    let manifestTag = document.querySelector("link[rel='manifest']");
    const blob = new Blob([JSON.stringify(newManifest)], { type: 'application/json' });
    (manifestTag as HTMLLinkElement).href = URL.createObjectURL(blob);
  }, [currentFont]);

  useEffect(() => {
    // if (Object.keys(user)?.length === 0) {
    //   GetUser();
    // }

    // Create favicon after a short delay to ensure font loads
    const timer = setTimeout(createFavicon, 50);

    return () => {
      clearTimeout(timer)
    }
  }, [createFavicon])

  // Test switch

  // const devCall = () => {
  //   if(process.env.REACT_APP_DEBUG) return <button className="button" type="button" onClick={() => devAxiosCall()}>Test session</button>
  // };

  // const devAxiosCall = async () => {
  //   return axios.get((process.env.REACT_APP_SSO_API_BASE_URI + '/test'), config)
  //   .then((res) => {
  //     console.log(res);
  //   }).catch(err => console.error(err));
  // }

// TODO: Add change of font (Part of an easter egg themes)

  return (
    <Router>
      <div className='App' id="home">
        {/* <MouseGradient className=""> */}
        {/* <BackgroundGradient> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignInPage />} />   
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        {/* </BackgroundGradient> */}
        {/* </MouseGradient> */}
        {/* {devCall()} */}
      </div>
      <canvas 
        ref={canvasRef}
        width="32" 
        height="32" 
        className="hidden"
      />
    </Router>
  )
}

export default App;