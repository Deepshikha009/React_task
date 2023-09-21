// src/BeerCard.js
import React from "react";

const Beer = ({ beer }) => {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.description}</p>
      <p>ABV: {beer.abv}%</p>
      <p>IBU: {beer.ibu}</p>
    </div>
  );
};

export default Beer;
