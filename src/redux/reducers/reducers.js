import { ADD_TO_CART, UPDATE_QUANTITY } from "../constants/constants";

const initalState = {
    cart: []
}

function reducer(state=initalState, action){
    switch(action.type){
        case ADD_TO_CART:
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id)
            if(existingItem){
                return{
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                }
            }else{
                return{
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }
            }
        case UPDATE_QUANTITY:
            const { productId, quantity } = action.payload;
            return{
                ...state,
                cart: state.cart.map(item => item.id === productId ? { ...item, quantity } : item)
            }
        default:
            return state;
        
}
}

export default reducer;