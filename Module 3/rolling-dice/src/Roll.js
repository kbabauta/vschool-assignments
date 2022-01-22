import React from "react"
import "./index.css"

function Roll(props){
    return (
        <div className="dice-display">
            <h1 className="dice">
                {props.display}
            </h1>
            <p>Click to Roll</p>
            <button onClick={props.handleClick}/>
            </div>
    )
}

export default Roll