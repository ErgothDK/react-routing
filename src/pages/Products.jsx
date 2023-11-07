import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        <li>
          <Link to="/product/1">First product</Link>
        </li>
        <li>
          <Link to="/product/2">Second product</Link>
        </li>
        <li>
          <Link to="/product/3">Third product</Link>
        </li>
      </ul>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default Products;
