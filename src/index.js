import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import myReducers from "./reducers";
import { Provider } from "react-redux";

    // Changing it by creating index.js in reducers //
// import counterReducer from "./reducers/Counter";
// import userReducer from "./reducers/User";
// const store = createStore(counterReducer, userReducer);
// now
//const store = createStore(myReducers); // add extenstion
const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*
import { createStore } from "redux";

// actions
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducers
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// store -> Globalized satate
const store = createStore(counter);

// display
store.subscribe(()=>console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

// Add provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);