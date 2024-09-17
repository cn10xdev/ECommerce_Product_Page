import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import './styles.css';

function App() {
    const [cart, setCart] = useState([]);
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

    return (
        <div className="App">
            <h1>Product Page</h1>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cart={cart} updateQuantity={updateQuantity} />
        </div>
    );
}

export default App;
