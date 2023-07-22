import "./MovieDetails.css";
import {useState, useEffect} from "react";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {MovieDetailsComponentTypes, WatchedMoviesList} from "../../types/types";

const KEY = "9f8ff0fc";

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsComponentTypes) => {
  const [movie, setMovie] = useState<WatchedMoviesList>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isWatched = watched
    .map((movie: WatchedMoviesList) => movie.imdbID)
    .includes(selectedId);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      Runtime: Number(movie.Runtime.split(" ").at(0)),
      imdbRating: Number(movie.imdbRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movie");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          console.log(data);
          setMovie(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div className="MovieDetails">
      <button className="MovieDetailsBtnBack" onClick={onCloseMovie}>
        &larr;
      </button>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <div className="movie-details-box">
          <div>
            <img src={movie.Poster} alt={`${movie.Title} poster`}></img>
            {/* <h1></h1> */}
            {/* <button>play</button> */}
            <h2>{movie.Title}</h2>
            <p>
              {movie.Released} &bull; {movie.Runtime}{" "}
            </p>
            <p>{movie.Genre}</p>
            <p>
              <span>⭐</span>
              {movie.imdbRating} IMDB StarRating
            </p>
            {!isWatched ? (
              <>
                <button className="MovieDetailsBtnAdd" onClick={handleAdd}>
                  Add to list
                </button>
              </>
            ) : (
              <p className="MovieDetailsNotification">
                You have this movie on your list
              </p>
            )}
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
