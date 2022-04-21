import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'

export default function App() {

  return(
    <Switch>
      <Route
        exact path = "/"
      />

      <Route 
        path="/profile"
        render={() => <Profile />}
      />

      <Public 
        path="/public"
        render={() => <Public />}
      />
    </Switch>
  )
}