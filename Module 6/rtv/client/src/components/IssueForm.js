import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { IssueContext } from '../context/IssueProvider'




export default function IssueForm(props){

    const { user, addIssue } = useContext(UserContext)
    const { issueState, setIssueState } = useContext(IssueContext)
    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        let dateAdded = new Date().toString()
        const newIssue = {
            title: title,
            description: description,
            dateAdded: dateAdded,
            likes: [],
            dislikes: [],
            user: user._id,
        }
        addIssue(newIssue)
        setIssueState(prevState => [ ...prevState, newIssue ])
        console.log(issueState)
        setTitle("")
        setDescription("")
        history.push("/issues")
    }

    return (
        <div className='issue-form-container'>
            <form onSubmit={handleSubmit} className='form-container'>
                <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className='inputs'
                />
                <textarea
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    wrap='hard'
                    rows='10'
                    col='30'
                    resize='vertical'
                />
                <input type="submit" value="Post" />
            </form>
        </div>
    )


}