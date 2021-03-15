import React from 'react'
import {ThemeContextConsumer} from './ThemeContext'

function Main (props){
    return (
        <ThemeContextConsumer>
            {context =>(
                <div className={`${context.theme}-main`}>
                    <h1 class={context.toggleTheme} className={`${context.theme}-theme`}>Press to toggle to the {context.theme} theme!</h1>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main