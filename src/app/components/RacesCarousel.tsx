'use client'
import { useEffect, useState } from 'react';
import RaceCard from './RaceCard';

interface Race {
  circuit: string;
  cars: string;
  maxIr: number;
}

export default function RacesCarousel() {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    async function getRaces() {
      try {
        const res = await fetch('/api/races');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();

        setRaces(data.data ?? []);
      } catch (error) {
        console.error(error);
        setRaces([]);
      }
    }

    getRaces();
  }, []);

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {races.map((race: Race, index: number) => (
        <div className="carousel-item" key={index}>
          <RaceCard race={race} />
        </div>
      ))}
    </div>
  );
}
