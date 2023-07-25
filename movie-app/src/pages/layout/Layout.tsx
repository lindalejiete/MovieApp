import React from "react";
import "./Layout.css";
import { BoxProps } from "../../types/types";

const Layout = ({ children }: BoxProps) => {
  return (
    <div className="Layout">
      <div className="LayoutDim"></div>
      {children}
    </div>
  );
};

export default Layout;
