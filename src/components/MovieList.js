import React from "react";

const MovieList = ({ movies, favouriteComponent, handleFavouritesClick }) => {
  const FavouriteComponent = favouriteComponent;
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container col" key={index}>
          <img src={movie.Poster} alt="movie"></img>
          <div onClick={() => handleFavouritesClick(movie)} className="overlay d-flex justify-content-start m-3">
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;