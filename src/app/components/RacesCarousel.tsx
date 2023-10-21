"use client"
import React, { useEffect, useState } from 'react';
import RaceCard from "./RaceCard"

const RacesCarousel = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('/api/races')
      .then(response => response.json())
      .then(data => setRaces(data.data));
  }, []);

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {races.map((race, index) => (
        <div className="carousel-item" key={index}>
          <RaceCard race={race} />
        </div>
      ))}
    </div>
  );
}

export default RacesCarousel;
