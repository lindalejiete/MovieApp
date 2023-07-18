import React from "react";
import "./MoviesList.css";
import {useState} from "react";
import {tempMovieData, tempWatchedData} from "../../data/data";
import Movie from "../movie/Movie";

const MoviesList = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = tempWatchedData.map((movie) => movie.imdbRating);

  const avgUserRating = tempWatchedData.map((movie) => movie.userRating);

  const avgRuntime = tempWatchedData.map((movie) => movie.runtime);

  return (
    <div>
      {/* <main className="MovieComponentMain"> */}
      {/* <div className="MovieComponentBoxSearchResults"> */}
      {/* <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "–" : "+"}
        </button> */}
      {/* {isOpen1 && ( */}
      <ul className="MoviesList">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
      {/* )} */}
      {/* </div> */}

      {/* <div className="MovieComponentBox">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "–" : "+"}
        </button>
        {isOpen2 && (
          <>
            <div className="summary">
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

            <ul className="MovieComponentList">
              {watched.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>⭐️</span>
                      <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{movie.userRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{movie.runtime} min</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div> */}
      {/* </main> */}
    </div>
  );
};

export default MoviesList;
