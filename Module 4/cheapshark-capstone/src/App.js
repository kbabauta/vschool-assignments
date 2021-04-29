import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import DealsList from "./DealsList"
import Footer from "./Footer"

function App() {
    return(
        <div>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/deals-list">
                    <DealsList/>
                </Route>
            </Switch>
        </div>
    )
}

export default App