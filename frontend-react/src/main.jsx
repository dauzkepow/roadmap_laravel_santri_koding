import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

//import AuthProvider dengan metode desctuct dari context yang sudah dibuat sebelumnya
import { AuthProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  //bungkus component <App /> di dalam BrowserRouter
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>,
)
