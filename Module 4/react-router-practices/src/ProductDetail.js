import React from "react"

import productsData from "./productsData"
import {useParams} from "react-router-dom"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(product => product.id === productId)

    return(
        <div>
            <h1>{thisProduct.name}</h1>
            <h4>${thisProduct.price}</h4>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail