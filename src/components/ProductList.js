import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchProducts } from "../utils/fetchProducts";
import "../styles/ProductList.scss";

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>False: {error.message}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span> -{" "}
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => onSelectProduct(product)}>Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  onSelectProduct: PropTypes.func.isRequired,
};

export default ProductList;
