import React, {useContext} from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/Auth"
import { UserContext } from "./context/UserContext"
import Navbar from "./components/Navbar"

export default function App() {
  const { token, logout } = useContext(UserContext)
    return (
      <div>
        <Navbar logout={logout}/>
        <Routes>
          <Route 
          path="/"
          element={token ? <Navigate to="/profile" /> : <Auth />} />
        </Routes>
      </div>
    )

}