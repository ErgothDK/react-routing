import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
