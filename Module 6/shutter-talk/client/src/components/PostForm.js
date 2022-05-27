import React, { useState } from 'react'

export default function PostForm(props) {
    
    const initInputs = {
        title: "",
        description: "",
        imgUrl: ""
    }

    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [ name ]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addPost(inputs)
        setInputs(initInputs)
    }

    const { title, description, imgUrl } = inputs

    return (
        <div className='post-form' onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea 
                type="textarea"
                name='description'
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input 
                type="text"
                name='imgUrl'
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <button>Post</button>
        </div>
    )
}
