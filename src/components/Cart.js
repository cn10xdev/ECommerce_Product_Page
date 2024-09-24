import React from 'react';

function Cart({ cart, updateQuantity }) {
    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <p>{item.name}</p>
                        {/* Updating the item price as per the item's quantity (No. of items) */}
                        <p>Price: ${item.price * item.quantity}</p>
                        <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        />
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;
