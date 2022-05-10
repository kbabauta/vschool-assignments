import React from 'react'

export default function Comment(props) {
    const {username, description} = props

    return(
        <div className='comment-container'>
            <h3>Posted by {username}</h3>
            <p>{description}</p>
        </div>
    )
}