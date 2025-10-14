import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  //bungkus component <App /> di dalam BrowserRouter
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
