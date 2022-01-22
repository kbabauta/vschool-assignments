import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ThemeContextProvider} from './ThemeContext'
import './styles.css'

ReactDOM.render(
    <ThemeContextProvider>
        <App/>
    </ThemeContextProvider>, document.getElementById("root")
)