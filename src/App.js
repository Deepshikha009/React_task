// src/App.js
import React, { useState, useEffect } from "react";
import Beer from "./compo/Beer";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch the JSON data from the provided URL
    fetch("https://api.punkapi.com/v2/beers/1")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <Beer key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default App;


