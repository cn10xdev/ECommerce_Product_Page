import React from "react";
import { products } from "../../constants/constants";
import Cart from "../../pages/Cart/Cart";
import ProductCart from "../ProductCart/ProductCart";

const Products = ({ cart, updateQuantity, addToCart }) => {
  return (
    <div className="App">
      <h1>Product Page</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default Products;
