import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart({ cart = [], updateQuantity }) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div
            className={`cart mt-8 p-4 bg-white rounded-md shadow-md transition-all duration-300 ${
                totalItems === 0 ? 'w-full mx-auto' : 'w-1/2 mx-auto'
            }`}
        >
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {totalItems === 0 ? (
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faShoppingCart} size="3x" className="text-gray-400 mb-2" />
                    <p className="text-gray-500">Your cart is empty</p>
                </div>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item flex justify-between items-center mb-4">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-gray-600">Price: ${item.price}</p>
                            </div>
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="border rounded p-1 w-16"
                            />
                        </div>
                    ))}
                    <div className="flex justify-between mt-4 font-bold">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
