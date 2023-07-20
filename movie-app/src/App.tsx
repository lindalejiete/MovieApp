import React from "react";
import {useState, useEffect} from "react";
import "./App.css";
import MovieComponent from "./components/moviesList/MoviesList";
import WatchedMoviesBox from "./components/watchedMoviesBox/WatchedMoviesBox";
import SearchBox from "./components/moviesListBox/MoviesListBox";
import MoviesListBox from "./components/moviesListBox/MoviesListBox";
import Main from "./components/main/Main";
import MoviesList from "./components/moviesList/MoviesList";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import MovieDetails from "./components/movieDetails/MovieDetails";
import {tempMovieData, tempWatchedData} from "./data/data";

const KEY = "9f8ff0fc";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id: any) {
    // if we click on the same movie, the movie details close
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie(id: any) {
    setSelectedId(null);
  }
  // function handleAddWatched() {
  //   setWatched((watched: any[]) => [...watched, movie]);
  // }
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          console.log(data.Search);
          setMovies(data.Search);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length === 0) {
        setMovies(tempMovieData);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🎥🎬</span>
          <h1>Movies App</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>

      <Main>
        <MoviesListBox>
          {/* we directly pass movies from the app component to movieslist */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </MoviesListBox>

        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            // onAddWatched={handleAddWatched}
          />
        ) : (
          <WatchedMoviesBox />
        )}
      </Main>
    </>
  );
}

export default App;
