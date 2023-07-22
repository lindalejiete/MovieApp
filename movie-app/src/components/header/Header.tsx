import React from "react";
import "./Header.css";

// @ts-ignore
import Logo from "../../assets/logo.png";

const Header = ({onSearch, query, movies}: any) => {
  return (
    <div className="Header" id="">
      <div className="HeaderWrapper">
        <div className="HeaderLeft">
          <ul>
            <li>
              <div className="HeaderLogo">
                <img src={Logo} alt="logo"></img>
              </div>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#movies">Movies</a>
            </li>
          </ul>
        </div>
        <div className="HeaderCenter">
          {/* <ul>
            <li> */}
          <input
            type="text"
            placeholder="Search.."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
          ></input>
          {/* </li>
          </ul> */}
        </div>
        <div className="HeaderRight">
          <ul>
            {/* <li>
              <input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={(e) => onSearch(e.target.value)}
              ></input>
            </li> */}
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
