"use client";

import React, { useState } from "react";
import Card from "./Card";
import Map from "./Map";

const Grid = ({ properties }) => {
  const [input, setInput] = useState("");
  const [houses, setHouse] = useState(properties);

  const locations = houses.map((house) => house.location);

  function setInputAndMapLocations(value) {
    setInput(value);
    const filteredHouses = properties.filter((property) =>
      property.name.toLowerCase().includes(value.toLowerCase())
    );
    setHouse(filteredHouses);
  }

  return (
    <>
      <div className="search-bar">
        <input
          placeholder="Search Location"
          name="input"
          value={input}
          onChange={(e) => setInputAndMapLocations(e.target.value)}
        />
        <button>Search</button>
      </div>
      <main style={{ display: "flex" }}>
        <article className="map">
          <Map locations={locations} />
        </article>

        <article className="listings">
          <h2>Rental Listings</h2>
          <div className="card-container">
            {houses.map((property) => (
              <Card
                key={property.id}
                propertyName={property.name}
                slug={property.slug}
                rentalPrice={property.rentalPrice}
                beds={property.beds}
                image={property.images[0]}
              />
            ))}
          </div>
        </article>
      </main>
    </>
  );
};

export default Grid;
