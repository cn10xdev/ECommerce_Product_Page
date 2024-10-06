import React, { useState } from "react";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Products from "./components/Products/Products";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addToCart = (product) => {
    let updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1;
    } else {
      updatedCart.push(product);
    }

    setCart(updatedCart);
  };

  const updateQuantity = (productId, quantity) => {
    let updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.id === productId);

    if (productIndex !== -1 && quantity > 0) {
      updatedCart[productIndex].quantity = quantity;
      setCart(updatedCart);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar cart={cart} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/products",
          element: (
            <Products
              cart={cart}
              updateQuantity={updateQuantity}
              addToCart={addToCart}
            />
          ),
        },
        {
          path: "/cart",
          element: <Cart cart={cart} updateQuantity={updateQuantity} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
