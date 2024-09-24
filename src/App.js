import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './styles.css';
import Navbar from './components/Navbar';

function App() {
    const [cart, setCart] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 50,
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100,
            image: 'https://via.placeholder.com/150',
            quantity: 1,
        }
    ];

    // function to toggle between dark and light mode
    const changeTheme = () => {
        setDarkMode(!darkMode);
    };

    // adding and removing class dark-mdoe on the body
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const addToCart = (product) => {
        let updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === product.id);

        if (productIndex !== -1) {
            updatedCart[productIndex].quantity += 1;
        } else {
            updatedCart.push(product);
        }

        setCart(updatedCart);
    };

    const updateQuantity = (productId, quantity) => {
        let updatedCart = [...cart];
        const productIndex = updatedCart.findIndex(item => item.id === productId);

        if (productIndex !== -1 && quantity > 0) {
            updatedCart[productIndex].quantity = quantity;
            setCart(updatedCart);
        }
    };

    // function to calculate the total from the cart
    const total = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <>
            <Navbar changeTheme={changeTheme} darkMode={darkMode} />
            <div className="App">
                <h1>Product Page</h1>
                <div className="products">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
                <Cart cart={cart} updateQuantity={updateQuantity} total={total} />
            </div>
        </>
    );
}

export default App;
