import React from "react";
import "./MovieDetails.css";

const MovieDetails = ({selectedId, onCloseMovie}: any) => {
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
