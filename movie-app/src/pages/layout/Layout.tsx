import React from "react";
import "./Layout.css";

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const Layout = (props: BoxProps) => {
  return (
    <div className="Layout">
      <div className="LayoutDim"></div>
      {props.children}
    </div>
  );
};

export default Layout;
