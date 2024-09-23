import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 50,
      image: "https://via.placeholder.com/150",
      quantity: 5, // Initial quantity
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      image: "https://via.placeholder.com/150",
      quantity: 3, // Initial quantity
    },
  ]);

  const addToCart = (product) => {
    // Check if the product's quantity is greater than 0
    if (product.quantity > 0) {
      let updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === product.id
      );

      // Add to cart or increase quantity if product is already in the cart
      if (productIndex !== -1) {
        updatedCart[productIndex].quantity += 1;
      } else {
        // push into only by 1 quantity
        updatedCart.push({ ...product, quantity: 1 });
      }

      setCart(updatedCart);

      // Reduce the product quantity in the products list
      const updatedProducts = products.map((p) => {
        if (p.id === product.id && p.quantity > 0) {
          return { ...p, quantity: p.quantity - 1 }; // Decrease quantity
        }
        return p;
      });

      setProducts(updatedProducts);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    let updatedCart = [...cart];
    const cartItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );
    const productInCart = updatedCart[cartItemIndex];

    if (cartItemIndex !== -1) {
      const oldQuantity = productInCart.quantity;
      const quantityDiff = newQuantity - oldQuantity;

      const product = products.find((p) => p.id === productId);

      // Make sure the product's stock doesn't go negative
      if (quantityDiff <= product.quantity) {
        // Update the cart quantity
        updatedCart[cartItemIndex].quantity = newQuantity;
        setCart(updatedCart);

        // Update the product's stock accordingly
        const updatedProducts = products.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity - quantityDiff }; // Adjust stock
          }
          return p;
        });

        setProducts(updatedProducts);
      } else {
        alert("Not enough stock available!");
      }
    }
  };
  return (
    <div className="App">
      <h1>Product Page</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
