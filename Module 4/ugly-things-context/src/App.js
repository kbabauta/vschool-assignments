import React from "react"
import UglyThingList from "./UglyThingList"
import Form from "./Form"
import "./styles.css"

function App() {
    return (
        <div className="container">
            <h1>Ugly Things</h1>
            <Form/>
            <UglyThingList/>
        </div>
    )
}

export default App