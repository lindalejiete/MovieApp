import "./WatchedMoviesSummary.css";
import {
  WatchedMovieSummaryComponentTypes,
  WatchedMoviesList,
} from "../../types/types";

const getAverage = (arr: number[]) => {
  return arr.reduce(
    (acc: number, cur: number, i: number, arr: number[]) =>
      acc + cur / arr.length,
    0
  );
};

const WatchedMoviesSummary = ({
  watched,
  isMobile,
}: WatchedMovieSummaryComponentTypes) => {
  const avgImdbRating = getAverage(
    watched.map((movie: WatchedMoviesList) => Number(movie.imdbRating))
  ).toFixed(1);

  const avgRuntime = getAverage(
    watched.map((movie: WatchedMoviesList) => movie.Runtime)
  ).toFixed(0);

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
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
};

export default WatchedMoviesSummary;
