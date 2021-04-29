import React, { useState, useEffect } from "react"
import axios from "axios"

function DealsList() {
    const [topDeals, setDeals] = useState([])

    useEffect(() => {
        try {
            axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15 `).then(response => {
                setDeals(response.data.dealRating)
            })
        } catch (error) { console.log(error) }
    }, [])

    return (
        <div>
            <h1>Deals List Page</h1>

        </div>
    )
}

export default DealsList