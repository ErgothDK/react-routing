import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>404 - Page not found</h1>
        <p>
          go back to <Link to="/">Home</Link>
        </p>
      </main>
    </Fragment>
  );
};

export default Error;
