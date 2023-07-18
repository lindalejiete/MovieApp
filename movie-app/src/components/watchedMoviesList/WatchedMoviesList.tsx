import React from "react";
import "./WatchedMoviesList.css";
import WatchedMovie from "../watchedMovie/WatchedMovie";

function WatchedMoviesList({watched}: any) {
  return (
    <div>
      <ul className="MovieComponentList">
        {watched.map((movie: any) => (
          <WatchedMovie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
