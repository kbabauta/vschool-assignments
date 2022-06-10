import React from "react"
import {Link} from "react-router-dom"
import productsData from "./productsData"

function Products() {
    const products = productsData.map(product => (
        <div key={product.id}>
            <h3>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
            </h3>
            <p>Price: ${product.price}</p>
            <hr/>
        </div>
    ))
    return (
        <div>
            <h1>Products</h1>
            {products}
        </div>
    )
}
export default Products