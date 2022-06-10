import React from "react"
import {Link} from "react-router-dom"

function NavBar() {
    return(
        <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/deals">Deals List</Link>
        </nav>
    )
}

export default NavBar