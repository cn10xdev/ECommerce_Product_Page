//cart constants
const ADD_TO_CART = "ADD_TO_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Action Creators
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});
