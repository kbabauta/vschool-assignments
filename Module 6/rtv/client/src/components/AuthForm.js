import React from 'react'

export default function AuthForm(props){
    const {
        handleChange,
        handleLogin,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form className='auth-form' onSubmit={handleLogin}>
            <input
                type="text"
                value={username}
                name="username"
                id="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <input name='submit' type="submit" value={btnText} />
            <p style={{color: "red"}}> { errMsg } </p>
        </form>
    )
}