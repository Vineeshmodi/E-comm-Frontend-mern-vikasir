import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { render } from "react-dom";
import { productReducer } from "./Reduceds/ProductReduced.js";

const Reducer = combineReducers({
  products: productReducer,
});

let InitialState = {};

const store = createStore(Reducer, InitialState, composeWithDevTools());

export default store;
