import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Button (props) {
    return (
        <ThemeContextConsumer>
            {context =>(
                <div className={`${context.theme}-button`}>
                    <button onClick = {context.toggleTheme} className={`${context.theme}-button-2`}>Toggle Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Button