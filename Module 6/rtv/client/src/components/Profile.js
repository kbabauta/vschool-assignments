import React from "react";
import IssueList from "./IssueList"

export default function Profile(props){
    
    const { username } = props

    return (
        <>
            <div className="profile">
                <h1>Welcome { username } </h1>
                <div className="profile-issue-container">
                    <h2>Your posts</h2>
                    <IssueList/>
                </div>
            </div>
        </>
    )


}