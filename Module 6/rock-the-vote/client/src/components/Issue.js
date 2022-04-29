import React, { useContext } from 'react'
// import { UserContext } from '../context/UserProvider.js'

export default function Issue(props) {
    const { title, description, _id, user } = props
    
    // const {deleteIssue} = useContext(UserContext)

    return(
        <div className='issue'>
            <h1> {title}  </h1>
            <h4> {description}</h4>
            {/* <button onClick={() => deleteIssue(_id)}>x</button> */}
        </div>
    )

}