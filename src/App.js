import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <a href="https://github.com/robynnicolemoore/dictionary-app-2">
          Open source code
        </a>{" "}
        by Robyn Moore
      </footer>
    </div>
  );
}

export default App;
