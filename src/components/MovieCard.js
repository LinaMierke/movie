import React from "react";

export default function MovieCard({Poster, Title, Plot, Released, imdbRating}) {
  return (
    <div>
      <img src={Poster} alt={Title} />
      <h1>{Title} hi</h1>
      <p>{Plot}</p>
      <div>
          <div>
              <p> Released Date: {Released}</p>
              <p> Rating: {imdbRating}/10</p>
          </div>
      </div>
    </div>
  );
}
