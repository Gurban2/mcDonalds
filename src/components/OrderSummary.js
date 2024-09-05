import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import "../styles/OrderSummary.scss";
const OrderSummary = ({
  order,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateIngredients,
}) => {
  if (!Array.isArray(order)) {
    return <div>Неправильный формат данных заказа.</div>;
  }

  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {order.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemoveItem}
            onUpdateIngredients={onUpdateIngredients}
          />
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

OrderSummary.propTypes = {
  order: PropTypes.array.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateIngredients: PropTypes.func.isRequired,
};

export default OrderSummary;
