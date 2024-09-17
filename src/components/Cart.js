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
                        <p>Price: ${item.price}</p>
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
