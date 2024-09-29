import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Available Quantity: {product.quantity}</p>
      <button
        onClick={() => addToCart(product)}
        disabled={product.quantity === 0} // Disable button if quantity is zero
      >
        {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ProductCard;
