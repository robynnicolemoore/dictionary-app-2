import axios from "axios";
import React, { useState } from "react";
import { createClient } from "pexels";
import "./Dictionary.css";
import Results from "./Results";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  const logo = require("./dictionarylogo.png");
  const client = createClient(
    "563492ad6f9170000100000159ec5ec4735845379bdf979842630b8e"
  );

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f9170000100000159ec5ec4735845379bdf979842630b8e`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    client.photos.search({ query, per_page: 1 }).then((photos) => {
      axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    });
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
      <Results results={results} photos={photos} />
    </div>
  );
}
