import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function Issue(props) {
    const { title, description, _id, user } = props
    
    // const {deleteIssue} = useContext(UserContext)

    return(
        <div className='issue'>
            <h2> {title} </h2>
            <h3> {description} </h3>
            {/* <button onClick={() => deleteIssue(_id)}>x</button> */}
        </div>
    )

}