import React from "react";
import {useState} from "react";
import "./MoviesListBox.css";
import MoviesList from "../moviesList/MoviesList";
import {tempMovieData, tempWatchedData} from "../../data/data";

const MoviesListBox = ({children}: any) => {
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
