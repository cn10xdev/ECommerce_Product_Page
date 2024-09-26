import { ADD_TO_CART, UPDATE_QUANTITY } from "../constants/constants";

export function addToCartActionCreator(product){
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export function updateQuantityActionCreator(productId, quantity) {
    return {
        type: UPDATE_QUANTITY,
        payload: { productId, quantity }
    };
}