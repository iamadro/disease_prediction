import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AccessProvider } from './AcessProvider/AcessProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>

    <AccessProvider>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
    </AccessProvider>
   
  </React.StrictMode>,
)
