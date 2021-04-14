import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Navbar from "./Navbar"
import "./styles.css" 

function App() {
    return (
        <div>    
            <Navbar/>

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    )
}

export default App