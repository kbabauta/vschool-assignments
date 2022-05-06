import React, { useState } from 'react'
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
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

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
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    //Get all Issues
    function getAllIssues(){
        userAxios.get("/api/issues")
        .then(res => {
            setIssueState(res.data)
            getUserIssues(userState.user._id)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Get User Issues
    function getUserIssues() {
        userAxios.get("/api/issues/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
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
    function addComment(newComment) {
        userAxios.post("/api/issues/comments", newComment)
            .then(res => console.log(res))
            .catch(err => console.log(err.response.data.errMsg))
    }


    
    // Delete User Issue (not functional)
    function deleteIssue(issueId){
        userAxios.delete(`/api/issues/${issueId}`)
        .then(res => {
            setIssueState(prevState => prevState.filter(issue => issue._id !== issueId))
        })
    }
    
    // Edit Issue
    function editIssue(updates, issueId){
        userAxios.put(`/api/issues/${issueId}`, updates)
            .then(res => {
                setIssueState(prevList => prevList.map(issue => issue._id !== issueId ? issue : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg:""
        }))
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
                editIssue,
                resetAuthError
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}