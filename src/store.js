const redux = require("redux");

const { cartReducer } = require("./redux/cartReducers");

export const store = redux.createStore(cartReducer);
