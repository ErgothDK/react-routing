import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome Back!!!</h1>
      <p>
        Go to <Link to="/products">Products Page</Link>
      </p>
    </div>
  );
};

export default Home;
