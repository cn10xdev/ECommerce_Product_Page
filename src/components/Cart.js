import React from 'react';
import { updateQuantityActionCreator } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    const updateQuantity = (productId, quantity) => {
        dispatch(updateQuantityActionCreator(productId, quantity));
    };


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
