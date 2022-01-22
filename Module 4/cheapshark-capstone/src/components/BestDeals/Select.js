import React from "react"

const option = {
    color: '#1a247e'
}

const Select = ({handleSelectedFilter}) => {
    return (
        <div className="filter-selector">
            <select onChange={handleSelectedFilter}>
                <option style={option} value="Savings">Savings</option>
                <option style={option} value="Price">Price</option>
                <option style={option} value="recent">New Deals</option>
            </select>
        </div>
    )
}

export default Select