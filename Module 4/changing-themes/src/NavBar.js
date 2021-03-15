import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function NavBar(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-nav`} id="nav">
                    <p>About</p>
                    <p>Home</p>
                    <p>Contact</p>
                </div>
            )}

        </ThemeContextConsumer>
    )
}

export default NavBar