import React from "react";
import {useState, useEffect} from "react";
import "./HomepageContent.css";
import WatchedMoviesBox from "../watchedMoviesBox/WatchedMoviesBox";
import MoviesListBox from "../moviesListBox/MoviesListBox";
import Main from "../main/Main";
import MoviesList from "../moviesList/MoviesList";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MovieDetails from "../movieDetails/MovieDetails";
import {tempMovieData} from "../../data/data";
import {WatchedMoviesList, HomePageTypes} from "../../types/types";
import "./HomepageContent.css";

const KEY = "9f8ff0fc";

const HomepageContent = ({query, movies, onSearchMovie}: HomePageTypes) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<null | string>(null);
  const [watched, setWatched] = useState(function () {
    const storedValue: any = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  function handleSelectMovie(id: string | null) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleCloseMovie() {
    setSelectedId(null);
  }
  function handleAddWatched(movie: WatchedMoviesList[]) {
    setWatched((watched: WatchedMoviesList[]) => [...watched, movie]);
  }
  function handleDeleteWatched(id: string | undefined) {
    setWatched((watched: WatchedMoviesList[]) =>
      watched.filter((movie) => movie.imdbID !== id)
    );
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            {signal: controller.signal}
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");

          onSearchMovie(data.Search);
          setError("");
        } catch (err: any) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length === 0) {
        onSearchMovie(tempMovieData);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <Main>
        <MoviesListBox>
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
            onAddWatched={handleAddWatched}
            watched={watched}
          />
        ) : (
          <WatchedMoviesBox
            watched={watched}
            onDeleteWatched={handleDeleteWatched}
          />
        )}
      </Main>
    </>
  );
};

export default HomepageContent;
