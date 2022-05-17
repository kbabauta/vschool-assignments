import React from "react"
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const {logout} = props

    return(
        <div className="navbar">
            <ul className="navbar-links">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/public">Public</Link></li>
                <li><Link to="/" onClick={logout}>Logout</Link></li>
            </ul>
        </div>
    )
}