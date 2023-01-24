import { applyMiddleware, compose, legacy_createStore } from "redux";
import createReducers from "./reducers";

let composeEnhancers = compose;

// If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
if (process.env.NODE_ENV !== "production") {
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

// Extensions
const injectedReducers = {};

// Create the store with middle-wares
const middleWares = [];

// Make enhancers
const enhancers = [applyMiddleware(...middleWares)];

// Make Redux store
const store = legacy_createStore(createReducers(injectedReducers), {}, composeEnhancers(...enhancers));

// Make reducers hot reloading, see http://mxs.is/googmo
if (module.hot) {
  module.hot.accept("./reducers", () => {
    store.replaceReducer(createReducers(injectedReducers));
  });
}

export default store;
