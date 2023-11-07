import React from "react";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products List</h1>
      <ul>
        <li>
          <NavLink to="/product/1">First product</NavLink>
        </li>
        <li>
          <NavLink to="/product/2">Second product</NavLink>
        </li>
        <li>
          <NavLink to="/product/3">Third product</NavLink>
        </li>
      </ul>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default Products;
