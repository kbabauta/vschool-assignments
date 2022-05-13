import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

import IssueList from "./IssueList";

export default function Public() {
    const { user, getAllIssues, issues } = useContext(UserContext)

    return (
        <div className="public">
            <h1>Welcome {user.username}</h1>
            <div className="public-issue-list">
                <IssueList issues={issues} getAllIssues={getAllIssues}/>
            </div>
        </div>
    )
}