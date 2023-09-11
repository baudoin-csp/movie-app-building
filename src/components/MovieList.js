import React from "react";

const MovieList = ({ movies, favouriteComponent, handleFavouritesClick }) => {
  const FavouriteComponent = favouriteComponent;
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div className="image-container" key={index}>
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => handleFavouritesClick(movie)}
            className="favourite-btn"
          >
            
          </div>
        </div>
      ))}
    </div>
  );
};

//<FavouriteComponent />

export default MovieList;
