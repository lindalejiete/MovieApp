import "./Header.css";
import {HeaderComponentTypes} from "../../types/types";
// @ts-ignore
import Logo from "../../assets/logo.png";

const Header = ({onSearch, query, movies}: HeaderComponentTypes) => {
  return (
    <div className="Header" id="home">
      <div className="HeaderWrapper">
        <div className="HeaderLogo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="HeaderLeft">
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => {
                  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#movies">Movies</a>
            </li>
          </ul>
        </div>
        <div className="HeaderRight">
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search for movie..."
                value={query}
                onChange={(e) => onSearch(e.target.value)}
              ></input>
            </li>
            <li className="num-results">
              Found <strong>{movies.length}</strong> results
            </li>
          </ul>
        </div>
        <button className="HeaderBtnMobileNav">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  );
};

export default Header;
