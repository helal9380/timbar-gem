import React from 'react'
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
   <Toaster></Toaster>
  </React.StrictMode>,
)
