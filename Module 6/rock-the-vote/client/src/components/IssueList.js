import React, {useContext} from 'react'
import Issue from '../components/Issue.js'
import { UserContext } from '../context/UserProvider.js'

export default function IssueList(props) {
    return (
        <div className='issue-list'>
            {props.issues ? 
                props.issues.map(issue => {
                    return <Issue {...issue} key={issue._id} />
                }
            ) : "FINALLY"    
        }
        </div>
    )
}