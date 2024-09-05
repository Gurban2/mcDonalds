import React from "react";
import PropTypes from "prop-types";

const IngredientList = ({ ingredients, onUpdateIngredients }) => {
  const handleIngredientChange = (index, updatedIngredient) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = updatedIngredient;
    onUpdateIngredients(newIngredients);
  };

  return (
    <div>
      <h4>Ingredients</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <span>{ingredient.name}</span> -{" "}
            <span>Quantity: {ingredient.quantity}</span>
            <input
              type="number"
              value={ingredient.quantity}
              onChange={(e) =>
                handleIngredientChange(index, {
                  ...ingredient,
                  quantity: parseInt(e.target.value, 10),
                })
              }
            />
            <label>
              <input
                type="checkbox"
                checked={ingredient.isOptional}
                onChange={(e) =>
                  handleIngredientChange(index, {
                    ...ingredient,
                    isOptional: e.target.checked,
                  })
                }
              />
              Optional
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      isOptional: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateIngredients: PropTypes.func.isRequired,
};

export default IngredientList;
