import "./Header.css";
import {HeaderComponentTypes} from "../../types/types";
// @ts-ignore
import Logo from "../../assets/logo.png";

const Header = ({onSearch, query, movies}: HeaderComponentTypes) => {
  return (
    <div className="Header" id="home">
      <div className="HeaderWrapper">
        <div className="HeaderLeft">
          <ul>
            <li>
              <div className="HeaderLogo">
                <img src={Logo} alt="logo"></img>
              </div>
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>Movies</li>
          </ul>
        </div>
        <div className="HeaderRight">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={(e) => onSearch(e.target.value)}
              ></input>
            </li>
            <li className="num-results">
              Found <strong>{movies.length}</strong> results
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
