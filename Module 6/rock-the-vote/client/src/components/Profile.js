import React, { useContext, useEffect } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from "../context/UserProvider";

import Issue from './Issue'

export default function Profile(props) {
    const { user: { username }, userIssues, getUserIssues } = useContext(UserContext)

    useEffect(() => {
        getUserIssues()
        console.log("Use use effect, it's super effective")
    }, [])
    
    return(
        <div className="profile">
            <h1>{username[0].toUpperCase() + username.substring(1)}'s Profile</h1>
            <div className="issueList">
                {[...userIssues].reverse().map(issue => (
                    <Link to={`/${issue._id}`} key={issue._id} className='issue-link'>
                        <Issue {...issue} />
                    </Link>
                ))}
            </div>
        </div>
    )
}