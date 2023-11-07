import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
