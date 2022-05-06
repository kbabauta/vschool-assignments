import React, { useContext, useEffect } from "react";
import IssueForm from "./IssueForm";
import Issue from "./Issue";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";

export default function Profile() {
    const {
        user: {username},
        addIssue,
        issues,
        getUserIssues
    } = useContext(UserContext)
    console.log(issues)
    useEffect(() => {
        getUserIssues()
    }, [issues.length])

    return (
        <div className="profile">
            <h1>Welcome {username}</h1>
            <h3>Post an Issue</h3>
            <IssueForm addIssue = {addIssue}/>
            <h4>Your Issues</h4>
            <IssueList issues={issues}/>
            {/* {issues.map(issue => <Issue{...issue} key={issue._id} />)} */}
        </div>
    )
}