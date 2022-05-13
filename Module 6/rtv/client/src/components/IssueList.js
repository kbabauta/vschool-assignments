import React, { useContext, useEffect } from "react";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";
import { Link } from "react-router-dom";

export default function IssueList(props){

    const { getIssues, issueState, editIssue } = useContext(IssueContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        getIssues()
    }, [])

    const handleLike = (issue) => {
        const { _id, likes, dislikes } = issue
        if(likes.includes(user._id)){
            issue.likes = likes.filter(voter => voter !== user._id)
            issue.score--
            editIssue(issue, _id)
        } else {
            if(dislikes.includes(user._id)) {
                issue.dislikes = dislikes.filter(voter => voter !== user._id)
                issue.score++
            }
            issue.likes.push(user._id)
            issue.score++
            console.log(issue)
            editIssue(issue , _id)
        }
    }

    const handleDislike = (issue) => {
        const { _id, likes, dislikes } = issue
        if(dislikes.includes(user._id)) {
            const updatedIssue = {...issue}
            const newArray = dislikes.filter(voter => voter !== user._id)
            updatedIssue.dislikes = newArray
            updatedIssue.score++
            editIssue(updatedIssue, _id)
        } else {
            const updatedIssue = {...issue}
            if(likes.includes(user._id)) {
                const newArray = likes.filter(voter => voter !== user._id)
                updatedIssue.likes = newArray
                updatedIssue.score--
            }
            updatedIssue.dislikes.push(user._id)
            updatedIssue.score--
            console.log(updatedIssue)
            editIssue(updatedIssue, _id)
        }
    }

    return (
        <ul className="issue-container">
            {issueState.map (issue => {
                return (
                    <li key={issue.id} className="list-container">
                        <div className="vote-container">
                            <button onClick={() => handleLike(issue)}>Like</button>
                            <h2>{issue.score}</h2>
                            <button onClick={() => handleDislike(issue)}>Dislike</button>
                        </div>
                        <Link to={`/issues/${issue._id}`}>
                            {issue.title}
                        </Link>
                        <p>{issue.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}