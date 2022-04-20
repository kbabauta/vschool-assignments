import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <Link className="homeStyle" to="/" style={{marginRight: 5}}>Home</Link>
            <Link className="homeStyle" to="/about" style={{marginRight: 5}}>About</Link>
            <Link className="homeStyle" to="/contact" style={{marginRight: 5}}>Contact</Link>
        </div>
    )
}

export default Navbar