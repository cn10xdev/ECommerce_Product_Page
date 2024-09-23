import React from 'react';
import Button from 'react-bootstrap/Button';

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
            {/*<button onClick={() => addToCart(product)}>Add to Cart</button>*/}
        </div>
    );
}

export default ProductCard;
