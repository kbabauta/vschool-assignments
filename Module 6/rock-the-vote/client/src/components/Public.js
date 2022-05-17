import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

import IssueList from "./IssueList";

export default function Public(props) {
    const { 
        issues,
        addVote,
        removeVote,
        addComment,
     } = useContext(UserContext)
     console.log(issues)

     const { location } = props

     return (
         <div className="public">
             <IssueList 
                issues={issues}
                addVote={addVote}
                removeVote={removeVote}
                addComment={addComment}
                location={location}
             />
         </div>
     )
}