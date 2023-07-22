import "./MoviesList.css";
import Movie from "../movie/Movie";
import {MovieListComponentTypes, SearchedMoviesList} from "../../types/types";

const MoviesList = ({movies, onSelectMovie}: MovieListComponentTypes) => {
  return (
    <div>
      <ul className="MoviesList">
        {movies?.map((movie: SearchedMoviesList) => (
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
