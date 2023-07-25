import { useState, useEffect } from "react";
import WatchedMoviesList from "../watchedMoviesList/WatchedMoviesList";
import "./WatchedMoviesBox.css";
import WatchedMoviesSummary from "../watchedMoviesSummary/WatchedMoviesSummary";
import { WatchedMovieBoxComponentTypes } from "../../types/types";

const WatchedMoviesBox = ({
  watched,
  onDeleteWatched,
}: WatchedMovieBoxComponentTypes) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [width, setWidth] = useState(0);
  const mobileWidth = 660;
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      if (window.innerWidth < mobileWidth) {
        setIsOpen1(false);
        setIsMobile(true);
      } else {
        setIsOpen1(true);
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

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
          <WatchedMoviesSummary watched={watched} isMobile={isMobile} />
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
