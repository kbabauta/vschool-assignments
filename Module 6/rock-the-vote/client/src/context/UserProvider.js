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
    const [issueComments, setIssueComments] = useState([])

    // const [issueListState, setIssueState] = useState([])

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
        .then(() => getUserIssues())
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
        userAxios.get("/api/issue")
        .then( res => {
            setUserState(prevState => {
                return {
                    ...prevState,
                    issues: res.data,
                    comments: res.data
                }
            })
        })

        .catch (err => console.log(err.response.data.errMsg))
    }   

    // Get User Issues
    function getUserIssues() {
        userAxios.get(`/api/issue/user`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data,
                    comments: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //Add Issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Edit issue
    function editIssue(updates, issueId) {
        userAxios.put(`/api/issue/${issueId}`, updates)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: prevState.issues.map(issue => issue._id !== issueId ? issue : res.data)
                }))
            })
            .catch (err => console.log(err.response.data.errMsg))
    }

    // // Delete User Issue (not functional)
    function deleteIssue(issueId){
        userAxios.delete(`/api/issue/${issueId}`)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId),
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

    function updateVoteCount(updatedIssue) {
        if (!updatedIssue) return
        const index = userState.issues.findIndex(issue => issue._id === updatedIssue._id)
        if (index === -1) {
            console.log("Issue not found")
        } else {
            setUserState(prevState => ({
                ...prevState,
                issues: [
                    ...prevState.issues.slice(0, index),
                    Object.assign({}, prevState.issues[index], { votes: updatedIssue.votes }), ...prevState.issues.slice(index + 1)
                ]
            }))
        }
    }
    

    // Add vote
    function addVote(issueId) {
        userAxios.put(`/api/issue/vote/${issueId}/increment`)
            .then(res => updateVoteCount(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    // Delete Vote
    function removeVote(issueId){
        userAxios.put(`/api/issue/vote/${issueId}/decrement`)
            .then( res => updateVoteCount(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

    

    return(
        <UserContext.Provider
            value={{
                ...userState,
                issueComments,
                signup,
                login,
                logout,
                addIssue,
                addComment,
                getAllIssues,
                getUserIssues,
                editIssue,
                deleteIssue,
                resetAuthError,
                addVote,
                removeVote,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}