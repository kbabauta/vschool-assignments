import React, { useContext } from 'react'
import PublicIssue from './PublicIssue'
import { UserContext } from '../context/UserProvider'
import Issue from './Issue'

export default function PublicList() {
    const { issueListState: { issues }, username } = useContext(UserContext)
    return (
        <div className='public-list'>
            {issues.map(issue => <Issue {...issue} user={username} key={issue._id}/>)}
        </div>
    )
}