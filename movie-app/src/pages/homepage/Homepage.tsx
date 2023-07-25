import React, { useEffect } from "react";
import "./Homepage.css";
import Header from "../../components/header/Header";
import HomepageContent from "../../components/homepageContent/HomepageContent";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { tempMovieData } from "../../data/data";
import { SearchedMoviesList } from "../../types/types";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [isMobile, setIsMobile] = useState(false);

  // Depending on the viewport of the device, decide either user is in mobile or not

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);
  console.log("🚀 ~ isMobile:", isMobile);
  function handleSearch(item: string) {
    setQuery(item);
  }
  function handleMovies(item: SearchedMoviesList[]) {
    setMovies(item);
  }

  return (
    <div className="Homepage">
      <Header onSearch={handleSearch} movies={movies} />
      <HomepageContent
        query={query}
        onSearchMovie={handleMovies}
        movies={movies}
      />
      <Footer />
    </div>
  );
};

export default Homepage;
