import React from "react"
import {Switch, Route} from "react-router-dom"

import Home from "./components/Home"
import Deals from "./components/BestDeals/Deals"
import NavBar from "./components/Navbar"
import GameList from "./components/GamesList"
import GameInfo from "./components/GameInfo/GameInfo"
import "./styles.css"

function App() {
    return(
        <div>
            <NavBar/>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/deals">
                    <Deals/>
                </Route>

                <Route path="/search">
                    <GameList/>
                </Route>

                <Route path="/game/:gameID">
                    <GameInfo/>
                </Route>
            </Switch>
        </div>
    )
}

export default App