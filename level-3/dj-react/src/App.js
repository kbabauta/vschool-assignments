import React from 'react'
import './App.css'
import Turntable from './Turntable'

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>DJ React</h3>
                <p>By Kevin Babauta</p>
                <Turntable />
            </div>
        )
    }
}

export default App