import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";

import IssueList from "./IssueList";
import Issue from "./Issue";
import PublicIssue from "./PublicIssue";
import PublicList from "./PublicList";

export default function Public() {
    const { getAllIssues, issueListState:{issues}, username } = useContext(UserContext)


    return(
        <div className="public">
            <h1>Public Issues</h1>
            <PublicList issues={issues} />
        </div>
    )
}