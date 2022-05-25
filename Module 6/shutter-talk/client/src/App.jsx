import React from 'react'
import Auth from './components/Auth'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Public from './components/Public'

export default function App() {
  return (
    <div>
        <Auth/>
        <Navbar/>
        <Profile/>
        <Public/>
    </div>
  )
}

