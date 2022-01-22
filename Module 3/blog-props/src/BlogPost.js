import React from 'react'

function Footer(props){
    return (
        <div className="blogPost">
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
            <p>Posted by {props.author} on {props.date}</p>
        </div>
    )
}

export default Footer