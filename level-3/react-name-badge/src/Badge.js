import React from 'react'
import './Badge.css'

function Badge (props) {
    const colors = {
        0 : "aqua",
        1 : "brown",
        2 : "cherry",
        3 : "green",
        4 : "cyan",
        5 : "mango",
        6 : "violet"
    }
    return (
        <div className='badge-container'>
            <div style={{backgroundColor: colors[Math.floor(Math.random() * 6)]}} className="b-container" >
                <h1>Hello My Name Is {props.badge.fName} {props.badge.lName}</h1>
                <p><b>Place of Birth: </b>{props.badge.birthPlace}</p>
                <p><b>Email:</b> {props.badge.email}</p>
                <p><b>Phone: </b>{props.badge.phone}</p>
                <p><b>Favorite Food: </b>{props.badge.favFood}</p>
                <p><b>About Me: </b>{props.badge.about}</p>
            </div>

        </div>
        
    )
}

export default Badge