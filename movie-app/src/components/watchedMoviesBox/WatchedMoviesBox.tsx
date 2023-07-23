import {useState} from "react";
import WatchedMoviesList from "../watchedMoviesList/WatchedMoviesList";
import "./WatchedMoviesBox.css";
import WatchedMoviesSummary from "../watchedMoviesSummary/WatchedMoviesSummary";
import {WatchedMovieBoxComponentTypes} from "../../types/types";

const WatchedMoviesBox = ({
  watched,
  onDeleteWatched,
}: WatchedMovieBoxComponentTypes) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="WatchedMoviesBox">
      <button
        className="WatchedBoxBtnToggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>

      {isOpen1 && (
        <>
          <WatchedMoviesSummary watched={watched} />
          <WatchedMoviesList
            watched={watched}
            onDeleteWatched={onDeleteWatched}
          />
        </>
      )}
    </div>
  );
};

export default WatchedMoviesBox;
