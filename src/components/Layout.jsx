import React from "react";
import { NavbarItem } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarItem />
      {children}
    </>
  );
};

export default Layout;
