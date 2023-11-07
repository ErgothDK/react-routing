import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        <li>First product</li>
        <li>Second product</li>
        <li>Third product</li>
      </ul>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default Products;
