import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";

export default function Profile(props) {
    const {
        user: {
            username
        },
        getUserIssues,
        addIssue,
        editIssue,
        deleteIssue,
        issues,
        addVote,
        removeVote,
        addComment
    } = useContext(UserContext)
    console.log(issues)

    const { location } = props

    return (
        <div className="profile">
            <h1>Hello {username[0].toUpperCase() + username.substring(1)}!</h1>
            <h3>Add an Issue</h3> 
            <IssueForm submit={addIssue} btnText ="Add Issue"/>
            <h3>Your Issues</h3>
            <IssueList 
                issues={issues} 
                editIssue={editIssue} 
                deleteIssue={deleteIssue}
                addVote={addVote}
                removeVote={removeVote}
                addComment={addComment}
                getUserIssues={getUserIssues}
                location={location}
            />
        </div>
    )
}