import productContext from '../context'
import { useContext, useState } from 'react'

function Product() {
    const { product, setProduct } = useContext(productContext)

    function changeProduct() {
        setProduct({...Product, name:"Brigadeiro", price:5.00, description:"delicious"})
    }

    return (
        <div>
            <h2>Name: {product.name}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Description: {product.description}</h3>
            <br />
            <button onClick={changeProduct}>
                Change product
            </button>
        </div>
    )
}

export default Product