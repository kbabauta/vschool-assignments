import React, { useState } from "react"
import axios from "axios"

function DealsList() {
    const [deals, setDeals] = useState(null)

    axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15`)
        .then (function (response) {
            console.log(response)
        })
        .catch (function (error) {
            console.log(error)
        })
    return (
        <div>
            <h1>Deals List Page</h1>
        </div>
    )
}

export default DealsList