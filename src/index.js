import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';

// import {App} from './App';
import {App} from "./App.js";
import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIaBa2jLva3Glew148-TZZaQuZyXgdeo",
  authDomain: "sustainablyyours-15bbb.firebaseapp.com",
  projectId: "sustainablyyours-15bbb",
  storageBucket: "sustainablyyours-15bbb.appspot.com",
  messagingSenderId: "671290880887",
  appId: "1:671290880887:web:b3cd7dc02c4cc8ddb2a772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </BrowserRouter>
);