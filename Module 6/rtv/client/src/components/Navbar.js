import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props){
    const { logout } = props
    const token = localStorage.getItem("token")

    return (
        <div className="navbar">
            <ul className="navbar-links">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/issues">All Issues</Link></li>
                <li><Link to="/newIssue">Create New Issue</Link></li>
                <li><Link to="/" onClick={logout}>Logout</Link></li>
            </ul>
        </div>
    )

}