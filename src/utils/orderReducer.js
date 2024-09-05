// src/utils/orderReducer.js

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const LOAD_ORDER = "LOAD_ORDER";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: REMOVE_ITEM,
  payload: itemId,
});

export const updateQuantity = (itemId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { itemId, quantity },
});

export const updateIngredients = (itemId, ingredients) => ({
  type: UPDATE_INGREDIENTS,
  payload: { itemId, ingredients },
});

export const initialOrderState = [];

export function orderReducer(state = initialOrderState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      return state.find((item) => item.id === action.payload.id)
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state, { ...action.payload, quantity: 1 }];
    }

    case REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }

    case UPDATE_QUANTITY: {
      return state.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: Math.max(action.payload.quantity, 0) }
          : item
      );
    }

    case UPDATE_INGREDIENTS: {
      return state.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, ingredients: action.payload.ingredients }
          : item
      );
    }

    case LOAD_ORDER: {
      return action.payload;
    }

    default:
      return state; // Обработка неизвестных действий
  }
}
