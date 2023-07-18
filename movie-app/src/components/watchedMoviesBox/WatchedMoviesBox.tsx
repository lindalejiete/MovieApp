import {useState} from "react";
import WatchedMoviesList from "../watchedMoviesList/WatchedMoviesList";
import "./WatchedMoviesBox.css";
import WatchedMoviesSummary from "../watchedMoviesSummary/WatchedMoviesSummary";
import {tempWatchedData} from "../../data/data";

const WatchedMoviesBox = () => {
  // const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  // const [isOpen2, setIsOpen2] = useState(true);

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
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedMoviesBox;
