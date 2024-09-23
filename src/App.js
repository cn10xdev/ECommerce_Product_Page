import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { addToCart, updateQuantity } from "./cartActions";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Page</h1>
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={(product) => dispatch(addToCart(product))}
            />
          ))}
        </div>
        <Cart
          cart={cart}
          updateQuantity={(id, quantity) =>
            dispatch(updateQuantity(id, quantity))
          }
        />
      </div>
    </Provider>
  );
}
export default App;
