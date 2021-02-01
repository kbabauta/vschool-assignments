import React from "react"
import "./Mark.css"

const Mark = (props) => {
    return (
        <div className="mark">
            <h1>{props.name}</h1>
            <img src={props.img} alt="" />
        </div>
    )
}

export default Mark
