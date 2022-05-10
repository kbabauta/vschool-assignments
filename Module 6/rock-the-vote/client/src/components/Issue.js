import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function Issue(props) {
    const { title, description, _id, created } = props
    const { deleteIssue, user:{username} } = useContext(UserContext)
    return(
        <div className='issue'>
            <h1> {title}  </h1>
            <p> {description}</p>
            <sub>Posted by {username} <br/></sub>
            <sub>Created {created} </sub>
        </div>
    )
}