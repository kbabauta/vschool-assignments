import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { IssueContext } from '../context/IssueProvider'

export default function Issue(props){

    const { issueId } = useParams()
    
    const { currentIssue, getIssueById, commentState, getComments  } = useContext(IssueContext)

    useEffect(() => {
        getIssueById(issueId)
        getComments(issueId)
    }, [])
    console.log(currentIssue)

    return (
        <div className='issue-page-container' >
            <div className='issue-container'>
                <h2 style={{marginBottom: '20px', border: 'solid rgb(100, 100, 100) 1px'}}>
                    {currentIssue.title}
                </h2>

                <p>{currentIssue.description}</p>
                
                <CommentForm id={issueId} />
                    {commentState.map (comment => {
                        return (
                            <Comment key={comment._id}
                                description={comment.description}
                                username={comment.username}
                            />
                        )
                    })}
            </div>
        </div>
    )

}