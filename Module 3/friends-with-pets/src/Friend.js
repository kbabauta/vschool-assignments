import React from 'react'
import Pet from './Pet'

function Friend(props){
    const petList = props.pets.map(pet =>{
        return(<Pet name={pet.name} breed={pet.breed} />)
    })
    console.log(props)
    console.log(props.pets)
    return (
        <div className='friend'>
            <h3>My name is {props.name}</h3>
            <div>I am {props.age} years old</div>
            <div>My pets are: {petList}</div>

        </div>
    )
}

export default Friend 