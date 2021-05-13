import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/CurrentSearch/Search";
import Previous from "./components/PreviousSearch/Previous";

function App() {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=8446c93f";
    axios
      .get(url)
      .then((res) => {
        return res;
      })
      .then((data) => {
      setSearch(data);
      });
    // updateReviews();
  }, []);
  // useEffect(() => {

  return (
    <div className="App">
      <Header />
      <Search information={search} />
      <Previous />
    </div>
  );
}

export default App;
