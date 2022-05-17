import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Public from "./components/Public";
import { UserContext } from "./context/UserProvider"

export default function App() {
  const { token, logout, getAllIssues } = useContext(UserContext)

  return(
      <div className="app">
        {token && <Navbar getAllIssues={getAllIssues} logout = {logout}/>}
        <Routes>
          <Route 
          path="/" 
          element={token ? <Navigate to="/profile" /> : <Auth />} 
          />
          <Route 
            path="/profile" 
            element={token ? <Profile /> : <Auth />}
          />
          <Route 
            path="/public" 
            element = {<Public/>}
          />
        </Routes>
      </div>
  )
}