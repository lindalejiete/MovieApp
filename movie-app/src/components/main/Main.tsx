import React from "react";
import MoviesListBox from "../moviesListBox/MoviesListBox";
import WatchedMoviesBox from "../watchedMoviesBox/WatchedMoviesBox";
import "./Main.css";

const Main = () => {
  return (
    <main className="MovieComponentMain">
      <MoviesListBox />
      <WatchedMoviesBox />
    </main>
  );
};

export default Main;
