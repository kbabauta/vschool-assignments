import React, { useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function PublicIssue(props){
    const {issue, description, _id} = props
    const {user} = useContext(UserContext)

    return(
        <div>
            <h1>{issue}</h1>
            <p>{description}</p>
        </div>
    )

}