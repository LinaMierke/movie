import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGallery(props) {
  const [previousMovies, setPreviousMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState([]);

  useEffect(() => {
    setCurrentMovie(props.movieData);
    setPreviousMovies(previousMovies.concat(props.movieData));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieData]);

  const listOfMovieCards = previousMovies.map((movie, i) => {
    return <MovieCard {...movie} key={i} />;
  });
  const singleMovieCard = <MovieCard {...currentMovie} />;

  let renderMovie = () =>
    props.recentGallery === true ? listOfMovieCards : singleMovieCard;

  // to check the length and don't keep all
  if (previousMovies.length > 3) {
    previousMovies.splice(0, 1);
    setPreviousMovies(previousMovies);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      {renderMovie()}
    </div>
  );
}
