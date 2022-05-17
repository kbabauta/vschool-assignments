import React from 'react'
import Issue from './Issue'

export default function IssueList(props) {
    const { issues, editIssue, deleteIssue, addVote, removeVote, addComment, getUserIssues, location } = props

    return (
        <div className='issue-list'>
            { issues ? issues.map ((issue, index) => {
            return <Issue 
            issue = {issue} 
            key={index} 
            editIssue={editIssue} 
            deleteIssue={deleteIssue} 
            addVote={addVote}
            removeVote={removeVote}
            addComment={addComment}
            getUserIssues={getUserIssues}
            location={location}

            /> 
                 }
            ) : "" }
        </div>
    )
    
}