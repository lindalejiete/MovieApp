import React from "react";
import "./WatchedMoviesSummary.css";
import {watchedMoviesList} from "../../types/types";

const getAverage = (arr: number[]) => {
  return arr.reduce(
    (acc: number, cur: number, i: number, arr: number[]) =>
      acc + cur / arr.length,
    0
  );
};
// we passed watched array from parent component
const WatchedMoviesSummary = ({watched}: any) => {
  const avgImdbRating = getAverage(
    watched.map((movie: watchedMoviesList) => movie.imdbRating)
  );

  const avgUserRating = getAverage(
    watched.map((movie: watchedMoviesList) => movie.userRating)
  );

  const avgRuntime = getAverage(
    watched.map((movie: watchedMoviesList) => movie.runtime)
  );

  return (
    <div className="WatchedMoviesSummary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedMoviesSummary;
