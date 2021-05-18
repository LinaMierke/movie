import React, { useState, useEffect } from "react";
import MovieGallery from "./components/MovieGallery";
// import movieData from "./movieData.json";
function App() {
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = () => {
    let URL = "http://www.omdbapi.com/?apikey=8446c93f&t=my";
    fetch(URL)
      .then((res) => res.json())
      .then((jsonData) => setMovieData(jsonData));
  };
  //prevent the infinity loop and ask for just one time action
  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div className="App">
      <MovieGallery movieData={movieData} />
    </div>
  );
}

export default App;
