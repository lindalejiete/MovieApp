import React from "react";
import "./MoviesList.css";
import {useState} from "react";
import {tempMovieData, tempWatchedData} from "../../data/data";
import Movie from "../movie/Movie";

const MoviesList = ({movies, onSelectMovie}: any) => {
  // const [movies, setMovies] = useState(tempMovieData);
  return (
    <div>
      <ul className="MoviesList">
        {movies?.map((movie: any) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;