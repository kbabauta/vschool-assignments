import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { IssueContext } from '../context/IssueProvider'

export default function Issue(props){

    const { issueId } = useParams()
    
    const { currentIssue, getIssueById,  } = useContext(IssueContext)
}