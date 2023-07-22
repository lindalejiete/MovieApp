import "./Layout.css";
import {BoxProps} from "../../types/types";

const Layout = (props: BoxProps) => {
  return (
    <div className="Layout">
      <div className="LayoutDim"></div>
      {props.children}
    </div>
  );
};

export default Layout;
