import React from "react"
import ReactDOM from "react-dom"
import {UglyContextConsumer, UglyContextProvider} from "./uglyContext"

import App from "./App"

ReactDOM.render(
    <UglyContextProvider>
        <App />
    </UglyContextProvider>,
    document.getElementById("root")
)