import React from "react"
import StoreInfo from "./StoreInfo"

const DealCard =  ({gameID, thumb, title, salePrice, dealID, savings, storeID, normalPrice}) => {
    const thumbnail = {backgroundImage: `url(${thumb})`}
    return (
        <div className="deal-card-container">
            <a
            
                className="deal-card"
                href={`https://www.cheapshark.com/redirect?dealID=${dealID}`}
                target='_blank' rel="noreferrer">
                <span className="card-thumb" style={thumbnail}></span>
                    <div className="game-info">
                        <p>{title}</p>
                        <StoreInfo storeID={storeID}/>
                </div>
                <div style={{display: "flex", justifyContent: "justify-content", flexDirection:"row"}}>
                    <div className="game-savings">
                        {savings > 0 && <p>-{Math.round(savings)}%</p>}
                    </div>
                    <div className="game-price">
                        <p>{salePrice > 0 ? '$' + salePrice : ' free'}</p>
                        {savings > 0 && <p>${normalPrice}</p>}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default DealCard