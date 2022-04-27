import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function Issue(props) {
    const { title, description, _id, user } = props
    
    const {deleteIssue} = useContext(UserContext)

    return(
        <div className='issue'>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => deleteIssue(_id)}>x</button>
        </div>
    )

}