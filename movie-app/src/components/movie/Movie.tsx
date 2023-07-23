import React from "react";
import "./Movie.css";
import {MovieComponentTypes} from "../../types/types";

const Movie = ({movie, onSelectMovie}: MovieComponentTypes) => {
  return (
    <li
      className="MovieItem"
      key={movie.imdbID}
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
