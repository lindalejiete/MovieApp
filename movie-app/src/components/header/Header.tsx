import "./Header.css";
import {HeaderComponentTypes} from "../../types/types";
// @ts-ignore
import Logo from "../../assets/logo.png";

const Header = ({onSearch, query, movies}: HeaderComponentTypes) => {
  return (
    <div className="HeaderCenter">
      <input
        type="text"
        placeholder="Search.."
        value={query}
        onChange={(e) => onSearch(e.target.value)}
      ></input>
    </div>
  );
};

export default Header;
