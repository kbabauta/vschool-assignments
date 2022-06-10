import React from "react" 

function VacationSpot(props){

    let season = props.timeToGo
    let price = props.price

    if (price < 600){
        price = '$'
    } else if (price > 100 && price < 500){
        price = '$$'
    } else {
        price = '$$$'
    }


    if (season === 'Winter'){
        season = 'royalblue'
    } else if (season === 'Summer'){
        season = 'gold'
    } else if (season === 'Fall'){
        season = 'orangered'
    } else if (season === 'Spring'){
        season = 'pink'
    } else {
        season = 'darkgreen'
    }
    return(
        <div style={{background:[season]}}className="vacation-spot">
            <img src={props.imgURL}/>
            <h2>{props.place}</h2>
            <p><b>Price:</b> {price}</p>
            <p><b>Time To Go:</b> {props.timeToGo}</p>
        </div>
    )
}

export default VacationSpot