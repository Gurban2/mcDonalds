// src/utils/fetchProducts.js
import productsJson from "../data/products.json";

export async function fetchProducts() {
  return Promise.resolve(productsJson);
}
