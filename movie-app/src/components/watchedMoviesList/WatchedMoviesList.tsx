import React from "react";
import "./WatchedMoviesList.css";
import WatchedMovie from "../watchedMovie/WatchedMovie";
import { WatchedMovieBoxComponentTypes } from "../../types/types";

function WatchedMoviesList({
  watched,
  onDeleteWatched,
}: WatchedMovieBoxComponentTypes) {
  return (
    <div>
      <ul className="MovieComponentList">
        {watched?.map((movie: any) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
