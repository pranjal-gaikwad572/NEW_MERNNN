
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'; 
import { AuthProvider } from './store/auth';





// const router = createBrowserRouter([
//     {
//     path: '/',
//     Element : <div>Helllo World</div>
//     }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 <AuthProvider>
<BrowserRouter>

<ToastContainer/>
 
 <App />
   
 </BrowserRouter>

 </AuthProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();