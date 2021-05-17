// import React, { useState, useEffect } from "react";
// import axios from "axios";
import MovieGallery from "./components/MovieGallery";
import movieData from "./movieData.json";
function App() {
  // const [search, setSearch] = useState([]);

  // useEffect(() => {
  //   let url = "http://www.omdbapi.com/?i=tt3896198&apikey=8446c93f";
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       return res;
  //     })
  //     .then((data) => {
  //     setSearch(data);
  //     });
  //   // updateReviews();
  // }, []);
  // // useEffect(() => {

  return (
    <div className="App">
      <MovieGallery movieData={movieData} />
    </div>
  );
}

export default App;
