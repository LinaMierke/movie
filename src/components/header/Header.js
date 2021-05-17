import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <div>
      <h2>What to Watch</h2>
      <input type='search' />
      <select id='Type'>
        <option value='Movies'>Movies</option>
        <option value='Series'>Series</option>
        <option value='Episode'>Episode</option>
        <option value='Type' select></option>
      </select>
      <button className='search'>Search</button>
    </div>
  );
}