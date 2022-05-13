import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  const logo = require("./dictionarylogo.png");

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <header>
        <img src={logo} alt="logo" className="logo" />
      </header>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Look up a word..."
          className="searchBar"
          onChange={keywordChange}
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
      <Results results={results} />
    </div>
  );
}
