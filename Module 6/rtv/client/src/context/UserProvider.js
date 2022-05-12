import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const UserContext = React.createContext()

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
    let history = useNavigate()

    // Sign Up
    function signup(credentials){
        console.log("credentials", credentials)
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                if ( user && token ) {
                    localStorage.setItem("token", token)
                    localStorage.setItem("user", JSON.stringify(user))
                    setUserState(prevUserState => ({
                        ...prevUserState,
                        user,
                        token
                    }))
                    .then(history.push("/issues"))
                }
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }

    //login
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

    //logout
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    // get issue post by user
    function getUserIssues(){
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    // add issue post
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

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                getUserIssues,
                userAxios
            }}>
            { props.children }
        </UserContext.Provider>
    )
}