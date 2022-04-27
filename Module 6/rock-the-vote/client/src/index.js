import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.js'
import UserProvider from './context/UserProvider.js'
import './css/styles.css'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App/>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
)