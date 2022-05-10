import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function PublicIssue(props){
    const {title, description, _id} = props

    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )

}