import React from "react";
import "./MovieDetails.css";
import {useState, useEffect} from "react";
const KEY = "9f8ff0fc";

const MovieDetails = ({selectedId, onCloseMovie}: any) => {
  const [movie, setMovie] = useState({});

  useEffect(function () {
    async function getMovieDetails() {
      //      try {
      //   setIsLoading(true);
      //   setError("");
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      // if (!res.ok) throw new Error("Something went wrong with fetching movie");
      const data = await res.json();
      //   if (data.Response === "False") throw new Error("Movie not found");

      setMovie(data);
      //   setMovies(data.Search);
      // } catch (err: any) {
      //   setError(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
    }
    // if (query.length === 0) {
    //   setMovies(tempMovieData);
    //   setError("");
    //   return;
    // }
    getMovieDetails();
  }, []);

  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
