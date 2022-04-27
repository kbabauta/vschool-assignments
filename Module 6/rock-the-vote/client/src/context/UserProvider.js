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
        issue: []
    }

    const [userState, setUserState] = useState(initState)

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
            .catch(err => console.log(err.response.data.errMsg))
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
        .catch(err => console.log(err.response.data.errMsg))
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
                    issues: [...prevState.issue, res.data]
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

    // Delete User Issue
    function deleteIssue(id){
        userAxios.delete(`/api/issues/${id}`)
            .then(res => {
                setUserState((prevUserState) => ({
                    ...prevUserState,
                    issues: [prevUserState.issue.filter((issue) => issue._id !== id)]
                }))
            })
    }
    
    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                addComment,
                deleteIssue,
                getUserIssues
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}