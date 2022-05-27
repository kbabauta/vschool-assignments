import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import PostEdit from '../components/PostEdit'

export default function Post(props) {
    
    const [ canEdit, toggleEdit ] = useState(false)

    const { addPost, deletePost } = useContext(UserContext)
    const { title, description, imgUrl, _id } = props

    return (
        <div className='post'>
            {
                !canEdit?
                <>
                    <h1>{ title }</h1>
                    <h3>{ description }</h3>
                    <img src={imgUrl} alt="post-image" width={300}/>
                    <button onClick={() => deletePost(_id)}>Delete Post</button>
                    <button onClick={() => toggleEdit (prevState => !prevState)}>Edit Post</button> 
                </>
                :
                <>
                    
                </>
            }
        </div>
    )
}
