import React, {useContext, useEffect}  from "react";
import { UserContext } from "../context/UserContext";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";

export default function Profile() {

    const {
        user: {
            username
        },
        getUserIssues,
        addIssue,
        issues,
    } = useContext(UserContext)

    useEffect(getUserIssues, [])

    return (
        <div className="profile">
            <h1>Welcome { username[0].toUpperCase() + username.substring(1) }!</h1>
            <h3>Add an Issue ➕</h3> 
                <IssueForm addIssue={addIssue}/>
            <h3>Your Issues 📓</h3>
                <IssueList issues={issues} />
        </div>
    )
    
}