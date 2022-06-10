import React from 'react'
import Navbar from './Navbar'


function Header(props){
    return(
        <div>
            <Navbar />
            <div className="header">
                <h1 className="headerTitle">Clean Blog</h1>
                <h3>A Blog created with React</h3>
            </div>
        </div>
    )
}

export default Header