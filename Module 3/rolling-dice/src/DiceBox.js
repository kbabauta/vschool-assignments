import React from "react"
import "./index.css"
import Roll from "./Roll.js"

class DiceBox extends React.Component{
    constructor (){
        super()
        this.state = {
            roll: 6
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        let max = 6
        let sum = Math.floor((Math.random() * max) + 1)
        this.setState({
            roll: sum
        })
    }
    render(){
        return (
            <div>
                <Roll handleClick={this.handleClick} display={this.state.roll}></Roll>
            </div>
        )
    }
}



export default DiceBox