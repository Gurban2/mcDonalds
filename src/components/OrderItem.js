import React from "react";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList";
import "../styles/OrderItem.scss";

const OrderItem = ({
  item,
  onUpdateQuantity,
  onRemove,
  onUpdateIngredients,
}) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <IngredientList
        ingredients={item.ingredients}
        onUpdateIngredients={(newIngredients) =>
          onUpdateIngredients(item.id, newIngredients)
        }
      />
      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
        Increase Quantity
      </button>
      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
        Decrease Quantity
      </button>
      <button onClick={() => onRemove(item.id)}>Remove Item</button>
    </li>
  );
};

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onUpdateIngredients: PropTypes.func.isRequired,
};

export default OrderItem;
