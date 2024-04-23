import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <BrowserRouter>

 <ToastContainer/>
 
 <App />
   
 
 </BrowserRouter>

//  </Auth0Provider>

//  <Auth0Provider
//    domain="dev-nezvo4lzqbzis6au.us.auth0.com"
//    clientId="UENOAXIb6cxqoUuzPPRIbVo64LMfVWSG"
//    authorizationParams={{redirect_uri: window.location.origin}}
//  >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
