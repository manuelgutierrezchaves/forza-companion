import { getRaces } from '../lib/races';
import RaceCard from './RaceCard';

interface Race {
  id: number
  circuit: string;
  cars: string;
  maxIr: number;
}

export default async function RacesCarousel() {
  const result = await getRaces()
  const { races } = result
  // const { races } = await getRaces() as { races: Race[] };

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {races?.map((race) => (
        <div className="carousel-item" key={race.id}>
          <RaceCard race={race} />
        </div>
      ))}
    </div>
  );
}
