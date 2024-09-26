import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCartActionCreator } from '../redux/actions/actions';

function ProductCard({product}) {

    const dispatch = useDispatch()

    function addToCart(){
        dispatch(addToCartActionCreator(product))
    }

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
