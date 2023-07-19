import React from "react";
import MoviesListBox from "../moviesListBox/MoviesListBox";
import WatchedMoviesBox from "../watchedMoviesBox/WatchedMoviesBox";
import "./Main.css";

const Main = ({children}: any) => {
  return <main className="Main">{children}</main>;
};

export default Main;
