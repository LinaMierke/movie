import React from "react";

export default function MovieCard(props) {
  console.log("holaa", props);
  return (
    <div>
      <img src={props.movieData.Poster} alt={props.movieData.Title} />
      <h1>{props.movieData.Title} hi</h1>
      <p>{props.movieData.Plot}</p>
      <div>
          <div>
              <p> Released Date: {props.movieData.Released}</p>
              <p> Rating: {props.movieData.imdbRating}/10</p>
          </div>
      </div>
    </div>
  );
}
