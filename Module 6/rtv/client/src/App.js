import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Profile from "./components/Profile"
import IssueList from "./components/IssueList"
import IssueForm from "./components/IssueForm"
import Issue from "./components/Issue"
import { UserContext } from "./context/UserProvider"

export default function App(){
    const { user, token, logout, login, signup, addIssue } = useContext(UserContext)

    return (
        <div className="app">
            <Navbar logout={logout}/>
            <Routes>
                <Route 
                    path="/"
                    element={token ? <Navigate to="/issues"/> : <Auth login={login} signup={signup} />}
                />
                <Route 
                    path="/profile"
                    element={<Profile username={user.username} />}
                />
                <Route 
                    path="/issues"
                    element={ <IssueList/> }
                />
                <Route 
                    path="/newissue"
                    element={ <IssueForm addIssue={addIssue} /> }
                />
                <Route 
                    path="/issues/:issueId"
                    element={ <Issue/> }
                />

            </Routes>



        </div>
    )



}