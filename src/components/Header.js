import React from "react";
import { useState } from "react";

export default function Header(props) {
  const [searchedValue, setSearchedValue] = useState("");
  const [selectedTypeValue, setSelectedTypeValue] = useState("");

  const handleInput = (e) => {
    //prevent the page to refresh everytime i select something
    e.preventDefault();
    setSearchedValue(e.target.value);
  };
  const handleSelectChange = (e) => {
    //prevent the page to refresh everytime i select something
    e.preventDefault();
    setSelectedTypeValue(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault(); //here the prop pass the function we created in the App.js
    props.fetchMovieData(searchedValue, selectedTypeValue);
  };
  return (
    <div>
      <h1> What to Watch</h1>
      <div>
        <input type="text" placeholder="Title" onChange={handleInput} />
        <select
          id="selection"
          name="slection"
          placeholder="Type"
          onChange={handleSelectChange}
        >
          <option value="" hidden>
            Type
          </option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}
