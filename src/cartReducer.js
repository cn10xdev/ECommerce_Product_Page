import { ADD_TO_CART, UPDATE_QUANTITY } from './actions';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingProductIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += 1;
                return { ...state, cart: updatedCart };
            } else {
                return { ...state, cart: [...state.cart, action.payload] };
            }

        case UPDATE_QUANTITY:
            const productIndex = state.cart.findIndex(
                (item) => item.id === action.payload.productId
            );

            if (productIndex !== -1 && action.payload.quantity > 0) {
                const updatedCart = [...state.cart];
                updatedCart[productIndex].quantity = action.payload.quantity;
                return { ...state, cart: updatedCart };
            }
            return state;

        default:
            return state;
    }
};

export default cartReducer;