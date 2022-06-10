import React from 'react'

function Navbar(props){
    return (
        <div>
            <ul id="nav">
                <li>
                    <button 
                    type="button" 
                    className="link-button"
                    onClick={() => this.setState({showSomething: true})}>Contact Us
                    </button></li>
                <li>
                    <button 
                    type="button" 
                    className="link-button"
                    onClick={() => this.setState({showSomething: true})}>Sample Post
                    </button></li>
                <li>
                    <button 
                    type="button" 
                    className="link-button"
                    onClick={() => this.setState({showSomething: true})}>About
                    </button></li>
                <li>
                    <button 
                    type="button" 
                    className="link-button"
                    onClick={() => this.setState({showSomething: true})}>Home
                    </button></li>
            </ul>
        </div>
    )
}

export default Navbar