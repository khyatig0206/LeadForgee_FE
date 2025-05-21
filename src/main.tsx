import { createRoot } from "react-dom/client";
import React from 'react'
import App from "./App";
import "./index.css";
import { InlineWidget } from "react-calendly";
import { ToastContainer } from 'react-toastify'

// Add FontAwesome script
const fontAwesomeScript = document.createElement('script');
fontAwesomeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js';
fontAwesomeScript.defer = true;
document.head.appendChild(fontAwesomeScript);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </React.StrictMode>,
)