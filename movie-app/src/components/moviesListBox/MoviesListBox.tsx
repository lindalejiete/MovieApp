import React from "react";
import {useState} from "react";
import "./MoviesListBox.css";
import MoviesList from "../moviesList/MoviesList";
import {tempMovieData, tempWatchedData} from "../../data/data";

const MoviesListBox = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = tempWatchedData.map((movie) => movie.imdbRating);

  const avgUserRating = tempWatchedData.map((movie) => movie.userRating);

  const avgRuntime = tempWatchedData.map((movie) => movie.runtime);

  return (
    <div className="MoviesListBoxContainer">
      <button
        className="MoviesListBoxBtnToggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>

      {isOpen1 && <MoviesList />}
    </div>
  );
};

export default MoviesListBox;
