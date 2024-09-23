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
            price: 599,
            image: 'https://via.placeholder.com/300', // Update this image URL accordingly
            quantity: 1,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 100,
            image: 'https://via.placeholder.com/300',
            quantity: 1,
        }
    ];

    const addToCart = (product) => {
        setCart(prevCart => {
            const productIndex = prevCart.findIndex(item => item.id === product.id);

            if (productIndex !== -1) {
                // If the product already exists in the cart, increase the quantity
                const updatedCart = prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                return updatedCart;
            } else {
                // If the product doesn't exist, add it to the cart
                return [...prevCart, { ...product }];
            }
        });
    };

    // Define the updateQuantity function
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return; // Prevent setting quantity to less than 1
        const updatedCart = cart.map(item => 
            item.id === productId ? { ...item, quantity } : item
        );
        setCart(updatedCart);
    };

    return (
        <div className="App p-4 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8">Product Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <Cart cart={cart} updateQuantity={updateQuantity} />
        </div>
    );
}

export default App;
