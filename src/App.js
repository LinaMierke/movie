import React, { useState, useEffect } from "react";
import MovieGallery from "./components/MovieGallery";
import Header from "./components/Header";
// import movieData from "./movieData.json";
function App() {
  const [movieData, setMovieData] = useState([]);

  const fetchMovieData = (searchedValue, selectedTypeValue = null) => {
    let URL = `http://www.omdbapi.com/?apikey=8446c93f&t=${searchedValue}&type=${selectedTypeValue}`;
    fetch(URL)
      .then((res) => res.json())
      .then((jsonData) => setMovieData(jsonData));
  };
  //prevent the infinity loop and ask for just one time action
  useEffect(() => {
    fetchMovieData("my");
  }, []);

  return (
    <div className="App">
      <Header fetchMovieData={fetchMovieData} />
      <MovieGallery title={'Current Search'} movieData={movieData} recentGallery={false}/>
      <MovieGallery title={"Previous 3 Searches"} movieData={movieData} recentGallery={true} />

    </div>
  );
}

export default App;
