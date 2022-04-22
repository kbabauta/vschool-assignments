import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Public from "./components/Public";
import { UserContext } from "./context/UserProvider"


function App() {
  const { token, logout } = useContext(UserContext)
  return(
    <div className="app">
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          exact path="/"
          render={() => token? <Navigate to="/profile" /> : <Auth />}
        />
        <Route 
          path="/profile"
          render={() => <Profile/>}
        />
        <Public 
          path="/public"
          render={() => <Public/> }
        />
      </Routes>
    </div>
  )
}

export default App;
