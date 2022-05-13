import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

//Create User Axios
const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        userIssues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [issueComments, setIssueComments] = useState([])

    const [issueListState, setIssueState] = useState([])

    // Signup
    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({ 
                    ...prevUserState, 
                    user, 
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    // Login
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            getAllIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    }

    // Logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState(initState)
        window.location.reload()
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthError(){
        setUserState(prevState => ({...prevState, errMsg:""}))
    }

    //Get all Issues
    function getAllIssues(){
        userAxios.get("/api/issues")
        .then(res => setAllIssues(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }   

    // Get User Issues
    function getUserIssues() {
        userAxios.get(`/api/issues/user/${userState.user._id}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    userIssues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //Add Issue
    function addIssue(newIssue){
        userAxios.post("/api/issues", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Add comment
    function addComment(newComment, issueId) {
        userAxios.post(`/api/comment/${issueId}`, newComment)
        .then(res => setIssueComments(prev => [...prev, res.data]))
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Get issue comments
    function getIssueComments(issueId) {
        userAxios.get(`/api/comment/issue/`)
    }


    
    // Delete User Issue (not functional)
    function deleteIssue(id){
        userAxios.delete(`/api/issues/${id}`)
        .then(res => {
            getUserIssues()
        })
        .catch(err => console.log(err.response.data.errMsg))
    }
    

    return(
        <UserContext.Provider
            value={{
                ...userState,
                issueListState,
                signup,
                login,
                logout,
                addIssue,
                addComment,
                getAllIssues,
                getUserIssues,
                deleteIssue,
                addComment,
                resetAuthError,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}