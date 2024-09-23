import { addToCart, updateQuantity } from "./cartActions";

//Initial State
const initialState = {
  cart: [],
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 50,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 100,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ],
};

// cartReducer

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart = [...state.cart];
      const productIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndex !== -1) {
        updatedCart[productIndex].quantity += 1;
      } else {
        updatedCart.push(action.payload);
      }

      return { ...state, cart: updatedCart };

    case UPDATE_QUANTITY:
      updatedCart = [...state.cart];
      const productIndexToUpdate = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (productIndexToUpdate !== -1 && action.payload.quantity > 0) {
        updatedCart[productIndexToUpdate].quantity = action.payload.quantity;
      }

      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};
