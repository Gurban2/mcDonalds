import React from "react";
import ProductList from "./components/ProductList";
import "../src/styles/style.scss";
import ProductDetails from "./components/ProductDetails";
import OrderSummary from "./components/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  updateQuantity,
  removeItem,
  updateIngredients,
} from "./utils/orderReducer";

const Order = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const addItemToOrder = (item) => {
    dispatch(addItem(item));
  };

  const updateItemQuantity = (itemId, quantity) => {
    dispatch(updateQuantity(itemId, quantity));
  };

  const removeItemFromOrder = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const updateItemIngredients = (itemId, ingredients) => {
    dispatch(updateIngredients(itemId, ingredients));
  };

  return (
    <div className="container">
      <h1>McDonald's Order System</h1>
      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onAddToOrder={addItemToOrder}
        />
      ) : (
        <div>
          <ProductList onSelectProduct={addItemToOrder} />
          <OrderSummary
            order={order}
            onUpdateQuantity={updateItemQuantity}
            onRemoveItem={removeItemFromOrder}
            onUpdateIngredients={updateItemIngredients}
          />
        </div>
      )}
    </div>
  );
};

export default Order;
