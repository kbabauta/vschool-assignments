import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Footer(props){
    return(
        <ThemeContextConsumer>
            {context => (
                <footer className={`${context.theme}-footer`}>
                    <p>This is the {context.theme} theme!</p>
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer