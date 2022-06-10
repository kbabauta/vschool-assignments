import axios from "axios"
import React from "react"
import "./App.css"
import Mark from "./Mark.js"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            marks: []
        }
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response =>{
            const marks = response.data
            this.setState({marks})
        })
    }

    render(){
        const marks = this.state.marks.map(mark => {
            return <Mark 
            name={mark.name} 
            img={mark.image} 
            />
        })

        return (
            <div className="container">
                <h1>Don Corleone's Hit List</h1>
                <div className="mark-container">
                    {marks}
                </div>
            </div>
        )
    }
}

export default App