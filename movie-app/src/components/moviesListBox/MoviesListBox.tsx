import {useState} from "react";
import "./MoviesListBox.css";
import {BoxProps} from "../../types/types";

const MoviesListBox = ({children}: BoxProps) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="MoviesListBoxContainer">
      <button
        className="MoviesListBoxBtnToggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
};

export default MoviesListBox;
