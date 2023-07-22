import React from "react";
import "./Homepage.css";
import Header from "../../components/header/Header";
import HomepageContent from "../../components/homepageContent/HomepageContent";
import Footer from "../../components/footer/Footer";
import {useState, useEffect} from "react";
import {tempMovieData, tempWatchedData} from "../../data/data";

const Homepage = () => {
  // const [movies, setMovies] = useState(tempMovieData);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);

  function handleSearch(item: any) {
    setQuery(item);
  }
  function handleMovies(item: any) {
    setMovies(item);
  }

  return (
    <>
      <Header onSearch={handleSearch} movies={movies} />
      <HomepageContent
        query={query}
        onSearchMovie={handleMovies}
        movies={movies}
      />
      <Footer />
    </>
  );
};

export default Homepage;
