import React from "react"
import {Link} from "react-router-dom"
import "./styles.css"

function Header() {
    return (
        <div>
            <nav>
                <header>
                    <Link className="home" to="/">Home</Link>
                    <Link className="deals-list" to="/deals-list">Deals List</Link>
                </header>
            </nav>

        </div>
    )
}

export default Header