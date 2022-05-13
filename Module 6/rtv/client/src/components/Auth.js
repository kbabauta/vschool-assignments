import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "", password: "" }

export default function Auth(){
    const { login, signup, errMsg } = useContext(UserContext)
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        console.log("inputs", inputs)
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    return(
        <div className='auth-container'>
            <h1>Rock The Vote</h1>
                { !toggle ?
                    <>
                        <AuthForm 
                            handleChange={handleChange}
                            handleLogin={handleSignup}
                            inputs={inputs}
                            btnText="Sign Up"
                            errMsg={errMsg}
                        />
                        <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
                    </>    
                :
                    <>
                        <AuthForm 
                            handleChange={handleChange}
                            handleLogin={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg={errMsg}
                        />
                        <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                    </>
            }
        </div>
    )


}