import "./Main.css";
import {BoxProps} from "../../types/types";

const Main = ({children}: BoxProps) => {
  return <main className="Main">{children}</main>;
};

export default Main;
