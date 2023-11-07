import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const navigate = useNavigate();
  //TODO: redirect automatically to home page when timer reaches 5 seconds
  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>404 - Page not found</h1>
        <p>
          go back to <Link to="/">Home</Link> or you will be redirected
          automatically in 5 seconds.
        </p>
      </main>
    </Fragment>
  );
};

export default Error;
