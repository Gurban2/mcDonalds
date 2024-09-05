import React, { useState } from "react";
import PropTypes from "prop-types";
import IngredientList from "./IngredientList";
import "../styles/ProductDetails.scss";

const ProductDetails = ({ product, onAddToOrder }) => {
  const [updatedIngredients, setUpdatedIngredients] = useState(
    product.ingredients
  );

  const handleUpdateIngredients = (newIngredients) => {
    setUpdatedIngredients(newIngredients);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <IngredientList
        ingredients={updatedIngredients}
        onUpdateIngredients={handleUpdateIngredients}
      />
      <button
        onClick={() =>
          onAddToOrder({ ...product, ingredients: updatedIngredients })
        }
      >
        Add to Order
      </button>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.array.isRequired,
  }).isRequired,
  onAddToOrder: PropTypes.func.isRequired,
};

export default ProductDetails;
