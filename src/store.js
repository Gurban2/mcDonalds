// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./utils/orderReducer";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
