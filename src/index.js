import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import rootReducer from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const jsx = (
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
);

render(jsx, document.getElementById("root"));
