import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/CurrentSearch/Search";
import Previous from "./components/PreviousSearch/Previous";

function App() {
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState([]);

  useEffect(() => {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=8446c93f";
    axios
      .get(url)
      .then((res) => {
        return res;
      })
      .then((data) => {
        console.log(data.data.Title, "hi")
        setMovies(data);
      });
    // updateReviews();
  }, []);
  // useEffect(() => {
  
  return (
    <div className="App">
      <Header />
      <Search />
      <Previous />
    </div>
  );
}

export default App;
