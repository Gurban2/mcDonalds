// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Order from "./Order";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Order />
  </Provider>,
  document.getElementById("root")
);
