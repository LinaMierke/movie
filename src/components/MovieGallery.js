import React from "react";
import MovieCard from "./MovieCard";

export default function MovieGallery(props) {
  return (
    <div>
      <MovieCard movieData={props.movieData}/>
    </div>
  );
}
