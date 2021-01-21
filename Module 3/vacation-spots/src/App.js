import React from "react"
import VacationSpot from "./VacationSpot"
import './CardStyle.css'

function App() {
    return(
        <div>
            <VacationSpot
            imgURL="https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            place="Seattle, Washington"
            price="500"
            timeToGo="Summer"/>

            <VacationSpot 
            imgURL="https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            place="Seoul, South Korea"
            price="2000"
            timeToGo="Fall"/>

            <VacationSpot
            imgURL="https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            place="Italy"
            price="4000"
            timeToGo="Spring"
            />

            <VacationSpot 
            imgURL="https://images.pexels.com/photos/56924/pexels-photo-56924.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            place="Lake Tahoe"
            price="2500"
            timeToGo="Anytime"
            />
        </div>
    )
}

export default App